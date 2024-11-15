import React from "react";
import Small_Title from "./Small_Title";
import Large_Title from "./Large_Title";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { accordion_details } from "@/utils/constvalues";
import { Button } from "../ui/button";
import Avatar_Creation from "./Avatar_Creation";


const FAQs = () => {
   
  return (
    <div className="w-full h-full bg-[#F4F6FC] font-Manrope flex flex-col space-y-8 px-5 py-10">
      <div className="flex w-full justify-center items-center flex-col space-y-5">
        <Small_Title title="FAQs" />
        <Large_Title title="Got Questions? We've Got Answers" />
      </div>

      <div className="w-full flex flex-col items-center ">
        <div className="w-full max-w-2xl px-6 bg-white rounded-xl">
          <Accordion type="single" collapsible className="w-full font-Manrope">
            {accordion_details.map((item, index) => (
              <AccordionItem
                key={item.id}
                value={item.id}
                className={`w-full ${
                  index !== accordion_details.length - 1
                    ? "border-b-2 border-gray-200"
                    : ""
                }`}
              >
                <AccordionTrigger className="w-full text-sm sm:text-base font-medium text-black">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="w-full">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    
    </div>
  );
};

export default FAQs;
