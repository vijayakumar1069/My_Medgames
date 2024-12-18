"use client";
import { Button } from "@/components/ui/button";
import DOMPurify from "dompurify";
import Link from "next/link";
import { useEffect } from "react";
import Contact_Us_card from "../(Contact_Us_Components)/Contact_Us_card";
import { brand_Info } from "@/utils/constvalues";

export function DocumentViewer({ documentContent }) {
  useEffect(() => {
    if (typeof window !== "undefined") {
      return;
    }
  }, []);
  // Sanitize HTML to prevent XSS
  const sanitizedHtml = DOMPurify.sanitize(documentContent.html, {
    ADD_TAGS: ["mark"],
    ADD_ATTR: ["target"],
  });

  return (
    <div className="document-container">
      <div
        className="prose max-w-full font-Manrope"
        dangerouslySetInnerHTML={{ __html: sanitizedHtml }}
      />
      <div className="flex w-full justify-between items-center md:flex-row flex-col space-y-4 md:space-y-0 md:space-x-4 mt-4">
        <div className=" mt-2 flex justify-center items-center">
          <Link href={"/blog"}>
            <Button
              variant="outline"
              className="w-fit bg-[#4F9F76] hover:bg-[#3F7F5B] hover:text-white text-white"
            >
              Read More Blogs
            </Button>
          </Link>
        </div>

        <div className=" flex flex-col items-center space-y-3 ">
        
          <div className="grid grid-cols-3 lg:max-w-48 mx-auto justify-items-center  gap-x-4 gap-y-2">
          {brand_Info.social_links.map((item, index) => (
            <Contact_Us_card key={`${item.id}-${index}`} item={item} />
          ))}
        </div>
        </div>
      </div>
    </div>
  );
}
