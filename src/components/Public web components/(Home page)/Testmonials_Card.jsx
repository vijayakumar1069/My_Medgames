import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
import { IconBookmark, IconStar, IconStarHalfFilled } from "@tabler/icons-react";

const TestimonialsCard = ({ review }) => {
  const { name, review_content, image, rating } = review;

  // Calculate the number of full, half, and empty stars
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="max-w-3xl bg-white font-Manrope rounded-2xl shadow-md flex flex-col space-y-5 p-10">
      {/* User Info */}
      <div className="flex items-center space-x-4">
        <Avatar className="w-16 h-16">
          <AvatarImage src={image} />
          <AvatarFallback>{name[0]}</AvatarFallback>
        </Avatar>
        <div className="text-lg font-semibold text-gray-700">{name}</div>
      </div>

      {/* Testimonial Text with Quotes */}
      <div className="relative text-gray-600 ">
    

        <p className=""> &quot;{review_content} &quot;</p>

    
      </div>

      <div className="h-[1px] bg-gray-200"></div>
      <div className="w-full flex justify-between items-center">
        <div className="flex space-x-1 items-center">
     
          <IconBookmark className="text-[#4F9F76]" size={24} />
          <p className="">Dr. {name}</p>
        </div>
        <div className="flex items-center space-x-1 text-yellow-500">
          {[...Array(fullStars)].map((_, i) => (
            <IconStar className="text-yellow-500 " fill="currentColor" key={i} size={16} />
          ))}
          {hasHalfStar && <IconStarHalfFilled size={16} />}
          {[...Array(emptyStars)].map((_, i) => (
            <IconStar key={`empty-${i}`} className="text-gray-300" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsCard;
