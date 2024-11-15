"use client";

import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { IconPlus, IconMinus } from "@tabler/icons-react";

const Accordion = AccordionPrimitive.Root;

const AccordionItem = React.forwardRef(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn(" ", className)}
    {...props}
  />
));
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = React.forwardRef(
  ({ className, children, ...props }, ref) => (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        ref={ref}
        className={cn(
          "flex flex-1 items-center justify-between group py-4 text-base  transition-all font-Manrope text-left ",
          className
        )}
        {...props}
      >
        {children}
        {/* Conditionally render IconPlus or IconMinus based on the data-state attribute */}
        <span className="h-4 w-4 shrink-0 text-neutral-500 transition-transform duration-200 dark:text-neutral-400">
          {/* {props['data-state'] === "open" ? <IconMinus stroke={2} /> : <IconPlus stroke={2} />} */}
          <IconPlus
            stroke={2}
            className="h-6 w-6 shrink-0 transition-transform duration-200 group-data-[state=open]:hidden text-[#376F5F] bg-[#E1EBE2] rounded-full p-1"
          />
          <IconMinus
            stroke={2}
            className="h-6 w-6 shrink-0 transition-transform duration-200 group-data-[state=closed]:hidden text-[#fff] bg-[#4F9F76] rounded-full p-1"
          />
        </span>
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  )
);
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = React.forwardRef(
  ({ className, children, ...props }, ref) => (
    <AccordionPrimitive.Content
      ref={ref}
      className="overflow-hidden text-sm sm:text-base data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
      {...props}
    >
      <div className={cn("pb-4 pt-0", className)}>{children}</div>
    </AccordionPrimitive.Content>
  )
);
AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
