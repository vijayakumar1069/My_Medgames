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
import { createCourse } from '@/app/actions/(Admin)/courseActions'
import { useRequest } from '@/components/custom hooks/useRequest'

export function CourseCreationDialog() {
  const [activeTab, setActiveTab] = useState("basic")
  const [courseData, setCourseData] = useState({})

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

    const res=await sendRequest(()=>createCourse(courseData))
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
        <Button variant="outline">Add New Course</Button>
      </DialogTrigger>
      <DialogContent className="max-w-6xl h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Create New Course</DialogTitle>
          <DialogDescription>
            Fill out the course details step by step
          </DialogDescription>
        </DialogHeader>

        <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full">
          <TabsList className="grid w-full grid-cols-6 mb-4">
            <TabsTrigger value="basic">Basic Details</TabsTrigger>
            <TabsTrigger value="description">Description</TabsTrigger>
            <TabsTrigger value="schedule">Schedule</TabsTrigger>
            <TabsTrigger value="resources">Resources</TabsTrigger>
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
            {activeTab !== "basic" && (
              <Button 
                variant="outline" 
                onClick={() => {
                  const tabOrder = ["basic", "description", "schedule", "resources", "review","faqs"]
                  const currentIndex = tabOrder.indexOf(activeTab)
                  setActiveTab(tabOrder[currentIndex - 1])
                }}
              >
                Previous
              </Button>
            )}

            {activeTab !== "faqs" ? (
              <Button 
                onClick={() => {
                  const tabOrder = ["basic", "description", "schedule", "resources", "faqs"]
                  const currentIndex = tabOrder.indexOf(activeTab)
                  setActiveTab(tabOrder[currentIndex + 1])
                }}
              >
                Next
              </Button>
            ) : (
              <Button onClick={handleSubmit} variant="destructive">
                Create Course
              </Button>
            )}
          </div>
        </Tabs>
      </DialogContent>
    </Dialog>
  )
}
