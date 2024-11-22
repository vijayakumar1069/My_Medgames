"use client";
import React from 'react';
import Breadcrumb from './Breadcrumb';
import { usePathname } from 'next/navigation';
import { courses, navbarvalues, upcoming_events } from '@/utils/constvalues';

const Breadcrumb_Wrapper = ({ headingTextColor }) => {
  const pathname = usePathname(); // Get the current pathname

  // Extract the segments from the pathname
  const segments = pathname.split('/').filter(Boolean); // Split and filter empty strings

  // Find the base parent path (e.g., "/our-courses" or "/blog")
  const basePath = `/${segments[0]}`; // The first segment represents the parent path


  // Find the slug (last part of the path)
  let slug = segments.length > 1 ? decodeURIComponent(segments[segments.length - 1]) : null;
  console.log(slug)

  // Find the parent page in the navbar
  const parentPage = navbarvalues.find((item) => item.link === basePath);
  console.log(parentPage)

  if(parentPage.link =="/our-courses")
  {
    const findcurrentslug=courses.find((item) => item.id == slug);
    slug = findcurrentslug?.name;

  }
  if(parentPage.link =="/upcoming-events")
    {
      const findcurrentslug=upcoming_events.find((item) => item.id == slug);
      slug = findcurrentslug?.title;
  
    }
  

  // Build the breadcrumb items
  const breadcrumbItems = [

    parentPage ? { label: parentPage.name, href: parentPage.link } : null, // Add parent page
    slug ? { label: slug, href: null } : null, // Add the slug as the last breadcrumb if available
  ].filter(Boolean); // Remove null values

  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center">
      <h1 className={`text-3xl font-bold ${headingTextColor || "text-white"}`}>
        {slug || parentPage?.name || "Page"} {/* Display slug, parent name, or fallback */}
      </h1>
      <div className="mt-4">
        <Breadcrumb items={breadcrumbItems} headingTextColor={headingTextColor} />
      </div>
    </div>
  );
};

export default Breadcrumb_Wrapper;