import React from "react";
import Link from "next/link";
import { BookOpen, ChevronRight } from "lucide-react";

const BLOG_CATEGORIES = [
  {
    name: "Medical Education",
    slug: "medical-education",
    count: 12
  },
  {
    name: "Test Preparation",
    slug: "test-preparation",
    count: 8
  },
  {
    name: "Healthcare Trends",
    slug: "healthcare-trends",
    count: 5
  },
  {
    name: "Student Success",
    slug: "student-success",
    count: 6
  },
  {
    name: "Technology in Medicine",
    slug: "technology-medicine",
    count: 4
  }
];

const BlogCategoriesComponent = () => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 space-y-4">
      <h2 className="text-xl font-semibold text-gray-800 flex items-center">
        <BookOpen className="mr-2 text-green-600" /> Blog Categories
      </h2>
      
      <div className="space-y-2">
        {BLOG_CATEGORIES.map((category) => (
          <Link
            key={category.slug}
            href={`/blogs/category/${category.slug}`}
            className="flex justify-between items-center 
              hover:bg-gray-50 p-3 rounded-lg 
              transition group"
          >
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-gray-800 group-hover:text-green-600">
                {category.name}
              </span>
            </div>
            
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-500">
                ({category.count})
              </span>
              <ChevronRight 
                className="w-5 h-5 text-gray-400 group-hover:text-green-600" 
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BlogCategoriesComponent;
