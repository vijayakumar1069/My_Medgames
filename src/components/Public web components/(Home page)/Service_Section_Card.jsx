import React from "react";

import { IconChevronRight } from "@tabler/icons-react";
import Link from "next/link";

const Service_Section_Card = ({ data }) => {
  console.log(data);
  return (
    <div className="group bg-transparent font-Manrope  cursor-pointer text-black rounded-lg rounded-br-[70px] relative shadow-lg p-4 w-full max-w-md  mx-auto mb-4">
      {/* Green bar that covers the entire card on hover with transition from rounded corner */}
      <div
        className="absolute top-0 left-0 w-full h-2 bg-[#4F9F76] 
        transition-all group-hover:h-full bg-opacity-100 group-hover:rounded-br-[70px] group-hover:z-10 duration-1500"
      ></div>

      <div className="w-full group">
        <div className="flex flex-col">
          <h1 className="text-2xl max-w-full text-wrap break-words text-[#4F9F76] font-semibold mb-2  z-50 group-hover:text-white duration-1500">
            {data.name}
          </h1>

          <ul className="px-5 z-50">
            {data.key_features.map((item, index) => (
              <li
                key={index}
                className="text-[#4A4A4A] mb-2 list-disc   group-hover:text-white"
              >
                {item}
              </li>
            ))}
          </ul>
          {data.redirect_link && (
            <Link
              href={data.redirect_link}
              className="w-full text-[#4F9f76] z-50 group-hover:text-black duration-1500 font-bold text-xl flex justify-center mt-4 "
            >
              Learn More
              <span>
                <IconChevronRight stroke={2} className="ml-5" />
              </span>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Service_Section_Card;
