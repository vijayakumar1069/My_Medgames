"use client";

import React, { Suspense } from "react";
import BlogCard_For_Blog_Page from "./BlogCard_For_Blog_Page";
import BlogSidebarComponent from "./BlogSidebarComponent";
import { useRouter } from "next/navigation";
import Pagination from "../Pagination";

const Blog_Home_Component = ({ blog, Allcourses, courseTitle, pagination }) => {
  const router = useRouter();

  const handleSearch = (searchTerm, selectedFilters) => {
    const params = new URLSearchParams();

    // Add query parameters only if they exist
    if (searchTerm) {
      params.append("search", searchTerm);
    }
    if (selectedFilters && selectedFilters.length > 0) {
      params.append("tags", selectedFilters.join(","));
    }

    // Navigate to the updated URL
    router.push(`/blog?${params.toString()}`);
  };
  const handlePageChange = (page) => {
    const params = new URLSearchParams();

    // Add query parameters only if they exist
    if (pagination.search) {
      params.append("search", pagination.search);
    }
    if (pagination.tags && pagination.tags.length > 0) {
      params.append("tags", pagination.tags.join(","));
    }

    // Update page query parameter and navigate
    params.set("page", page);
    router.push(`/blog?${params.toString()}`);
  };

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="w-full min-h-screen bg-[#fff] py-10">
        <div className="lg:w-10/12 md:w-11/12 w-full mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Blog Cards Section */}
            <div className="lg:col-span-3">
              {blog.length === 0 ? (
                <div className="text-center py-10">
                  <h3 className="text-xl text-gray-600">No blogs found</h3>
                  <button
                    onClick={() => router.push("/blog")}
                    className="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                  >
                    View All Blogs
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                  {blog.map((item, index) => (
                    <BlogCard_For_Blog_Page
                      key={`${item._id}-${index}`}
                      blog_data={item}
                    />
                  ))}
                 
                </div>
              )}
              {
                blog.length != 0 && (
                  <div className="flex justify-center mt-4">
                    <Pagination
                      pagination={pagination}
                      onPageChange={handlePageChange}
                    />
                  </div>
                )
              }
               {/* <Pagination
                    pagination={pagination}
                    onPageChange={handlePageChange}
                  /> */}
            </div>

            {/* Sidebar Section */}
            <BlogSidebarComponent
              showSearchComponent={true}
              onSearch={handleSearch}
              Allcourses={Allcourses}
              courseTitle={courseTitle}
            />
          </div>
        </div>
      </div>
    </Suspense>
  );
};

export default Blog_Home_Component;
