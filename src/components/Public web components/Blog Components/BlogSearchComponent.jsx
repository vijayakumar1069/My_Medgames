"use client";

import React from "react";
import { useForm, Controller } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { SearchIcon } from "lucide-react";

// Validation Schema
const searchSchema = z.object({
  searchTerm: z.string().optional(),
  filters: z.record(z.boolean())
}).refine(
  (data) => {
    // Check if either search term is not empty or at least one filter is selected
    return data.searchTerm?.trim() !== "" || 
           Object.values(data.filters).some(Boolean);
  },
  { 
    message: "Enter a search term or select at least one filter" 
  }
);

const BlogSearchComponent = ({ onSearch, courseTitle }) => {
  // Initialize form
  const form = useForm({
    resolver: zodResolver(searchSchema),
    defaultValues: {
      searchTerm: "",
      filters: courseTitle.reduce((acc, filter) => {
        acc[filter] = false;
        return acc;
      }, {})
    }
  });

  // Submit handler
  const onSubmit = (data) => {
    // Extract selected filters
    const selectedFilters = Object.entries(data.filters)
      .filter(([_, value]) => value)
      .map(([key]) => key);
  
    // Validate before proceeding
    if (data.searchTerm?.trim() === "" && selectedFilters.length === 0) {
      form.setError("_root", {
        type: "manual",
        message: "Enter a search term or select at least one filter",
      });
      return;
    }
  
    // Clear any previous root errors
    form.clearErrors("_root");
  
    // Perform search
    if (onSearch) {
      onSearch(data.searchTerm, selectedFilters);
  
      // Reset the form to its initial state
      form.reset({
        searchTerm: "",
        filters: courseTitle.reduce((acc, filter) => {
          acc[filter] = false;
          return acc;
        }, {}),
      });
    }
  };
  
  // Handle search icon click
  const handleSearchClick = () => {
    // Trigger form validation and submission
    form.handleSubmit(onSubmit)();
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6 space-y-4">
      <div className="flex items-center space-x-2 mb-4">
        <SearchIcon className="text-green-600" />
        <h2 className="text-xl font-semibold text-gray-800">Search Blogs</h2>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          {/* Search Input */}
          <FormField
            control={form.control}
            name="searchTerm"
            render={({ field }) => (
              <FormItem>
                {/* <FormLabel>Search Term</FormLabel> */}
                <FormControl>
                  <div className="relative">
                    <Input
                      placeholder="Enter search term or tags"
                      {...field}
                      className="w-full rounded-none border-b-[1px] border-gray-200 bg-transparent py-3 pl-2 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                    />
                    
                    <SearchIcon
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground text-[#4F9F76] cursor-pointer hover:text-primary"
                      onClick={handleSearchClick}
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Filters Section */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-gray-700">Filters</h3>
            <div className="grid grid-cols-1  gap-2">
              {courseTitle.map((filter) => (
                <FormField
                  key={filter}
                  control={form.control}
                  name={`filters.${filter}`}
                  render={({ field: { onChange, value } }) => (
                    <FormItem className="flex flex-row items-center space-x-2 space-y-0">
                      <FormControl>
                        <Checkbox
                          checked={value}
                          onCheckedChange={onChange}
                        />
                      </FormControl>
                      <FormLabel className="text-sm font-normal cursor-pointer">
                        {filter}
                      </FormLabel>
                    </FormItem>
                  )}
                />
              ))}
            </div>
           
            {/* Global Form Error */}
            {form.formState.errors._root && (
              <p className="text-destructive text-sm mt-2">
                {form.formState.errors._root.message}
              </p>
            )}
          </div>
        </form>
      </Form>
    </div>
  );
};

export default BlogSearchComponent;
