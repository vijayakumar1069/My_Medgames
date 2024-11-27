import Image from "next/image";
import React from "react";
import Small_Title from "../(Home page)/Small_Title";
import { BriefcaseBusiness, BriefcaseMedical, CalendarClock, HandCoins } from "lucide-react";
import Why_Us_Card from "./Why_Us_Card";


const About_Us_SVG_BG = () => {
  return (
    <div className="relative bg-black ">
      {/*images container */}
      <div className="relative bg-[#E9f8F3] py-8 grid grid-cols-1  lg:grid-cols-4 items-center w-full gap-y-5  px-4 lg:px-6 h-[400px] md:h-[600px] lg:h-[400px]  md:space-y-0">
        
        <div className="relative flex-shrink-0 w-24 h-24 md:w-40 md:h-40 lg:w-48 lg:h-48 justify-self-center lg:justify-self-start ">
          <Image
            src="/green_circle.png"
            alt="Green Circle"
            className="object-center object-cover rounded-full"
            fill
            style={{ objectFit: "cover" }}
            sizes="(max-width: 768px) 100px, (max-width: 1200px) 200px, 300px"
          />
        </div>
        <div className="flex flex-col w-full lg:col-span-2 justify-center items-center space-y-4">
          <div>
            <Small_Title title="WHY CHOOSE MEDGAMES" color="[#4A4A4A]" />
          </div>

          <h1 className="font-Manrope  text-2xl sm:text-4xl text-center text-wrap  font-[600] max-w-md">
            We Providing The{" "}
            <span className="text-[#4F9F76]">Beneficial</span> Online Courses
          </h1>
        </div>

     
        <div className="relative flex-shrink-0 w-24 h-24 md:w-40 md:h-40 lg:w-48 lg:h-48 lg:col-span-1 justify-self-center lg:justify-self-end">
          <Image
            src="/red_rectangle.png"
            alt="Green Wave"
            className="object-cover"
            fill
            sizes="(max-width: 768px) 80px, (max-width: 1200px) 150px, 200px"
          />
        </div>
       
      </div>
      
       
    </div>
  );
};

export default About_Us_SVG_BG;
