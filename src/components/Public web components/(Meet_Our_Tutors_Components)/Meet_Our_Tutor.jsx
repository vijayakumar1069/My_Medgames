"use client";
import React, { useState } from "react";
import Tutor_Filter_Component from "./Tutor_Filter_Component";
import { const_tutors } from "@/utils/constvalues";
import Meet_Our_Tutor_Card from "./Meet_Our_Tutor_Card";

const Meet_Our_Tutor = () => {
  const [location, setLocation] = useState(""); // State to store the selected location

  // Filter tutors based on selected location
  const filteredTutors = location
    ? const_tutors.filter((tutor) => tutor.location === location)
    : const_tutors; // If no location is selected, show all tutors

  return (
    <div className="w-full h-full flex justify-center items-center flex-col space-y-8 p-3 py-10 bg-[#fff]">
      <div className=" md:w-11/12 w-full grid grid-cols-2 md:grid-cols-4 justify-center gap-8">
        {/* Filter Section: 1/4 width */}
        <div className="md:col-span-2 lg:col-span-1 col-span-2 flex flex-col  w-full h-fit  space-y-4 shadow-md p-8 rounded-md">
          <div className="mb-1">
            <h1 className="text-black text-2xl font-medium">Filter Tutors</h1>
          </div>
          <div className="w-full outline-dashed outline-[0.1px] outline-[#4A4A4A]/20"></div>
          <div>
            <Tutor_Filter_Component setLocation={setLocation} />
          </div>
        </div>

        {/* Tutor Cards: 3/4 width */}
        <div className="md:col-span-2 lg:col-span-3 col-span-2 flex justify-center items-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {filteredTutors.map((item, index) => (
              <Meet_Our_Tutor_Card key={`${item.id}-${index}`} tutor={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Meet_Our_Tutor;
