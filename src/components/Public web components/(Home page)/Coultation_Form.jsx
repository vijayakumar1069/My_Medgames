"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// Define the schema
const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  phone: z.string().regex(/^\d{10}$/, {
    message: "Phone number must be 10 digits.",
  }),
  courseCategory: z.string().min(1, {
    message: "Please select a course category.",
  }),
})

const Consultation_Form = () => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      courseCategory: "", // default value
    },
  })

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className=" bg-white absolute xl:bottom-0 xl:right-0 xl:p-20 lg:p-14 p-10 sm:p-20  shadow-lg mt-10 xl:mt-0 md:w-[500px] sm:w-[600px] w-full flex flex-col space-y-6">
        {/* Username Field */}
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Phone Number Field */}
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone Number</FormLabel>
              <FormControl>
                <Input placeholder="1234567890" {...field} />
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
                  defaultValue={field.value}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select a course category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="medical">Medical</SelectItem>
                    <SelectItem value="engineering">Engineering</SelectItem>
                    <SelectItem value="arts">Arts</SelectItem>
                    <SelectItem value="science">Science</SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>
             
              <FormMessage />
            </FormItem>
          )}
        />

        <Button  className="bg-[#fff] w-fit text-[#4F9F76] border-[#4F9F76] border-2 px-4 py-2 rounded-md hover:bg-[#4F9F76]/80">Submit</Button>
      </form>
    </Form>
  )
}
export default Consultation_Form