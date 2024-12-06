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

const courseDetailsSchema = z.object({
  name: z.string().min(3, "Course name must be at least 3 characters"),
  description: z.string().min(10, "Description must be at least 10 characters"),
  img_for_home: z.string().optional(), // Change to optional string
  img_for_course_details_page: z.string().optional(), // Change to optional string
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

  const [initialData, setInitialData] = useState(currentData);
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

  const [imgPreviewHome, setImgPreviewHome] = useState(
    currentData.img_for_home || null
  );
  const [imgPreviewCourseDetails, setImgPreviewCourseDetails] = useState(
    currentData.img_for_course_details_page || null
  );

  const convertFileToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  };
  const onSubmit = async (data) => {
    const submissionData = { ...data };

    // Convert home image to base64
    if (submissionData.img_for_home instanceof File) {
      submissionData.img_for_home = await convertFileToBase64(
        submissionData.img_for_home
      );
    } else if (!submissionData.img_for_home) {
      submissionData.img_for_home = ""; // Leave as empty string if no image
    }

    // Convert course details image to base64
    if (submissionData.img_for_course_details_page instanceof File) {
      submissionData.img_for_course_details_page = await convertFileToBase64(
        submissionData.img_for_course_details_page
      );
    } else if (!submissionData.img_for_course_details_page) {
      submissionData.img_for_course_details_page = ""; // Leave as empty string if no image
    }

    onDataUpdate(submissionData);
    setActiveTab("description"); // Navigate to the next tab (Course Content)

    // Proceed with saving data
  };

  const handleImageChange = async (event, name) => {
    const file = event.target.files?.[0];

    if (file) {
      const base = await convertFileToBase64(file);
      if (name === "img_for_home") {
        setImgPreviewHome(base);
      } else {
        setImgPreviewCourseDetails(base);
      }
      form.setValue(name, base, {
        shouldValidate: true,
      });
    } else {
      form.setValue(name, null, {
        shouldValidate: true,
      });
    }
  };
  const handleImageRemove = (fieldName) => {
    // Reset the preview
    if (fieldName === "img_for_home") {
      setImgPreviewHome(null);
    } else {
      setImgPreviewCourseDetails(null);
    }

    // Clear the form value
    form.setValue(fieldName, "", {
      shouldValidate: true,
    });
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
              {imgPreviewHome && (
                <div className="mt-2 flex items-center space-x-2">
                  <img
                    src={imgPreviewHome}
                    alt="Preview"
                    className="h-24 w-24 object-cover"
                  />
                  <Button
                    type="button"
                    variant="destructive"
                    size="sm"
                    onClick={() => handleImageRemove("img_for_home")}
                  >
                    Remove Image
                  </Button>
                </div>
              )}
            </FormItem>
          )}
        />

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
              {imgPreviewCourseDetails && (
                <div className="mt-2 flex items-center space-x-2">
                  <img
                    src={imgPreviewCourseDetails}
                    alt="Preview"
                    className="h-24 w-24 object-cover"
                  />
                  <Button
                    type="button"
                    variant="destructive"
                    size="sm"
                    onClick={() =>
                      handleImageRemove("img_for_course_details_page")
                    }
                  >
                    Remove Image
                  </Button>
                </div>
              )}
            </FormItem>
          )}
        />

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
        {/* <FormField
          control={form.control}
          name="shown_on_home_screen"
          render={({ field }) => (
            <FormItem className="flex flex-row items-center space-x-3 space-y-0 rounded-md border p-4">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel>
                  Show on Home Screen
                </FormLabel>
             
              </div>
            </FormItem>
          )}
        /> */}

        <Button type="submit">Save Course Details</Button>
      </form>
    </Form>
  );
}

export default CourseBasicDetailsForm;
