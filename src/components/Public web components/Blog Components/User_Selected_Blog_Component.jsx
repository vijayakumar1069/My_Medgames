"use client";
import React, { useState } from "react";
import BlogSidebarComponent from "./BlogSidebarComponent";
import { blogService } from "@/utils/blogService";
import { Calendar, Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import BlogDetailsRenderer from "./BlogDetailsRenderer";

const RenderBlogDetail = ({ detail }) => {
  return (
    <div className="mb-6">
      <h2 className="text-2xl font-bold mb-3">{detail.heading}</h2>

      {/* Render basic content */}
      {detail.content && <p className="mb-4">{detail.content}</p>}

      {/* Render subpoints */}
      {detail.subpoints && (
        <ul className="list-disc pl-6 mb-4">
          {detail.subpoints.map((point, index) => (
            <li
              key={index}
              dangerouslySetInnerHTML={{ __html: point }}
              className="mb-2"
            />
          ))}
        </ul>
      )}

      {/* Render links */}
      {detail.links && (
        <div className="mb-4">
          <h3 className="font-semibold mb-2">Useful Resources:</h3>
          {detail.links.map((link, index) => (
            <Link
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline block"
            >
              {link.text}
            </Link>
          ))}
        </div>
      )}

      {/* Render highlighted content */}
      {detail.highlightedContent && (
        <div
          className="bg-yellow-50 border-l-4 border-yellow-500 p-3 mb-4"
          dangerouslySetInnerHTML={{ __html: detail.highlightedContent }}
        />
      )}

      {/* Render research types */}
      {detail.researchTypes && (
        <div className="flex flex-wrap gap-2 mb-4">
          {detail.researchTypes.map((type, index) => (
            <span
              key={index}
              className="bg-gray-100 px-3 py-1 rounded-full text-sm"
            >
              {type}
            </span>
          ))}
        </div>
      )}

      {/* Render important notes */}
      {detail.importantNotes && (
        <ul className="space-y-2 mb-4">
          {detail.importantNotes.map((note, index) => (
            <li
              key={index}
              dangerouslySetInnerHTML={{ __html: note }}
              className="text-gray-700"
            />
          ))}
        </ul>
      )}

      {/* Render key tips */}
      {detail.keyTips && (
        <div>
          <h3 className="font-semibold mb-2">Key Tips:</h3>
          <ol className="list-decimal pl-6">
            {detail.keyTips.map((tip, index) => (
              <li key={index} className="mb-2">
                {tip}
              </li>
            ))}
          </ol>
        </div>
      )}
    </div>
  );
};

const User_Selected_Blog_Component = ({
  user_selected_blog,
  latestBlogs: initialLatestBlogs,
}) => {
  const [latestBlogs, setLatestBlogs] = useState(initialLatestBlogs);
  const [filteredBlogs, setFilteredBlogs] = useState(initialLatestBlogs);

  const handleSearch = (searchTerm) => {
    const allBlogs = blogService.getAllBlogs();
    const filtered = allBlogs.filter(
      (blog) =>
        blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        blog.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFilteredBlogs(filtered);
    setLatestBlogs(filtered.slice(0, 3));
  };

  return (
    <div className="w-full h-full flex justify-center items-center flex-col space-y-8  py-10 bg-[#fff]">
      <div className="md:w-11/12 w-full px-4">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-3 order-1 lg:order-1">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-sm text-gray-600 mb-2">
                {user_selected_blog?.category || "Category"}
              </p>

              <h1 className="sm:text-3xl text-xl font-bold mb-4">
                {user_selected_blog?.title || "Blog Title"}
              </h1>

              <div className="flex xl:items-center xl:flex-row flex-col space-y-1 items-start text-sm text-gray-500 mt-1 xl:space-x-3 mb-4">
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-1 text-[#4F9F76]" />
                  <span>{user_selected_blog?.date}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-1 text-[#4F9F76]" />
                  <span>{user_selected_blog?.time}</span>
                </div>
              </div>

              <div className="relative w-full h-96 mt-4 mb-6">
                <Image
                  src={user_selected_blog?.image}
                  fill
                  alt={user_selected_blog?.title}
                  className="object-cover object-center rounded-lg"
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
              <div className="flex flex-col space-y-5">
                <div className="bg-[#4A4A4A]/20 p-2">
                  <h1 className="text-xl font-bold">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. In
                    non quae ab maiores autem et.
                  </h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Vitae eum magnam at maxime accusamus, voluptate modi unde
                    sed perferendis ratione animi rem obcaecati odit pariatur
                    laboriosam est, fuga aspernatur! Quam necessitatibus at
                    mollitia voluptate laboriosam voluptates eos et ipsa hic.
                  </p>
                </div>
                <div className="bg-[#1A1A1A]/40 p-2">
                  <h1 className="text-xl font-bold">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. In
                    non quae ab maiores autem et.
                  </h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Vitae eum magnam at maxime accusamus, voluptate modi unde
                    sed perferendis ratione animi rem obcaecati odit pariatur
                    laboriosam est, fuga aspernatur! Quam necessitatibus at
                    mollitia voluptate laboriosam voluptates eos et ipsa hic.
                  </p>
                </div>
                <div className="bg-[#E1EBE2] p-2">
                  <h1 className="text-xl font-bold">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. In
                    non quae ab maiores autem et.
                  </h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Vitae eum magnam at maxime accusamus, voluptate modi unde
                    sed perferendis ratione animi rem obcaecati odit pariatur
                    laboriosam est, fuga aspernatur! Quam necessitatibus at
                    mollitia voluptate laboriosam voluptates eos et ipsa hic.
                  </p>
                </div>
                <div className="bg-[#4F9F76]/30 p-2">
                  <h1 className="text-xl font-bold">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. In
                    non quae ab maiores autem et.
                  </h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Vitae eum magnam at maxime accusamus, voluptate modi unde
                    sed perferendis ratione animi rem obcaecati odit pariatur
                    laboriosam est, fuga aspernatur! Quam necessitatibus at
                    mollitia voluptate laboriosam voluptates eos et ipsa hic.
                  </p>
                </div>
              </div>

              {/* <BlogDetailsRenderer blogDetails={user_selected_blog.blog_details} /> */}
            </div>
          </div>

          <BlogSidebarComponent
            onSearch={handleSearch}
            latestBlogs={latestBlogs}
          />
        </div>
      </div>
    </div>
  );
};

export default User_Selected_Blog_Component;
