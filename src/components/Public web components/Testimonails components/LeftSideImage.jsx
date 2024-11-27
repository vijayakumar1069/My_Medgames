"use client"
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
const LeftSideImage = ({ image }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ 
        duration: 0.4, 
        ease: "easeOut" 
      }}
      className="relative w-full aspect-square max-w-[300px] mx-auto"
    >
      <Image
        src={image}
        alt="Left side testimonial"
        fill
        className="object-cover object-center rounded-xl shadow-lg"
      />
      <div className="absolute inset-0 bg-[#376F5F]/70 rounded-xl"></div>
    </motion.div>
  );
};

export default LeftSideImage;
