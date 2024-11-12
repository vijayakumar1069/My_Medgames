import { navbarvalues } from "@/utils/constvalues";
import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";

const Navbar = () => {
  return (
    <div className="bg-[#4F9F76] w-full h-40 flex items-center ">
        <div className="w-[1400px]  flex mx-auto items-center justify-between">

      <div className="flex space-x-2 items-center">
        <Image src="/logo.png" alt="logo" width={40} height={24} />
        <h1 className="text-xl    text-white">Med Games</h1>
      </div>
      <div className="">
        <ul>
          {navbarvalues.map((item) => (
            <li className="inline-block mx-2 text-white" key={item.id}>
              <a href={item.link}>{item.name}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className="">
        <Button className="bg-transparent text-white px-8 py-2 rounded-md hover:bg-transparent hover:text-white border">
          Get Started
        </Button>
      </div>
        </div>
    </div>
  );
};

export default Navbar;
