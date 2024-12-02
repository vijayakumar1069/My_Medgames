import React from "react";
import { BriefcaseMedical, HandCoins, CalendarClock } from "lucide-react";

const CARD_CONFIGS = [
  {
    icon: BriefcaseMedical,
    defaultBg: "bg-[#E1EBE2]",
    hoverBg: "bg-[#4F9F76]",
    defaultColor: "#4F9F76",
    hoverColor: "#FFFFFF",
  },
  {
    icon: HandCoins,
    defaultBg: "bg-[#FFF0F3]",
    hoverBg: "bg-[#EE4A62]",
    defaultColor: "#EE4A62",
    hoverColor: "#FFFFFF",
  },
  {
    icon: CalendarClock,
    defaultBg: "bg-[#EDF2FF]",
    hoverBg: "bg-[#4664E4]",
    defaultColor: "#4664E4",
    hoverColor: "#FFFFFF",
  },
];

const Why_Us_Card = ({ content, index }) => {
  const {
    icon: IconComponent,
    defaultBg,
    hoverBg,
    defaultColor,
    hoverColor,
  } = CARD_CONFIGS[index];

  return (
    <div className="group w-full max-w-md p-5 bg-white h-auto flex flex-col justify-center drop-shadow-xl items-center space-y-5 transition-all duration-300 ease-in-out hover:scale-105">
      {" "}
      {/* Icon Container with Hover Effects */}
      <div
        className={`
        rounded-full
        ${defaultBg}
        group-hover:bg-[#4F9F76]
        p-4 w-[80px] h-[80px] 
        flex items-center justify-center
        transition-all duration-300
      `}
      >
        <IconComponent
          size={36}
        
          className={`
            transition-colors
            duration-300
            text-[${defaultColor}]
            group-hover:text-white  // Force white on hover
          `}
        />
      </div>
      {/* Title */}
      <div className="text-center">
        <h1 className="text-2xl font-bold drop-shadow-md transition-colors duration-300">
          {content.title}
        </h1>
      </div>
      {/* Description */}
      <p className="text-center text-[#4A4A4A] transition-colors duration-300">
        {content.description}
      </p>
    </div>
  );
};

export default Why_Us_Card;
