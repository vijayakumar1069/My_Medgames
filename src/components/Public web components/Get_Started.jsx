import React from "react";
import Small_Title from "./Small_Title";
import Large_Title from "./Large_Title";
import Avatar_Creation from "./Avatar_Creation";
import { Button } from "../ui/button";
import Image from "next/image";

const Get_Started = () => {
  const imgs = [
    {
      id: 1,
      src: "/s1.png",
      alt: "s1",
    },
    {
      id: 2,
      src: "/s2.png",
      alt: "s2",
    },
    {
      id: 3,
      src: "/s3.png",
      alt: "s3",
    },
  ];
  
  return (
    <div className="bg-[#F4F6FC] pt-5">
      <div className="sm:w-[90%] w-full mx-auto">
        <div className="bg-[#376F5F] text-white lg:p-10 p-5 rounded-md flex flex-col space-y-6 lg:space-y-0 h-[90vh] md:h-[80vh] lg:h-full lg:flex-row  ">
          <div className="flex-1 justify-center flex  lg:justify-start">
            <div className="flex flex-col justify-center items-center lg:justify-start lg:items-start space-y-5 lg:space-y-4">
              <Small_Title title="Get Started" color={"white"} />
              <Large_Title
                title="Start Your Courses Today!"
                color={"white"}
                text={true}
                left={true}
              />
              <p className="text-white text-center lg:text-left max-w-xl">
                Unlock your potential and excel in your medical studies with
                expert guidance from professional medical tutors. Whether
                you’re preparing for medical exams or need...
              </p>
              <div className="flex justify-start  space-x-5">
                <Button className="bg-[#E1EBE2] text-[#4F9F76] px-8 py-2 rounded-md">
                  Get Started
                </Button>
                <Button className="bg-[#E1EBE2] text-[#4F9F76] px-8 py-2 rounded-md">
                  Try Now
                </Button>
              </div>
              <div className="flex items-center justify-center  space-x-5 w-full">
                <div className="relative flex   ">
                  {imgs.map((item, index) => (
                    <Avatar_Creation key={index} item={item} />
                  ))}
                </div>
                <p className=" text-sm ">Trusted by over 30K students</p>
              </div>
            </div>
          </div>
          <div className="flex-1 relative ">
            {/* Container for images with relative positioning */}
            <div className="relative w-full h-full justify-start sm:justify-center flex lg:justify-start">
              {/* Main get_started image */}
              <div className="relative w-[60%] h-full z-10">
                <Image
                  src="/get_started.png"
                  alt="get_started"
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 100vw"
                  className="rounded-xl"
                />
              </div>
              {/* Book image positioned below and partially covered by get_started image */}
              <div className="absolute bottom-2 w-[100%] h-full z-0 translate-x-0 translate-y-0">
                <Image
                  src="/book.png"
                  alt="book"
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 100vw"
                  className="rounded-xl opacity-80"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Get_Started;
