"use client";
import React, { useState } from 'react';
import { IconPlayerPlay } from '@tabler/icons-react';

import { Dialog, DialogContent, DialogOverlay, DialogTitle } from '@/components/ui/dialog';
import Videos from './Videos'; // Assuming Videos is a component that wraps ReactPlayer or similar


const fullStars = Math.floor(4.5);
const hasHalfStar = 4.5 % 1 !== 0;
const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

const Rating_And_Video = () => {
  const [isOpen, setIsOpen] = useState(false); // Modal open/close state

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <div className="flex flex-col w-full space-y-10 lg:justify-start justify-center 2xl:mt-20 items-center lg:items-start">
      {/* <div className="flex flex-col space-y-5 items-start justify-start">
        <p className="text-white">(4.5/5) Rating Star by Students</p>
        <div className="flex items-center space-x-5 text-yellow-500">
          <div className="flex items-center space-x-1">
            {[...Array(fullStars)].map((_, i) => (
              <IconStar className="text-yellow-500" fill="currentColor" key={i} />
            ))}
            {hasHalfStar && <IconStarHalfFilled />}
            {[...Array(emptyStars)].map((_, i) => (
              <IconStar key={`empty-${i}`} className="text-gray-300" />
            ))}
          </div>
          <Link href="/testimonials" >
          
          <span className="text-white flex items-center space-x-1 text-nowrap font-semibold">
            More details <ChevronRight />
          </span>
          </Link>
        </div>
      </div> */}

      <div className="flex space-x-2 justify-center items-center">
        <div className="md:w-12 md:h-12 w-10 h-10 rounded-full flex justify-center items-center border p-2 md:p-3 cursor-pointer" onClick={handleOpen}>
          <IconPlayerPlay className="text-white" size={30} />
        </div>
        <p className="text-white font-bold underline cursor-pointer" onClick={handleOpen}>
          Watch a video about our business
        </p>
      </div>

      {/* Video Modal */}
      <Dialog open={isOpen} onOpenChange={handleClose} className="w-full" >
        <DialogOverlay className=" bg-[#274E49]/50 w-full" />
        <DialogContent className=" w-full max-w-screen-lg bg-[#fff] border-none p-2  ">
          {/* <DialogClose className="absolute top-5 right-5 text-white">X</DialogClose> */}

         
            <DialogTitle className="visually-hidden text-center text-black">
              Watch a video about our business
            </DialogTitle>
            <Videos /> 
          
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Rating_And_Video;
