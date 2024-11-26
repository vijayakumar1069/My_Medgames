

import Image from "next/image";
import Link from "next/link";

import { IconCalendar } from "@tabler/icons-react";

const BlogCard_For_Blog_Page = ({ blog_data }) => {
  return (
    <div
     
      className="bg-white rounded-xl shadow-md max-w-md overflow-hidden hover:scale-105"
      key={blog_data.id}
    >
      <div className="relative h-60 w-full">
        <Image
          src={blog_data.image}
          alt={blog_data.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 100vw"
          className="object-cover"
        />
      </div>

      <div className="p-6">
        <div className="flex items-center mb-2">
          <span className=" text-gray-500">{blog_data.category}</span>
        </div>
        <h2 className="text-xl font-semibold mb-3 text-black">
          {blog_data.title}
        </h2>
        <div className="flex justify-start items-center  mb-2">
          <div className=" text-gray-500 flex space-x-2 items-center">
            <span>

            <IconCalendar stroke={2} className="text-[#4F9F76]" />
            </span>
            <span>

            {blog_data.date}
            </span>
          </div>
        </div>

        <p className="text-gray-600 mb-4">{blog_data.description}</p>

        <Link
          href={`/blog/${blog_data.id}`}
          className="inline-block bg-[#4F9F76] text-white px-4 py-2 rounded-md hover:bg-[#274E49] transition"
        >
          Read More
        </Link>
      </div>
    </div>
  );
};

export default BlogCard_For_Blog_Page;
