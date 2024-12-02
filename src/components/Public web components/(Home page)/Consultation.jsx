"use client";
import Image from "next/image";
import React from "react";
import Small_Title from "./Small_Title";
import Large_Title from "./Large_Title";
import { consultation_details } from "@/utils/constvalues";
import Consulatation_percetage from "./Consulatation_percetage";
import dynamic from "next/dynamic";

const Consultation_Form_Client = dynamic(() => import("./Coultation_Form"), { ssr: false });

const Consultation = () => {
  return (
    <div className="w-full h-full bg-[#fff] relative font-Manrope flex justify-center items-center flex-col space-y-8 px-0 py-10 overflow-hidden">
      <div className="relative w-full min-h-[1200px] h-full lg:min-h-[1000px] xl:min-h-[900px] overflow-hidden shadow-2xl group">
        <div className="absolute inset-0 z-0">
          <Image src="/formbg1.png" alt="Consultation Background" fill priority quality={90} className="object-cover object-center transform scale-100 group-hover:scale-105 transition-transform duration-700 ease-in-out" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 1440px" />
          <div className="absolute inset-0 bg-black/10"></div>
        </div>
        <div className="absolute inset-0 flex gap-5 flex-col justify-center xl:space-x-3 space-y-10 xl:space-y-0 items-center xl:flex-row">
          <div className="xl:basis-5/12 relative w-full h-full flex flex-col justify-center items-center">
            <Consultation_Form_Client />
          </div>
          <div className="flex-1 h-[60%] xl:mt-60 justify-center xl:px-0 px-10 pb-10">
            <div className="flex flex-col space-y-4 justify-center w-full">
              <Small_Title title="OUR SUCCESS" color="white" />
              <Large_Title title="We have helped more than 700+ Students worldwide" text={true} color="white" left={true} />
              <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-10 relative w-full">
                {consultation_details.map((item) => (
                  <Consulatation_percetage key={item.id} details={item} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Consultation;
