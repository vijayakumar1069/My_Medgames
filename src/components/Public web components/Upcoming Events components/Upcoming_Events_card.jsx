import { Button } from "@/components/ui/button";
import { IconClockHour2, IconMapPin } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Upcoming_Events_card = ({ event }) => {
  const {id, title, description, event_date,event_month, event_year, time, imageURL, via } = event;

  return (
    <div className="max-w-2xl relative w-full h-auto bg-[#F4F6FC] rounded-lg overflow-hidden flex flex-col group shadow-lg border-b-4 border-transparent hover:border-[#4F9F76] transition-all duration-500">
      {/* Image Section */}
      <div className="relative w-full h-72 group-hover:h-52 transition-all duration-500 overflow-hidden">
        <Image
          src={imageURL}
          fill
          style={{ objectFit: "cover" }}
          alt={title}
          className="transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {/* Green Overlay */}
        <div className="absolute inset-0 bg-[#4F9F76]/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

        {/* Time Badge */}
        <div className="absolute top-3 left-3 bg-[#4F9F76] text-white p-2 rounded-md z-10">
          <div className="font-medium text-xs flex items-center space-x-2">
            <IconClockHour2 />
            <p>{time}</p>
          </div>
        </div>
   
      </div>

      {/* Date Badge */}

      {/* Content Section */}
      <div className="relative flex-1 flex flex-col px-6  group-hover:mt-4 pt-5 transition-all duration-500">
      <div className="absolute flex justify-center items-center flex-col w-20 h-20 right-3 -top-10 p-5 group-hover:-top-16 bg-[#4F9F76] text-white  rounded-full  font-semibold z-20 transition-all duration-500">
     
            <span className=" text-xl font-bold ">

        {event_date}

            </span>
            <span className="text-sm">

        {event_month}
            </span>

      
      </div>
        <div className="flex-1 space-y-4 py-4">
          <h1 className="text-lg font-semibold">{title}</h1>
          <p className="text-sm text-gray-600">{description}</p>
          <div className="flex items-center space-x-3">
            <IconMapPin className="text-[#4F9F76]" />
            <p className="text-sm text-gray-600">{via}</p>
          </div>
        <div className="lg:hidden block group-hover:block  transition-opacity duration-500">
          <Link href={`/upcoming-events/${id}`}>
            <Button className="w-fit bg-[#4F9F76] text-white px-4 py-2 rounded-md hover:bg-transparent hover:text-[#4F9F76] border border-[#4F9F76]">
              Enroll Now
            </Button>
          </Link>
        </div>
        </div>

        {/* Enroll Button */}
      </div>
    </div>
  );
};

export default Upcoming_Events_card;
