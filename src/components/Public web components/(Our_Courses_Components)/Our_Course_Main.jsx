// components/Public web components/(Our_Courses_Components)/Our_Course_Main.jsx
import React, { Suspense } from "react";
import Small_Title from "../(Home page)/Small_Title";
import Large_Title from "../(Home page)/Large_Title";
import CourseCardWrapper from "./CourseCardWrapper";
import { getCourses } from "@/app/actions/(Admin)/courseActions";
import Skeleton from "../Skeleton";

const CourseGrid = ({ courses }) => (
  <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 p-3 md:p-0 justify-items-center xl:justify-items-start">
    {courses.map((item) => (
      <CourseCardWrapper key={item._id} course={item} />
    ))}
  </div>
);

const Our_Course_Main = async () => {
  try {
    const res = await getCourses();

    if (!res.success) {
      throw new Error(res.message);
    }

    if (!res.courses?.length) {
      return (
        <div className="w-full min-h-[400px] flex items-center justify-center">
          <p className="text-lg text-gray-600">
            No courses available at the moment.
          </p>
        </div>
      );
    }

    return (
      <section className="w-full h-full flex justify-center items-center flex-col space-y-8 p-3 py-10">
        <div className="lg:w-9/12 md:w-11/12 w-full flex flex-col space-y-5">
          <header className="flex flex-col space-y-4 justify-center items-center w-full">
            <Small_Title title="Our Courses" color={"[#4A4A4A]"} />
            <Large_Title title="Our Courses" />
          </header>
          <Suspense fallback={<Skeleton />}>
            <CourseGrid courses={res.courses} />
          </Suspense>
        </div>
      </section>
    );
  } catch (error) {
    console.error("Course loading error:", error);
    return (
      <div className="w-full min-h-[400px] flex items-center justify-center">
        <p className="text-red-600">
          Failed to load courses. Please try again later.
        </p>
      </div>
    );
  }
};

export default Our_Course_Main;
