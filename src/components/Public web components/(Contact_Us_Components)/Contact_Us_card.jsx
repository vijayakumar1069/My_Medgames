import { IconBrandInstagram, IconMail, IconWorld } from "@tabler/icons-react";
import React from "react";

const Contact_Us_card = ({ item }) => {
  const { id, name, link, display_content } = item;

  // Map names to icons
  const getIcon = (name) => {
    switch (name.toLowerCase()) {
      case "website":
        return <IconWorld stroke={2} size={50} className="text-[#376F5F]" />;
      case "email":
        return <IconMail stroke={2} size={50} className="text-[#376F5F]" />;
      case "instagram":
        return (
          <IconBrandInstagram stroke={2} size={50} className="text-[#376F5F]" />
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
    <div className="text-black w-80 xl:w-96 bg-white shadow-lg flex flex-col items-center space-y-4 p-6 rounded-lg hover:shadow-xl transition-shadow">
      <div>{getIcon(name)}</div>
      <p className="text-center text-xl font-semibold capitalize">{name}</p>
      <a
        href={generateLink(name, link)}
        target="_blank"
        rel="noopener noreferrer"
        className="text-center text-[#4A4A4A] hover:underline text-lg"
      >
        {display_content} {/* Display only the name */}
      </a>
    </div>
  );
};

export default Contact_Us_card;
