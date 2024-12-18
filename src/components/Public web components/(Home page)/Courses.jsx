// components/Public web components/(Home page)/Courses.jsx
import React, { Suspense } from "react";
import Small_Title from "./Small_Title";
import Large_Title from "./Large_Title";
import Course_Card from "./Course_Card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { gethomeScreenCourses } from "@/app/actions/(Admin)/courseActions";
import ErrorBoundary from "@/app/(public)/error";
import Skeleton from "../Skeleton";

export const dynamic = "force-dynamic";
export const revalidate = 3600; // Revalidate every hour

// Server Component
const CourseGrid = ({ courses }) => (
  <div className="lg:w-9/12 md:w-11/12 w-full grid grid-cols-1 lg:grid-cols-2 gap-6 p-5 md:p-0 justify-items-center xl:justify-items-start">
    {courses.length > 0 ? (
      courses
        .slice(0, 4)
        .map((item) => <Course_Card key={item._id} course={item} />)
    ) : (
      <div className="flex col-span-4 justify-center items-center flex-col w-full space-y-8 p-3 py-10">
        <h1 className="text-center text-3xl font-bold text-gray-700">
          No Courses Found
        </h1>
      </div>
    )}
  </div>
);

const Courses = async () => {
  try {
    const res = await gethomeScreenCourses();

    if (!res.success) {
      throw new Error(res.message);
    }

    return (
      <section className="w-full h-full flex justify-center items-center flex-col space-y-8 p-3 py-10 bg-white">
        <div className="lg:w-9/12 md:w-11/12 w-full flex flex-col md:flex-row space-y-5 md:space-y-0 md:justify-between justify-center items-center">
          <div className="flex-1 mb-4 md:mb-0 md:text-left text-center space-y-4 md:pr-5">
            <Small_Title title="Our Courses" />
            <Large_Title
              title="Providing the Best Learning Experience"
              text={true}
              left={false}
            />
          </div>
          <Link
            href="/our-courses"
            className="basis-1/4 flex justify-center md:text-right"
            prefetch={true}
          >
            <Button className="bg-[#4F9F76] text-white px-4 py-2 rounded-md hover:bg-transparent hover:text-[#4F9F76] border border-[#4F9F76]">
              All Courses
            </Button>
          </Link>
        </div>
        <Suspense fallback={<Skeleton />}>
          <CourseGrid courses={res.HomeScreenCourses} />
        </Suspense>
        <Link href="/our-courses" prefetch={true} className="text-[#4F9F76]">
          <Button className="bg-[#4F9F76] text-white px-6 py-2 rounded-md hover:bg-transparent hover:text-[#4F9F76] border border-[#4F9F76]">
            All Courses
          </Button>
        </Link>
      </section>
    );
  } catch (error) {
    return (
      <ErrorBoundary
        fallback={<div>Something went wrong</div>}
        errormessage={error.message}
      />
    );
  }
};

export default Courses;
