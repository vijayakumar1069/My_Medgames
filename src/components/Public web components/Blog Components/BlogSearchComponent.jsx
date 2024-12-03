"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
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
import { Search } from "lucide-react";

// Validation Schema
const searchSchema = z.object({
  searchTerm: z.string()
    .min(2, { message: "Search term must be at least 2 characters" })
    .max(50, { message: "Search term must be less than 50 characters" })
});

const BlogSearchComponent = ({ onSearch }) => {
  // Initialize form with zod resolver
  const form = useForm({
    resolver: zodResolver(searchSchema),
    defaultValues: {
      searchTerm: "",
    },
  });

  // Submit handler
  const onSubmit = (data) => {

    onSearch(data.searchTerm);
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6 space-y-4">
      <h2 className="text-xl font-semibold text-gray-800 flex items-center">
        <Search className="mr-2 text-green-600" /> Search Blogs
      </h2>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="searchTerm"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-700">Search Keyword</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter search term..."
                    {...field}
                    className="w-full"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button 
            type="submit" 
            className="w-full bg-green-600 hover:bg-green-700"
          >
            Search Blogs
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default BlogSearchComponent;
