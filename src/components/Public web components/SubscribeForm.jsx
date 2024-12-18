"use client"

import React from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
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


// Zod validation schema
const subscribeSchema = z.object({
  email: z.string()
    .min(1, { message: "Email is required" })
    .email({ message: "Invalid email address" })
})

const SubscribeForm = ({ onSubmit }) => {
  // Initialize the form with zod resolver
  const form = useForm({
    resolver: zodResolver(subscribeSchema),
    defaultValues: {
      email: ""
    }
  })

  // Handle form submission
  const handleSubmit = async (data) => {
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))
      
      // Call the onSubmit prop with the email
      onSubmit(data.email)
      
     

      form.reset()
    } catch (error) {
      
    }
  }

  return (
    <div className="w-full  rounded-xl">
      <Form {...form}>
        <form 
           onSubmit={form.handleSubmit(handleSubmit)} 
          className="space-y-6"
        >
          

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div className="relative">
                    <Input 
                      placeholder="Enter your email"
                      {...field}
                      className="pl-10 py-6 border-b-[1px] rounded-none border-[#4F9F76] focus:ring-2 focus:ring-[#4F9F76]/50 transition-all duration-300"
                    />
                    <div className="absolute left-1 top-1/2 transform -translate-y-1/2 text-[#4F9F76]">
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="24" 
                        height="24" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                      >
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                        <polyline points="22,6 12,13 2,6"></polyline>
                      </svg>
                    </div>
                  </div>
                </FormControl>
                <FormMessage className="text-red-500 text-xs mt-1" />
              </FormItem>
            )}
          />

          <Button 
            type="submit" 
            className="w-full bg-[#4F9F76] hover:bg-[#3D8A5F] transition-colors duration-300 py-6 text-base"
            disabled={form.formState.isSubmitting}
          >
            {form.formState.isSubmitting ? "Subscribing..." : "Subscribe Now"}
          </Button>
        </form>
      </Form>
    </div>
  )
}

export default SubscribeForm
