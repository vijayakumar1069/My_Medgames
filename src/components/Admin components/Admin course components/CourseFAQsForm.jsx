import React from 'react'
import { useForm, useFieldArray } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import { Trash2, Plus } from 'lucide-react'

// Define the schema for questions and answers
const qaSchema = z.object({
  questions: z.array(
    z.object({
      question: z.string().min(1, 'Question is required'),
      answer: z.string().min(1, 'Answer is required')
    })
  ).min(1, 'At least one question is required'),
})

export function CourseFAQsForm ({
  onDataUpdate,
  currentData,
  setActiveTab,
}) {
  const form = useForm({
    resolver: zodResolver(qaSchema),
    defaultValues: {
      questions:currentData.questions|| [{ question: '', answer: '' }]
    }
  })

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: 'questions'
  })

  const onSubmit = (data) => {

    onDataUpdate(data)
    
    // Handle save logic here
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 h-fit">
        {fields.map((field, index) => (
          <div key={field.id} className="flex flex-col mb-4">
            <FormField
              control={form.control}
              name={`questions.${index}.question`}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Question</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your question"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name={`questions.${index}.answer`}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Answer</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Enter the answer"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <div className="flex items-center space-x-2">
              <Button
                type="button"
                variant="destructive"
                size="icon"
                onClick={() => remove(index)}
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          </div>
        ))}
        
        <Button 
          type="button" 
          variant="outline" 
          onClick={() => append({ question: '', answer: '' })}
        >
          <Plus className="mr-2 h-4 w-4" /> Add Question
        </Button>

        <Button type="submit">Save Questions and Answers</Button>
      </form>
    </Form>
  )
}
