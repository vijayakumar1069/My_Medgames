"use client"
import Image from "next/image";
import React from "react";
import SubscribeForm from "./SubscribeForm";
import { BookOpenCheck, Check, Stethoscope, Trophy, X } from "lucide-react";
import { subscribe_const } from "@/utils/constvalues";

const News_Letter_Subscribe = ({ onClose, onSubscribe,subscribeFail }) => {
  return (
    <div className=" relative p-4 rounded-xl ">
      <div className=" max-w-4xl mx-auto p-2 bg-white shadow-2xl relative rounded-xl  overflow-hidden">
        <div className=" absolute top-3 right-3 z-10">
          <X className="w-8 h-8 mr-1 p-1 font-bold text-white bg-[#4F9F76] rounded-full" onClick={onClose}  />
        </div>
        <div className="flex mx-auto md:flex-row flex-col rounded-xl">
          <div className="flex-1 relative">
            <div className="w-full relative h-full min-h-[300px] rounded-xl">
              <Image
                src="/news_letter_bg.jpg"
                alt="Medical Career Advancement Newsletter"
                fill
                priority
                
                quality={80}
                className="object-cover object-center md:rounded-tl-xl md:rounded-bl-xl rounded-xl md:rounded-none   "
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-[#000]/40 md:rounded-tl-xl md:rounded-bl-xl rounded-xl md:rounded-none"></div>
              <div className="absolute inset-0 flex flex-col justify-center p-6 text-white space-y-4">
                <h2 className="text-3xl font-bold drop-shadow-lg">
                  Accelerate Your Medical Career
                </h2>
                <div className="space-y-2">
                  <div className="flex items-center space-x-3">
                    <Stethoscope className="w-6 h-6" />
                    <span>Exclusive Exam Preparation Insights</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <BookOpenCheck className="w-6 h-6" />
                    <span>Cutting-Edge Interview Strategies</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Trophy className="w-6 h-6" />
                    <span>Career Development Masterclasses</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1 rounded-xl ">
            <div className="flex flex-col items-center justify-center space-y-3 p-6">
              <div className="text-center">
                <h1 className="text-[#000] text-2xl font-bold mb-2">
                  Your Gateway to Medical Excellence
                </h1>
                <p className="text-[#4f4f4f] mb-4">
                  Stay ahead in your medical career with our comprehensive
                  newsletter
                </p>
              </div>

              <div className="w-full border-l-4 border-[#4F9F76] bg-[#4F9F76]/5 p-4 mb-4">
                <div className="flex items-center space-x-4">
                  <div>
                    <h3 className="text-lg font-bold text-[#4F9F76]">
                      Career Enhancement Resources
                    </h3>
                    <p className="text-sm text-gray-600">
                      Tailored guidance for medical professionals
                    </p>
                  </div>
                </div>
              </div>

              <SubscribeForm onSubmit={onSubscribe} subscribeFail={subscribeFail} />

              <div className="text-left text-sm text-gray-500 mt-4">
                <p className="text-left">By subscribing gain access to:</p>
                <ul className="mt-2 space-y-1">
                  {subscribe_const.map((item, index) => (
                    <li
                      key={index}
                      className="text-left flex space-x-2 items-center"
                    >
                      <Check className="w-5 h-5 mr-1 p-1 font-bold text-white bg-[#4F9F76] rounded-full" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News_Letter_Subscribe;
