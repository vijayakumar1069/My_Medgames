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
      name: z.string().min(2, "Name must be at least 2 characters"),
      review_content: z
        .string()
        .min(10, "Review must be at least 10 characters"),
      image: z.string().url(), // Secure URL
      rating: z.number().min(1).max(5),
      small_description: z.string().optional(),
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
          name: "",
          review_content: "",
          image: "",
          rating: 5,
          small_description: "",
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
      return; // Exit if no file selected
    }

    const file = files[0];
    if (file) {
      // const reader = new FileReader();
      // reader.onloadend = () => {
      //   const base64String = reader.result

      //   // Update form value for specific review
      //   form.setValue(`reviews.${index}.image`, base64String);

      //   // Update image previews state
      //   const newPreviews = [...imagePreviews];
      //   newPreviews[index] = base64String;
      //   setImagePreviews(newPreviews);
      // };
      // reader.readAsDataURL(file);

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
    onDataUpdate(data);
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
              name={`reviews.${index}.name`}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
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
          
            {/* {currentData?.reviews.length>0 && currentData?.reviews[index].image && (
              <div className="">
                <p>
                  {" "}
                  <strong>Preview:</strong>
                  <a
                    href={currentData.reviews[index].image}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    {currentData.reviews[index].fileName}
                  </a>
                </p>
             
              </div>
            )} */}

            <FormField
              control={form.control}
              name={`reviews.${index}.small_description`}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Short Description</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Optional short description"
                      {...field}
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
              name: "",
              review_content: "",
              image: "",
              rating: 0,
              small_description: "",
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
