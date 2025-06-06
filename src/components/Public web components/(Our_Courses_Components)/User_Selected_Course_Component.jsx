// Import statements
import React, { Suspense, useMemo } from "react";
import Link from "next/link";
import {
  IconBook,
  IconCalendarWeek,
  IconChalkboard,
  IconClockHour2,
  IconMapPin,
  IconPremiumRights,
  IconWorld,
} from "@tabler/icons-react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";

import CourseDetailItem from "./CourseDetailItem";
import Course_OverView_Component from "./Course_OverView_Component";
import Course_Review_Component from "./Course_Review_Component";
import Course_Suggestions from "./Course_Suggestions";
import User_Selected_Course_FAQs from "./User_Selected_Course_FAQs";
import Video_Player_Course from "./Video_Player_Course";
import ErrorBoundary from "@/app/(public)/error";
import { timeformatChange } from "@/lib/timeformater";

// Constants
const COURSE_DETAILS_CONFIG = {
  overviewTab: "overview",
  reviewsTab: "reviews",
  enrollButtonText: "Enroll Now",
  courseIncludesTitle: "Course Includes:",
};

// Utility function
const formatCourseDetails = (course) => [
  {
    icon: IconPremiumRights,
    label: "Price",
    value: `$ ${course.price} CAD `,
  },
  {
    icon: IconChalkboard,
    label: "Tutor",
    value: course.instructorName || "N/A",
  },
  {
    icon: IconClockHour2,
    label: "Time",
    value: `${timeformatChange(course.dailyStartTime)} to ${timeformatChange(
      course.dailyEndTime
    )} EST `,
  },
  {
    icon: IconCalendarWeek,
    label: "Day",
    value: ` ${
      course.classDays.length > 1
        ? course.classDays.join(" & ")
        : course.classDays[0]
    }`,
  },

  // {
  //   icon: IconBook,
  //   label: "Lessons",
  //   value: course.lessons !== "" ? course.lessons : "N/A",
  // },
  {
    icon: IconMapPin,
    label: "Via",
    value: course.via,
  },
  {
    icon: IconWorld,
    label: "Language",
    value: course.teachingLanguage || "English",
  },
];

// Error Boundary Component

// Main Component
const User_Selected_Course_Component = ({ course, suggestionsCourses }) => {
  // Memoize course details to optimize performance
  const courseDetails = useMemo(() => formatCourseDetails(course), [course]);

  // Validate course data
  if (!course) {
    return (
      <div className="w-full flex justify-center items-center h-screen">
        <p className="text-red-500">No course data available</p>
      </div>
    );
  }

  return (
    <div className="w-full h-full flex flex-col justify-center items-center space-y-10 py-10">
      <div className="lg:w-9/12 md:w-11/12 flex flex-col justify-center items-center space-y-10">
        {/* Main Content Grid */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-3 justify-items-center gap-10">
          {/* Left Column: Tabs for Overview and Reviews */}
          <div className="lg:col-span-2 w-full flex flex-col space-y-6">
            <Tabs
              defaultValue={COURSE_DETAILS_CONFIG.overviewTab}
              className="w-full"
            >
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value={COURSE_DETAILS_CONFIG.overviewTab}>
                  Overview
                </TabsTrigger>

                {course.reviews?.length > 0 && (
                  <TabsTrigger value={COURSE_DETAILS_CONFIG.reviewsTab}>
                    Reviews
                  </TabsTrigger>
                )}
              </TabsList>

              <TabsContent value={COURSE_DETAILS_CONFIG.overviewTab}>
                <Course_OverView_Component
                  objective={course.objective}
                  topic_covered={course.topic_covered}
                  key_features={course.key_features}
                  additional_resources={course.additional_resources}
                  benefits={course.benefits}
                  downalodPdf={course.downloadable_pdf?.[0]}
                />
              </TabsContent>

              {course.reviews?.length > 0 && (
                <TabsContent value={COURSE_DETAILS_CONFIG.reviewsTab}>
                  <Course_Review_Component course={course} />
                </TabsContent>
              )}
            </Tabs>
          </div>

          {/* Right Column: Course Details and Enroll Button */}
          <div className="lg:col-span-1 w-full h-fit max-w-md bg-white shadow-xl p-6 rounded-lg">
            <Suspense fallback={<div>Loading video...</div>}>
              {course.video_section && (
                <Video_Player_Course videoUrl={course.video_section} />
              )}
            </Suspense>
            <h2 className="text-lg font-bold mb-4">
              {COURSE_DETAILS_CONFIG.courseIncludesTitle}
            </h2>

            <div className="space-y-6 ">
              {courseDetails.map((detail) => (
                <CourseDetailItem
                  key={detail.label}
                  icon={detail.icon}
                  label={detail.label}
                  value={String(detail.value)}
                />
              ))}
            </div>

            <div className="mt-6">
              <Link href={`/payment?id=${course._id}`} className="block">
                <Button className="w-full bg-[#4F9F76] text-white px-4 py-2 rounded-md hover:bg-transparent hover:text-[#4F9F76] border border-[#4F9F76]">
                  {COURSE_DETAILS_CONFIG.enrollButtonText}
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Course Suggestions Section */}
        <div className="w-full mt-8">
          <Course_Suggestions suggestionsCourses={suggestionsCourses} />
        </div>
      </div>

      {/* FAQs Section */}
      {course.questions?.length > 0 && (
        <div className="w-full">
          <User_Selected_Course_FAQs
            items={course.questions}
            heading={`${course.name} FAQs`}
          />
        </div>
      )}
    </div>
  );
};

// Optimize re-renders with React.memo
export default React.memo(
  User_Selected_Course_Component,
  (prevProps, nextProps) =>
    prevProps.course?._id === nextProps.course?._id &&
    prevProps.course?.name === nextProps.course?.name
);
