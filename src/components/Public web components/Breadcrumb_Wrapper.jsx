"use client";
import React from 'react';
import Breadcrumb from './Breadcrumb';
import { usePathname } from 'next/navigation';
import { navbarvalues } from '@/utils/constvalues';

const Breadcrumb_Wrapper = ({headingTextColor}) => {
  const pathname = usePathname(); // Get the current pathname

  // Extract the dynamic segments (slugs) from the pathname
  const segments = pathname.split('/').filter(Boolean); // Split the pathname into parts
  const slug = segments[segments.length - 1]; // Assuming the slug is the last part

  // Find the current page based on the pathname
  let heading = navbarvalues.filter((item) => item.link === pathname);

  // If no exact match is found, try to find the page dynamically based on the slug
  if (heading.length === 0 && slug) {
    heading = navbarvalues.filter((item) =>
      item.link.includes('[slug]') // Match against the dynamic route, assuming the link includes a slug
    );
  }

  // Set the breadcrumbItems based on the filtered page and dynamic slug
  const breadcrumbItems = [
    { label: heading[0]?.name || "Page", href: null }, // Use dynamic name or fallback to "Page"
    // slug ? { label: slug, href: null } : null, // Add slug to breadcrumbs if available
  ].filter(Boolean); // Remove null values (in case no slug is present)

  return (
    <div className="absolute inset-0 z-10 flex flex-col items-center justify-center">
      <h1 className={`text-3xl font-bold ${headingTextColor?headingTextColor:"text-white"}`}>{heading[0]?.name}</h1>
      <div className="mt-4">
        <Breadcrumb items={breadcrumbItems} headingTextColor={headingTextColor}  />
      </div>
    </div>
  );
};

export default Breadcrumb_Wrapper;
