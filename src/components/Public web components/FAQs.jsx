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
    const imgs=[
        {
            id:1,
            src:"/s1.png",
            alt:"s1"
        },
        {
            id:2,
            src:"/s2.png",
            alt:"s2"
        },
        {
            id:3,
            src:"/s3.png",
            alt:"s3"
        }
    ]
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
                <AccordionTrigger className="w-full text-lg font-medium text-black">
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
      <div className="max-w-7xl mx-auto">
        <div className="bg-[#376F5F] text-white p-10 rounded-md flex ">
          <div className="flex-1 ">
            <div className="flex flex-col space-y-5">
              <Small_Title title="Get Started" color={"white"} />
              <Large_Title
                title="Start Your Courses Today!"
                color={"white"}
                text={true}
                left={true}
              />
              <p className="text-white  text-wrap max-w-2xl">
                Unlock your potential and excel in your medical studies with
                expert guidance from professional medical tutors. Whether
                you&asop;re preparing for medical exams or need
              </p>
              <div className="flex justify-start space-x-5">
                <Button className="bg-[#E1EBE2] text-[#4F9F76] px-8 py-2 rounded-md flex ">
                  Get Started
                </Button>
                <Button className="bg-[#E1EBE2] text-[#4F9F76] px-8 py-2 rounded-md flex ">
                  Try Now
                </Button>
              </div>
              <div className="flex relative items-center space-x-5 ">
                <div className="relative flex ">

                {
                    imgs.map((item,index)=>(
                        <Avatar_Creation key={item.id} item={item}/>
                    ))
                }
                </div>
                <p>Trusted by over 30K students</p>

              </div>
            </div>
          </div>
          <div className="flex-1">
            <h1>Start Your Courses Today!</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQs;
