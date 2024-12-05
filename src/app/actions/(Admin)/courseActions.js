"use server";

import { deepClone } from "@/lib/convert_to_JSON";
import { connectDB } from "@/lib/dbconnection";
import coursesSchema from "@/modals/courses.schema";
import { revalidatePath } from "next/cache";

export async function createCourse(data) {
  console.log(data);

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
        : process.env.NEXT_VERCEL_URL; // Ensure your production domain is in env

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



export async function getCourses()
{
  try {
    await connectDB();
    // Fetch all courses from the database
    const courses = await coursesSchema.find();
    if (!courses) {
      throw new Error("Failed to fetch courses");
    }
    return {
      success: true,
      message: "Courses fetched successfully",
      courses: deepClone(courses),
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


export async function deleteCourse(id) {
  try {
    await connectDB();
    // Delete course from the database
    const course = await coursesSchema.findByIdAndDelete({_id: id});
    if (!course) {
      throw new Error("Failed to delete course");
    }

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
    // Fetch course from the database
    const course = await coursesSchema.findById(id);
    if (!course) {
      throw new Error("Failed to fetch course");
    }
    return {
      success: true,
      message: "Course fetched successfully",
      course: deepClone(course),
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