"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
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
import { courses_titles } from "@/utils/constvalues";

// Define the schema
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z
    .string()
    .min(10, { message: "Phone number must be at least 10 digits." })
    .max(15, { message: "Phone number cannot exceed 15 digits." }),

  courseCategory: z.string().min(1, {
    message: "Please select a course category.",
  }),
});

const Consultation_Form = () => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      courseCategory: "", // default value
    },
    mode: "onChange" // Validate on change
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className=" bg-white absolute xl:bottom-0 xl:right-0 xl:p-20 lg:p-14 p-10 sm:p-20  shadow-lg mt-10 xl:mt-0 md:w-[500px] sm:w-[600px] w-full flex flex-col space-y-6"
      >
        {/* Username Field */}
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input 
                  placeholder="Your name" 
                  {...field}
                  value={field.value || ''} // Ensure controlled input
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input 
                  type="email" 
                  placeholder="Your Email" 
                  {...field}
                  value={field.value || ''} // Ensure controlled input
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

<FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone Number</FormLabel>
              <FormControl>
                <Input 
                  placeholder="1234567890" 
                  {...field}
                  value={field.value || ''} // Ensure controlled input
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Course Category Field */}
        <FormField
          control={form.control}
          name="courseCategory"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Course Category</FormLabel>
              <FormControl>
                <Select
                  onValueChange={field.onChange}
                  value={field.value || ''} // Ensure controlled select
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select a course category" />
                  </SelectTrigger>
                  <SelectContent>
                    {courses_titles.map((course, index) => (
                      <SelectItem key={index} value={course}>
                        {course}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button className="bg-white w-fit text-[#4F9F76] hover:text-white border-[#4F9F76] border-2 px-4 py-2 rounded-md hover:bg-[#4F9F76]/80">
          Submit
        </Button>
      </form>
    </Form>
  );
};
export default Consultation_Form;
