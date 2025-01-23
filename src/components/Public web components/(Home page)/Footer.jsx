import Image from "next/image";
import React from "react";

import { brand_Info, footerLinks, socialMedialinks } from "@/utils/constvalues";
import Link from "next/link";
import {
  IconBrandInstagram,
  IconMail,
  IconBrandFacebook,
} from "@tabler/icons-react";
import Subscribe_Form from "./Subscribe_Form";
import { getCurrentYear } from "@/utils/getYear";

const Footer = () => {
  const year = React.useMemo(() => getCurrentYear(), []); // Memoize the current year
  return (
    <div className="w-full h-full flex flex-col bg-[#274E49]  ">
      <div className="w-full flex justify-center items-center flex-col space-y-8 p-4 py-10 ">
        <div className="lg:w-9/12 md:w-11/12 w-full grid grid-cols-1 sm:grid-cols-2 justify-items-center xl:grid-cols-3 gap-8 p-5">
          {/* Logo and Subscription Section */}
          <div className="flex flex-col space-y-4 items-center sm:justify-start  sm:items-start justify-center md:items-start   md:text-left">
            <div className="flex items-center space-x-4">
              <div className="relative w-16 h-16">
                <Image
                  src="/logo.png"
                  alt="logo"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  style={{ objectFit: "contain" }}
                  className="rounded-lg"
                />
              </div>
              <h1 className="text-white text-2xl font-bold">Med Games</h1>
            </div>
            <p className="text-white text-sm text-wrap max-w-sm md:text-base">
              At Med Games, we are committed to helping medical students and
              professionals reach their full potential.
            </p>
            {/* <form action="" className="flex flex-col md:flex-row md:space-x-3 w-full  md:items-center space-y-2 md:space-y-0">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="max-w-sm px-4 py-2 border border-gray-300 rounded-lg focus:outline-none"
                />
                <Button
                  type="submit"
                  className="px-4 w-fit py-2 bg-[#E1EBE2] text-[#4F7F96] rounded-lg hover:bg-[#d6f9da] hover:text-[#000]"
                >
                  Subscribe
                </Button>
              </form> */}
            <Subscribe_Form />
          </div>

          {/* Quick Links and Social Media Links Section */}
          <div className="flex flex-col space-y-6 md:space-y-3  items-start justify-start sm:justify-center">
            <div className="flex space-x-20 w-full   ">
              <div className="flex flex-col space-y-3  ">
                <h1 className="text-white text-2xl font-bold text-nowrap">
                  Quick Links{" "}
                </h1>
                {footerLinks.map((item, index) => (
                  <Link
                    key={index}
                    href={item.link}
                    className="text-white text-sm pb-1 hover:scale-105 hover:text-[#E1EBE2] transition-all duration-300 ease-in-out "
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="flex flex-col space-y-3  ">
                <h1 className="text-white text-2xl font-bold"> Follow Us</h1>

                {socialMedialinks.map((item, index) => (
                  <a
                    key={index}
                    target="_blank"
                    href={item.link}
                    previewlistener="true"
                    className="text-white text-sm pb-1 hover:scale-105 hover:text-[#E1EBE2] transition-all duration-300 ease-in-out"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="relative bg-[#376F5F] xs:w-[90%] sm:w-full h-full rounded-xl p-4 flex flex-col items-center justify-center text-white overflow-hidden">
            <Image
              src="/book2.png"
              alt="footer"
              fill
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              style={{ objectFit: "contain" }}
              className="rounded-lg opacity-50 z-0"
            />
            <div className="z-10 flex flex-col w-full h-full justify-center items-center space-y-4 text-center p-1">
              <h1 className="text-2xl">Get In Touch</h1>
              <div className="flex flex-col space-y-3 text-sm">
                <a
                  className="text-white hover:scale-105 hover:text-[#E1EBE2] transition-all duration-300 ease-in-out"
                  href={`mailto:${brand_Info.social_links[1].link}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="flex space-x-2 items-center flex-wrap">
                    <IconMail stroke={2} />
                    <span>{brand_Info.social_links[1].link}</span>
                  </div>
                </a>
                <a
                  className="text-white hover:scale-105 hover:text-[#E1EBE2] transition-all duration-300 ease-in-out"
                  href={`${socialMedialinks[2].link}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="flex space-x-2 items-center flex-wrap">
                    <IconBrandInstagram stroke={2} />
                    <span>{brand_Info.social_links[2].display_content}</span>
                  </div>
                </a>
                <a
                  className="text-white hover:scale-105 hover:text-[#E1EBE2] transition-all duration-300 ease-in-out"
                  href={`${socialMedialinks[0].link}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="flex space-x-2 items-center flex-wrap">
                    <IconBrandFacebook stroke={2} />
                    <span>{socialMedialinks[0].name}</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-[0.5px] opacity-30 bg-[#fff]"></div>
      <div className=" p-4 py-3 text-sm lg:text-base flex sm:flex-row flex-col space-y-3 sm:space-y-0 justify-between text-white  w-full items-center">
        <div className="flex justify-center items-center flex-1 ">
          <h1 className="text-center">Copyright &copy; {year} Med Games</h1>
        </div>
        <div className=" flex flex-1 space-x-6 justify-center items-center">
          <Link href={"/privacy-policy"}>Privacy Policy</Link>

          <h1>Terms of Service</h1>
        </div>
      </div>
    </div>
  );
};

export default Footer;
