import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Course_Review_Component from "./Course_Review_Component";
import {
  IconBook,
  IconChalkboard,
  IconClockHour2,
  IconMapPin,
  IconPremiumRights,
  IconUsers,
  IconWorld,
} from "@tabler/icons-react";
import CourseDetailItem from "./CourseDetailItem";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Course_OverView_Component from "./Course_OverView_Component";
import Course_Suggestions from "./Course_Suggestions";
import User_Selected_Course_FAQs from "./User_Selected_Course_FAQs";

const User_Selected_Course_Component = ({ course }) => {
  const details = [
    { icon: IconPremiumRights, label: "Price", value: course.price },
    { icon: IconChalkboard, label: "Tutor", value: course.instructor },
    {
      icon: IconClockHour2,
      label: "Time",
      value: `${course.daily_start_time} to ${course.daily_end_time} on ${course.classDay}`,
    },
    { icon: IconBook, label: "Lessons", value: course.lessons },
    { icon: IconMapPin, label: "Location", value: course.via },
    { icon: IconWorld, label: "Language", value: course.teaching_language },
    { icon: IconUsers, label: "Students", value: course.enrollerd_student },
  ];

  return (
    <div className="w-full h-full flex flex-col justify-center items-center space-y-10  py-10">
      <div className="lg:w-10/12 md:w-11/12 flex flex-col justify-center items-center space-y-10">
        {/* Main Content */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-3 justify-items-center gap-10">
          {/* Left Column: Tabs for Overview and Reviews */}
          <div className="lg:col-span-2 w-full flex flex-col space-y-6">
            <Tabs defaultValue="overview" className="w-full">
              {/* Tabs Header */}
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                {course.reviews?.length > 0 && (
                  <TabsTrigger value="reviews">Reviews</TabsTrigger>
                )}
              </TabsList>

              {/* Overview Tab Content */}
              <TabsContent value="overview">
                <Course_OverView_Component />
              </TabsContent>

              {/* Reviews Tab Content */}
              <TabsContent value="reviews">
                {course.reviews?.length > 0 && (
                  <Course_Review_Component course={course} />
                )}
              </TabsContent>
            </Tabs>
          </div>

          {/* Right Column: Course Details and Enroll Button */}
          <div className="lg:col-span-1 w-full h-fit max-w-sm bg-white shadow-xl p-6 rounded-lg">
            <h1 className="text-lg font-bold mb-4">Course Includes :</h1>
            <div className="space-y-6">
              {details.map((detail, index) => (
                <CourseDetailItem
                  key={index}
                  icon={detail.icon}
                  label={detail.label}
                  value={detail.value}
                />
              ))}
            </div>
            <div className="mt-6">
              <Link href={`/payment?courseName=${course.name}`}>
                <Button className="w-full bg-[#4F9F76] text-white px-4 py-2 rounded-md hover:bg-transparent hover:text-[#4F9F76] border border-[#4F9F76]">
                  Enroll Now
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Course Suggestions Section */}
        <div className="w-full mt-8">
          <Course_Suggestions currentCourse_Name={course.name} />
        </div>
      </div>
      <div className="w-full">
        {course.course_faqs?.length > 0 && (
          <User_Selected_Course_FAQs
            items={course.course_faqs}
            heading={course.name + " FAQs"}
          />
        )}
      </div>
    </div>
  );
};

export default User_Selected_Course_Component;
