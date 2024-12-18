// components/Public web components/(Home page)/Blog_Card.jsx
import { formatDate } from "@/utils/formatDateFunction";
import { IconCalendar, IconClockHour2, IconArrowRight } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Blog_Card = ({ blog }) => {
  if (!blog) return null;

  const { _id, title, description, postedDate, postedTime, photo } = blog;

  // Image error handling
  

  // Create optimized image URL
  const imageUrl = photo?.data ? 
    `data:${photo.mimetype};base64,${photo.data}` : 
    '/fallback-blog-image.jpg';

  return (
    <article className="group max-w-md w-full bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
      <div className="relative w-full aspect-video mt-3 overflow-hidden">
        <Image
          src={imageUrl}
          alt={title}
          fill
          priority={false}
          quality={80}
          className="object-contain object-center transition-transform duration-500 group-hover:scale-110 brightness-100 group-hover:brightness-75"
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 400px"
         
          loading="lazy"
        />
      </div>

      <div className="p-6 space-y-4">
        <h2 className="text-2xl font-bold text-gray-800 group-hover:text-[#4F9F76] transition-colors duration-300 line-clamp-2">
          {title}
        </h2>

        <div className="flex items-center space-x-4 text-gray-600 text-sm">
          {postedDate && (
            <div className="flex items-center space-x-2">
              <IconCalendar stroke={2} className="text-[#4F9F76] flex-shrink-0" />
              <span>{formatDate(postedDate)}</span>
            </div>
          )}
          {postedTime && (
            <div className="flex items-center space-x-2">
              <IconClockHour2 stroke={2} className="text-[#4F9F76] flex-shrink-0" />
              <span>{postedTime}</span>
            </div>
          )}
        </div>

        <p className="text-gray-500 text-sm line-clamp-3 group-hover:text-gray-700 transition-colors duration-300">
          {description}
        </p>

        <div className="pt-4">
          <Link
            href={`/blog/${_id}`}
            prefetch={true}
            className="inline-flex items-center space-x-2 text-[#4F9F76] hover:text-[#4F9F76]/80 transition-colors duration-300 group"
          >
            <span>Read More</span>
            <IconArrowRight className="transform transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </article>
  );
};

export default Blog_Card;
