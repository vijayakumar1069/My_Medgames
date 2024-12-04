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
import { ImageIcon, Trash2 } from "lucide-react";
import Image from "next/image";

const TutorSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  graduation: z.string().min(3, "Graduation details required"),
  college: z.string().min(3, "college details required"),
  specialist: z.string().min(2, "Specialization required"),
  location: z.string().min(2, "Location required"),
  image: z.string().optional(), // Base64 string or URL
});

export function TutorForm({ initialData, onSubmitSuccess }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [imagePreview, setImagePreview] = useState(initialData?.image || null);
  const fileInputRef = useRef(null);

  const form = useForm({
    resolver: zodResolver(TutorSchema),
    defaultValues: initialData || {
      name: "",
      graduation: "",
      college: "",
      specialist: "",
      location: "",
      image: "",
    },
  });
  // Handle image file selection and conversion to base64
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

      // Convert to base64
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result;
        setImagePreview(base64String);
        form.setValue("image", base64String);
      };
      reader.readAsDataURL(file);
    }
  };

  // Remove image
  const handleRemoveImage = () => {
    setImagePreview(null);
    form.setValue("image", "");
    if (fileInputRef.current) {
      fileInputRef.current.value = ""; // Clear file input
    }
  };

  async function onSubmit(data) {
    setIsSubmitting(true);
    try {
      const result = initialData?._id
        ? await updateTutor(initialData._id, data)
        : await createTutor(data);

      if (result.success) {
        form.reset();
        onSubmitSuccess?.();
      } else {
        // Handle error (could use toast or form-level error)
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
                <Input placeholder="graduation" {...field} />
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
                <Input placeholder="college" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="specialist"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Specialist</FormLabel>
              <FormControl>
                <Input placeholder="specialist" {...field} />
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
                <Input placeholder="location" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormItem>
          <FormLabel>Tutor Image</FormLabel>
          <FormControl>
            <div className="flex flex-col items-start space-y-2">
              {/* File Input */}
              <Input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="hidden"
                id="tutor-image-upload"
              />

              {/* Image Preview */}
              {imagePreview ? (
                <div className="relative">
                  <Image
                    src={imagePreview}
                    alt="Tutor Preview"
                    width={200}
                    height={200}
                    className="rounded-md object-cover"
                  />
                  <Button
                    type="button"
                    variant="destructive"
                    size="icon"
                    className="absolute top-0 right-0 m-1"
                    onClick={handleRemoveImage}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              ) : (
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => fileInputRef.current?.click()}
                >
                  <ImageIcon className="mr-2 h-4 w-4" />
                  Upload Image
                </Button>
              )}
            </div>
          </FormControl>
          <FormMessage />
        </FormItem>
        {/* Similar fields for graduation, specialist, location */}
        <Button type="submit" disabled={isSubmitting}>
          {initialData ? "Update Tutor" : "Create Tutor"}
        </Button>
      </form>
    </Form>
  );
}
