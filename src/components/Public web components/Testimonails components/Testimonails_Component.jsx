"use client";

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';

// Left Side Image Component
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
      className="relative "
    >
      <div className="absolute top-0 w-full aspect-square max-w-[300px] mx-auto">

      <Image
        src={image}
        alt="Left side testimonial"
        fill
        className="object-cover object-center rounded-xl shadow-lg"
      />
      <div className="absolute inset-0 bg-[#376F5F]/70 rounded-xl"></div>
      </div>
    </motion.div>
  );
};

// Right Side Image Component
const RightSideImage = ({ image }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 50 }}
      transition={{ 
        duration: 0.4, 
        ease: "easeOut" 
      }}
      className="relative "
    >
      <div className="absolute top-0 w-full aspect-square max-w-[300px] mx-auto">

      <Image
        src={image}
        alt="Right side testimonial"
        fill
        className="object-cover object-center rounded-xl shadow-lg"
      />
      <div className="absolute inset-0 bg-[#376F5F]/70 rounded-xl"></div>
      </div>
    </motion.div>
  );
};

const Testimonials_Component = ({ reviews }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleNext = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
    );
  }, [reviews.length]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
    );
  }, [reviews.length]);

  // Prevent hydration errors
  if (!isClient) {
    return null;
  }

  const currentReview = reviews[currentIndex];
  const prevImage = reviews[(currentIndex - 1 + reviews.length) % reviews.length].image;
  const nextImage = reviews[(currentIndex + 1) % reviews.length].image;

  // Simple and Subtle Transition Variants
  const fadeVariants = {
    initial: { 
      opacity: 0,
      y: 20 
    },
    animate: { 
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    },
    exit: { 
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.3,
        ease: "easeIn"
      }
    }
  };

  return (
    <div className="relative w-full h-full bg-white flex items-center justify-center py-16">
      <div className="container px-4 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-center">
          {/* Left Side Image - Hidden on Mobile */}
          <div className="hidden md:block md:col-span-1">
            <LeftSideImage image={prevImage} />
          </div>

          {/* Main Testimonial Content */}
          <div className="md:col-span-2 col-span-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial="initial"
                animate="animate"
                exit="exit"
                variants={fadeVariants}
                className="bg-white shadow-lg rounded-2xl overflow-hidden"
              >
                <div className="grid md:grid-cols-2 grid-cols-1 gap-2 justify-items-center md:justify-items-start">
                  {/* Image Section */}
                  <div className="relative aspect-square md:aspect-auto md:h-[500px] h-[250px] md:w-full">
                    <Image
                      src={currentReview.image}
                      alt={`Testimonial from ${currentReview.name}`}
                      fill
                      priority
                      className="object-contain object-center"
                    />
                  </div>

                  {/* Content Section */}
                  <div className="xl:p-6 p-2  flex flex-col justify-center items-center md:items-start space-y-2">
                    <p className="text-[#1A1A1A] text-sm md:text-base   p-2">
                      {currentReview.review_content}
                    </p>
                    <div className="space-y-1">
                      <p className="text-xl font-bold text-green-800">
                        {currentReview.name}
                      </p>
                      {currentReview.position && (
                        <p className="text-gray-600">
                          {currentReview.position}
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                {/* Navigation */}
                <div className="flex justify-center space-x-10 md:justify-between p-4 bg-gray-50">
                  <Button
                    onClick={handlePrev}
                    className="xs:px-6  py-2 bg-[#376F5F] text-white rounded-md hover:bg-[#376F5F]/70 transition-colors"
                  >
                    Previous
                  </Button>
                  <Button
                    onClick={handleNext}
                    className="xs:px-6 py-2 bg-[#376F5F] text-white rounded-md hover:bg-[#376F5F]/70 transition-colors"
                  >
                    Next
                  </Button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Side Image - Hidden on Mobile */}
          <div className="hidden md:block md:col-span-1">
            <RightSideImage image={nextImage} />
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center mt-6 space-x-2">
          {reviews.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                index === currentIndex 
                  ? 'bg-[#376F5F]/70' 
                  : 'bg-gray-300 hover:bg-green-300'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials_Component;
