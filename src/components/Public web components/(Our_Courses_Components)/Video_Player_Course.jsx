"use client";

import React, { useEffect, useState, useMemo } from "react";
import ReactPlayer from "react-player";
import Image from "next/image";

const Video_Player_Course = ({ videoUrl }) => {
  // Destructure and provide fallback
  const playUrl = videoUrl?.[0]?.secureUrl || '';

  // Generate thumbnail URL from Cloudinary
  const generateThumbnailUrl = (videoUrl) => {
    if (!videoUrl) return null;
   
    // Cloudinary transformation for thumbnail
    const cloudinaryBaseUrl = videoUrl.replace(
      /upload\/v\d+/, 
      `upload/c_fill,h_270,w_480,q_auto,f_auto/e_blur:100`
    );
    return cloudinaryBaseUrl;
  };

  const [isClient, setIsClient] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Optimization: Lazy load video
  const handleStartPlay = () => {
    setShowVideo(true);
    setIsPlaying(true);
  };

  // Performance optimization techniques
  const playerConfig = useMemo(() => ({
    file: {
      attributes: {
        preload: 'metadata', // Preload only metadata
      },
    },
    youtube: {
      playerVars: {
        modestbranding: 1,
        controls: 1,
        rel: 0, // Disable related videos
      },
    },
    vimeo: {
      playerOptions: {
        controls: true,
        byline: false,
        portrait: false,
      },
    },
  }), []);

  // Memoized thumbnail
  const thumbnailUrl = useMemo(() => {
    return generateThumbnailUrl(playUrl);
  }, [playUrl]);

  if (!isClient) return null;

  // No video available
  if (!playUrl) {
    return (
      <div className="w-full aspect-video bg-gray-200 flex justify-center items-center">
        <p className="text-gray-500">No preview video available</p>
      </div>
    );
  }

  return (
    <div className="mb-6 w-full aspect-video rounded-lg overflow-hidden relative">
      {!showVideo ? (
        <div className="absolute inset-0 z-10">
          {/* {thumbnailUrl ? (
            <Image
              src={thumbnailUrl}
              alt="Video Thumbnail"
              fill // Use fill instead of layout="fill"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover" // Use object-cover instead of objectFit
              priority
            />
          ) : (
            <div className="w-full h-full bg-gray-200" />
          )} */}
          <button
            onClick={handleStartPlay}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
            bg-black/50 rounded-full p-4 hover:bg-black/70 transition-all duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 text-white"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      ) : null}

      {showVideo && (
        <ReactPlayer
          url={playUrl}
          width="100%"
          height="100%"
          playing={isPlaying}
          controls
          config={playerConfig}
          onPause={() => setIsPlaying(false)}
          onPlay={() => setIsPlaying(true)}
          fallback={
            <div className="w-full h-full bg-gray-200 flex justify-center items-center">
              <p>Loading video...</p>
            </div>
          }
        />
      )}
    </div>
  );
};

export default React.memo(Video_Player_Course);
