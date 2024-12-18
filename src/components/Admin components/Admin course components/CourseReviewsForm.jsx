import React from 'react'
import { useForm, useFieldArray } from 'react-hook-form'
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
// import { FileUpload } from "@/components/ui/file-upload"
import { Slider } from "@/components/ui/slider"
import { Trash2, Plus } from 'lucide-react'

// Reviews Schema
const reviewsSchema = z.object({
  reviews: z.array(
    z.object({
      name: z.string().min(1, "Reviewer name is required"),
      review: z.string().min(10, "Review must be at least 10 characters"),
      rating: z.number().min(1).max(5),
      avatar: z.instanceof(File).optional()
    })
  )
})

export function CourseReviewsForm() {
  const form = useForm({
    resolver: zodResolver(reviewsSchema),
    defaultValues: {
      reviews: [{ 
        name: '', 
        review: '', 
        rating: 5,
        avatar: null 
      }]
    }
  })

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "reviews"
  })

  const onSubmit = (data) => {
   
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        {fields.map((field, index) => (
          <div key={field.id} className="space-y-2 mb-4 p-4 border rounded">
            <FormField
              control={form.control}
              name={`reviews.${index}.name`}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Reviewer Name</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="Enter reviewer name" 
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name={`reviews.${index}.review`}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Review Content</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Enter review" 
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name={`reviews.${index}.rating`}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Rating</FormLabel>
                  <FormControl>
                    <Slider
                      defaultValue={[field.value]}
                      min={1}
                      max={5}
                      step={1}
                      onValueChange={(value) => field.onChange(value[0])}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name={`reviews.${index}.avatar`}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Reviewer Avatar</FormLabel>
                  <FormControl>
                    {/* <FileUpload 
                      onFileChange={field.onChange}
                      accept="image/*"
                    /> */}
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {fields.length > 1 && (
              <Button 
                type="button" 
                variant="destructive" 
                onClick={() => remove(index)}
              >
                <Trash2 className="mr-2 h-4 w-4" /> Remove Review
              </Button>
            )}
          </div>
        ))}
        
        <Button 
          type="button" 
          variant="outline" 
          onClick={() => append({ 
            name: '', 
            review: '', 
            rating: 5,
            avatar: null 
          })}
        >
          <Plus className="mr-2 h-4 w-4" /> Add Review
        </Button>

        <Button type="submit">Save Reviews</Button>
      </form>
    </Form>
  )
}
