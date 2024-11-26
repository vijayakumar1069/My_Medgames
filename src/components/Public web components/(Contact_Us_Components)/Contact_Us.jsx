import { brand_Info } from "@/utils/constvalues";
import React from "react";
import Contact_Us_card from "./Contact_Us_card";
import Contact_us_Form from "./Contact_us_Form";

const Contact_Us = () => {
  return (
    <div className="w-full h-full flex justify-center items-center overflow-hidden  flex-col   py-10 bg-[#fff]">
      <div className="lg:w-full md:w-11/12 w-full flex flex-col  space-y-10 p-5   ">
        <div className="w-full flex flex-col space-y-4 justify-center items-center  ">
          <h1 className="text-white bg-[#4F9F76] px-4 py-2 rounded-full">
            Contact Us
          </h1>
          <div className="max-w-xl text-center">
            <p className="text-black font-bold text-4xl">
              Contact MedStudy Course can join with us
            </p>
          </div>
        </div>
        <div className="">
            <Contact_us_Form/>
        </div>
        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  justify-items-center  gap-x-4 gap-y-2">
          {brand_Info.social_links.map((item, index) => (
            <Contact_Us_card key={`${item.id}-${index}`} item={item} />
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default Contact_Us;
