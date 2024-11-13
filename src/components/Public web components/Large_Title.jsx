import React from "react";

const Large_Title = ({ title,text }) => {
  return (
    <div className={`font-Manrope text-4xl font-[600] max-w-2xl ${text==true ?"md:text-left text-center " :"text-center"} tracking-wide`}>
      {title}
    </div>
  );
};

export default Large_Title;
