import Image from "next/image";
import React from "react";
import Breadcrumb_Wrapper from "./Breadcrumb_Wrapper";

const Svg_Bg = () => {
  return (
    <div className="relative bg-[#E9f8F3] py-8">
      <div className="relative flex flex-col md:flex-row items-center justify-between w-full max-w-7xl mx-auto px-4 lg:px-16 h-[450px] md:h-[400px] space-y-20 md:space-y-0">
        {/* Left Image */}
        <div className="relative flex-shrink-0 w-24 h-24 md:w-40 md:h-40 lg:w-48 lg:h-48">
          <Image
            src="/green_circle.png"
            alt="Green Circle"
            className="object-center object-cover rounded-full"
            fill
            sizes="(max-width: 768px) 100px, (max-width: 1200px) 200px, 300px"
          />
        </div>

        {/* Breadcrumb Center Content */}
        <div className="flex-grow text-center">
          <Breadcrumb_Wrapper headingTextColor="text-black" />
        </div>

        {/* Right Image */}
        <div className="relative flex-shrink-0 w-32 h-16 md:w-40 md:h-20 lg:w-48 lg:h-24">
          <Image
            src="/green_wave.png"
            alt="Green Wave"
            className="object-cover"
            fill
            sizes="(max-width: 768px) 80px, (max-width: 1200px) 150px, 200px"
          />
        </div>
      </div>

      {/* Extra Design Element (Red Rectangle) */}
      <div className="absolute -top-5 right-0">
        <div className="relative w-20 h-36 md:w-20 md:h-36 lg:w-28 lg:h-44">
          <Image
            src="/red_rectangle.png"
            alt="Red Rectangle"
            className="object-cover"
            fill
            sizes="(max-width: 768px) 80px, (max-width: 1200px) 150px, 200px"
          />
        </div>
      </div>
    </div>
  );
};

export default Svg_Bg;
