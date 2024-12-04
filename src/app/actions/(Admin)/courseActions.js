"use server";

import { deepClone } from "@/lib/convert_to_JSON";
import { connectDB } from "@/lib/dbconnection";
import coursesSchema from "@/modals/courses.schema";

export async function createCourse(data) {
  console.log(data);
  try {
    await connectDB();
    // Insert course into the database
    const course = await coursesSchema.create(data);
    if (!course) {
      throw new Error("Failed to create course");
    }
    return {
      success: true,
      message: "Course created successfully",
      course: deepClone(course),
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
