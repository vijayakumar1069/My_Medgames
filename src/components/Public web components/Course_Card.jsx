import { IconCalendar, IconClockHour2, IconMapPin } from "@tabler/icons-react";
import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

const Course_Card = ({ course }) => {
  const {
    id,
    name,
    description,
    image,
    link,
    price,
    start_date,
    end_date,
    via,
    daily_start_time,
    daily_end_time,
    claasDay,
    instructor,
    instructor_image,
  } = course;

  return (
    <div className="max-w-4xl bg-[#F4F6FC] rounded-lg p-5 flex flex-col space-y-5 text-[#4A4A4A]">
      <div className="relative w-full h-72">
        <Image
          src={image}
          alt="course_image"
          layout="fill"
          className="object-cover object-center rounded-lg"
        />
        <div className="absolute top-3 right-3 bg-[#fff] text-white px-3 py-1 rounded-full">
          <div className="flex items-center space-x-4">
            <Avatar className="w-16 h-16">
              <AvatarImage src={instructor_image} alt={name} />
              <AvatarFallback>{instructor}</AvatarFallback>
            </Avatar>
            <div className="text-lg font-semibold text-gray-700">
              {instructor}
            </div>
          </div>
        </div>
      </div>
      <h1 className="text-3xl font-semibold text-black"> {name} </h1>
      <div className="flex lg:flex-row flex-wrap flex-col lg:items-center lg:space-x-2 space-y-3 lg:space-y-0 w-full">
        <div className="flex items-center space-x-1">
          <IconCalendar stroke={2} className="text-[#4F9F76]" />
          <span>
            {" "}
            {start_date} to {end_date}{" "}
          </span>
        </div>
        <div className="flex items-center space-x-1">
          <IconMapPin stroke={2} className="text-[#4F9F76]" />
          <span> {via} </span>
        </div>
        <div className="flex items-center space-x-1">
          <IconClockHour2 stroke={2} className="text-[#4F9F76]" />
          <span>
            {" "}
            {daily_start_time} to {daily_end_time} on {claasDay}
          </span>
        </div>
      </div>
      <div className="">
        <p className=" text-sm sm:text-base "> {description}. </p>
      </div>
      <div className="flex items-center justify-between">
        <Button className="bg-[#4F9F76] text-white px-8 py-2 rounded-md hover:bg-transparent hover:text-[#4F9F76] border border-[#4F9F76]">
          Get Started
        </Button>
        <div>
          <span className="text-2xl font-semibold text-[#4F9F76]">
            $ {price} USD
          </span>
        </div>
      </div>
    </div>
  );
};

export default Course_Card;
