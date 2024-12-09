import React from "react";
import Small_Title from "./Small_Title";
import Large_Title from "./Large_Title";
import { courses } from "@/utils/constvalues";
import Course_Card from "./Course_Card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { gethomeScreenCourses } from "@/app/actions/(Admin)/courseActions";
import { ErrorBoundary } from "next/dist/client/components/error-boundary";

const Courses = async () => {
  let courses;
  try {
    const res = await gethomeScreenCourses();
    if (res.success) {
      courses = res.HomeScreenCourses;
    } else {
      throw new Error(res.message);
    }
    return (
      <div className="w-full h-full flex justify-center items-center flex-col space-y-8 p-3 py-10 bg-white">
        <div className="lg:w-10/12 md:w-11/12 w-full flex flex-col md:flex-row space-y-5 md:space-y-0 md:justify-between justify-center items-center">
          <div className="flex-1 mb-4 md:mb-0 md:text-left text-center space-y-4 md:pr-5">
            <Small_Title title="Our Courses" />
            <Large_Title
              title="Providing the Best Learning Experience"
              text={true}
              left={false}
            />
          </div>
          <div className="basis-1/4 flex justify-center md:text-right">
            <Link href="/our-courses" className="text-[#4F9F76]">
              <Button className="bg-[#4F9F76] text-white px-4 py-2 rounded-md hover:bg-transparent hover:text-[#4F9F76] border border-[#4F9F76]">
                All Courses
              </Button>
            </Link>
          </div>
        </div>
        <div className="lg:w-10/12 md:w-11/12 w-full grid grid-cols-1 lg:grid-cols-2  gap-6 p-5 md:p-0 justify-items-center xl:justify-items-start">
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
      </div>
    );
  } catch (error) {
    return (
      <div className="w-full h-full flex justify-center items-center flex-col space-y-8 p-3 py-10">
        <ErrorBoundary
          fallback={<div>Something went wrong</div>}
          errormessage={error.message}
        />
      </div>
    );
  }
};

export default Courses;
