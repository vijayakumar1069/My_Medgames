import { IconCalendar, IconClockHour2, IconMapPin } from "@tabler/icons-react";
import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Course_Card = ({ course }) => {
  const { id, name, description, image, price, start_date, end_date, via, daily_start_time, daily_end_time, classDay } = course;

  return (
    <div className="group max-w-3xl w-full bg-[#F4F6FC] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
      <div className="relative w-full aspect-video overflow-hidden">
        <Image src={image} alt={name} fill priority quality={90} className="object-cover object-center transition-transform duration-500 group-hover:scale-110" sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 400px" />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300" />
      </div>
      <div className="p-6 space-y-4">
        <h2 className="text-2xl font-bold text-gray-800 group-hover:text-[#4F9F76] transition-colors duration-300">{name}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-gray-600 md:text-base text-sm">
          <div className="flex items-center space-x-2">
            <IconCalendar stroke={2} className="text-[#4F9F76] flex-shrink-0" />
            <span>{start_date} to {end_date}</span>
          </div>
          <div className="flex items-center space-x-2">
            <IconMapPin stroke={2} className="text-[#4F9F76] flex-shrink-0" />
            <span>{via}</span>
          </div>
          <div className="flex items-center space-x-2">
            <IconClockHour2 stroke={2} className="text-[#4F9F76] flex-shrink-0" />
            <span>{daily_start_time} - {daily_end_time} {classDay}</span>
          </div>
        </div>
        <p className="text-gray-500 md:text-base text-sm line-clamp-5 group-hover:text-gray-700 transition-colors duration-300">{description}</p>
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <Link href={`/our-courses/${id}`}>
          <Button className="bg-[#4F9F76] text-white hover:bg-[#4F9F76]/90 transition-colors duration-300">Get Started</Button>
          </Link>
          <span className="text-2xl font-bold text-[#4F9F76] group-hover:text-opacity-80 transition-colors duration-300">${price} USD</span>
        </div>
      </div>
    </div>
  );
};

export default Course_Card;
