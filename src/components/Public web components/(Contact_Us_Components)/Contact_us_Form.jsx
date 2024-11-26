"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { z } from "zod";
import { useRouter } from "next/navigation";

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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogDescription,
} from "@/components/ui/dialog";
import Image from "next/image";
import Contact_Us_card from "./Contact_Us_card";
import { brand_Info } from "@/utils/constvalues";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z
    .string()
    .min(10, { message: "Phone number must be at least 10 digits." })
    .max(15, { message: "Phone number cannot exceed 15 digits." }),
  course: z.string().min(1, { message: "Please select a course." }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters." }),
});

const Contact_us_Form = () => {
  const router = useRouter();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      course: "",
      message: "",
    },
  });

  const onSubmit = (data) => {
    console.log(data);
    setIsDialogOpen(true); // Open the confirmation dialog
  };

  const handleYesClick = () => {
    const data = form.getValues(); // Get form values
    const params = new URLSearchParams({
      name: data.name,
      email: data.email,
      phone: data.phone,
    });
    setIsDialogOpen(false);
    router.push(`/schedule-a-call?${params.toString()}`); // Redirect with query parameters
  };

  const handleNoClick = () => {
    setIsDialogOpen(false);
    form.reset(); // Reset the form
  };

  return (
    <div className="flex justify-center items-center w-full h-full bg-white">
      <div className="flex flex-col slg:flex-row space-x-5 lg:w-full w-full max-w-7xl shadow-lg rounded-lg overflow-hidden bg-white">
        {/* Image Section */}
        <div className="relative hidden slg:inline-flex flex-shrink-0 slg:flex-1 w-full p-10 h-[500px] slg:h-auto">
          <Image
            src="/contact_us_bg.png"
            fill
            sizes="100vw"
            priority
            className="object-cover object-center w-full h-full"
            alt="Contact Us Background"
          />
        </div>

        {/* Form Section */}
        <div className="flex-1 p-6 flex flex-col space-y-4">
          <div className="w-full flex flex-col space-y-4 justify-center items-center">
            <h1 className="text-white xl:text-xl md:text-lg bg-[#4F9F76] px-4 py-2 rounded-full">
              Medical Education for All
            </h1>
            <div className="max-w-sm text-center">
              <p className="text-black font-bold text-2xl">
                Access a Complimentary Medical Course Connect with Us
              </p>
            </div>
          </div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              {/* Name Field */}
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input
                        className="focus_none"
                        placeholder="Your Name"
                        {...field}
                      />
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
                      <Input
                        className="focus_none"
                        type="email"
                        placeholder="Your Email"
                        {...field}
                      />
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
                        type="tel"
                        className="focus_none"
                        placeholder="Your Phone Number"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* Your Course Field */}
              <FormField
                control={form.control}
                name="course"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Your Course</FormLabel>
                    <FormControl>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <SelectTrigger className="rounded-none focus_none focus-none focus:outline-none focus-visible:ring-0 bodrer-b-2">
                          <SelectValue
                            className="focus_none focus:outline-none"
                            placeholder="Select a course"
                          />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="medicine">Medicine</SelectItem>
                          <SelectItem value="pharmacy">Pharmacy</SelectItem>
                          <SelectItem value="nursing">Nursing</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* Message Field */}
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Your Message"
                        className="focus_none"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* Submit Button */}
              <Button
                className="w-full bg-[#4F9F76] hover:bg-[#4F9F76]/80"
                type="submit"
              >
                Submit
              </Button>
            </form>
          </Form>
          <div className="grid grid-cols-3 lg:max-w-48 mx-auto justify-items-center  gap-x-4 gap-y-2">
          {brand_Info.social_links.map((item, index) => (
            <Contact_Us_card key={`${item.id}-${index}`} item={item} />
          ))}
        </div>
        </div>
      </div>

      {/* Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Would you like to schedule a call?</DialogTitle>
            <DialogDescription>
              Click &quot;Yes&quot; to schedule a call with your entered
              details.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button onClick={handleYesClick} className="bg-green-600">
              Yes
            </Button>
            <Button onClick={handleNoClick} className="bg-red-600">
              No
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Contact_us_Form;
