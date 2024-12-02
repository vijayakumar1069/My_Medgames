
import Image from "next/image";
import React from "react";

const Tutor_Card = ({ tutor }) => {
  return (
    <div
      className="max-w-md bg-white text-black rounded-2xl flex flex-col items-center justify-center"
      key={tutor.id}
    >
      <div className="relative group">
        <div className="h-full flex flex-col ">
          <div className="h-72 w-60 relative overflow-hidden rounded-3xl bg-gray-300">
            <Image
              src={tutor.image}
              className="h-full w-full object-cover  "
              fill
              priority
              quality={100}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw" // Customize sizes for breakpoints
              alt={tutor.name}
            />
            {/* <div className="absolute inset-0 bg-green-300 bg-opacity-30 opacity-0 group-hover:opacity-100 flex justify-center items-center space-x-4">
              {tutor.socialsLinks.map((item, index) => (
                <div className="" key={`${item.id}-${index}`}>
                  {item.name === "whatsapp" && (
                    <a href={item.link}>
                      <IconBrandWhatsapp
                        className="bg-white text-[#4F9F76] rounded-full p-2"
                        size={48}
                      />
                    </a>
                  )}

                  {item.name === "LinkedIn" && (
                    <a href={item.link}>
                      <IconBrandLinkedin
                        className="bg-white text-[#4F9F76] rounded-full p-2"
                        size={48}
                      />
                    </a>
                  )}
                  {item.name === "Instagram" && (
                    <a href={item.link}>
                      <IconBrandInstagram
                        className="bg-white text-[#4F9F76] rounded-full p-2"
                        size={48}
                      />
                    </a>
                  )}
                </div>
              ))}
            </div> */}
          </div>
          <div className="text-left">
            <h4 className="font-bold text-xl text-[#1A1A1A]">{tutor.name}</h4>
            <p className="mt-1 text-[#376F5F] ">{tutor.description}</p>
            <p className="text-[#376F5F] mt-1">{tutor.college}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tutor_Card;
