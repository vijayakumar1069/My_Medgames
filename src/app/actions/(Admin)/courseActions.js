"use server";

import { deepClone } from "@/lib/convert_to_JSON";
import { connectDB } from "@/lib/dbconnection";
import coursesSchema from "@/modals/courses.schema";
import { revalidatePath } from "next/cache";
import { cache } from "react";
import { deleteFromCloudinary } from "./cloudinaryActions";

export async function createCourse(data) {
  try {
    await connectDB();

    // Create the course
    const course = await coursesSchema.create(data);

    if (!course) {
      throw new Error("Failed to create course");
    }

    const courseId = course._id.toString();

    // Create redirect URL based on environment
    const baseURL =
      process.env.NEXT_PUBLIC_ENVIRONMENT === "development"
        ? "http://localhost:3000"
        : process.env.NEXT_PUBLIC_VERCEL_URL; // Ensure your production domain is in env

    const redirectUrl = `${baseURL}/our-courses/${courseId}`;

    // Add redirectUrl to the course document
    const updatedCourse = await coursesSchema.findByIdAndUpdate(
      courseId,
      { redirect_link: redirectUrl }, // Updating the link field in the course
      { new: true } // Return the updated document
    );

    if (!updatedCourse) {
      throw new Error("Failed to update course with redirect URL");
    }

    revalidatePath("/admin-courses", "page");
    revalidatePath(`/our-courses`, "page");
    revalidatePath("/", "layout");

    return {
      success: true,
      message: "Course created successfully",
      course: deepClone(updatedCourse),
      redirectUrl: redirectUrl,
    };
  } catch (error) {
    console.error("Error creating course:", error);
    return {
      success: false,
      message: "Failed to create course",
      error: error.message,
    };
  }
}

export const getCourses = cache(async () => {
  try {
    await connectDB();

    const courses = await coursesSchema
      .find()
      .select(
        "_id name description price startDate endDate via dailyStartTime dailyEndTime classDays key_features img_for_home img_for_course_details_page"
      )
      .lean()
      .exec();

    if (!courses) {
      throw new Error("Failed to fetch courses");
    }

    // Process and optimize course data
    const processedCourses = courses.map((course) => ({
      ...course,
      img_for_course_details_page:
        course.img_for_course_details_page || "/fallback-course-image.jpg",
    }));

    return {
      success: true,
      message: "Courses fetched successfully",
      courses: deepClone(processedCourses),
    };
  } catch (error) {
    console.error("Error fetching courses:", error);
    return {
      success: false,
      message: "Failed to fetch courses",
      error: error.message,
    };
  }
});

export async function deleteCourse(id) {
  try {
    await connectDB();

    // Find the course first
    const course = await coursesSchema.findById(id);

    if (!course) {
      throw new Error("Failed to delete course");
    }

    // Delete course images from Cloudinary
    await deleteFromCloudinary(course.img_for_home.cloudinary_id);
    await deleteFromCloudinary(
      course.img_for_course_details_page.cloudinary_id
    );

    // Delete review images from Cloudinary
    if (course.reviews && course.reviews.length > 0) {
      // Filter out reviews with cloudinaryPublicId
      const reviewImagesPublicIds = course.reviews
        .filter((review) => review.cloudinaryPublicId)
        .map((review) => review.cloudinaryPublicId);

      // Delete all review images
      await Promise.all(
        reviewImagesPublicIds.map((publicId) => deleteFromCloudinary(publicId))
      );
    }

    // Delete other course-related files from Cloudinary
    if (course.downloadable_pdf && course.downloadable_pdf.length > 0) {
      await deleteFromCloudinary(course.downloadable_pdf[0].cloudinaryPublicId);
    }

    if (course.video_section && course.video_section.length > 0) {
      await deleteFromCloudinary(course.video_section[0].cloudinaryPublicId);
    }

    // Delete course from the database
    const deletedCourse = await coursesSchema.findByIdAndDelete({ _id: id });

    if (!deletedCourse) {
      throw new Error("Failed to delete course");
    }

    // Revalidate paths
    revalidatePath(`/our-courses`, "page");
    revalidatePath("/", "layout");
    revalidatePath("/admin-courses", "page");

    return {
      success: true,
      message: "Course deleted successfully",
      course: deepClone(course),
    };
  } catch (error) {
    console.error("Error deleting course:", error);
    return {
      success: false,
      message: "Failed to delete course",
      error: error.message,
    };
  }
}

export async function updateCourse(id, data) {
  try {
    await connectDB();
    // Update course in the database
    const updatedCourse = await coursesSchema.findByIdAndUpdate(
      { _id: id },
      { $set: data },
      { new: true }
    );
    if (!updatedCourse) {
      throw new Error("Failed to update course");
    }
    revalidatePath("/", "page");
    revalidatePath(`/our-courses/${id}`, "page");
    revalidatePath("/", "layout");
    revalidatePath("/admin-courses", "page");

    return {
      success: true,
      message: "Course updated successfully",
      course: deepClone(updatedCourse),
    };
  } catch (error) {
    console.error("Error updating course:", error);
    return {
      success: false,
      message: "Failed to update course",
      error: error.message,
    };
  }
}

export async function getCourseById(id) {
  try {
    await connectDB();

    // Fetch the current course
    const course = await coursesSchema.findById(id);

    if (!course) {
      throw new Error("Failed to fetch course");
    }

    // Fetch all courses
    const allCourses = await coursesSchema.find({});

    // Function to get random suggestions
    const getSuggestions = (currentCourse, courses) => {
      // Remove current course from suggestions
      const filteredCourses = courses.filter(
        (c) => c._id.toString() !== currentCourse._id.toString()
      );

      // If total courses are less than 4, return all available
      if (filteredCourses.length <= 3) {
        return filteredCourses;
      }

      // Randomly shuffle and take first 3
      return filteredCourses.sort(() => 0.5 - Math.random()).slice(0, 3);
    };

    // Get course suggestions
    const suggestions = getSuggestions(course, allCourses);

    return {
      success: true,
      message: "Course fetched successfully",
      course: deepClone(course),
      suggestions: deepClone(suggestions),
    };
  } catch (error) {
    console.error("Error fetching course:", error);

    return {
      success: false,
      message: "Failed to fetch course",
      error: error.message,
    };
  }
}

export const getHomePageServices = async () => {
  try {
    await connectDB();

    const services = await coursesSchema
      .find({
        shown_on_home_screen: true,
      })
      .select("_id name key_features redirect_link")
      .limit(8)
      .lean()
      .exec();

    return {
      success: true,
      message: "Services fetched successfully",
      servicesCourses: deepClone(services),
      fetchedAt: new Date().toISOString(),
    };
  } catch (error) {
    console.error("Services Fetch Error:", error);
    return {
      success: false,
      message: error.message || "Failed to fetch services",
      servicesCourses: [],
    };
  }
};

export const gethomeScreenCourses = cache(async () => {
  try {
    await connectDB();

    const services = await coursesSchema
      .find({
        shown_on_home_screen_courses_section: true,
      })
      .select(
        "_id name description img_for_home price img_for_course_details_page startDate endDate via dailyStartTime dailyEndTime classDays"
      )

      .lean()
      .exec();

    return {
      success: true,
      message: "Services fetched successfully",
      HomeScreenCourses: deepClone(services),
      fetchedAt: new Date().toISOString(),
    };
  } catch (error) {
    console.error("Services Fetch Error:", error);
    return {
      success: false,
      message: error.message || "Failed to fetch Courses",
      HomeScreenCourses: [],
    };
  }
});

export async function getCoursesTitle() {
  try {
    await connectDB();
    const courses = await coursesSchema.find().select("name").lean();
    return {
      success: true,
      message: "Courses fetched successfully",
      coursesTitle: deepClone(courses),
    };
  } catch (error) {
    console.error("Services Fetch Error:", error);
    return {
      success: false,
      message: error.message || "Failed to fetch Courses",
      HomeScreenCourses: [],
    };
  }
}

export async function getCoursesForEdit(id) {
  try {
    await connectDB();

    const courses = await coursesSchema.findById(id);

    if (!courses) {
      throw new Error("Failed to fetch courses");
    }

    // Process and optimize course data

    return {
      success: true,
      message: "Courses fetched successfully",
      course: deepClone(courses),
    };
  } catch (error) {
    console.error("Error fetching courses:", error);
    return {
      success: false,
      message: "Failed to fetch courses",
      error: error.message,
    };
  }
}
