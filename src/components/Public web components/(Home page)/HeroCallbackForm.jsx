"use client";
import React from 'react';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useRequest } from '@/components/custom hooks/useRequest';
import { create_req_call } from '@/app/actions/req_call_fun';
import { create } from '@/modals/tutors.modal';

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
  const { loading, success, error, sendRequest } = useRequest();

  // Submit handler
  const onSubmit = async (data) => {
    try {
      const res = await sendRequest(() =>
        create_req_call(data));

      // Close the confirmation dialog after 1 second and redirect to the schedule a call page with query parameters
      if (res.success) {
       form.reset();
      }
    } catch (error) {
      console.log(error);
    }

    // setIsDialogOpen(true); // Open the confirmation dialog
  };

  return (
    <div className="w-full max-w-md  ">
      <form 
        onSubmit={form.handleSubmit(onSubmit)} 
        className=""
      >
        <div className="flex items-center shadow-md bg-white rounded-full  overflow-hidden  space-x-1 border-gray-200">

        {/* Input Field */}
        <div className="flex-grow p-1">
          <input 
            type="tel" 
            placeholder="Enter your mobile number" 
            {...form.register('phoneNumber')}
            className="w-full focus:outline-none bg-transparent focus-visible:ring-0 text-gray-700 px-3 placeholder-gray-500"
          />
          {form.formState.errors.phoneNumber && (
            <p className="text-red-500 text-sm ml-5 mt-1">
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
        </div>
        <div className="">

      { error && <p className="text-white text-sm ml-5 mt-1">{error}</p>}
      {success && <p className="text-green-500 text-sm ml-5 mt-1">{success}</p>}
        </div>
      </form>
    </div>
  );
};

export default HeroCallbackForm;
