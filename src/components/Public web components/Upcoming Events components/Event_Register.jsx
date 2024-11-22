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
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";

// Define validation schema
const formSchema = z.object({
  fullName: z.string().min(2, { message: "Full Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z
    .string()
    .min(10, { message: "Phone number must be at least 10 digits." })
    .max(15, { message: "Phone number cannot exceed 15 digits." }),
  essayTitle: z.string().min(10, { message: "Essay Title/Topic must be at least 10 characters." }),
  acceptTerms: z.boolean().refine((value) => value === true, {
    message: "You must accept the terms and conditions.",
  }),
});

const Event_Register = () => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      essayTitle: "",
      acceptTerms: false,
    },
  });

  const onSubmit = (data) => {
    console.log(data);
  };
  const handleformReset = () => {
    form.reset();
  };

  return (
    <div className="flex justify-center items-center w-full h-full bg-white p-6">
      <div className="flex flex-col w-full max-w-xl bg-white shadow-md rounded-lg p-6 space-y-6">
        <h1 className="text-xl font-bold text-center text-[#4F9F76]">Make a Difference – Join the Event</h1>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {/* Full Name Field */}
            <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input className="border rounded-md" placeholder="Your Full Name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* Email Field */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input className=" border rounded-md" type="email" placeholder="Your Email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* Phone Field */}
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone</FormLabel>
                  <FormControl>
                    <Input
                      className="border rounded-md"
                      type="tel"
                      placeholder="Your Phone Number"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* Essay Title/Topic Field */}
            <FormField
              control={form.control}
              name="essayTitle"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Essay Title/Topic</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Your Essay Title/Topic"
                      className="border rounded-md"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* Accept Terms Checkbox */}
            <FormField
              control={form.control}
              name="acceptTerms"
              render={({ field }) => (
                <FormItem className="flex items-center space-x-2">
                  <FormControl>
                    <Checkbox
                      id="acceptTerms"
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <FormLabel
                    htmlFor="acceptTerms"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    I agree to the competition&apos;s terms and conditions
                  </FormLabel>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* Submit Button */}
            <div className="flex max-w-xs space-x-2 ">
            <Button type="submit"  className="w-full bg-[#4F9F76]/80 hover:bg-[#274E49]">
              Submit
            </Button>
            <button type="button" onClick={()=>handleformReset()} className="w-full text-black bg-[#4F9F76]/40 rounded-md hover:bg-[#4F9F76]">
              Cancel
            </button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default Event_Register;
