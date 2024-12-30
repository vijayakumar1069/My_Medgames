"use server";

import { deepClone } from "@/lib/convert_to_JSON";
import { connectDB } from "@/lib/dbconnection";
import Blog from "@/modals/blog.model";
import coursesSchema from "@/modals/courses.schema";
import mammoth from "mammoth";
import { revalidatePath } from "next/cache";
import { cache } from "react";
import { deleteFromCloudinary, uploadToCloudinary } from "./cloudinaryActions";
import axios from "axios";

export async function createBlogPost(values) {
  const { title, description, tags, photo, documentFile } = values;

  try {
    // Ensure database connection
    await connectDB();

    // Convert photo to base64
    const photoUploadResult = await uploadToCloudinary(photo,"blogs resources")

 

    // Convert document to base64
    const documentUploadResult = await uploadToCloudinary(documentFile,"blogs resources")
    
    const slug = title.toLowerCase().split(" ").join("-");

    // Prepare blog data
    const blogData = {
      title,
      description,
      slug,
      tags,
      photo: {
        url:photoUploadResult.secureUrl,
        cloudinary_id: photoUploadResult.cloudinaryPublicId,
        fileName:photoUploadResult.originalFilename
       
      },
      documentFile: {
        url:documentUploadResult.secureUrl,
        cloudinary_id: documentUploadResult.cloudinaryPublicId,
        fileName:documentUploadResult.originalFilename
      },
    };

    // Create blog post
    const newBlog = new Blog(blogData);
    await newBlog.save();
    // Revalidate paths
    revalidatePath("/", "page");
    revalidatePath(`/blog/${newBlog._id}`, "page");
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
      const photoUploadResult = await uploadToCloudinary(values.photo,"blogs resources")

      updateData.photo = {
        url:photoUploadResult.secureUrl,
        cloudinary_id: photoUploadResult.cloudinaryPublicId
      };
    }

    // Handle document file update
    if (values.documentFile) {
      // Convert document to base64
      const documentUploadResult = await uploadToCloudinary(values.documentFile,"blogs resources")

      updateData.documentFile = {
        url:documentUploadResult.secureUrl,
        cloudinary_id: documentUploadResult.cloudinaryPublicId
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


export async function getAllBlogs() {
  try {
    // Ensure database connection
    await connectDB();

    // Fetch all blog posts
    const blogs = await Blog.find().select("_id title description tags postedDate postedTime").sort({ postedDate: -1 }).lean().exec();
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

export const getBlogsForHome = cache(async () => {
  try {
    await connectDB();

    const blogs = await Blog.find()
      .select("_id title description tags photo postedDate postedTime")
      .sort({ postedDate: -1 })
      .limit(4)
      .lean()
      .exec();

    if (!blogs?.length) {
      return {
        success: false,
        message: "No blog posts found",
        blogs: []
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
      message: "Failed to fetch blog posts",
      blogs: []
    };
  }
});

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
    const response = await axios.get(blog.documentFile.url, {
      responseType: 'arraybuffer'
    });



    // Parse Word document to HTML
    const result = await mammoth.convertToHtml({ buffer: response.data });

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
export async function getBlogByIdForEdit(id) {

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
   return {
     success: true,
     message: "Blog post fetched successfully",
     blog: deepClone(blog),
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
      limit = 6,
    } = searchParams;

    // Prepare search conditions for blogs
    const blogSearchConditions = [];

    // Escape special characters for regex
    const escapeRegExp = (string) => string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

    if (search) {
      const escapedSearch = escapeRegExp(search);
      blogSearchConditions.push({
        $or: [
          { title: { $regex: escapedSearch, $options: "i" } },
          { description: { $regex: escapedSearch, $options: "i" } },
          { tags: { $regex: escapedSearch, $options: "i" } },
        ],
      });
    }

    if (tags && tags.length > 0) {
      blogSearchConditions.push({
        tags: { $in: Array.isArray(tags) ? tags : [tags] },
      });
    }

    // Construct the final query for blogs
    const blogQuery =
      blogSearchConditions.length > 0 ? { $and: blogSearchConditions } : {};

    // Prepare sort options
    const sortOptions = {};
    sortOptions[sortBy] = sortOrder === "desc" ? -1 : 1;

    // Calculate pagination
    const skip = (page - 1) * limit;

    // Perform search with pagination and sorting for blogs
    const [blogs, totalBlogs] = await Promise.all([
      Blog.find(blogQuery).sort(sortOptions).select("_id title description photo postedDate").skip(skip).limit(limit).lean(),
      Blog.countDocuments(blogQuery),
    ]);

    // Prepare search conditions for courses
    const courseSearchConditions = [];

    if (search) {
      const escapedSearch = escapeRegExp(search);
      courseSearchConditions.push({
        $or: [
          { name: { $regex: escapedSearch, $options: "i" } },
          { description: { $regex: escapedSearch, $options: "i" } },
        ],
      });
    }

    if (tags && tags.length > 0) {
      courseSearchConditions.push({
        tags: { $in: Array.isArray(tags) ? tags : [tags] },
      });
    }

    // Construct the final query for courses
    const courseQuery =
      courseSearchConditions.length > 0 ? { $and: courseSearchConditions } : {};

    // Perform search for related courses
    const courses = await coursesSchema.find(courseQuery).select('_id name description img_for_course_details_page ').lean();

    // Calculate total pages for blogs
    const totalPages = Math.ceil(totalBlogs / limit);

    return {
      success: true,
      message: "Blogs and related courses retrieved successfully",
      blogs: deepClone(blogs),
      courses: deepClone(courses),
      pagination: {
        currentPage: page,
        totalPages,
        totalBlogs,
        limit,
      },
    };
  } catch (error) {
    console.error("Blog and course search error:", error);
    return {
      success: false,
      message: "Error searching blogs and courses",
      error: error.message,
    };
  }
}


export async function deleteBlog(id) {
  try {
    // Ensure database connection
    await connectDB();

    // Delete blog from the database
    const blog = await Blog.findById(id);
    if (!blog) {
      throw new Error("Failed to delete blog");
    }
    // Delete Cloudinary files
    await deleteFromCloudinary(blog.photo.cloudinary_id);
    await deleteFromCloudinary(blog.documentFile.cloudinary_id);
    // await cloudinary.uploader.destroy(blog.photo.cloudinary_id);
    // await cloudinary.uploader.destroy(blog.documentFile.cloudinary_id);
    const deletedBlog = await Blog.findByIdAndDelete(id);
    if (!deletedBlog) {
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
