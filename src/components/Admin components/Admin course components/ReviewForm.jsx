"use client";
import React, { useState } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Plus, Star, Trash2 } from "lucide-react";
import { uploadToCloudinary } from "@/app/actions/(Admin)/cloudinaryActions";

// Define the schema for reviews
const reviewSchema = z.object({
  reviews: z.array(
    z.object({
      review_content: z
        .string()
        .min(10, "Review must be at least 10 characters"),
      image: z.string().url(), // Secure URL
      rating: z.number().min(1).max(5),
      cloudinaryPublicId: z.string().optional(), // Cloudinary Public ID
      fileName: z.string().optional(), // Original Filename
    })
  ),
});

export function ReviewForm({ onDataUpdate, currentData, setActiveTab }) {
  // Initialize imagePreviews as an array
  const [imagePreviews, setImagePreviews] = useState([]);

  const form = useForm({
    resolver: zodResolver(reviewSchema),
    defaultValues: {
      reviews: currentData?.reviews || [
        {
          review_content: "",
          image: "",
          rating: 5,
        },
      ],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "reviews",
  });

  // Modified image change handler to work with field arrays
  const handleImageChange = async (event, index) => {
    // Null check for event.target.files
    const files = event.target.files;
    if (!files || files.length === 0) {
      return;
    }

    const file = files[0];
    if (file) {
      const res = await uploadToCloudinary(file, "reviews");
      form.setValue(`reviews.${index}.image`, res.secureUrl);
      form.setValue(
        `reviews.${index}.cloudinaryPublicId`,
        res.cloudinaryPublicId
      );
      form.setValue(`reviews.${index}.fileName`, res.originalFilename);
    }
  };

  const onSubmit = (data) => {
    // Ensure all image URLs are valid before submission
    const validatedData = {
      ...data,
      reviews: data.reviews.map((review) => ({
        ...review,
        image: review.image || "", // Ensure image is a valid URL
      })),
    };
    onDataUpdate(validatedData);
    setActiveTab("faqs"); // Navigate back to home tab after form submission
    // Handle save logic here
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 h-fit">
        {fields.map((field, index) => (
          <div className="flex flex-col mb-4 space-y-3" key={field.id}>
            <FormField
              control={form.control}
              name={`reviews.${index}.review_content`}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Review</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Write your review" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name={`reviews.${index}.rating`}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Rating</FormLabel>
                  <FormControl>
                    <div className="flex items-center">
                      {[1, 2, 3, 4, 5].map((starValue) => (
                        <Star
                          key={starValue}
                          className={`h-6 w-6 cursor-pointer ${
                            starValue <= field.value
                              ? "text-yellow-500 fill-current"
                              : "text-gray-300"
                          }`}
                          onClick={() => field.onChange(starValue)}
                        />
                      ))}
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name={`reviews.${index}.image`}
              render={() => (
                <FormItem>
                  <FormLabel>Profile Image</FormLabel>
                  <FormControl>
                    <Input
                      type="file"
                      accept="image/*"
                      onChange={(e) => handleImageChange(e, index)}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex items-center space-x-2">
              <Button
                type="button"
                variant="destructive"
                size="icon"
                onClick={() => {
                  // Remove the review and its corresponding image preview
                  remove(index);
                  const newPreviews = [...imagePreviews];
                  newPreviews.splice(index, 1);
                  setImagePreviews(newPreviews);
                }}
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          </div>
        ))}
        <Button
          type="button"
          variant="outline"
          onClick={() => {
            // Add a new review and a null preview
            append({
              review_content: "",
              image: "",
              rating: 0,
            });
            setImagePreviews((prev) => [...prev, ""]); // Add an empty string instead of null
          }}
        >
          <Plus className="mr-2 h-4 w-4" /> Add Review
        </Button>
        <Button type="submit">Save Reviews</Button>
      </form>
    </Form>
  );
}
