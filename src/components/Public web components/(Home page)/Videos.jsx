"use client";

import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';
import { motion, AnimatePresence } from 'framer-motion';  // Import Framer Motion

const Videos = () => {
  const videoUrls = [
    "/v2.mp4",
    "/v1.mp4",
    "/v3.mp4",
    "/v4.mp4",
  ];

  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [isClient, setIsClient] = useState(false);  // Track if the component is mounted

  useEffect(() => {
    setIsClient(true);  // Set isClient to true when component is mounted
  }, []);

  const handleVideoEnd = () => {
    if (currentVideoIndex < videoUrls.length - 1) {
      setCurrentVideoIndex(currentVideoIndex + 1);
    } else {
      setCurrentVideoIndex(0);
    }
  };

  if (!isClient) {
    return null;  // Avoid rendering during SSR
  }

  return (
    <div className=" w-full h-full flex justify-center items-center  ">
      <div className="relative w-full max-w-screen-md ">
        {/* Animate video transitions with Framer Motion */}
        <AnimatePresence mode="wait">
          <motion.div
            key={videoUrls[currentVideoIndex]}  // Key ensures the animation runs on video change
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}  // Transition duration for smooth fade
          >
            <ReactPlayer
              url={videoUrls[currentVideoIndex]}
              playing={true}  // Video should autoplay
              autoPlay  // Explicit autoplay
              controls
              onEnded={handleVideoEnd}
              width="100%"
              height="100%"  // Keep height adjustable, it will fill the container
              muted  // Set muted based on state
              volume={1}  // Adjust volume based on state
              className="rounded-lg"  // Optional: rounded corners for aesthetics
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Videos;
