
"use client";

import { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
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
import { Textarea } from "@/components/ui/textarea";
import { X } from "lucide-react";
import {
  createBlogPost,
  updateBlog,
} from "@/app/actions/(Admin)/blogs_function";
import { useRequest } from "@/components/custom hooks/useRequest";

// Zod schema matching Mongoose schema
const blogSchema = z.object({
  title: z.string().min(3, { message: "Title must be at least 3 characters" }),
  description: z
    .string()
    .min(10, { message: "Description must be at least 10 characters" }),
  photo: z.instanceof(File).optional(),
  tags: z.array(z.string()).optional(),
  documentFile: z.instanceof(File).optional(),
});

export function BlogPostForm({ initialData, onSubmitSuccess }) {
  const [tags, setTags] = useState(initialData?.tags || []);
  const [currentTag, setCurrentTag] = useState("");
  const { loading, success, error, sendRequest } = useRequest();
    const form = useForm({
    resolver: zodResolver(blogSchema),
    defaultValues: {
      title: initialData?.title || "",
      description: initialData?.description || "",
      photo: undefined,
      tags: initialData?.tags || [],
      documentFile:undefined,
    },
  });
  

  const onSubmit = async (values) => {
    values.tags = tags;
    const res = await sendRequest(() =>
      initialData?._id
        ? updateBlog(initialData._id, values)
        : createBlogPost(values)
    );
    if (res.success == false) {
      return;
    }
    if (res.success == true) {
      form.reset(); // Reset form values after successful submission
      onSubmitSuccess();
      return;
    }
  };

  const addTag = () => {
    // Trim the tag and check if it's not empty and not already exists
    const trimmedTag = currentTag.trim();
    if (trimmedTag && !tags.includes(trimmedTag)) {
      setTags([...tags, trimmedTag]);
      setCurrentTag(""); // Clear the input after adding
    }
  };

  const removeTag = (tagToRemove) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };

  return (
    <div className="  rounded-lg">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Blog Title</FormLabel>
                <FormControl>
                  <Input placeholder="Enter blog title" {...field} />
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
                  <Textarea
                    placeholder="Write a brief description of your blog post"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Custom Tags Input */}
          <FormItem>
            <FormLabel>Tags</FormLabel>
            <div className="flex space-x-2">
              <Input
                placeholder="Enter a tag"
                value={currentTag}
                onChange={(e) => setCurrentTag(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    addTag();
                  }
                }}
              />
              <Button type="button" variant="outline" onClick={addTag}>
                Add Tag
              </Button>
            </div>

            {/* Tag Display */}
            {tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-2">
                {tags.map((tag) => (
                  <div
                    key={tag}
                    className="flex items-center bg-gray-100 px-2 py-1 rounded-md"
                  >
                    <span className="mr-2">{tag}</span>
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      className="h-4 w-4"
                      onClick={() => removeTag(tag)}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
            )}
          </FormItem>

          <FormField
            control={form.control}
            name="photo"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Cover Photo</FormLabel>
               
                <FormControl>
                  <Input
                    type="file"
                    placeholder="Upload photo"
                    accept="image/*"
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      field.onChange(file);
                    }}
                  
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {
            
          }

          <FormField
            control={form.control}
            name="documentFile"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Document File</FormLabel>
              
                <FormControl>
                  <Input
                    type="file"
                    placeholder="Upload document"
                    accept=".pdf, .doc, .docx"
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      field.onChange(file);
                    }}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {success && <p className="text-green-500">{success}</p>}
          {error && <p className="text-red-500">Error: {error}</p>}
          <Button type="submit" disabled={loading}>
            {loading
              ? initialData
                ? "Updating Blog..."
                : "Creating Blog..."
              : initialData
              ? "Update Blog"
              : "Create Blog"}
          </Button>
        </form>
      </Form>
    </div>
  );
}
