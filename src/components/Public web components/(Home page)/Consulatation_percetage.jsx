import Image from "next/image";
import React from "react";

const Consulatation_percetage = ({ details }) => {
  const { percentage, description } = details;
  const src = percentage === "90%" ? "/e1.png" : "/e2.png";

  return (
    <div className="text-white flex items-center gap-4 ">
      {/* Image */}
      <div className="relative w-24  h-24  sm:w-32 sm:h-32">
        <Image
          src={src}
          alt="percentage"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="rounded-full"
        />
        <div className="absolute inset-0 flex items-center  justify-center text-xl md:text-2xl font-semibold">
          {percentage}
        </div>
      </div>
      {/* Description */}
      <p className="text-sm sm:text-base px-2 ">{description}</p>
    </div>
  );
};

export default Consulatation_percetage;
