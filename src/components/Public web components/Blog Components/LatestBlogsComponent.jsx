import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Clock, Calendar } from "lucide-react";

const LatestBlogsComponent = ({ latestBlogs }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 space-y-4">
      <h2 className="text-xl font-semibold text-gray-800">Latest Blogs</h2>
      
      <div className="space-y-4">
        {latestBlogs.map((blog) => (
          <Link 
            href={`/blogs/${blog.id}`} 
            key={blog.id}
            className="block hover:bg-gray-50 transition rounded-lg p-3"
          >
            <div className="flex items-center space-x-4">
              <div className="relative w-20 h-20 flex-shrink-0">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover rounded-md"
                />
              </div>
              
              <div className="flex-grow">
                <h3 className="text-base font-medium text-gray-800 line-clamp-2">
                  {blog.title}
                </h3>
                
                <div className="flex items-center text-sm text-gray-500 mt-1 space-x-3">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span>{blog.date}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    <span>{blog.time}</span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default LatestBlogsComponent;
