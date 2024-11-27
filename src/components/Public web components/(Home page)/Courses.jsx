import React from "react";
import Small_Title from "./Small_Title";
import Large_Title from "./Large_Title";
import { courses } from "@/utils/constvalues";
import Course_Card from "./Course_Card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Courses = () => {
  return (
    <div className="w-full h-full flex justify-center items-center flex-col space-y-8 p-3 py-10 bg-[#fff]">
      <div className="lg:w-10/12 md:w-11/12 w-full flex flex-col md:flex-row space-y-5 md:space-y-0 md:justify-between justify-center items-center">
        <div className="flex-1 mb-4 md:mb-0 md:text-left text-center space-y-4 md:pr-5">
          <Small_Title title="Our Courses" />
          <Large_Title title="Providing the Best Learning Experience" text={true} left={false} />
        </div>
        <div className="basis-1/4 flex justify-center md:text-right">
          <Link href="/our-courses" className="text-[#4F9F76]">
            <Button className="bg-[#4F9F76] text-white px-4 py-2 rounded-md hover:bg-transparent hover:text-[#4F9F76] border border-[#4F9F76]">
              All Courses
            </Button>
          </Link>
        </div>
      </div>
      <div className="lg:w-10/12 md:w-11/12 w-full grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 p-5 md:p-0 justify-items-center xl:justify-items-start">
        {courses.slice(0, 4).map((item) => (
          <Course_Card key={item.id} course={item} />
        ))}
      </div>
    </div>
  );
};

export default Courses;
