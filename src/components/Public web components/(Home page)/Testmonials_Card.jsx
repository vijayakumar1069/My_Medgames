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
      <div className="relative text-gray-600 text-sm sm:text-base">
        <svg
          className="inline-block mr-2 text-[#4F9F76] w-6 h-6 align-top"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 15 15"
          fill="currentColor"
        >
          <path
            d="M9.42503 3.44136C10.0561 3.23654 10.7837 3.2402 11.3792 3.54623C12.7532 4.25224 13.3477 6.07191 12.7946 8C12.5465 8.8649 12.1102 9.70472 11.1861 10.5524C10.262 11.4 8.98034 11.9 8.38571 11.9C8.17269 11.9 8 11.7321 8 11.525C8 11.3179 8.17644 11.15 8.38571 11.15C9.06497 11.15 9.67189 10.7804 10.3906 10.236C10.9406 9.8193 11.3701 9.28633 11.608 8.82191C12.0628 7.93367 12.0782 6.68174 11.3433 6.34901C10.9904 6.73455 10.5295 6.95946 9.97725 6.95946C8.7773 6.95946 8.0701 5.99412 8.10051 5.12009C8.12957 4.28474 8.66032 3.68954 9.42503 3.44136ZM3.42503 3.44136C4.05614 3.23654 4.78366 3.2402 5.37923 3.54623C6.7532 4.25224 7.34766 6.07191 6.79462 8C6.54654 8.8649 6.11019 9.70472 5.1861 10.5524C4.26201 11.4 2.98034 11.9 2.38571 11.9C2.17269 11.9 2 11.7321 2 11.525C2 11.3179 2.17644 11.15 2.38571 11.15C3.06497 11.15 3.67189 10.7804 4.39058 10.236C4.94065 9.8193 5.37014 9.28633 5.60797 8.82191C6.06282 7.93367 6.07821 6.68174 5.3433 6.34901C4.99037 6.73455 4.52948 6.95946 3.97725 6.95946C2.7773 6.95946 2.0701 5.99412 2.10051 5.12009C2.12957 4.28474 2.66032 3.68954 3.42503 3.44136Z"
            fill="currentColor"
          ></path>
        </svg>

        <p className="inline text-sm sm:text-base  tracking-normal ">{review_content}</p>

        <svg
          className="inline-block ml-2 text-[#4F9F76] w-6 h-6 align-bottom"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 15 15"
          fill="currentColor"
        >
          <path
            d="M9.42503 3.44136C10.0561 3.23654 10.7837 3.2402 11.3792 3.54623C12.7532 4.25224 13.3477 6.07191 12.7946 8C12.5465 8.8649 12.1102 9.70472 11.1861 10.5524C10.262 11.4 8.98034 11.9 8.38571 11.9C8.17269 11.9 8 11.7321 8 11.525C8 11.3179 8.17644 11.15 8.38571 11.15C9.06497 11.15 9.67189 10.7804 10.3906 10.236C10.9406 9.8193 11.3701 9.28633 11.608 8.82191C12.0628 7.93367 12.0782 6.68174 11.3433 6.34901C10.9904 6.73455 10.5295 6.95946 9.97725 6.95946C8.7773 6.95946 8.0701 5.99412 8.10051 5.12009C8.12957 4.28474 8.66032 3.68954 9.42503 3.44136ZM3.42503 3.44136C4.05614 3.23654 4.78366 3.2402 5.37923 3.54623C6.7532 4.25224 7.34766 6.07191 6.79462 8C6.54654 8.8649 6.11019 9.70472 5.1861 10.5524C4.26201 11.4 2.98034 11.9 2.38571 11.9C2.17269 11.9 2 11.7321 2 11.525C2 11.3179 2.17644 11.15 2.38571 11.15C3.06497 11.15 3.67189 10.7804 4.39058 10.236C4.94065 9.8193 5.37014 9.28633 5.60797 8.82191C6.06282 7.93367 6.07821 6.68174 5.3433 6.34901C4.99037 6.73455 4.52948 6.95946 3.97725 6.95946C2.7773 6.95946 2.0701 5.99412 2.10051 5.12009C2.12957 4.28474 2.66032 3.68954 3.42503 3.44136Z"
            fill="currentColor"
          ></path>
        </svg>
      </div>

      <div className="h-[0.5px] bg-gray-100"></div>
      <div className="w-full flex justify-between items-center">
        <div className="flex space-x-2 items-center">
          {/* <Image
            src="/Vector.png"
            width={17}     // Replace with desired width
            height={17}   // Ensures height adjusts to maintain aspect ratio
            alt="Vector Image"
            // style={{ width: "auto", height: "100%" }} // Adjust styling to enforce the aspect ratio
          /> */}
          <IconBookmark className="text-[#4F9F76]" size={24} />
          <p className="">Dr. {name}</p>
        </div>
        <div className="flex items-center space-x-1 text-yellow-500">
          {[...Array(fullStars)].map((_, i) => (
            <IconStar className="text-yellow-500" fill="currentColor" key={i} />
          ))}
          {hasHalfStar && <IconStarHalfFilled />}
          {[...Array(emptyStars)].map((_, i) => (
            <IconStar key={`empty-${i}`} className="text-gray-300" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsCard;
