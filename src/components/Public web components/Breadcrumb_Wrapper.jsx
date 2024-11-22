"use client";
import React from "react";
import Breadcrumb from "./Breadcrumb";
import { usePathname } from "next/navigation";
import { courses, navbarvalues, upcoming_events } from "@/utils/constvalues";

const Breadcrumb_Wrapper = ({ headingTextColor }) => {
  const pathname = usePathname(); // Get the current pathname

  // Extract the segments from the pathname
  const segments = pathname.split("/").filter(Boolean); // Split and filter empty strings

  // Find the base parent path (e.g., "/our-courses" or "/upcoming-events")
  const basePath = `/${segments[0]}`; // The first segment represents the parent path

  // Find the parent page in the navbar
  const parentPage = navbarvalues.find((item) => item.link === basePath);

  let slug = null;

  if (parentPage?.link === "/our-courses") {
    // Handle the "our-courses" route
    if (segments[1]) {
      const course = courses.find((item) => item.id == segments[1]);
      slug = course?.name;
    }
  } else if (parentPage?.link === "/upcoming-events") {
    // Handle the "upcoming-events" route
    if (segments[1]) {
      const event = upcoming_events.find((item) => item.id == segments[1]);
      slug = event?.title;

      // Handle nested "register" path
      if (segments[2] === "events-register") {
        slug = `Register for ${event?.title || "Event"}`;
      }
    }
  }

  // Default to parentPage name if no slug found
  const label = slug || parentPage?.name || "Page";

  // Build the breadcrumb items
  const breadcrumbItems = [
    parentPage ? { label: parentPage.name, href: parentPage.link } : null, // Parent page
    segments[1]
      ? { label: slug || "Details", href: `${basePath}/${segments[1]}` }
      : null, // Event or Course Details
    segments[2]
      ? { label: `Register`, href: null } // Registration (no link)
      : null, // Add nested page label
  ].filter(Boolean); // Remove null values

  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center">
      {/* Page Heading */}
      <h1 className={`text-3xl font-bold ${headingTextColor || "text-white"}`}>
        {label}
      </h1>

      {/* Breadcrumb */}
      <div className="mt-4">
        <Breadcrumb items={breadcrumbItems} headingTextColor={headingTextColor} />
      </div>
    </div>
  );
};

export default Breadcrumb_Wrapper;
