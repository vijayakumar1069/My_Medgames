// components/Public web components/(Our_Courses_Components)/CourseCardWrapper.jsx
import { Suspense } from "react";
import Course_Details_Page_Card from "./Course_Details_Page_Card";

const LoadingFallback = () => (
  <div className="w-full h-[400px] animate-pulse bg-gray-200 rounded-lg"></div>
);

export default function CourseCardWrapper({ course }) {
  if (!course) return null;

  return (
    <Suspense fallback={<LoadingFallback />}>
      <Course_Details_Page_Card course={course} />
    </Suspense>
  );
}
