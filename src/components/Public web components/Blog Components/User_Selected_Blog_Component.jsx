"use client";

import React from "react";
import Image from "next/image";
import { Calendar } from "lucide-react";
import { formatDate } from "@/utils/formatDateFunction";
import dynamic from 'next/dynamic';
import { DocumentViewer } from "./DocumentViewer";

// Correct dynamic imports
const BlogSidebarComponent = dynamic(
  () => import('./BlogSidebarComponent'),
  {
    loading: () => <div className="animate-pulse h-full w-full bg-gray-100 rounded-lg" />,
    ssr: true
  }
);



// Main component
const User_Selected_Blog_Component = ({
  user_selected_blog,
  documentContent,
  Allcourses
}) => {
  if (!user_selected_blog) return null;

  return (
    <div className="w-full h-full flex justify-center items-center flex-col space-y-8 py-10 bg-[#fff]">
      <div className="md:w-11/12 w-full px-4">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-3 order-1 lg:order-1">
            <article className="bg-white p-6 rounded-lg shadow-md">
              <h1 className="sm:text-3xl text-xl font-bold mb-4">
                {user_selected_blog.title || "Blog Title"}
              </h1>

              <div className="flex xl:items-center xl:flex-row flex-col space-y-1 items-start text-sm text-gray-500 mt-1 xl:space-x-3 mb-4">
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-1 text-[#4F9F76]" />
                  <span>{formatDate(user_selected_blog?.postedDate)}</span>
                </div>
              </div>

              {/* Blog Image */}
              <div className="relative w-full h-96 mt-4 mb-6">
                <Image
                  src={user_selected_blog?.photo?.url}
                  fill
                  alt={user_selected_blog?.title}
                  className="object-contain object-center rounded-lg"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority
                />
              </div>

              {/* Tags */}
              <div className="flex items-center space-x-2 mb-6">
                <h3 className="font-semibold">Tags:</h3>
                <div className="flex flex-wrap">
                  {user_selected_blog?.tags?.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs mr-2"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Document Viewer */}
              <DocumentViewer documentContent={documentContent} />
            </article>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 order-2 lg:order-2">
            <BlogSidebarComponent Allcourses={Allcourses} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default User_Selected_Blog_Component;
