"use client";
import { reviews } from "@/utils/constvalues";
import React, { useState } from "react";
import LeftSideImage from "./LeftSideImage";
import RightSideImage from "./RightSideImage";
import Image from "next/image";

const Testimonails_Component = () => {
  const [currentReview, setCureentReview] = useState(reviews[0]);
  const [prevImage, setPrevImage] = useState(reviews[reviews.length - 1].image);
  const [nextImage, setNextImage] = useState(reviews[1].image);
  return (
    <div className="w-full h-full flex justify-center items-center  flex-col space-y-8 p-3 py-10 ">
      <div className="lg:w-10/12 md:w-11/12 w-full grid grid-cols-1 lg:grid-cols-4   gap-5 p-5 md:p-0 justify-items-center ">
        <div className="lg:col-span-1">
          <LeftSideImage />
        </div>
        <div className="lg:col-span-2">
            <div className="relative w-full h-[400px]">
                <Image src={currentReview.image} alt="review_image" fill style={{ objectFit: "cover" }} className="object-cover object-center rounded-lg" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
            </div>
            <p>{currentReview.review_content}</p>
        </div>
        <div className="lg:col-span-1">
          <RightSideImage />
        </div>
      </div>
    </div>
  );
};

export default Testimonails_Component;
