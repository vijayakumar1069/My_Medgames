import { base64ToImageSrc } from "@/lib/convertbase64";
import { formatDate } from "@/utils/formatDateFunction";
import {
  IconCalendar,
  IconClockHour2,
  IconArrowRight,
} from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Blog_Card = ({ blog }) => {
  const { _id, title, description, postedDate, postedTime, slug } = blog;

  return (
    <div className="group max-w-md w-full bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
      {/* Image Container */}
      <div className="relative w-full aspect-video mt-3 overflow-hidden">
        <Image
          src={`data:${blog.photo.mimetype};base64,${blog.photo.data}`}
          alt={title}
          fill
          priority
          quality={90}
          className="object-contain object-center transition-transform duration-500 group-hover:scale-110 brightness-100 group-hover:brightness-75"
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 400px"
        />
      </div>

      {/* Blog Content */}
      <div className="p-6 space-y-4">
        {/* Blog Title */}
        <h2 className="text-2xl font-bold text-gray-800 group-hover:text-[#4F9F76] transition-colors duration-300 line-clamp-2">
          {title}
        </h2>

        {/* Blog Meta Information */}
        <div className="flex items-center space-x-4 text-gray-600 text-sm">
          <div className="flex items-center space-x-2">
            <IconCalendar stroke={2} className="text-[#4F9F76] flex-shrink-0" />
            <span>{formatDate(postedDate)}</span>
          </div>
          <div className="flex items-center space-x-2">
            <IconClockHour2
              stroke={2}
              className="text-[#4F9F76] flex-shrink-0"
            />
            <span>{postedTime}</span>
          </div>
        </div>

        {/* Blog Description */}
        <p className="text-gray-500 text-sm line-clamp-3 group-hover:text-gray-700 transition-colors duration-300">
          {description}
        </p>

        {/* Read More Button */}
        <div className="pt-4">
          <Link
            href={`/blog/${_id}`}
            className="inline-flex items-center space-x-2 text-[#4F9F76] hover:text-[#4F9F76]/80 transition-colors duration-300 group"
          >
            <span>Read More</span>
            <IconArrowRight className="transform transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Blog_Card;
