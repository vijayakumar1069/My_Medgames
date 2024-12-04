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
import { Trash2, Plus } from 'lucide-react'

// Resources Schema
const resourcesSchema = z.object({
  additionalResources: z.array(
    z.object({
      name: z.string().min(1, "Resource name is required"),
      description: z.string().optional(),
      file: z.instanceof(File).optional()
    })
  ),
  downloadablePDF: z.instanceof(File).optional()
})

export function CourseResourcesForm() {
  const form = useForm({
    resolver: zodResolver(resourcesSchema),
    defaultValues: {
      additionalResources: [{ name: '', description: '', file: null }],
      downloadablePDF: null
    }
  })

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "additionalResources"
  })

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        {/* <div>
          <FormLabel>Additional Resources</FormLabel>
          {fields.map((field, index) => (
            <div key={field.id} className="space-y-2 mb-4 p-4 border rounded">
              <FormField
                control={form.control}
                name={`additionalResources.${index}.name`}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Resource Name</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="Enter resource name" 
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name={`additionalResources.${index}.description`}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Resource Description</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Enter resource description" 
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name={`additionalResources.${index}.file`}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Resource File</FormLabel>
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

              {fields.length > 1 && (
                <Button 
                  type="button" 
                  variant="destructive" 
                  onClick={() => remove(index)}
                >
                  <Trash2 className="mr-2 h-4 w-4" /> Remove Resource
                </Button>
              )}
            </div>
          ))}
          
          <Button 
            type="button" 
            variant="outline" 
            onClick={() => append({ name: '', description: '', file: null })}
          >
            <Plus className="mr-2 h-4 w-4" /> Add Resource
          </Button>
        </div> */}

        <FormField
          control={form.control}
          name="downloadablePDF"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Downloadable Course PDF</FormLabel>
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

        <Button type="submit">Save Resources</Button>
      </form>
    </Form>
  )
}
