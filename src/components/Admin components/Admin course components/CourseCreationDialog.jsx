'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import CourseDescriptionForm from './CourseDescriptionForm'

import { CourseScheduleForm } from './CourseScheduleForm'
import { CourseResourcesForm } from './CourseResourcesForm'
import { CourseInstructorForm } from './CourseInstructorForm'
import { CourseFAQsForm } from './CourseFAQsForm'
import { CourseReviewsForm } from './CourseReviewsForm'
import { ReviewForm } from './ReviewForm'
import CourseBasicDetailsForm from './CourseBasicDetailsForm'
import { createCourse, updateCourse } from '@/app/actions/(Admin)/courseActions'
import { useRequest } from '@/components/custom hooks/useRequest'
import Courses_Table from './Courses_Table'
import { CourseVideoForm } from './CourseVideoForm'

export function CourseCreationDialog({type,initialData}) {
  const [activeTab, setActiveTab] = useState("basic")
  const [courseData, setCourseData] = useState(type==="edit"?initialData:{})

  const{loading,success,error,sendRequest}=useRequest()

  const handleTabChange = (tabName) => {
    setActiveTab(tabName)
  }

  const handleDataUpdate = (newData) => {
    setCourseData(prev => ({
      ...prev,
      ...newData
    }))
  }

  const handleSubmit = async () => {

    const res= initialData?._id ? await sendRequest(()=>updateCourse(initialData?._id,courseData)) : await sendRequest(()=>createCourse(courseData))
    if(res.success){
      setCourseData({})
      setActiveTab("basic")
    }
    // Submit course data to server
    console.log("Final Course Data:", courseData)
    // const res=await createCourse(courseData)
    console.log(res)
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">{type=="edit"?"Edit Course":"Create New Course"}</Button>
      </DialogTrigger>
   

      <DialogContent className="max-w-7xl h-[90vh] overflow-y-auto " onInteractOutside={(event) => event.preventDefault()}>
        <DialogHeader>
          <DialogTitle>{type=="edit"?"Edit Course":"Create New Course"}</DialogTitle>
          <DialogDescription>
            {type=="edit"?"Edit the course details step by step":"Fill out the course details step by step"}
          </DialogDescription>
        </DialogHeader>

        <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full ">
          <TabsList className="grid w-full grid-cols-7 gap-3 mb-4 ">
            <TabsTrigger value="basic">Basic</TabsTrigger>
            <TabsTrigger value="description">Description</TabsTrigger>
            <TabsTrigger value="schedule">Schedule</TabsTrigger>
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

          <TabsContent value="description">
            <CourseDescriptionForm 
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
                <Button onClick={handleSubmit} variant="success">
               {loading ? "Creating..." : "Create Course"}
              </Button>
            )}

            {/* {activeTab !== "faqs" ? (
              <Button 
                onClick={() => {
                  const tabOrder = ["basic", "description", "schedule", "resources","video", "review","faqs"]
                  const currentIndex = tabOrder.indexOf(activeTab)
                  setActiveTab(tabOrder[currentIndex + 1])
                }}
              >
                Next
              </Button>
            ) : (
            
            )} */}
          </div>
        </Tabs>
      </DialogContent>
    </Dialog>
  )
}
