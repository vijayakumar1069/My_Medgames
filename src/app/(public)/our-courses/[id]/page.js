// app/courses/[id]/page.jsx
import { getCourseById } from "@/app/actions/(Admin)/courseActions";
import User_Selected_Course_Component from "@/components/Public web components/(Our_Courses_Components)/User_Selected_Course_Component";
import Svg_Bg from "@/components/Public web components/Svg_Bg";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Suspense } from 'react';

// Error Component (Server Component)
const ErrorDisplay = ({ message }) => (
  <div className="flex justify-center flex-col items-center h-screen">
    <p className="text-red-500">{message}</p>
    <Link href="/our-courses">
      <Button className="mt-4">Back to Courses</Button>
    </Link>
  </div>
);

// Loading Component (Server Component)
const LoadingState = () => (
  <div className="animate-pulse min-h-screen">
    <div className="h-64 bg-gray-200" />
    <div className="max-w-7xl mx-auto p-4 space-y-4">
      <div className="h-8 bg-gray-200 rounded w-1/3" />
      <div className="h-4 bg-gray-200 rounded w-2/3" />
    </div>
  </div>
);

// Main Page Component (Server Component)
export default async function Particular_Course_Page({ params }) {
  // Validate params
  const{id}= await params||{};
  if (!params || !id) {
    return <ErrorDisplay message="Invalid course ID" />;
  }

  try {
    // Fetch course data
    const response = await getCourseById(id);

    if (!response?.success) {
      return <ErrorDisplay message="Course not found" />;
    }

    const { course, suggestions } = response;

    return (
      <div className="min-h-screen">
        <Svg_Bg pageTitle={course.name}/>
        <Suspense fallback={<LoadingState />}>
          <User_Selected_Course_Component 
            course={course} 
            suggestionsCourses={suggestions}
          />
        </Suspense>
      </div>
    );
  } catch (error) {
    console.error('Course fetch error:', error);
    return <ErrorDisplay message="Failed to load course" />;
  }
}


