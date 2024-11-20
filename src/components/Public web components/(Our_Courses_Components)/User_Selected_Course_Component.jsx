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
    <div>
      <div className="w-full h-full flex justify-center items-center  flex-col space-y-8 p-3 py-10 ">
        <div className="lg:w-10/12 md:w-11/12 w-full flex md:flex-row flex-col md:space-y-0 space-y-10   space-x-10">
          <div className="basis-3/4">
            <Tabs defaultValue="overview" className="w-full">
              {/* Tabs Header */}
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
              </TabsList>

              {/* Overview Tab Content */}
              <TabsContent value="overview">
                <h1 className="text-xl font-bold">Overview</h1>
              </TabsContent>

              {/* Reviews Tab Content */}
              <TabsContent value="reviews">
                <Course_Review_Component course={course} />
              </TabsContent>
            </Tabs>
          </div>
          <div className="basis-1/4 h-fit flex flex-col space-y-4 bg-white shadow-xl p-5">
            <div>
              <h1 className="text-lg font-bold">Course Includes :</h1>
            </div>
            <div className="flex flex-col space-y-6">
              {details.map((detail, index) => (
                <CourseDetailItem
                  key={index}
                  icon={detail.icon}
                  label={detail.label}
                  value={detail.value}
                />
              ))}
            </div>
            <div className="">
              <Link href={`/payment?courseName=${course.name}`}>
              <Button className="bg-[#4F9F76] text-white px-4 py-2 rounded-md hover:bg-transparent hover:text-[#4F9F76] border border-[#4F9F76] w-full">
                Enroll Now
              </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User_Selected_Course_Component;
