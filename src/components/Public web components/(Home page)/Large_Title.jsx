import React from "react";

const Large_Title = ({ title, text, color, left }) => {

  return (
    <div
      className={`font-Manrope  text-2xl sm:text-4xl  text-wrap  font-[600] px-2 md:px-0 max-w-xl ${color === undefined ? "text-[#000]" : "text-white"} 
      ${text === true && left === true ? "text-left " : 
        (text === true && left === false ? "md:text-left text-center" : "text-center")} 
      tracking-wide`}
    >
      {title}
    </div>
  );
};

export default Large_Title;
