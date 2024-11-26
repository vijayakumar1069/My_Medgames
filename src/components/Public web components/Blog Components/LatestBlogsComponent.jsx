import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Clock, Calendar } from "lucide-react";

const LatestBlogsComponent = ({ latestBlogs }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 sm:p-6">
      <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4">
        Latest Blogs
      </h2>

      <div className="space-y-3 sm:space-y-4">
        {latestBlogs.map((blog) => (
          <Link
            href={`/blog/${blog.id}`}
            key={blog.id}
            className="block hover:bg-gray-50 transition duration-300 rounded-lg p-2 sm:p-3"
          >
            <div className="flex flex-row lg:flex-col xl:flex-row items-center gap-3 sm:gap-4">
              {/* Image Container */}
              <div className="relative w-20 h-20 md:w-28 md:h-28 xl:w-32 xl:h-32 flex-shrink-0">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover rounded-md"
                  sizes="(max-width: 640px) 80px, 
                         (max-width: 768px) 96px,
                         112px"
                  priority={false}
                  quality={75}
                />
              </div>

              {/* Content Container */}
              <div className="flex-grow min-w-0"> {/* min-w-0 prevents flex item from overflowing */}
                <h3 className="text-sm sm:text-base font-medium text-gray-800 line-clamp-2 mb-1 sm:mb-2">
                  {blog.title}
                </h3>

                {/* Date and Time Container */}
                <div className="flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-1 sm:gap-3 text-xs sm:text-sm text-gray-500">
                  <div className="flex items-center">
                    <Calendar className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                    <span className="truncate">{blog.date}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                    <span className="truncate">{blog.time}</span>
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
