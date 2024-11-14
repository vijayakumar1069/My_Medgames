import Image from "next/image";
import React from "react";
import Small_Title from "./Small_Title";
import Large_Title from "./Large_Title";
import { consultation_details } from "@/utils/constvalues";
import Consulatation_percetage from "./Consulatation_percetage";
import { Button } from "../ui/button";

const Consultation = () => {
  return (
    <div className="w-full h-full bg-[#fff] relative font-Manrope flex justify-center items-center flex-col space-y-8 px-0 py-10 overflow-hidden">
      <div className="relative w-full xl:h-[800px] sm:h-[1100px]   xs:h-[1300px] h-[1500px]  ">
        <Image
          src={"/formbg1.png"}
          alt="formbg1"
          fill
          priority={true}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // Adjust sizes based on your layout needs
          style={{ objectFit: "cover" }}
          
        />
        <div className="absolute inset-0 flex gap-5 flex-col justify-center xl:space-x-3 space-y-5 xl:space-y-0 items-center xl:flex-row">
          <div className="xl:basis-5/12 relative w-full h-full flex flex-col justify-center items-center ">
            <form action="" className=" bg-white absolute xl:bottom-0 xl:right-0 xl:p-20 lg:p-14 p-10 sm:p-20  shadow-lg mt-10 xl:mt-0 md:w-[500px] sm:w-[600px] w-full">
              <div className="flex flex-col space-y-1">
                <div className="flex flex-col space-y-2">
                  <label htmlFor="name" className="text-lg font-semibold">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter your name"
                    className="w-full rounded-lg border border-neutral-300 bg-transparent py-3 px-4 text-base leading-6 text-neutral-900 placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:border-neutral-400 sm:text-sm"
                  />
                </div>
                <div className="flex flex-col space-y-2">
                  <label htmlFor="email" className="text-lg font-semibold">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    className="w-full rounded-lg border border-neutral-300 bg-transparent py-3 px-4 text-base leading-6 text-neutral-900 placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:border-neutral-400 sm:text-sm"
                  />
                </div>
                <div className="flex flex-col space-y-2">
                  <label htmlFor="message" className="text-lg font-semibold">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Enter your message"
                    className="w-full rounded-lg border border-neutral-300 bg-transparent py-3 px-4 text-base leading-6 text-neutral-900 placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:border-neutral-400 sm:text-sm"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <Button
                    className="bg-transparent text-[#4F9F76] border-[#4F9F76] mt-6 px-4 py-2 rounded-md hover:bg-transparent hover:text-white border"
                  >
                    Send
                  </Button>
                </div>
              </div>
            </form>
          </div>
          <div className="flex-1 h-[60%] xl:mt-60 justify-center xl:px-0 px-10 pb-10">
            <div className="flex flex-col space-y-4 justify-center  w-full ">
             <Small_Title title="OUR SUCCESS" color="white" />
             <Large_Title title="We have helped more than 700+ Students worldwide" text={true} color="white" left={true} />
             <p className=" text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-10 relative w-full">
              {
                consultation_details.map((item) => (
                  <Consulatation_percetage key={item.id} details={item} />
                ))
              }
             </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Consultation;
