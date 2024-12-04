import React from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form"


// Instructor Schema
const instructorSchema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters"),
  bio: z.string().min(10, "Bio must be at least 10 characters"),
  image: z.instanceof(File).optional(),
  qualifications: z.array(z.string()).min(1, "At least one qualification is required")
})

export function CourseInstructorForm() {
  const form = useForm({
    resolver: zodResolver(instructorSchema),
    defaultValues: {
      name: '',
      bio: '',
      image: null,
      qualifications: ['']
    }
  })

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Instructor Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter instructor name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="bio"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Instructor Bio</FormLabel>
              <FormControl>
                <Textarea placeholder="Enter instructor bio" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="image"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Instructor Image</FormLabel>
              <FormControl>
              <Input name="file" type="file" 
                        // onFileChange={field.onChange}
                        accept=".pdf,.doc,.docx"
                      />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit">Save Instructor Details</Button>
      </form>
    </Form>
  )
}
