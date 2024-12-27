"use client";

import { useEffect, useState } from "react";
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
  getCoursesForEdit,
  updateCourse,
} from "@/app/actions/(Admin)/courseActions";
import { useRequest } from "@/components/custom hooks/useRequest";
import { CourseVideoForm } from "./CourseVideoForm";
import { EditIcon, PlusIcon } from "lucide-react";
import Loading from "../Loading";
import EditingComponentLoader from "@/components/EditingComponentLoader";

export function CourseCreationDialog({ type = "add", initialData }) {
  const [activeTab, setActiveTab] = useState("basic");
  const [courseData, setCourseData] = useState({});

  const [isOpen, setIsOpen] = useState(false);

  const { loading, success, error, sendRequest } = useRequest();

  const handleTabChange = (tabName) => {
    setActiveTab(tabName);
  };

  // const handleDataUpdate = (newData) => {
  //   setCourseData((prev) => ({
  //     ...prev,
  //     ...newData,
  //   }));
  // };
  const handleDataUpdate = (newData) => {
    setCourseData((prev) => {
      // Only update fields that are actually different
      const updatedFields = Object.keys(newData).reduce((acc, key) => {
        if (newData[key] !== prev[key]) {
          acc[key] = newData[key];
        }
        return acc;
      }, {});

      return {
        ...prev,
        ...updatedFields,
      };
    });
   
  };

  const handleSubmit = async () => {
    const res = initialData
      ? await sendRequest(() => updateCourse(initialData, courseData))
      : await sendRequest(() => createCourse(courseData));
    // if (type == "edit") {
    //   setIsOpen(false);
    //   setCourseData(res?.course);
    //   setActiveTab("basic");
    //   return;
    // }
    if (res.success) {
      setIsOpen(false);
      setActiveTab("basic");
      setCourseData({});
    }

    setIsOpen(false);
  };
  // const handleEdit = async() => {

  // }
  // useEffect(() => {
  //   // Only fetch data if type is "edit"
  //   if (type === "edit" && initialData !== undefined) {
  //     async function getData() {
  //       const res = await getCoursesForEdit(initialData);
  //    
  //       if (res.success) {
  //         setCourseData(res?.course);
  //       }
  //     }
  //     getData();
  //   }
  //   return () => {
  //     setCourseData({});
  //   };
  // }, [type, initialData]); // Add dependencies to control when this effect runs
  useEffect(() => {
    // Fetch data only when the dialog is open and editID is valid
    if (isOpen && type === "edit" && initialData) {
      const fetchData = async () => {
        try {
          const res = await sendRequest(() => getCoursesForEdit(initialData));
   
          if (res.success) {
            setCourseData(res?.course);
          }
        } catch (error) {
          console.error("Error fetching blog:", error);
        }
      };

      fetchData();
    }
  }, [isOpen, initialData, type,sendRequest]); // Trigger the fetch only when isOpen, editID, or type changes

  if (loading) {
    return <EditingComponentLoader />;
  }
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
            // onClick={handleEdit}
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
