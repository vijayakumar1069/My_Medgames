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
import React from "react";

const Course_Details_Page_Card = ({ course }) => {
  const {
    name,
    description,
    price,
    start_date,
    end_date,
    via,
    rating,
    star,
    daily_start_time,
    details_image,
    daily_end_time,
    claasDay,
    key_features,
  } = course;

  const fullStars = Math.floor(star);
  const hasHalfStar = star % 1 !== 0;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="relative max-w-xl w-full bg-[#F4F6FC] rounded-lg overflow-hidden group shadow-md hover:shadow-lg transition-shadow duration-300">
      {/* Top Image/Preview Section */}
      <div className="relative w-full h-72">
        <Image
          src={details_image}
          alt="course_image"
          fill
          className="object-cover object-center "
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // Customize sizes for breakpoints
        />
      </div>

      {/* Card Details */}
      <div className="p-4 flex flex-col space-y-4">
        <h1 className="text-xl font-semibold text-black">{name}</h1>
        <div className="flex items-center space-x-2 my-2">
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
        </div>
        <p className="text-[#F61212] font-bold">$ {price}</p>
        <div className="grid lg:grid-cols-2  grid-cols-1 gap-1 w-full items-center text-sm">
          {/* Start Date and End Date */}
          <div className="flex items-center space-x-1">
            <IconCalendar stroke={2} className="text-[#4F9F76]" />
            <span>
              {start_date} to {end_date}
            </span>
          </div>

          {/* Location */}
          <div className="flex items-center space-x-1">
            <IconMapPin stroke={2} className="text-[#4F9F76]" />
            <span>{via}</span>
          </div>

          {/* Time and Class Days */}
        </div>
        <div className="flex items-center space-x-1 w-full text-sm">
          <IconClockHour2 stroke={2} className="text-[#4F9F76]" />
          <span>
            {daily_start_time} to {daily_end_time} on {claasDay}
          </span>
        </div>
      </div>

      {/* Hover Details Section */}
      <div className="absolute bottom-0 left-0 h-full text-white w-full bg-[#274E49]  p-5 rounded-lg transform translate-y-full group-hover:translate-y-0 transition-transform duration-1500">
        
        <div className="flex flex-col space-y-3 p-6 w-full h-full">
          <h1 className="text-xl font-semibold">{name}</h1>
       
          <p className="text-[#fff] line-clamp-1">{description}</p>
          <p> $ {price} </p>
          <div className="flex items-center space-x-2 my-2">
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
          </div>
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-2 text-sm mt-3">
            <div className="flex items-center space-x-1">
              <IconCalendar stroke={2} className="text-[#fff]" />
              <span>
                {start_date} to {end_date}
              </span>
            </div>
            <div className="flex items-center space-x-1">
              <IconMapPin stroke={2} className="text-[#fff]" />
              <span>{via}</span>
            </div>
          </div>
          <div className="flex items-center space-x-1 text-sm mt-2">
            <IconClockHour2 stroke={2} className="text-[#fff]" />
            <span>
              {daily_start_time} to {daily_end_time} on {claasDay}
            </span>
          </div>
          <div className="">
            <ul>
              {key_features.map((feature, index) => (
                <li
                  key={index}
                  className="flex items-center space-x-1 text-sm mt-2"
                >
                  <IconCheck
                    stroke={2}
                    className="text-[#fff] p-1 bg-[#4F9F76] rounded-full"
                  />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          <Button className="bg-transparent mt-4 w-fit text-[#fff] px-4 py-2 rounded-md hover:bg-transparent hover:bg-white hover:text-[#4F9F76] border border-white ">
            <Link href={`/our-courses/${name}`}> Enroll Now</Link>{" "}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Course_Details_Page_Card;
