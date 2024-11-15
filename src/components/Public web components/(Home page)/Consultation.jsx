import Image from "next/image";
import React from "react";
import Small_Title from "./Small_Title";
import Large_Title from "./Large_Title";
import { consultation_details } from "@/utils/constvalues";
import Consulatation_percetage from "./Consulatation_percetage";

import Consultation_Form from "./Coultation_Form";

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
           
            <Consultation_Form/>
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
