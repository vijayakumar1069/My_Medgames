"use client";

import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { IconX, IconMenu2, IconChevronDown } from "@tabler/icons-react";
import Link from "next/link";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
import { Button } from "@/components/ui/button";
import { navbarvalues } from "@/utils/constvalues";

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

// Organize navbar values by groups
const organizeNavbarValues = (navbarvalues) => {
  const regularItems = navbarvalues.filter(
    (item) => !item.group && item.name !== "Schedule A Call"
  );
  const groupItems = navbarvalues.filter((item) => item.group);
  const scheduleCallItem = navbarvalues.find(
    (item) => item.name === "Schedule A Call"
  );

  return {
    regularItems,
    groupItems,
    scheduleCallItem,
  };
};

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const { regularItems, groupItems, scheduleCallItem } =
    organizeNavbarValues(navbarvalues);

  // Close drawer when a link is clicked
  const handleLinkClick = () => {
    setIsDrawerOpen(false);
  };

  return (
    <div className="bg-[#4F9F76] f font-Manrope  h-20 flex ">
      <div className="w-full max-w-[1400px] px-4 md:px-8  mx-auto flex items-center justify-between">
        {/* Logo and Name Section */}
        <div className="flex items-center space-x-2">
          <Link href={"/"} className="flex items-center space-x-2">
            <Image
              src="/logo.png"
              alt="Med Games Logo"
              width={40}
              height={40}
            />
            <h1 className="text-xl font-bold text-white ">
              Med Games
            </h1>
          </Link>
        </div>

        {/* Navigation Links Section */}
        <div className="hidden lg:flex items-center justify-center flex-grow">
          <nav className="flex space-x-5">
            {regularItems.map((item) => (
              <Link
                key={item.id}
                href={item.link}
                className="text-base text-white  transition-colors"
              >
                {item.name}
              </Link>
            ))}

            {/* Grouped Items Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center text-white ">
                More <IconChevronDown className="ml-1" size={18} />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {groupItems.map((item) => (
                  <DropdownMenuItem key={item.id} asChild>
                    <Link href={item.link} className="cursor-pointer">
                      {item.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>
        </div>
        <div className="hidden lg:inline-flex">
          <Link href={scheduleCallItem.link}>
            <Button
              className="bg-transparent text-white px-2 py-2 rounded-md 
              hover:bg-white hover:text-[#4F9F76] 
              border border-white 
              transition-colors duration-300"
            >
              {scheduleCallItem.name}
            </Button>
          </Link>
        </div>
      {/* Mobile Menu Trigger */}
      <div className="lg:hidden top-10 ">
        <Drawer
          open={isDrawerOpen}
          onOpenChange={setIsDrawerOpen}
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

              <DrawerClose
                asChild
                className="absolute right-4 top-4"
                onClick={handleLinkClick}
              >
                <Button variant="outline">
                  <IconX stroke={2} />
                </Button>
              </DrawerClose>
            </DrawerHeader>

            {/* Mobile Menu Content */}
            <motion.ul
              className="mt-4 space-y-2 flex flex-col justify-center items-center w-full"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={listVariants}
            >
              {/* Regular Items */}
              {regularItems.map((item) => (
                <motion.li
                  key={item.id}
                  className="text-lg text-gray-700 w-full text-center"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, color: "#4F9F76" }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href={item.link}
                    className="inline-flex px-4 py-2 w-full justify-center"
                    onClick={handleLinkClick}
                  >
                    {item.name}
                  </Link>
                </motion.li>
              ))}

              {/* Grouped Items Dropdown */}
              <motion.li
                className="text-lg text-gray-700 w-full text-center"
                variants={itemVariants}
              >
                <DropdownMenu>
                  <DropdownMenuTrigger className="inline-flex items-center px-4 py-2 w-full justify-center hover:text-[#4F9F76]">
                    More <IconChevronDown className="ml-1" size={18} />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    {groupItems.map((item) => (
                      <DropdownMenuItem key={item.id} asChild>
                        <Link
                          href={item.link}
                          className="cursor-pointer"
                          onClick={handleLinkClick}
                        >
                          {item.name}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              </motion.li>

              {/* Mobile Schedule Call Button */}
              <motion.div className="mt-4 px-4 w-full" variants={itemVariants}>
                <Link
                  href={scheduleCallItem.link}
                  onClick={handleLinkClick}
                  className="w-full block"
                >
                  <Button className="w-full bg-[#4F9F76] text-white px-4 py-2 rounded-md hover:bg-[#3a7d5e] border">
                    {scheduleCallItem.name}
                  </Button>
                </Link>
              </motion.div>
            </motion.ul>
          </DrawerContent>
        </Drawer>
      </div>
      </div>
    </div>
  );
};

export default Navbar;
