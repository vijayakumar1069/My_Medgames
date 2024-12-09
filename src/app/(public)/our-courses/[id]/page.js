import { getCourseById, getCourses } from "@/app/actions/(Admin)/courseActions";
import User_Selected_Course_Component from "@/components/Public web components/(Our_Courses_Components)/User_Selected_Course_Component";
import Svg_Bg from "@/components/Public web components/Svg_Bg";
import { Button } from "@/components/ui/button";
import { courses } from "@/utils/constvalues";
import Link from "next/link";


// export async function generateStaticParams() {
//   try {
//     const coursesResponse = await getCourses();
    
//     if (coursesResponse.success) {
//       return coursesResponse.courses.map((course) => ({
//         id: course._id.toString()
//       }));
//     }
    
//     return []; // Fallback if no courses
//   } catch (error) {
//     console.error('Static Params Generation Error:', error);
//     return [];
//   }
// }
// Separate utility function for course fetching
const fetchCourseById = {
  // Local static data method
  fromStaticData: (courseId) => {
    return courses.find(course => course.id == courseId);
  },

  // Placeholder for future database method
  fromDatabase: async (courseId) => {
    // Simulated database fetch
    try {
      // Replace with actual database query in future
      const response = await getCourseById(courseId);
      
      if (!response.success) {
        throw new Error('Course not found');
      }
      return {
        currentCourse: response.course,
        suggestionsCourses: response.suggestions
      };
      
  
    } catch (error) {
      console.error('Error fetching course:', error);
      return null;
    }
  }
};

// Error handling component
const ErrorFallback = ({ message }) => (
  <div className="flex justify-center flex-col items-center h-screen text-red-500">
    <p>{message}</p>
    <Link href={"/"}>
    <Button className="mt-4">Go Back</Button>
    </Link>
  </div>
);

export default async function Particular_Course_Page({ params }) {

    const { id } = await params || {};
  // Defensive programming: Ensure params exists
  if (!params || !id) {
    return <ErrorFallback message="Invalid course parameters" />;
  }

  // Configuration object for easy future modifications
  const COURSE_FETCH_CONFIG = {
    useStaticData: false, // Toggle between static and database fetch
    fallbackMessage: "Course not found"
  };

  try {
    // Flexible course fetching strategy
    const user_selected_course = COURSE_FETCH_CONFIG.useStaticData
      ? fetchCourseById.fromStaticData(id)
      : await fetchCourseById.fromDatabase(id);
  
    // Additional validation
    if (!user_selected_course) {
      return <ErrorFallback message={COURSE_FETCH_CONFIG.fallbackMessage} />;
    }

    return (
      <div className="min-h-screen">
        <Svg_Bg />
        <User_Selected_Course_Component course={user_selected_course.currentCourse} suggestionsCourses={user_selected_course.suggestionsCourses}/>
      </div>
    );
  } catch (error) {
    console.error('Course page rendering error:', error);
    return <ErrorFallback message="An unexpected error occurred" />;
  }
}


