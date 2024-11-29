"use client";
import React from 'react';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

// Zod validation schema
const formSchema = z.object({
  phoneNumber: z.string()
    .min(10, { message: "Phone number must be at least 10 digits" })
    .max(15, { message: "Phone number cannot exceed 15 digits" })
});

const HeroCallbackForm = () => {
  // Initialize form
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      phoneNumber: ""
    }
  });

  // Submit handler
  const onSubmit = (data) => {
    console.log("Phone Number:", data.phoneNumber);
    // Add your call request logic here
  };

  return (
    <div className="w-full max-w-md ">
      <form 
        onSubmit={form.handleSubmit(onSubmit)} 
        className="flex items-center bg-white shadow-md rounded-full overflow-hidden border space-x-1 border-gray-200"
      >
        {/* Input Field */}
        <div className="flex-grow p-1">
          <input 
            type="tel" 
            placeholder="Enter your mobile number" 
            {...form.register('phoneNumber')}
            className="w-full focus:outline-none text-gray-700 px-3 placeholder-gray-500"
          />
          {form.formState.errors.phoneNumber && (
            <p className="text-red-500 text-sm mt-1">
              {form.formState.errors.phoneNumber.message}
            </p>
          )}
        </div>

        {/* Vertical Separator */}
        <div className="h-8 border-[1px] border-[#29282B]"></div>

        {/* Request Call Button */}
        <button 
          type="submit" 
          className="px-3 py-3 bg-none font-bold sm:text-base text-sm text-[#29282B] transition-colors"
        >
          Request Call
        </button>
      </form>
    </div>
  );
};

export default HeroCallbackForm;
