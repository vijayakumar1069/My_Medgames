"use client";

import React, { Suspense, useState, useEffect } from "react";
import Small_Title from "./Small_Title";
import Large_Title from "./Large_Title";
import Blog_Card from "./Blog_Card";
import { getBlogsForHome } from "@/app/actions/(Admin)/blogs_function";
import ErrorBoundary from "@/app/(public)/error";

// Loading Skeleton Component
const BlogLoadingSkeleton = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
    {[1, 2, 3].map((item) => (
      <div key={item} className="animate-pulse">
        <div className="bg-gray-200 h-48 rounded-t-lg"></div>
        <div className="p-4 space-y-3">
          <div className="h-4 bg-gray-200 rounded w-3/4"></div>
          <div className="h-3 bg-gray-200 rounded w-1/2"></div>
          <div className="h-3 bg-gray-200 rounded w-full"></div>
        </div>
      </div>
    ))}
  </div>
);

// Blog Grid Component with Error Boundary
const BlogGrid = React.memo(({ blogs }) => {
  if (!blogs?.length) {
    return (
      <div className="text-center text-gray-600">
        No blogs available at the moment.
      </div>
    );
  }

  return (
    <div className="lg:w-9/12 md:w-11/12 w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 justify-items-center gap-6 p-5 md:p-0">
      {blogs.map((item) => (
        <Blog_Card key={item._id} blog={item} />
      ))}
    </div>
  );
});

BlogGrid.displayName = 'BlogGrid';

// Error Component
const ErrorDisplay = ({ message }) => (
  <div className="text-center p-6 bg-red-50 rounded-lg">
    <svg
      className="mx-auto h-12 w-12 text-red-400"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
      />
    </svg>
    <h3 className="mt-2 text-sm font-medium text-red-800">Error Loading Blogs</h3>
    <p className="mt-1 text-sm text-red-600">{message}</p>
    <button
      onClick={() => window.location.reload()}
      className="mt-4 text-sm text-[#4F9F76] hover:text-[#4F9F76]/80"
    >
      Try Again
    </button>
  </div>
);

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const response = await getBlogsForHome();

        if (!response || response.success === false) {
          throw new Error(response?.message || 'Failed to load blogs');
        }

        setBlogs(response.blogs);
      } catch (err) {
        console.error('Error fetching blogs:', err);
        setError(err.message || 'An unexpected error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <section className="w-full h-full bg-[#F4F6FC] flex justify-center items-center flex-col space-y-8 py-10">
      <Small_Title title="Blogs & News" />
      <Large_Title title="Welcome to Our Blogs" />
      
      <div className="max-w-4xl mx-auto">
        <p className="text-[#4A4A4A] text-center px-3">
          Explore our latest articles, insights, and tips. Whether you&apos;re looking
          for health advice, tech innovations, or lifestyle tips, we have
          something for everyone. Dive into our diverse range of topics and
          enrich your knowledge!
        </p>
      </div>

      <div className="w-full flex justify-center">
        {loading ? (
          <BlogLoadingSkeleton />
        ) : error ? (
          <ErrorDisplay message={error} />
        ) : (
          <Suspense fallback={<BlogLoadingSkeleton />}>
            <BlogGrid blogs={blogs} />
          </Suspense>
        )}
      </div>
    </section>
  );
};

// Add error boundary wrapper
const BlogsWithErrorBoundary = () => (
<Suspense fallback={<BlogLoadingSkeleton />}>

<Blogs />
</Suspense>

);

export default BlogsWithErrorBoundary;
