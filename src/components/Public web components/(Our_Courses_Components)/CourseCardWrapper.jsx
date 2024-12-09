import { Suspense } from "react";
import Course_Details_Page_Card from "./Course_Details_Page_Card";

export default function CourseCardWrapper({ course }) {
    return (
      <Suspense fallback={<div>Loading course...</div>}>
        <Course_Details_Page_Card course={course} key={course._id} />
      </Suspense>
    );
  }