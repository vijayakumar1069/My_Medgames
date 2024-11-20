import Image from "next/image";
import React from "react";

const PaymentLeftSection = ({ title, intro }) => {
  return (
    <div className=" ">
      <div className="w-full lg:h-auto h-[400px] font-Manrope ">
        <Image
          src="/person.png"
          alt="payment"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover rounded-tl-xl rounded-tr-xl lg:rounded-tl-[0px] lg:rounded-tr-[0px] "
        />
      </div>
      <div className="absolute inset-0  bg-[#376f5f] bg-opacity-50 rounded-tl-xl rounded-tr-xl lg:rounded-tl-[0px] lg:rounded-tr-[0px]  "></div>
      <div className="absolute inset-0 flex flex-col justify-center items-center ">
        <div className="max-w-3xl mx-auto p-8 flex flex-col space-y-2">
          <h1 className="text-xl font-bold text-white text-left">{title}</h1>

          <p className="text-white">
            Secure your spot in our expert-led training program with the most
            suitable pricing option for you. Choose from our flexible plans and
            get started on your journey towards mastering essential medical
            skills!
          </p>
        </div>
      </div>
      <div className="absolute  bottom-[180px] right-5 overflow-hidden ">
        <div className="w-[128px] h-[128px] relative">
          <Image
            src="/c1.png"
            alt="arrow"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="opacity-50"
          />
        </div>
      </div>
      <div className="absolute  bottom-0 right-[1px]  ">
        <div className="w-[128px] h-[256px] relative">
          <Image
            src="/c2.png"
            alt="arrow"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="opacity-50"
          />
        </div>
      </div>
    </div>
  );
};

export default PaymentLeftSection;
