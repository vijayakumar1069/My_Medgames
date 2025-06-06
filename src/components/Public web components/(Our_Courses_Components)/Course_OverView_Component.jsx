import React from "react";
import {
  IconAward,
  IconBook,
  IconCircleCheck,
  IconDownload,
  IconTargetArrow,
} from "@tabler/icons-react";
import { Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";

const Course_OverView_Component = ({
  objective,
  topic_covered,
  key_features,
  additional_resources,
  benefits,
  downalodPdf,
}) => {
  return (
    <div className="max-w-7xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <div className="grid md:grid-cols-1 gap-8">
        {/* Objective Section */}
        <div className="bg-blue-50 p-6 rounded-lg">
          <h2 className="text-2xl font-bold text-blue-800 mb-4 flex items-center">
            <IconTargetArrow className="mr-3 text-blue-600" size={40} />
            Program Objective
          </h2>
          <p className="text-gray-700 text-base max-w-full text-wrap break-words">
            {objective}
          </p>
        </div>

        {/* Key Features Section */}
        <div className="bg-green-50 p-6 rounded-lg">
          <h2 className="text-2xl font-bold text-green-800 mb-4 flex items-center">
            <IconCircleCheck className="mr-3 text-green-600" size={40} />
            Key Features
          </h2>
          <ul className="space-y-3">
            {key_features?.map((feature, index) => (
              // <li key={index} className="flex items-center text-gray-700">
              //   <Lightbulb  className="mr-2 text-green-500" size={24} />
              //   {feature}
              // </li>
              <li key={index} className="flex items-center text-gray-700">
                <div className="" key={index}>
                  <Lightbulb
                    className="mr-2 text-green-500 flex-nowrap"
                    size={24}
                  />
                </div>
                <span className="max-w-full text-wrap break-words">
                  {feature}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Topics Covered Section */}
        <div className="bg-purple-50 p-6 rounded-lg">
          <h2 className="text-2xl font-bold text-purple-800 mb-4 flex items-center">
            <IconBook className="mr-3 text-purple-600" size={40} />
            Topics Covered
          </h2>
          <ul className="space-y-3">
            {topic_covered?.map((topic, index) => (
              <li key={index} className="flex items-center  text-gray-700">
                <div className="">
                  <IconCircleCheck
                    className="mr-2 text-purple-500 flex-nowrap"
                    size={24}
                  />
                </div>
                <span className="max-w-full text-wrap break-words">
                  {topic}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Additional Resources Section */}
        <div className="bg-yellow-50 p-6 rounded-lg">
          <h2 className="text-2xl font-bold text-yellow-800 mb-4 flex items-center">
            <IconAward className="mr-3 text-yellow-600" size={40} />
            Resources Provided
          </h2>
          <ul className="space-y-3 max-w-full">
            {additional_resources?.map((resource, index) => (
              // <li key={index} className="flex items-center text-gray-700">
              //   <IconCircleCheck className="mr-2 text-yellow-500" size={24} />
              //   {resource}
              // </li>
              <li key={index} className="flex items-center  text-gray-700">
                <div className="">
                  <IconCircleCheck
                    className="mr-2 text-yellow-500 flex-nowrap"
                    size={24}
                  />
                </div>
                <span className="max-w-full text-wrap break-words">
                  {resource}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="mt-8 bg-indigo-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold text-indigo-800 mb-4 flex items-center">
          <IconAward className="mr-3 text-indigo-600" size={40} />
          Program Benefits
        </h2>
        <div className="grid md:grid-cols-2 gap-4 ">
          {benefits?.map((benefit, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-lg  shadow-md hover:shadow-xl transition-all"
            >
              <p className="text-gray-700 text-center text-wrap break-words ">
                {benefit}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="">
        <Button className="flex mt-4 w-fit items-center bg-[#4F9F76] hover:bg-[#4F9F76]/90 text-white py-2 px-4 rounded-md">
          <a
            href={downalodPdf.downloadUrl || downalodPdf.secureUrl}
            target="_blank"
            rel="noopener noreferrer"
            download
            className="flex items-center space-x-2"
          >
            <IconDownload className="mr-2" size={24} />
            <span className=" text-base"> Download Booklet</span>
          </a>
        </Button>
      </div>
    </div>
  );
};

export default Course_OverView_Component;
