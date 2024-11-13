import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

const Avatar_Creation = ({ item, index }) => {
  const { id, src, alt } = item;

  return (
    <Avatar
      className={`w-10 h-10 border-white border-2  ${index !== 0 ? "-ml-[6px]" : "ml-0"}`} // -ml-3 creates a small overlap
      
    >
      <AvatarImage src={src} alt={alt} />
      <AvatarFallback>{alt}</AvatarFallback>
    </Avatar>
  );
};

export default Avatar_Creation;
