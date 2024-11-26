"use client";

import React, { useState, useEffect } from "react";
import BlogCard_For_Blog_Page from "./BlogCard_For_Blog_Page";
import BlogSidebarComponent from "./BlogSidebarComponent";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

const Blog_Home_Component = ({ blog, latestBlogs }) => {
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const searchParams = useSearchParams();
  const router = useRouter();
  const categoryParam = searchParams.get("category");
  const searchQuery = searchParams.get("search");

  // Filter blogs based on category and search parameters
  useEffect(() => {
    setIsLoading(true);
    try {
      let filtered = [...blog];
      console.log(categoryParam)

      // Apply category filter if present
      if (categoryParam) {
        filtered = filtered.filter(
          (item) => item.category.toLowerCase() === categoryParam.toLowerCase().split("-").join(" ")
        );
      }

      // Apply search filter if present
      if (searchQuery) {
        filtered = filtered.filter(
          (item) =>
            item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.description.toLowerCase().includes(searchQuery.toLowerCase())
        );
      }

      setFilteredBlogs(filtered);
    } catch (error) {
      console.error("Error filtering blogs:", error);
      setFilteredBlogs([]);
    } finally {
      setIsLoading(false);
    }
  }, [blog, categoryParam, searchQuery]);

  // Handle search functionality
  const handleSearch = (searchTerm) => {
    if (searchTerm) {
      router.push(
        `/blogs?search=${encodeURIComponent(searchTerm)}${
          categoryParam ? `&category=${categoryParam}` : ""
        }`
      );
    } else {
      router.push(
        categoryParam ? `/blogs?category=${categoryParam}` : "/blogs"
      );
    }
  };

  // Handle category selection
  const handleCategoryChange = (category) => {
    router.push(
      `/blogs?category=${encodeURIComponent(category)}${
        searchQuery ? `&search=${searchQuery}` : ""
      }`
    );
  };

  if (isLoading) {
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-500"></div>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-[#fff] py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Blog Cards Section */}
          <div className="lg:col-span-3">
            {filteredBlogs.length === 0 ? (
              <div className="text-center py-10">
                <h3 className="text-xl text-gray-600">No blogs found</h3>
                <button
                  onClick={() => router.push("/blogs")}
                  className="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                >
                  View All Blogs
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                {filteredBlogs.map((item, index) => (
                  <BlogCard_For_Blog_Page
                    key={`${item.id}-${index}`}
                    blog_data={item}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Sidebar Section */}
          <BlogSidebarComponent
            onSearch={handleSearch}
            latestBlogs={latestBlogs}
            currentCategory={categoryParam}
          />
        </div>
      </div>
    </div>
  );
};

export default Blog_Home_Component;
