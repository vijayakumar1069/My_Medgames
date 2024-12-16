import Image from "next/image";
import React from "react";
import HeroCallbackForm from "./HeroCallbackForm";
import Rating_And_Video from "./Rating_And_Video";

const HeroSection = () => {
  return (
    <div className="w-full bg-[#4F9F76]/80 h-full lg:h-[550px] relative py-3 md:py-10">
      <div className="absolute inset-0 hidden lg:block">
        <Image
          src={"/BG1.png"}
          alt="hero background"
          className="object-cover object-center"
          fill
          priority
          quality={100}
         sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 400px"
        />
      </div>
      <div className="absolute inset-0 lg:hidden">
        <Image
          src={"/BG2.png"}
          alt="hero background"
          className="object-cover object-center"
          fill
          priority
          quality={100}
         sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 400px"
        />
      </div>

      <div className="flex flex-col lg:flex-row justify-center items-center relative lg:space-x-3 z-10 h-full">
        {/* Left Side */}
        <div className="flex-1 flex flex-col justify-center relative items-end lg:justify-end lg:items-end  py-10 px-5 lg:px-0  xl:px-0 ">
          <div className="max-w-lg flex-col space-y-5">
            <h1 className="text-2xl md:text-4xl tracking-wide  font-bold text-white text-center lg:text-left ">
             Your Path From Premed to MD 
            </h1>
            <p className="text-white text-center lg:text-left ">
            Achieve your goals with personalized one-on-one and small group sessions with expert medical students.
            </p>
            <HeroCallbackForm />
            <div className="block 2xl:hidden">
              <Rating_And_Video />
            </div>
          </div>
        </div>

        {/* Arrow */}
        <div className="relative w-40 aspect-square h-28 hidden 2xl:block transform lg:translate-y-20">
          <Image
            src={"/hero_arrow.png"}
            alt={"Arrow pointing down"}
            className="object-contain object-center"
            fill
            sizes="(max-width: 768px) 50px, (max-width: 1200px) 100px, 150px"
          />
        </div>

        {/* Right Side */}
        <div className="lg:flex-1 w-full  ">
          <div className="flex lg:flex-row flex-col space-y-3 space-x-0 lg:space-x-6 lg:space-y-0 justify-center items-center lg:justify-start lg:items-start 2xl:justify-center 2xl:items-center ">
            <div className="hidden 2xl:block ">
              <Rating_And_Video />
            </div>

            <div className="relative w-full   md:h-[550px] h-[400px] overflow-hidden z-10">
              <Image
                src={"/hero_right_org.png"}
                alt={"Hero Image"}
                className="object-contain  object-center"
                fill
                priority
                quality={100}
                sizes="(max-width: 768px) 1000vw, (max-width: 1200px) 100vw, 100vw"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
