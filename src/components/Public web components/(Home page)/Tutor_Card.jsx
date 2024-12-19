import Image from "next/image";
import React from "react";

const Tutor_Card = ({ tutor }) => {
  // Add null checks to prevent potential undefined errors
  const {
    _id, 
    name = 'Unknown', 
    image = '/default-image.png', 
    college = '', 
    description = ''
  } = tutor || {};

  return (
    <div
      className="max-w-md bg-white text-black rounded-2xl flex flex-col items-center justify-center"
      key={_id}
    >
      <div className="relative group">
        <div className="h-full flex flex-col">
          <div className="h-[350px] w-72 relative overflow-hidden rounded-3xl bg-gray-300">
            <Image
              src={image}
              className="h-full w-full object-cover"
              fill
              priority
              quality={75}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              alt={name}
            />
          </div>
          <div className="text-left mt-2">
            <h4 className="font-bold text-lg text-[#1A1A1A]">{name}</h4>
            <p className="mt-1 text-[#376F5F]">{description}</p>
            <p className="text-[#376F5F] mt-1">{college}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tutor_Card;
