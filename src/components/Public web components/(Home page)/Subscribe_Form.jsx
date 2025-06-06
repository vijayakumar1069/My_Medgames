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
import { useRequest } from "@/components/custom hooks/useRequest";
import { subscribeAction } from "@/app/actions/subscribe_fun";

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
  const { loading, success, error, sendRequest } = useRequest();
  const onSubmit = async (data) => {
    const res = await sendRequest(() => subscribeAction(data.email));

    if (res.success) {
      form.reset();
    }
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
                <Input
                  className="bg-white rounded-md"
                  placeholder="example@example.com"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
   

        <Button
          type="submit"
          className="relative overflow-hidden bg-[#E1EBE2] w-fit text-[#4F9F76] hover:text-white px-4 py-2 rounded-md group"
        >
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-full bg-[#4F9F76]  rounded-md group-hover:w-full transition-all duration-500 ease-in-out" />
          <span className="relative z-10">{loading ? "Loading..." : "Subscribe"}</span>
        </Button>
      </form>
      {success && <p className="text-green-500 mt-1">{success}</p>}
      {error && <p className="text-red-500 mt-1">{error}</p>}
    </Form>
  );
};

export default Subscribe_Form;
