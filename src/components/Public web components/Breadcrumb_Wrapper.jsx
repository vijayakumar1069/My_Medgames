"use client";

import React from "react";
import Breadcrumb from "./Breadcrumb";
import { usePathname } from "next/navigation";
import { navbarvalues } from "@/utils/constvalues";

const Breadcrumb_Wrapper = ({ headingTextColor, pageTitle }) => {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);
  const basePath = `/${segments[0]}`;
  const parentPage = navbarvalues.find((item) => item.link === basePath);

  // Build breadcrumb items
  const breadcrumbItems = [
    parentPage && {
      label: parentPage.name,
      href: parentPage.link,
    },
    pageTitle && {
      label: pageTitle,
      href: null,
    },
  ].filter(Boolean);

  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center">
      {/* Page Heading */}
      <h1 className={`text-3xl font-bold ${headingTextColor || "text-white"}`}>
        {pageTitle || parentPage?.name || "Page"}
      </h1>

      {/* Breadcrumb */}
      <div className="md:mt-2">
        <Breadcrumb
          items={breadcrumbItems}
          headingTextColor={headingTextColor}
        />
      </div>
    </div>
  );
};

export default Breadcrumb_Wrapper;
