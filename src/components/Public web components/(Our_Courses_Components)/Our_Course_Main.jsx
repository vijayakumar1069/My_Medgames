import React from "react";
import Small_Title from "../(Home page)/Small_Title";
import Large_Title from "../(Home page)/Large_Title";
// import { courses } from "@/utils/constvalues";
import CourseCardWrapper from "./CourseCardWrapper";
import { getCourses } from "@/app/actions/(Admin)/courseActions";

const Our_Course_Main = async () => {
  let courses;
try {
  const res=await getCourses();
  if(res.success){
    courses=res.courses;
  }
  else{
    return <div className="w-full h-full flex justify-center items-center  flex-col space-y-8 p-3 py-10 ">{res.message}</div>
  }
  
} catch (error) {
  return <div className="w-full h-full flex justify-center items-center  flex-col space-y-8 p-3 py-10 ">{error.message}</div>
  
}
  return (
    <div className="w-full h-full flex justify-center items-center  flex-col space-y-8 p-3 py-10 ">
      <div className="lg:w-10/12 md:w-11/12 w-full flex flex-col  space-y-5 ">
        <div className="flex flex-col space-y-4 justify-center items-center w-full">
          <Small_Title title="Our Courses" color={"[#4A4A4A]"} />
          <Large_Title title="Our Courses" />
        </div>
        <div className=" w-full grid grid-cols-1 md:grid-cols-2  xl:grid-cols-3 gap-10 p-3 md:p-0 justify-items-center xl:justify-items-start">
          {courses.map((item) => (
            // <Course_Card key={item.id} course={item} />
            <CourseCardWrapper key={item._id} course={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Our_Course_Main;
