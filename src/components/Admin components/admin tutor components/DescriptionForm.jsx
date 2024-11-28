"use client"

import { 
  Form, 
  FormControl, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage 
} from "@/components/ui/form"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"

const descriptionSchema = z.object({
  description: z.string().min(10, "Description must be at least 10 characters"),
  rating: z.coerce.number().min(0).max(5).optional(),
  reviews: z.coerce.number().optional()
})

export function DescriptionForm({ onUpdate, initialValues = {}  }) {
  const form = useForm({
    resolver: zodResolver(descriptionSchema),
    defaultValues: {
      description: initialValues.description || "",
      rating: initialValues.rating || 0,
      reviews: initialValues.reviews || 0
    }
  })

  const onSubmit = (data) => {
    onUpdate(data)
  }

  return (
    <Form {...form}>
      <form 
        onSubmit={form.handleSubmit(onSubmit)} 
        className="space-y-4 p-4"
      >
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Tutor Description</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Write a brief description about the tutor"
                  className="min-h-[120px]"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="grid grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="rating"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Rating</FormLabel>
                <FormControl>
                  <Input 
                    type="number" 
                    placeholder="Rating out of 5" 
                    {...field} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="reviews"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Number of Reviews</FormLabel>
                <FormControl>
                  <Input 
                    type="number" 
                    placeholder="Total reviews" 
                    {...field} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
           <Button type="submit" className="w-full">
          Save Description Details
        </Button>
      </form>
    </Form>
  )
}
