import React from "react";
import Small_Title from "../(Home page)/Small_Title";
import { IconTargetArrow, IconUsersGroup } from "@tabler/icons-react";
import Image from "next/image";

const About_us = () => {
  const our_mission_vision = [
    {
      id: 1,
      title: "Who We Are",
      text: "We are an entirely medical student led company. We have recently been through the process ourselves. Our shared experience allows us to offer relevant insights and practical advice to aspiring MDs",
      icon: <IconUsersGroup size={40} />
    },
    {
      id: 2,
      title: "Our Mission",
      text: "We are dedicated to helping aspiring medical professionals achieve their dreams. With a commitment to excellence, we provide comprehensive support and guidance for all stages of the medical school application process",
      icon: <IconTargetArrow size={40} />
    }
  ];

  return (
    <div className="w-full min-h-screen flex justify-center font-Manrope text-[#4A4A4A] items-center flex-col space-y-8 p-3 py-10 bg-[#fff]">
      <div className="lg:w-10/12 md:w-11/12 w-full px-4 grid grid-cols-1 lg:grid-cols-2 gap-8 ">
        {/* Left Side */}
        <div className="flex flex-col space-y-6 w-full order-2 lg:order-1">
          <div>
            <Small_Title title="About Us" color="[#4A4A4A]" />
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl text-black font-bold max-w-xl leading-tight">
            We Providing The{" "}
            <span className="text-[#4F9F76]">Best Quality</span> Online Courses
          </h1>

          <p className="text-base md:text-lg text-[#4A4A4A] leading-relaxed">
            Welcome to MedGames, where learning knows no bounds. Whether you&apos;re a student preparing for medical exams, a professional seeking to advance your career, or a lifelong learner passionate about the medical field, MedGames connects you with expert medical tutors to help you achieve your goals.
          </p>

          <div className="space-y-5">
            {our_mission_vision.map((mission) => (
              <div
                key={mission.id}
                className="flex items-center space-x-5 bg-[#F5F9F6] p-4 rounded-xl transition-all duration-300 hover:shadow-md"
              >
                <div className="bg-[#E1EBE2] flex justify-center items-center w-20 h-20 p-10 rounded-full">
                  <span className="text-[#4F9F76]">{mission.icon}</span>
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold text-black mb-2">
                    {mission.title}
                  </h3>
                  <p className="text-[#4A4A4A] text-base">
                    {mission.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side - Image Container */}
        <div className="relative w-full max-w-2xl aspect-square order-2 lg:order-2 mb-8 lg:mb-0">
       
            <div className="relative w-full h-full">
              <Image
                src="/about_us_combined_img.png"
                alt="Main Medical Image"
                fill
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-contain rounded-2xl  transform transition-all duration-500 hover:scale-105"
              />
            </div>
       

          {/* Decorative Floating Elements */}
          <div className="absolute inset-0 pointer-events-none">
            {/* Floating Circles */}
            <div className="absolute top-10 left-10 w-16 h-16 bg-[#4F9F76]/20 rounded-full animate-float"></div>
            <div className="absolute bottom-10 right-10 w-20 h-20 bg-[#FF6B6B]/20 rounded-full animate-float delay-500"></div>
            
            {/* Floating Dots */}
            <div className="absolute top-1/4 right-1/4 w-4 h-4 bg-[#4F9F76] rounded-full animate-ping"></div>
            {/* <div className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-[#FF6B6B] rounded-full animate-ping delay-700"></div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About_us;
