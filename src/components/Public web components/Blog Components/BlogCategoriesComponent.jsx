// BlogCategoriesComponent.jsx
import React, { useMemo } from "react";
import Link from "next/link";
import { BookOpen, ChevronRight } from "lucide-react";
import { blogService } from "@/utils/blogService";

const BlogCategoriesComponent = ({ currentCategory }) => {
  const categories = useMemo(() => {
    try {
      const cat = blogService.getBlogCategories();
    
      return cat;
    } catch (error) {
      console.error('Error fetching categories:', error);
      return [];
    }
  }, []);

  return (
    <div className="bg-white shadow-md rounded-lg p-6 space-y-4">
      <h2 className="text-xl font-semibold text-gray-800 flex items-center">
        <BookOpen className="mr-2 text-green-600" /> Blog Categories
      </h2>

      {categories.length === 0 ? (
        <p className="text-gray-500 text-center">No categories available</p>
      ) : (
        <div className="space-y-2">
          <Link
            href="/blog"
            className={`flex justify-between items-center
              hover:bg-gray-50 p-3 rounded-lg transition group
              ${!currentCategory ? 'bg-green-50' : ''}`}
          >
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className={`${!currentCategory ? 'text-green-600' : 'text-gray-800'} group-hover:text-green-600`}>
                All Categories
              </span>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-green-600
              transition-transform group-hover:translate-x-1" />
          </Link>

          {categories.map((category) => (
            <Link
              key={category.slug}
              href={`/blog?category=${category.slug}`}
              className={`flex justify-between items-center
                hover:bg-gray-50 p-3 rounded-lg transition group
                ${currentCategory === category.slug ? 'bg-green-50' : ''}`}
            >
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className={`${currentCategory === category.slug ? 'text-green-600' : 'text-gray-800'} group-hover:text-green-600`}>
                  {category.name}
                </span>
              </div>

              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-500">
                  ({category.count})
                </span>
                <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-green-600
                  transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default BlogCategoriesComponent;
