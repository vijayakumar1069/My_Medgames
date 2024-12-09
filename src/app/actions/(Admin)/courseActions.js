"use server";

import { deepClone } from "@/lib/convert_to_JSON";
import { connectDB } from "@/lib/dbconnection";
import coursesSchema from "@/modals/courses.schema";
import { revalidatePath } from "next/cache";

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
    revalidatePath(`/our-courses`, "page");
    revalidatePath('/', 'layout');

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

    revalidatePath(`/our-courses`, "page");
    revalidatePath(`/our-courses/${id}`, "page");
    revalidatePath('/', 'layout');
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
    revalidatePath("/","page");
    revalidatePath(`/our-courses/${id}`, "page");
    revalidatePath('/', 'layout');
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
        c => c._id.toString() !== currentCourse._id.toString()
      );

      // If total courses are less than 4, return all available
      if (filteredCourses.length <= 3) {
        return filteredCourses;
      }

      // Randomly shuffle and take first 3
      return filteredCourses
        .sort(() => 0.5 - Math.random())
        .slice(0, 3);
    };

    // Get course suggestions
    const suggestions = getSuggestions(course, allCourses);

    return {
      success: true,
      message: "Course fetched successfully",
      course: deepClone(course),
      suggestions: deepClone(suggestions)
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

    const services = await coursesSchema.find({
      shown_on_home_screen: true
    })
    .select('_id name key_features redirect_link')
    .limit(8)
    .lean()
    .exec();

    return {
      success: true,
      message: 'Services fetched successfully',
      servicesCourses: deepClone(services),
      fetchedAt: new Date().toISOString()
    };
  } catch (error) {
    console.error('Services Fetch Error:', error);
    return {
      success: false,
      message: error.message || 'Failed to fetch services',
      servicesCourses: []
    };
  }
}


export async function gethomeScreenCourses() {
  try {
    await connectDB();

    const services = await coursesSchema.find({
      shown_on_home_screen_courses_section: true
    })
    .select('_id name description img_for_home price startDate endDate via dailyStartTime dailyEndTime classDays')
    .limit(8)
    .lean()
    .exec();

    return {
      success: true,
      message: 'Services fetched successfully',
      HomeScreenCourses: deepClone(services),
      fetchedAt: new Date().toISOString()
    };
  } catch (error) {
    console.error('Services Fetch Error:', error);
    return {
      success: false,
      message: error.message || 'Failed to fetch Courses',
      servicesCourses: []
    };
  }

}

