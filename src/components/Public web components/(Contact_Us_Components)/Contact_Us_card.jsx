import { IconBrandInstagram, IconMail, IconWorld } from "@tabler/icons-react";
import React from "react";

const Contact_Us_card = ({ item }) => {
  const { id, name, link, display_content } = item;

  // Map names to icons
  const getIcon = (name) => {
    switch (name.toLowerCase()) {
      case "website":
        return <IconWorld stroke={1} size={30} className="" />;
      case "email":
        return <IconMail stroke={1} size={30} className="" />;
      case "instagram":
        return (
          <IconBrandInstagram stroke={1} size={30} className="" />
        );
      default:
        return null;
    }
  };

  // Generate the correct href based on the name
  const generateLink = (name, link) => {
    if (name.toLowerCase() === "email") {
      return `mailto:${link}`;
    }
    return link; // For websites and Instagram
  };

  return (
    <div className=" rounded-full bg-white hover:bg-[#376F5F] group hover:text-white  shadow-sm border border-[#376F5F] p-1">
      {/* <div>{getIcon(name)}</div> */}
     
      <a
        href={generateLink(name, link)}
        target="_blank"
        rel="noopener noreferrer"
        className="text-center text-[#376F5F] group-hover:text-white text-xl"
      >
       {getIcon(name)}
      </a>
    </div>
  );
};

export default Contact_Us_card;
