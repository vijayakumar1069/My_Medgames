"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CourseDescriptionForm from "./CourseDescriptionForm";

import { CourseScheduleForm } from "./CourseScheduleForm";
import { CourseResourcesForm } from "./CourseResourcesForm";
import { CourseFAQsForm } from "./CourseFAQsForm";
import { ReviewForm } from "./ReviewForm";
import CourseBasicDetailsForm from "./CourseBasicDetailsForm";
import {
  createCourse,
  updateCourse,
} from "@/app/actions/(Admin)/courseActions";
import { useRequest } from "@/components/custom hooks/useRequest";
import { CourseVideoForm } from "./CourseVideoForm";
import { EditIcon, PlusIcon } from "lucide-react";

export function CourseCreationDialog({ type = "add", initialData }) {
  const [activeTab, setActiveTab] = useState("basic");
  const [courseData, setCourseData] = useState(
    type == "edit" ? initialData : {}
  );
 
  const [isOpen, setIsOpen] = useState(false);

  const { loading, success, error, sendRequest } = useRequest();

  const handleTabChange = (tabName) => {
    setActiveTab(tabName);
  };

  const handleDataUpdate = (newData) => {
    setCourseData((prev) => ({
      ...prev,
      ...newData,
    }));
  };

  const handleSubmit = async () => {
    const res = initialData?._id
      ? await sendRequest(() => updateCourse(initialData?._id, courseData))
      : await sendRequest(() => createCourse(courseData));
    if (type == "edit") {
      setIsOpen(false);
      setCourseData(res.course);
      setActiveTab("basic");
      return;
    
    }
    if (res.success) {
      setIsOpen(false);
      setCourseData({});
    }

    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {type === "add" ? (
          <Button
            variant="outline"
            className="bg-blue-400 hover:bg-blue-500 text-black"
            size="sm"
          >
            <PlusIcon className="mr-2 h-4 w-4 " />{" "}
            <span className="font-bold">Add Course</span>
          </Button>
        ) : (
          <Button
            variant="outline"
            size="sm"
            className="bg-green-400 xp-2 py-4 h-9 hover:bg-green-500 text-black"
          >
            <EditIcon className="mr-2 h-4 w-4" /> Edit
          </Button>
        )}
      </DialogTrigger>

      <DialogContent
        className="max-w-7xl h-[90vh] overflow-y-auto "
        onInteractOutside={(event) => event.preventDefault()}
      >
        <DialogHeader>
          <DialogTitle>
            {type == "edit" ? "Edit Course" : "Create New Course"}
          </DialogTitle>
          <DialogDescription>
            {type == "edit"
              ? "Edit the course details step by step"
              : "Fill out the course details step by step"}
          </DialogDescription>
        </DialogHeader>

        <Tabs
          value={activeTab}
          onValueChange={handleTabChange}
          className="w-full "
        >
          <TabsList className="grid w-full grid-cols-7 gap-3 mb-4 ">
            <TabsTrigger value="basic">Basic</TabsTrigger>
            <TabsTrigger value="schedule">Schedule</TabsTrigger>
            <TabsTrigger value="description">Description</TabsTrigger>
            <TabsTrigger value="resources">Resources</TabsTrigger>
            <TabsTrigger value="video">Video</TabsTrigger>
            <TabsTrigger value="review">Reviews</TabsTrigger>
            <TabsTrigger value="faqs">FAQ&apos;s</TabsTrigger>
          </TabsList>

          <TabsContent value="basic">
            <CourseBasicDetailsForm
              onDataUpdate={handleDataUpdate}
              currentData={courseData}
              setActiveTab={setActiveTab}
            />
          </TabsContent>

          <TabsContent value="schedule">
            <CourseScheduleForm
              onDataUpdate={handleDataUpdate}
              currentData={courseData}
              setActiveTab={setActiveTab}
            />
          </TabsContent>
          <TabsContent value="description">
            <CourseDescriptionForm
              onDataUpdate={handleDataUpdate}
              currentData={courseData}
              setActiveTab={setActiveTab}
            />
          </TabsContent>
          <TabsContent value="resources">
            <CourseResourcesForm
              onDataUpdate={handleDataUpdate}
              currentData={courseData}
              setActiveTab={setActiveTab}
            />
          </TabsContent>
          <TabsContent value="video">
            <CourseVideoForm
              onDataUpdate={handleDataUpdate}
              currentData={courseData}
              setActiveTab={setActiveTab}
            />
          </TabsContent>

          <TabsContent value="review">
            <ReviewForm
              onDataUpdate={handleDataUpdate}
              currentData={courseData}
              setActiveTab={setActiveTab}
            />
          </TabsContent>
          <TabsContent value="faqs">
            <CourseFAQsForm
              onDataUpdate={handleDataUpdate}
              currentData={courseData}
              setActiveTab={setActiveTab}
            />
          </TabsContent>

          <div className="flex justify-between mt-4">
            {activeTab == "faqs" && (
              <Button onClick={handleSubmit} variant="default">
                {loading ? "Creating..." : "Create Course"}
              </Button>
            )}
          </div>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}
