"use client";
import React, { useState } from "react";
import BlogSidebarComponent from "./BlogSidebarComponent";
import { blogService } from "@/utils/blogService";
import { Calendar, Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import BlogDetailsRenderer from "./BlogDetailsRenderer";
import { formatDate } from "@/utils/formatDateFunction";
import { DocumentViewer } from "./DocumentViewer";
import { Button } from "@/components/ui/button";


const User_Selected_Blog_Component = ({
  user_selected_blog,
  documentContent,
  Allcourses
}) => {



  return (
    <div className="w-full h-full flex justify-center items-center flex-col space-y-8  py-10 bg-[#fff]">
      <div className="md:w-11/12 w-full px-4">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-3 order-1 lg:order-1">
            <div className="bg-white p-6 rounded-lg shadow-md">
              {/* <p className="text-sm text-gray-600 mb-2">
                {user_selected_blog?.category || "Category"}
              </p> */}

              <h1 className="sm:text-3xl text-xl font-bold mb-4">
                {user_selected_blog?.title || "Blog Title"}
              </h1>

              <div className="flex xl:items-center xl:flex-row flex-col space-y-1 items-start text-sm text-gray-500 mt-1 xl:space-x-3 mb-4">
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-1 text-[#4F9F76]" />
                  <span>{formatDate(user_selected_blog?.postedDate)}</span>
                </div>
                {/* <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-1 text-[#4F9F76]" />
                  <span>{user_selected_blog?.postedTime}</span>
                </div> */}
              </div>

              <div className="relative w-full h-96 mt-4 mb-6">
                <Image
                  src={`data:${user_selected_blog.photo.mimetype};base64,${user_selected_blog.photo.data}`}
                  fill
                  alt={user_selected_blog?.title}
                  className="object-contain object-center rounded-lg"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>

              <div className="flex items-center space-x-2 mb-6">
                <h3 className="font-semibold">Tags:</h3>
                <div className="flex flex-wrap">
                  {user_selected_blog?.tags?.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs mr-2 "
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
         
              <DocumentViewer documentContent={documentContent} />

              {/* <BlogDetailsRenderer blogDetails={user_selected_blog.blog_details} /> */}
            </div>
            <div className=" mt-2 flex justify-center items-center">
              <Link href={"/blog"}>
              <Button variant="outline" className="w-fit bg-[#4F9F76] hover:bg-[#3F7F5B] hover:text-white text-white">
                View More Blogs
              </Button>
              
              </Link>
            </div>
          </div>

          <BlogSidebarComponent
            // onSearch={handleSearch}
            Allcourses={Allcourses}
          />
        </div>
      </div>
    </div>
  );
};

export default User_Selected_Blog_Component;
