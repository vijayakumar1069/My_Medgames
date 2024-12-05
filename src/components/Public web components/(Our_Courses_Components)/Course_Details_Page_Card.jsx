"use client";
import { Button } from "@/components/ui/button";
import {
  IconCalendar,
  IconCheck,
  IconClockHour2,
  IconMapPin,
  IconStar,
  IconStarHalfFilled,
} from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

function formatDate(date) {
  const options = { day: '2-digit', month: 'short', year: 'numeric' };
  return new Date(date).toLocaleDateString('en-US', options).replace(',', '');
}
const Course_Details_Page_Card = ({ course }) => {
  const {
    _id,
    name,
    description,
    price,
    startDate,
    endDate,
    via,
    rating,
    star,
    dailyStartTime,
    img_for_course_details_page,
    dailyEndTime,
    classDays,
    key_features,
  } = course;

  const [isClient, setIsClient] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Precompute values to ensure consistency
  const fullStars = Math.floor(course.star);
  const hasHalfStar = course.star % 1 !== 0;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Prevent hydration mismatches with conditional rendering
  if (!isClient) {
    return (
      <div className="max-w-xl w-full bg-[#F4F6FC] rounded-lg overflow-hidden">
        <div className="w-full h-72 bg-gray-200 animate-pulse"></div>
        <div className="p-4">
          <h1 className="text-xl font-semibold">{course.name}</h1>
        </div>
      </div>
    );
  }


  return (
    <div
      className="relative max-w-xl w-full bg-[#F4F6FC] rounded-lg overflow-hidden group shadow-lg hover:shadow-lg transition-shadow duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      key={_id}
    >
      {/* Top Image/Preview Section */}
      <div className="relative w-full h-72">
        <Image
          src={img_for_course_details_page ==" "?null : img_for_course_details_page}
          alt="course_image"
          fill
          style={{ objectFit: "contain" }}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      {/* Card Details */}
      <div className="p-4 flex flex-col space-y-4">
        <h1 className="text-xl font-semibold text-black">{name}</h1>
        {/* <div className="flex items-center space-x-2 my-2">
          <div className="flex items-center space-x-1 text-yellow-500">
            {[...Array(fullStars)].map((_, i) => (
              <IconStar
                key={i}
                className="text-yellow-500"
                size={18}
                fill="currentColor"
              />
            ))}
            {hasHalfStar && <IconStarHalfFilled />}
            {[...Array(emptyStars)].map((_, i) => (
              <IconStar key={`empty-${i}`} className="text-gray-300" />
            ))}
          </div>
          <span>
            ({star}.0/{rating} rating)
          </span>
        </div> */}
        <p className="text-[#F61212] font-bold">$ {price}</p>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-1 w-full items-center text-sm">
          <div className="flex items-center space-x-1">
            <IconCalendar stroke={2} className="text-[#4F9F76]" />
            <span>
            {formatDate(startDate)} to {formatDate(endDate)}
            </span>
          </div>
          <div className="flex items-center space-x-1">
            <IconMapPin stroke={2} className="text-[#4F9F76]" />
            <span>{via}</span>
          </div>
        </div>
        <div className="flex items-center space-x-1 w-full text-sm">
          <IconClockHour2 stroke={2} className="text-[#4F9F76]" />
          <span>
            {dailyStartTime} to {dailyEndTime} on {classDays[0]}
          </span>
        </div>
        <div className="block lg:hidden">
      
          <Link href={`/our-courses/${_id}`}  className=" mt-4 w-fit bg-[#4F9F76] border-none px-4 py-2 rounded-md hover:bg-transparent hover:bg-white hover:text-[#4F9F76] border border-white">
           <span> View Details</span>
          </Link>
        
        </div>
      </div>

      {/* Hover Details Section */}
      <div
        className={`absolute bottom-0 left-0 lg:inline-flex hidden h-full text-white w-full bg-[#274E49] p-1 rounded-lg transform ${
          isHovered ? "translate-y-0" : "translate-y-full"
        } transition-transform duration-1500`}
      >
        <div className="flex flex-col space-y-3 p-5 w-full h-full">
          <h1 className="text-xl font-semibold">{name}</h1>
          <p className="text-white">{description}</p>
          <p className="text-white font-extrabold"> $ {price} </p>
          {/* <div className="flex items-center space-x-2 my-2">
            <div className="flex items-center space-x-1 text-yellow-500">
              {[...Array(fullStars)].map((_, i) => (
                <IconStar
                  key={i}
                  className="text-yellow-500"
                  size={18}
                  fill="currentColor"
                />
              ))}
              {hasHalfStar && <IconStarHalfFilled />}
              {[...Array(emptyStars)].map((_, i) => (
                <IconStar key={`empty-${i}`} className="text-gray-300" />
              ))}
            </div>
            <span>
              ({star}.0/{rating} rating)
            </span>
          </div> */}
          {/* <div className="grid lg:grid-cols-2 grid-cols-1 gap-2 text-sm mt-3">
            <div className="flex items-center space-x-1">
              <IconCalendar stroke={2} className="text-[#fff]" />
              <span>
                {startDate} to {endDate}
              </span>
            </div>
            <div className="flex items-center space-x-1">
              <IconMapPin stroke={2} className="text-[#fff]" />
              <span>{via}</span>
            </div>
          </div> */}
          {/* <div className="flex items-center space-x-1 text-sm mt-2">
            <IconClockHour2 stroke={2} className="text-[#fff]" />
            <span>
              {dailyStartTime} to {dailyEndTime} on {classday}
            </span>
          </div> */}
          <ul>
            {key_features.map((feature, index) => (
              <li
                key={index}
                className="flex items-center space-x-1  mt-2"
              >
                <IconCheck
                  stroke={2}
                  className="white p-1 bg-[#4F9F76] rounded-full"
                />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
          {/* <Link href={`/our-courses/${id}`} passHref>
          <Button asChild className=" mt-4 w-fit bg-[#4F9F76] border-none px-4 py-2 rounded-md hover:bg-transparent hover:bg-white hover:text-[#4F9F76] border border-white">
           <span> View Details</span>
          </Button>
          </Link> */}
           <Link href={`/our-courses/${_id}`}  className=" mt-2 w-fit bg-[#4F9F76] border-none px-4 py-2 rounded-md hover:bg-transparent hover:bg-white hover:text-[#4F9F76] border border-white">
           <span> View Details</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Course_Details_Page_Card;
