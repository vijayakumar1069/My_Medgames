import React from "react";
import Link from "next/link";
import { IconHome, IconChevronRight } from "@tabler/icons-react";

const Breadcrumb = ({ items = [],headingTextColor }) => {

  return (
    <nav className="flex items-center space-x-2 p-1 flex-wrap space-y-2 md:space-y-0 justify-center text-gray-700" aria-label="Breadcrumb">
      {/* Home Link */}
      <Link href="/" className={`flex items-center mt-2 md:mt-0 ${headingTextColor?headingTextColor:"text-white"} hover:underline`}>
        <IconHome stroke={1.5} className="h-5 w-5 mr-1" />
        Home
      </Link>

      {/* Dynamic Breadcrumb Items */}
      {items.map((item, index) => (
        <React.Fragment key={index}>
          <IconChevronRight stroke={1.5} className={`${headingTextColor?headingTextColor:"text-white"} h-4 w-4`} />
          {item.href ? (
            <Link href={item.href} className={`${headingTextColor?headingTextColor:"text-white"} hover:underline`}>
              {item.label}
            </Link>
          ) : (
            <span className={`${headingTextColor?headingTextColor:"text-white"}`}>{item.label}</span>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
};

export default Breadcrumb;
