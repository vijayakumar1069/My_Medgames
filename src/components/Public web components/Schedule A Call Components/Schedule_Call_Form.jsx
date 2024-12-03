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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CalendarIcon, Clock } from "lucide-react";
import { format } from "date-fns";
import Image from "next/image";
import { PlusCircle, Trash2 } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useState } from "react";
import { useRequest } from "@/components/custom hooks/useRequest";
import { submitContactInquiry } from "@/app/actions/contact_us_schedule_a_call_fun";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z
    .string()
    .min(10, { message: "Phone number must be at least 10 digits." })
    .max(15, { message: "Phone number cannot exceed 15 digits." }),
  preferredContact: z
    .string()
    .min(1, { message: "Please select a contact method." }),
  schedules: z
    .array(
      z.object({
        date: z.date({
          required_error: "Please select a date.",
        }),
        fromTime: z.string().min(1, { message: "Please select start time." }),
        toTime: z.string().min(1, { message: "Please select end time." }),
      })
    )
    .min(1, { message: "Please add at least one schedule." }),
});

const Schedule_Call_Form = () => {
    const searchparams=useSearchParams();
    const[name,setName]=useState(searchparams.get("name"));
    const [email, setEmail]=useState(searchparams.get("email"));
    const [phone, setPhone]=useState(searchparams.get("phone"));
    const router=useRouter();
    const{loading,success,error,sendRequest}=useRequest();
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: name==undefined?"":name,
      email: email==undefined?"":email,
      phone:phone==undefined?"":phone,
      preferredContact: "",
      schedules: [{ date: undefined, fromTime: "", toTime: "" }],
    },
  });


  // Function to add new schedule
  const addSchedule = () => {
    const currentSchedules = form.getValues("schedules");
    form.setValue("schedules", [
      ...currentSchedules,
      { date: undefined, fromTime: "", toTime: "" },
    ]);
  };

  // Function to remove schedule
  const removeSchedule = (index) => {
    const currentSchedules = form.getValues("schedules");
    if (currentSchedules.length > 1) {
      const newSchedules = currentSchedules.filter((_, i) => i !== index);
      form.setValue("schedules", newSchedules);
    }
  };

  const onSubmit = async (data) => {
    try {
    
      const res=await sendRequest(() => submitContactInquiry({userData: data,inquiryType:"schedule"}));
      form.reset({
        name: "",
        email: "",
        phone: "",
        preferredContact: "",
        schedules: [{ date: undefined, fromTime: "", toTime: "" }],
      });
      setName("");
      setEmail("");
      setPhone("");
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <Suspense fallback={<div>Loading...</div>}>
      
    <div className="flex justify-center items-center w-full h-full bg-white">
      <div className="flex flex-col slg:flex-row space-x-5 lg:w-full w-full max-w-7xl shadow-lg rounded-lg overflow-hidden bg-white">
        {/* Image Section */}
        <div className="relative hidden slg:inline-flex flex-shrink-0 slg:flex-1 w-full p-10 h-[500px] slg:h-auto">
          <Image
            src="/schedule_a_call_image.png"
            fill
            sizes="100vw"
            priority
            className="object-cover object-center w-full h-full"
            alt="Schedule Call Background"
          />
        </div>

        {/* Form Section */}
        <div className="flex-1 p-6 flex flex-col space-y-4">
          <div className="w-full flex flex-col space-y-4 justify-center items-center">
            <h1 className="text-white xl:text-xl md:text-lg bg-[#4F9F76] px-4 py-2 rounded-full">
              Schedule a Call
            </h1>
            <div className="max-w-sm text-center">
              <p className="text-black font-bold text-2xl">
                Book Your Consultation Now
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

              {/* Preferred Contact Method */}
              <FormField
                control={form.control}
                name="preferredContact"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Preferred Way to Connect</FormLabel>
                    <FormControl>
                      <Select
                        onValueChange={field.onChange}
                        value={field.value}
                      >
                        <SelectTrigger className="focus_none">
                          <SelectValue placeholder="Select contact method" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="phone">Phone Call</SelectItem>
                          <SelectItem value="email">Email</SelectItem>
                          <SelectItem value="zoom">Zoom Meeting</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <FormLabel>Available Dates and Times</FormLabel>
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    onClick={addSchedule}
                    className="text-[#274E49]"
                  >
                    <PlusCircle className="w-5 h-5" />
                    <span className="">Add Another Schedule</span>
                  </Button>
                </div>

                {form.watch("schedules").map((schedule, index) => (
                  <div
                    key={index}
                    className="space-y-4 p-4 border rounded-lg relative"
                  >
                    {index > 0 && (
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        onClick={() => removeSchedule(index)}
                        className="absolute top-2 right-2 text-red-500"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    )}

                    {/* Date Picker */}
                    <FormField
                      control={form.control}
                      name={`schedules.${index}.date`}
                      render={({ field }) => (
                        <FormItem className="flex flex-col">
                          <FormLabel>Date {index + 1}</FormLabel>
                          <Popover>
                            <PopoverTrigger asChild>
                              <Button
                                variant={"outline"}
                                className={`w-full justify-start text-left font-normal ${
                                  !field.value && "text-muted-foreground"
                                }`}
                              >
                                <CalendarIcon className="mr-2 h-4 w-4" />
                                {field.value
                                  ? format(field.value, "PPP")
                                  : "Select date"}
                              </Button>
                            </PopoverTrigger>
                            <PopoverContent
                              className="w-auto p-0"
                              align="start"
                            >
                              <Calendar
                                mode="single"
                                selected={field.value}
                                onSelect={field.onChange}
                                disabled={(date) =>
                                  date < new Date() ||
                                  date < new Date("1900-01-01")
                                }
                                initialFocus
                              />
                            </PopoverContent>
                          </Popover>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* Time Range */}
                    <div className="grid grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name={`schedules.${index}.fromTime`}
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>From Time</FormLabel>
                            <FormControl>
                              <Input
                                type="time"
                                className="focus_none"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name={`schedules.${index}.toTime`}
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>To Time</FormLabel>
                            <FormControl>
                              <Input
                                type="time"
                                className="focus_none"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>
                ))}
              </div>
              {error && <p className="text-red-500">{error}</p>}
              {success && <p className="text-green-500">{success}</p>}
              {/* Submit Button */}
              <Button  disabled={loading} className="w-full bg-[#4F9F76]/80 hover:bg-[#4F9F76]">
                {loading ?"Scheduling ":"Schedule a Call"}
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
      </Suspense>
  );
};

export default Schedule_Call_Form;
