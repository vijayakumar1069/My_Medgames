"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { Trash2, Plus } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { uploadToCloudinary } from "@/app/actions/(Admin)/cloudinaryActions";

const courseDetailsSchema = z.object({
  name: z.string().min(3, "Course name must be at least 3 characters"),
  description: z.string().min(10, "Description must be at least 10 characters"),
  img_for_home: z.instanceof(File).optional(),
  img_for_course_details_page: z.instanceof(File).optional(),
  price: z.string().min(1, "Price is required"),
  lessons: z.string().optional(),
  instructorName: z.string().optional(),
  teachingLanguage: z.string().optional(),
});

export function CourseBasicDetailsForm({
  onDataUpdate,
  currentData,
  setActiveTab,
}) {
  // const [initialData, setInitialData] = useState(currentData);
  console.log(currentData);
  const [loading, setLoading] = useState(false);

  const form = useForm({
    resolver: zodResolver(courseDetailsSchema),
    defaultValues: {
      name: currentData.name || "",
      description: currentData.description || "",
      img_for_home: currentData.img_for_home || "", // Use empty string instead of undefined
      img_for_course_details_page:
        currentData.img_for_course_details_page || "", // Use empty string instead of undefined
      price: currentData.price || "",
      lessons: currentData.lessons || "", // Use empty string instead of undefined
      instructorName: currentData.instructorName || "",
      teachingLanguage: currentData.teachingLanguage || "",
    },
  });

  const onSubmit = async (data) => {
    setLoading(true);
    const submissionData = { ...data };

    // Convert home image to base64
    if (submissionData.img_for_home instanceof File) {
      const res = await uploadToCloudinary(
        submissionData.img_for_home,
        "courses resources"
      );
      console.log(res);
      submissionData.img_for_home = {
        url: res.secureUrl,
        cloudinary_id: res.cloudinaryPublicId,
        fileName: res.originalFilename,
      };
      if (res.error) {
        console.error(res.error);
        return;
      }
    }

    if (submissionData.img_for_course_details_page instanceof File) {
      const res1 = await uploadToCloudinary(
        submissionData.img_for_course_details_page,
        "courses resources"
      );
      console.log(res1);
      submissionData.img_for_course_details_page = {
        url: res1.secureUrl,
        cloudinary_id: res1.cloudinaryPublicId,
        fileName: res1.originalFilename,
      };
      if (res1.error) {
        console.error(res1.error);
        return;
      }
    }
    // else if (!submissionData.img_for_course_details_page) {
    //   submissionData.img_for_course_details_page = ""; // Leave as empty string if no image
    // }

    onDataUpdate(submissionData);
    setLoading(false);
    setActiveTab("schedule"); // Navigate to the next tab (Course Content)

    // Proceed with saving data
  };

  const handleImageChange = async (event, name) => {
    const file = event.target.files?.[0];

    if (file) {
      // const base = await convertFileToBase64(file);
      if (name === "img_for_home") {
        form.setValue(name, file, {
          shouldValidate: true,
        });
      } else {
        // setImgPreviewCourseDetails(base);
        form.setValue(name, file, {
          shouldValidate: true,
        });
      }
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Course Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter course name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea placeholder="Enter course description" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="img_for_home"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Image for Home Page</FormLabel>
              <FormControl>
                <Input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleImageChange(e, "img_for_home")}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
       {currentData && currentData.img_for_home && (
          <p className="text-slate-500">
            <strong className="text-black">Current Image : </strong>
            {currentData.img_for_home.fileName !== null
              ? currentData.img_for_home.fileName
              : "sample.jpg"}
          </p>
        )}

        <FormField
          control={form.control}
          name="img_for_course_details_page"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Image for Course Details Page</FormLabel>
              <FormControl>
                <Input
                  type="file"
                  accept="image/*"
                  onChange={(e) =>
                    handleImageChange(e, "img_for_course_details_page")
                  }
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {currentData && currentData.img_for_course_details_page && (
          <p className="text-slate-500">
            <strong className="text-black">Current Course Details Image : </strong>
            {currentData.img_for_course_details_page.fileName !== null
              ? currentData.img_for_course_details_page.fileName
              : "sample.jpg"}
          </p>
        )}

        <FormField
          control={form.control}
          name="price"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Course Price</FormLabel>
              <FormControl>
                <Input placeholder="Enter price" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="lessons"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Total Lessons</FormLabel>
              <FormControl>
                <Input placeholder="Enter Lessons" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="instructorName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Instructor Name (optional)</FormLabel>
              <FormControl>
                <Input placeholder="Enter instructor name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="teachingLanguage"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Teaching Language (optional)</FormLabel>
              <FormControl>
                <Input placeholder="Enter teaching language" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button disabled={loading} type="submit">
          {loading ? <span>Saving...</span> : <span>Save Course Details</span>}
        </Button>
      </form>
    </Form>
  );
}

export default CourseBasicDetailsForm;
