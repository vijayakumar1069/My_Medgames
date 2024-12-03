"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRequest } from "@/components/custom hooks/useRequest";
import submitJobApplication from "@/app/actions/job_Application_fun";

// Define the schema for the job application form
const formSchema = z.object({
  firstName: z.string().min(2, { message: "First name must be at least 2 characters." }),
  lastName: z.string().min(1, { message: "Last name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phoneNumber: z
    .string()
    .regex(/^\d{10}$/, { message: "Phone number must be 10 digits." }),
  position: z.string().min(1, { message: "Please select a position." }),
  address: z.string().min(5, { message: "Address must be at least 5 characters." }),
  city: z.string().min(2, { message: "City must be at least 2 characters." }),
  state: z.string().min(2, { message: "State must be at least 2 characters." }),
  zipcode: z
    .string()
    .regex(/^\d{5}$/, { message: "Zipcode must be 5 digits." }),
  resume: z
    .instanceof(File)
    .refine((file) => file.size <= 3 * 1024 * 1024, {
      message: "Resume file size must be less than 3MB.",
    }),
});

const Job_Application_Form = () => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      position: "",
      address: "",
      city: "",
      state: "",
      zipcode: "",
      resume: null,
    },
  });

  const{loading,success,error,sendRequest}=useRequest();

  const onReset = () => {
    // Reset all form values using react-hook-form
    form.reset();
  
    // Manually reset custom fields (Select and File input)
    form.setValue("position", ""); // Reset the position field in react-hook-form's state
    document.querySelector("input[type='file']").value = ""; // Reset File input
  };
  
  const onSubmit = async(data) => {
    console.log(data);

    try {
      const res=await sendRequest(() => submitJobApplication(data));

    } catch (error) {
      
    }
  
    // Reset form after submission
    form.reset();
    form.setValue("position", ""); // Reset the position field
    document.querySelector("input[type='file']").value = ""; // Reset File input
  };
  

  return (
    <div className="flex justify-center items-center w-full h-full bg-white py-5">
      <div className="relative w-full flex flex-col max-w-7xl md:flex-row space-y-8 md:space-y-0 md:space-x-8 bg-white shadow-lg rounded-xl p-2">
        {/* Image Section */}
        <div className="w-full aspect-square flex-1 bg-white shadow-2xl rounded-2xl overflow-hidden flex">
        {/* Image Section with Enhanced Quality and Animations */}
        <motion.div 
          className="w-full  relative overflow-hidden"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ 
            type: "spring", 
            stiffness: 100, 
            delay: 0.2 
          }}
        >
          <div className="absolute inset-0 z-10 bg-[#4F9F76] opacity-10"></div>
          
          {/* Image with Enhanced Quality */}
          <Image 
            src="/job_img2.png"
            alt="Job Application Background"
            fill
            priority
            quality={100}
            className="object-cover object-center transition-all duration-500 hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          
          {/* Overlay Content */}
          <div className="absolute bottom-0 left-0 right-0 p-6 z-20 bg-black/30 text-white">
            <motion.h2 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-2xl font-bold"
            >
              Join Our Team
            </motion.h2>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-sm"
            >
              Exciting opportunities await you!
            </motion.p>
          </div>
        </motion.div>
        </div>


        {/* Form Section */}
        <div className="w-full md:w-1/2 flex flex-col space-y-4">
          <h1 className="text-2xl font-semibold text-[#4F9F76] text-center">
            Job Application Form
          </h1>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 px-3 md:px-0">
                <div className="flex sm:flex-row sm:justify-between sm:space-x-3 sm:space-y-0 lg:flex-row flex-col  lg:justify-between lg:space-x-5 space-y-3 lg:space-y-0 lg:items-center w-full">

              {/* First Name Field */}
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[#1A1A1A]">First Name</FormLabel>
                    <FormControl>
                      <Input placeholder="John" {...field} className=" job_application_style flex-1 " />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Last Name Field */}
              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[#1A1A1A]">Last Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Doe" {...field} className=" job_application_style flex-1" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
                </div>

              {/* Email Field */}
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[#1A1A1A]">Email</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="you@example.com" {...field} className=" job_application_style " />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Phone Number Field */}
              <FormField
                control={form.control}
                name="phoneNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[#1A1A1A]">Phone Number</FormLabel>
                    <FormControl>
                      <Input type="tel" placeholder="1234567890" {...field} className=" job_application_style " />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Position Field */}
              <FormField
                control={form.control}
                name="position"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[#1A1A1A]">Position</FormLabel>
                    <FormControl>
                      <Select onValueChange={field.onChange} value={field.value} className=" job_application_style ">
                        <SelectTrigger>
                          <SelectValue placeholder="Select a position" className=" focus_none " />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="tutor">Tutor</SelectItem>
                          <SelectItem value="advertisement representative (Volunteer)">Advertisement Representative(Volunteer) </SelectItem>
                          {/* <SelectItem value="manager">Manager</SelectItem> */}
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Address Field */}
              <FormField
                control={form.control}
                name="address"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel  className="text-[#1A1A1A]">Address</FormLabel>
                    <FormControl>
                      <Input placeholder="123 Main St." {...field} className=" job_application_style " />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* City Field */}
              <FormField
                control={form.control}
                name="city"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[#1A1A1A]">City</FormLabel>
                    <FormControl>
                      <Input placeholder="City" {...field} className=" job_application_style "/>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* State Field */}
              <FormField
                control={form.control}
                name="state"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[#1A1A1A]">State</FormLabel>
                    <FormControl>
                      <Input placeholder="State" {...field} className=" job_application_style " />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Zipcode Field */}
              <FormField
                control={form.control}
                name="zipcode"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[#1A1A1A]">Zipcode</FormLabel>
                    <FormControl>
                      <Input placeholder="12345" {...field} className=" job_application_style " />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* File Upload Field */}
              <FormField
                control={form.control}
                name="resume"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[#1A1A1A]">Upload Resume <span className="text-xs text-red-500">(must be less than 3MB)</span></FormLabel>
                    <FormControl>
                      <Input type="file" accept=".pdf,.doc,.docx" onChange={(e) => field.onChange(e.target.files[0])} className=" job_application_style "/>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {success && <p className="text-green-500">Application submitted successfully!</p>}
              {error && <p className="text-red-500">{error}</p>}
              {/* Buttons */}
              <div className="flex md:space-x-4 md:space-y-0 justify-between md:flex-row flex-col space-y-3 w-full">
                <Button type="reset" disabled={loading}  onClick={onReset} className="w-full rounded-md bg-gray-400 hover:bg-red-400 px-3 py-3 text-white">
                  Reset Form
                </Button>
                <Button type="submit" disabled={loading} className="w-full bg-[#4F9F76] text-white hover:bg-[#376F5F]">
                  {loading ? "Submitting..." : "Submit"} 
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Job_Application_Form;
