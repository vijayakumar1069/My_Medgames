"use client";

import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { createTutor, updateTutor } from "@/app/actions/(Admin)/tutorActions";
import { z } from "zod";
import { ImageIcon } from "lucide-react";

const TutorSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  graduation: z.string().min(3, "Graduation details required"),
  college: z.string().min(3, "College details required"),
  specialist: z.string().optional(),
  location: z.string().min(2, "Location required"),
});

export function TutorForm({ initialData, onSubmitSuccess }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const fileInputRef = useRef(null);
  const [selectedImage, setSelectedImage] = useState(initialData?.image || null);

  const form = useForm({
    resolver: zodResolver(TutorSchema),
    defaultValues: initialData || {
      name: "",
      graduation: "",
      college: "",
      specialist: "",
      location: "",
    },
  });

  // Handle image file selection
  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      // Validate file size (e.g., max 5MB)
      if (file.size > 3 * 1024 * 1024) {
        alert("File size should not exceed 5MB");
        return;
      }

      // Validate file type
      const validTypes = ["image/jpeg", "image/png", "image/gif", "image/webp"];
      if (!validTypes.includes(file.type)) {
        alert("Only image files are allowed");
        return;
      }

      setSelectedImage(file);
    }
  };

  async function onSubmit(data) {
    if (!selectedImage) {
      alert("Please upload an image.");
      return;
    }

    setIsSubmitting(true);
    try {
     data.image=selectedImage;

      const result = initialData?._id
        ? await updateTutor(initialData._id, data)
        : await createTutor(data);

      if (result.success) {
        form.reset();
        setSelectedImage(null);
        setIsSubmitting(false);
        onSubmitSuccess?.();
      } else {
        console.error(result.error);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Tutor Name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="graduation"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Graduation</FormLabel>
              <FormControl>
                <Input placeholder="Graduation" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="college"
          render={({ field }) => (
            <FormItem>
              <FormLabel>College</FormLabel>
              <FormControl>
                <Input placeholder="College" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="location"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Location</FormLabel>
              <FormControl>
                <Input placeholder="Location" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormItem>
          <FormLabel>Tutor Image</FormLabel>
          <FormControl>
            <div className="flex flex-col items-start space-y-2">
              <Input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                id="tutor-image-upload"
              />
            </div>
          </FormControl>
          <FormMessage />
        </FormItem>
        {
          initialData?.image && <p className="text-slate-500"><strong className="text-black">Current Image : </strong>{initialData.image.fileName !== null ? initialData.image.fileName : "sample.jpg"}</p>
        }
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting
            ? initialData
              ? "Updating Tutor..."
              : "Creating Tutor..."
            : initialData
            ? "Update Tutor"
            : "Create Tutor"}
        </Button>
      </form>
    </Form>
  );
}
