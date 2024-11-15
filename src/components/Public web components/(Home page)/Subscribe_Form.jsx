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

// Define the schema
const subscribeSchema = z.object({
  email: z
    .string()
    .email({ message: "Enter a valid email address." })
    .nonempty({ message: "Email is required." }),
});

const Subscribe_Form = () => {
  const form = useForm({
    resolver: zodResolver(subscribeSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = (data) => {
    console.log(data); // You can replace this with your subscription logic
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="  flex flex-col md:flex-row md:space-x-3 w-full font-Manrope  md:items-center space-y-3 md:space-y-0"
      >
        {/* Email Field */}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
             
              <FormControl>
                <Input className="bg-white rounded-md" placeholder="example@example.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          className="bg-[#E1EBE2] w-fit text-[#4F9F76]  px-4 py-2 rounded-md hover:bg-[#4F9F76]/80"
        >
          Subscribe
        </Button>
      </form>
    </Form>
  );
};

export default Subscribe_Form;
