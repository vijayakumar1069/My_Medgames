"use client";

import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion"; // Import Framer Motion
import { Button } from "../ui/button";
import { IconX, IconMenu2 } from "@tabler/icons-react";
import { navbarvalues } from "@/utils/constvalues";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";

// Variants for individual navbar items in the drawer
const itemVariants = {
  hidden: { opacity: 0, x: -50, scale: 0.9 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

// Variants for the list to control staggering
const listVariants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.15,
    },
  },
};

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <div className="bg-[#4F9F76] fixed top-0 left-0 right-0 z-50  font-Manrope w-full h-20 flex overflow-x-hidden">
      <div className="lg:w-[1400px]  w-full px-5 md:px-12 lg:px-10 flex mx-auto items-center justify-between">
        {/* Logo and Title */}
        <div className="flex space-x-2 items-center">
          <Image
            src="/logo.png"
            alt="logo"
            width={40}
            height={40}
            // style={{ height: "auto",width:"auto" }} // Ensures the aspect ratio is maintained
          />
          <h1 className="text-xl text-white">Med Games</h1>
        </div>

        {/* Desktop Navbar Links */}
        <div className="hidden lg:inline-block">
          <ul>
            {navbarvalues.map((item) => (
              <li
                className="inline-block mx-2 text-base  sm:text-base text-white"
                key={item.id}
              >
                <a href={item.link}>{item.name}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Desktop "Get Started" Button */}
        <div className="hidden lg:inline-block">
          <Button className="bg-transparent text-white px-2 py-2 rounded-md hover:bg-transparent hover:text-white border">
            Get Started
          </Button>
        </div>

        {/* Mobile Hamburger Icon with Drawer */}
        <div className="lg:hidden inline-block">
          <Drawer
            open={isDrawerOpen}
            onOpenChange={setIsDrawerOpen}
            className="relative"
            direction="right"
          >
            <DrawerTrigger asChild>
              <IconMenu2
                stroke={3}
                className="text-white cursor-pointer"
                onClick={() => setIsDrawerOpen(true)}
              />
            </DrawerTrigger>

            <DrawerContent side="right">
              <DrawerHeader>
                <VisuallyHidden.Root>
                  <DrawerTitle>Menu</DrawerTitle>
                </VisuallyHidden.Root>

                <DrawerClose asChild className="absolute right-4 top-4">
                  <Button variant="outline">
                    <IconX stroke={2} />
                  </Button>
                </DrawerClose>
              </DrawerHeader>

              {/* Drawer Navbar Items with Framer Motion */}
              <motion.ul
                className="mt-4 space-y-2 flex flex-col justify-center items-center w-full"
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={listVariants}
              >
                {navbarvalues.map((item) => (
                  <motion.li
                    key={item.id}
                    className="text-lg text-gray-700"
                    variants={itemVariants}
                    whileHover={{ scale: 1.1, color: "#4F9F76" }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <a href={item.link} className="block px-4 py-2">
                      {item.name}
                    </a>
                  </motion.li>
                ))}
              </motion.ul>

              {/* Get Started Button in Drawer */}
              <motion.div
                className="mt-4 px-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <Button className="w-full bg-transparent text-black bg-[#4F9F76] px-8 py-2 rounded-md hover:bg-[#4F9F76] border">
                  Get Started
                </Button>
              </motion.div>
            </DrawerContent>
          </Drawer>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
