import { IconCalendar, IconClockHour2 } from "@tabler/icons-react";
import Image from "next/image";
import React from "react";

const Blog_Card = ({ blog }) => {
  const { id, title, description, image, date, time } = blog;
  return (
    <div className="max-w-7xl bg-[#fff] rounded-lg font-Manrope shadow-md  flex flex-col space-y-5 ">
      <div className="relative w-full h-60">
        <Image
          src={image}
          alt="blog"
          className="object-cover object-center rounded-tr-lg rounded-tl-lg"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // Customize sizes for breakpoints
        />
      </div>
      <div className="px-3">
        <h1 className="text-[#000] text-xl font-semibold ">{title}</h1>
      </div>
      <div className="flex lg:flex-row flex-wrap flex-col lg:items-center lg:space-x-2 space-y-3 lg:space-y-0 px-3 w-full">
        <div className="flex items-center space-x-1">
          <IconCalendar stroke={2} className="text-[#4F9F76]" />
          <span>{date}</span>
        </div>

        <div className="flex items-center space-x-1">
          <IconClockHour2 stroke={2} className="text-[#4F9F76]" />
          <span> {time}</span>
        </div>
      </div>
      <div className="px-3 pb-5">
        <p className="text-[#4A4A4A] text-base font-medium ">{description}</p>
      </div>
    </div>
  );
};

export default Blog_Card;
