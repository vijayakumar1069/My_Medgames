import { IconMapPin, IconSchool, IconStarFilled } from "@tabler/icons-react";
import Image from "next/image";
import React from "react";

const Meet_Our_Tutor_Card = ({ tutor }) => {
  const {
    id,
    name,
    graduation,
    location,
   

    image,
    college,
  
  } = tutor;
  return (
    <div className="max-w-md drop-shadow-xl h-full p-2 flex flex-col space-y-4  border-2 border-[#F4F6FC] bg-white rounded-xl" key={id}>
      <div className="relative w-full h-[250px] lg:h-[300px] rounded-xl p-6 bg-[#F4F6FC]">
        <Image
          src={image}
          alt="name"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-contain rounded-xl"
          style={{ objectFit: "contain" }}
        />
      </div>
      <div className="flex flex-col space-y-2">
        <h1 className="text-2xl font-semibold ">{name}</h1>
        <p className="text-[#4F9F76] font-medium">{graduation}</p>
      </div>
      <div className="flex justify-between space-x-2">
        <div className="flex items-center space-x-2">
          <IconSchool stroke={2} className="text-[#4F9F76]" />
          <p className="text-[#4A4A4A] text-sm">{college}</p>
        </div>
        {/* <div className="flex items-center space-x-2  text-sm">
          <IconStarFilled stroke={2} className="text-[#FF9F29]" />
          <p>
            {rating} ({reviews} reviews)
          </p>
        </div> */}
      </div>
      <div className="flex space-x-3 items-center">
        {/* <h1 className="text-base font-semibold text-wrap text-[#4F9F76]">{specialist}</h1> */}
        <div className="bg-[#4F9F76]/30 border-[#4F9F76] border-2 p-1 text-nowrap rounded-md">
          <p className="flex space-x-1 items-center">
            {" "}
            <IconMapPin stroke={2} size={20} className="text-[#4F9F76] " />
            <span className="text-[#000]  text-sm">{location}</span>
            
          </p>
        </div>
      </div>
    </div>
  );
};

export default Meet_Our_Tutor_Card;
