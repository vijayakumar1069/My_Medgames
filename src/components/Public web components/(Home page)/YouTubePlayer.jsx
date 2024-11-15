"use client";
import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player/youtube';
import { motion, AnimatePresence } from 'framer-motion';

const YouTubePlayer = () => {
  const [isClient, setIsClient] = useState(false);
  const url="https://youtu.be/WLEJmgdPCm8?si=VuhexuwwdvHn7FqT"

  useEffect(() => {
    setIsClient(true); // Ensure client-side rendering only
  }, []);

  if (!isClient || !url) return null; // Don't render on the server or if no URL is provided

  return (
    <div className="flex justify-center items-center relative w-full h-screen bg-white ">
      <AnimatePresence>
        <motion.div
          key={url}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="w-[80%] h-[80%]"
        >
          <ReactPlayer
            url={url}
            playing
            controls
            muted
            width="100%"
            height="100%"
            pip={true}
            config={{
              youtube: {
                playerVars: { autoplay: 1, modestbranding: 1, rel: 0 },
              },
            }}
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default YouTubePlayer;
