import Image from "next/image";
import React from "react";

const Consulatation_percetage = ({ details }) => {

  const { percentage, description } = details;
  
  return (
    <div className="text-white max-w-3xl flex items-center gap-4">
      {/* Image with Percentage Overlay */}
      <div className="relative sm:w-32 sm:h-32 w-20 h-20">
        {
            percentage === "90%" ?(<Image
                src={"/e1.png"}
                alt="e1"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                style={{ objectFit: "cover" }}
                className="rounded-full"
              />):(
                <Image
          src={"/e2.png"}
          alt="e2"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          style={{ objectFit: "cover" }}
          className="rounded-full"
        />
              )
        }
        
        {/* Percentage Overlay */}
        <div className="absolute inset-0 flex items-center justify-center text-2xl font-semibold">
          {percentage}
        </div>
      </div>

      {/* Description Text */}
      <div className="flex-1">
        <p className="text-lg max-w-xs  text-wrap">{description}</p>
      </div>
    </div>
  );
};

export default Consulatation_percetage;
