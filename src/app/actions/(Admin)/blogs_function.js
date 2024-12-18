"use server";

import { deepClone } from "@/lib/convert_to_JSON";
import { connectDB } from "@/lib/dbconnection";
import Blog from "@/modals/blog.model";
import coursesSchema from "@/modals/courses.schema";
import { escapeRegExp } from "@/utils/regularExpression";
import mammoth from "mammoth";
import { revalidatePath } from "next/cache";

export async function createBlogPost(values) {
  const { title, description, tags, photo, documentFile } = values;

  try {
    // Ensure database connection
    await connectDB();

    // Convert photo to base64
    const photoBase64 = await convertFileToBase64(photo);

    // Convert document to base64
    const documentBase64 = await convertFileToBase64(documentFile);
    const slug = title.toLowerCase().split(" ").join("-");

    // Prepare blog data
    const blogData = {
      title,
      description,
      slug,
      tags,
      photo: {
        filename: photo.name,
        mimetype: photo.type,
        data: photoBase64,
      },
      documentFile: {
        filename: documentFile.name,
        mimetype: documentFile.type,
        data: documentBase64,
      },
    };

    // Create blog post
    const newBlog = new Blog(blogData);
    await newBlog.save();
    // Revalidate paths
    revalidatePath("/", "page");
    revalidatePath(`/blog/${id}`, "page");
    revalidatePath("/", "layout");
    revalidatePath("/admin-blog", "page");

    return {
      success: true,
      message: "Blog post created successfully",
      blog: deepClone(newBlog),
    };
  } catch (error) {
    console.error("Blog creation error:", error);
    return {
      success: false,
      message: error.message || "Internal Server Error",
    };
  }
}
export async function updateBlog(id, values) {
  try {
    // Ensure database connection
    await connectDB();

    // Find the existing blog
    const existingBlog = await Blog.findById(id);

    if (!existingBlog) {
      throw new Error("Blog not found");
    }

    // Prepare update object
    const updateData = {};

    // Update title
    if (values.title) {
      updateData.title = values.title;
      // Generate new slug if title is updated
      updateData.slug = values.title.toLowerCase().split(" ").join("-");
    }

    // Update description
    if (values.description) {
      updateData.description = values.description;
    }

    // Update tags
    if (values.tags && values.tags.length > 0) {
      updateData.tags = values.tags;
    }

    // Handle photo update
    if (values.photo) {
      // Convert photo to base64
      const photoBase64 = await convertFileToBase64(values.photo);

      updateData.photo = {
        filename: values.photo.name,
        mimetype: values.photo.type,
        data: photoBase64,
      };
    }

    // Handle document file update
    if (values.documentFile) {
      // Convert document to base64
      const documentBase64 = await convertFileToBase64(values.documentFile);

      updateData.documentFile = {
        filename: values.documentFile.name,
        mimetype: values.documentFile.type,
        data: documentBase64,
      };
    }

    // Perform update only with provided fields
    const updatedBlog = await Blog.findByIdAndUpdate(
      id,
      { $set: updateData },
      {
        new: true, // Return the modified document
        runValidators: true, // Run model validations
      }
    );

    if (!updatedBlog) {
      throw new Error("Failed to update blog");
    }

    // Revalidate paths
    revalidatePath("/", "page");
    revalidatePath(`/blog/${id}`, "page");
    revalidatePath("/", "layout");
    revalidatePath("/admin-blog", "page");

    return {
      success: true,
      message: "Blog updated successfully",
      blog: deepClone(updatedBlog),
    };
  } catch (error) {
    console.error("Error updating blog:", error);
    return {
      success: false,
      message: "Failed to update blog",
      error: error.message,
    };
  }
}

// Utility function to convert file to base64
async function convertFileToBase64(file) {
  // If file is a File object from the client
  if (file instanceof File) {
    // Convert File to buffer
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Convert buffer to base64
    return buffer.toString("base64");
  }

  // If file is already a path or buffer
  if (typeof file === "string") {
    // Read file from filesystem
    const buffer = await fs.readFile(file);
    return buffer.toString("base64");
  }

  throw new Error("Invalid file type");
}

export async function getAllBlogs() {
  try {
    // Ensure database connection
    await connectDB();

    // Fetch all blog posts
    const blogs = await Blog.find();
    if (blogs.length == 0) {
      return {
        success: false,
        message: "No blog posts found",
      };
    }

    return {
      success: true,
      message: "Blog posts fetched successfully",
      blogs: deepClone(blogs),
    };
  } catch (error) {
    console.error("Blog fetching error:", error);
    return {
      success: false,
      message: error.message || "Internal Server Error",
    };
  }
}

export async function getBlogsForHome() {
  try {
    // Ensure database connection
    await connectDB();

    // Fetch all blog posts
    const blogs = await Blog.find()
      .select("_id title description tags photo")
      .lean() // Use lean() for better performanceF
      .exec();
    if (blogs.length == 0) {
      return {
        success: false,
        message: "No blog posts found",
      };
    }

    return {
      success: true,
      message: "Blog posts fetched successfully",
      blogs: deepClone(blogs),
    };
  } catch (error) {
    console.error("Blog fetching error:", error);
    return {
      success: false,
      message: error.message || "Internal Server Error",
    };
  }
}

export async function getBlogById(id) {
  try {
    // Ensure database connection
    await connectDB();

    // Fetch blog post by ID
    const blog = await Blog.findById(id);

    if (!blog) {
      return {
        success: false,
        message: "No blog post found",
      };
    }

    // Convert base64 to buffer for document content
    const documentBuffer = Buffer.from(blog.documentFile.data, "base64");

    // Parse Word document to HTML
    const result = await mammoth.convertToHtml({ buffer: documentBuffer });

    // Extract tags from the blog
    const tags = blog.tags;

    // Initialize related courses variable
    let relatedCourses = [];

    // Fetch related courses if tags exist
    if (tags && tags.length > 0) {
      relatedCourses = await coursesSchema
        .find({
          $or: [
            { name: { $in: tags } }, // Match tag in course name
            { description: { $regex: tags.join("|"), $options: "i" } }, // Match tag in course description (case-insensitive)
          ],
        })
        .limit(3) // Limit results to 3 courses
        .lean(); // Convert documents to plain objects for better performance

      // If fewer than 3 courses are found, fetch random courses to fill the gap
      if (relatedCourses.length < 3) {
        const additionalCoursesRequired = 3 - relatedCourses.length;

        // Fetch random courses excluding the ones already in relatedCourses
        const randomCourses = await coursesSchema
          .aggregate([
            {
              $match: {
                _id: { $nin: relatedCourses.map((course) => course._id) },
              },
            }, // Exclude already selected courses
            { $sample: { size: additionalCoursesRequired } }, // Fetch random courses
          ])
          .exec();

        // Merge the related courses with the random courses
        relatedCourses = [...relatedCourses, ...randomCourses];
      }
    }

    // If no related courses found, fetch 3 random courses
    if (relatedCourses.length === 0) {
      relatedCourses = await coursesSchema
        .aggregate([{ $sample: { size: 3 } }])
        .exec();
    }

    return {
      success: true,
      message: "Blog post and related courses fetched successfully",
      blog: deepClone(blog),
      content: {
        html: result.value,
        filename: blog.documentFile.filename,
        mimetype: blog.documentFile.mimetype,
      },
      relatedCourses: deepClone(relatedCourses),
    };
  } catch (error) {
    console.error("Blog and related courses fetching error:", error);

    return {
      success: false,
      message: "Error fetching blog post and related courses",
      error: error.message,
    };
  }
}

export async function searchBlogs(searchParams) {
  try {
    // Ensure database connection
    await connectDB();

    // Destructure search parameters with default values
    const {
      search = "",
      tags = [],
      sortBy = "postedDate",
      sortOrder = "desc",
      page = 1,
      limit = 10,
    } = searchParams;

    // Prepare search conditions
    const searchConditions = [];

    // If search term is provided, create regex search across multiple fields
    if (search) {
      const escapedSearch = escapeRegExp(search);
      searchConditions.push({
        $or: [
          { title: { $regex: escapedSearch, $options: "i" } },
          { description: { $regex: escapedSearch, $options: "i" } },
          { tags: { $regex: escapedSearch, $options: "i" } },
        ],
      });
    }

    // If specific tags are provided
    if (tags && tags.length > 0) {
      searchConditions.push({
        tags: { $in: Array.isArray(tags) ? tags : [tags] },
      });
    }

    // Construct the final query
    const query = searchConditions.length > 0 ? { $and: searchConditions } : {};

    // Prepare sort options
    const sortOptions = {};
    sortOptions[sortBy] = sortOrder === "desc" ? -1 : 1;

    // Calculate pagination
    const skip = (page - 1) * limit;

    // Perform search with pagination and sorting
    const [blogs, totalBlogs] = await Promise.all([
      Blog.find(query).sort(sortOptions).skip(skip).limit(limit).lean(),
      Blog.countDocuments(query),
    ]);

    // Calculate total pages
    const totalPages = Math.ceil(totalBlogs / limit);

    return {
      success: true,
      message: "Blogs retrieved successfully",
      blogs: deepClone(blogs),
      pagination: {
        currentPage: page,
        totalPages,
        totalBlogs,
        limit,
      },
    };
  } catch (error) {
    console.error("Blog search error:", error);
    return {
      success: false,
      message: "Error searching blogs",
      error: error.message,
    };
  }
}

export async function deleteBlog(id) {
  try {
    // Ensure database connection
    await connectDB();

    // Delete blog from the database
    const blog = await Blog.findByIdAndDelete({ _id: id });
    if (!blog) {
      throw new Error("Failed to delete blog");
    }

    revalidatePath(`/blog`, "page");
    revalidatePath(`/blog/${id}`, "page");
    revalidatePath("/", "layout");
    revalidatePath("/admin-blog", "page");

    return {
      success: true,
      message: "Blog deleted successfully",
      blog: deepClone(blog),
    };
  } catch (error) {
    console.error("Error deleting blog:", error);
    return {
      success: false,
      message: "Failed to delete blog",
      error: error.message,
    };
  }
}
