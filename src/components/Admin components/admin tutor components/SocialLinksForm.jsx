"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { 
  Form, 
  FormControl, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage 
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select"
import { Trash2Icon, PlusCircleIcon } from "lucide-react"
import { useForm, useFieldArray } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"

const socialLinkSchema = z.object({
  socialLinks: z.array(
    z.object({
      platform: z.string().min(1, "Platform is required"),
      link: z.string().url("Invalid URL")
    })
  ).max(3, "Maximum 3 social links allowed")
})

export function SocialLinksForm({ onUpdate ,initialValues = {}}) {
  const form = useForm({
    resolver: zodResolver(socialLinkSchema),
    defaultValues: {
      socialLinks: [initialValues.socialLinks || { platform: "", link: "" }]
    }
  })

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "socialLinks"
  })

  const onSubmit = (data) => {
    onUpdate(data.socialLinks)
  }

  const socialPlatforms = [
    "whatsapp",
    "Instagram",
    "LinkedIn",
    "Facebook",
    "Twitter"
  ]

  return (
    <Form {...form}>
      <form 
        onSubmit={form.handleSubmit(onSubmit)} 
        className="space-y-4 p-4"
      >
        {fields.map((field, index) => (
          <div key={field.id} className="flex items-center space-x-2">
            <FormField
              control={form.control}
              name={`socialLinks.${index}.platform`}
              render={({ field: selectField }) => (
                <FormItem className="w-1/3">
                  <FormControl>
                    <Select 
                      onValueChange={selectField.onChange}
                      defaultValue={selectField.value}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Platform" />
                      </SelectTrigger>
                      <SelectContent>
                        {socialPlatforms.map((platform) => (
                          <SelectItem 
                            key={platform} 
                            value={platform}
                          >
                            {platform}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name={`socialLinks.${index}.link`}
              render={({ field: inputField }) => (
                <FormItem className="flex-1">
                  <FormControl>
                    <Input 
                      placeholder="Social media profile URL" 
                      {...inputField} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {index > 0 && (
              <Button
                type="button"
                variant="destructive"
                size="icon"
                onClick={() => remove(index)}
              >
                <Trash2Icon className="w-4 h-4" />
              </Button>
            )}
          </div>
        ))}

        {fields.length < 3 && (
          <Button
            type="button"
            variant="outline"
            className="w-full"
            onClick={() => append({ platform: "", link: "" })}
          >
            <PlusCircleIcon className="mr-2 w-4 h-4" />
            Add Social Link
          </Button>
        )}
      </form>
    </Form>
  )
}
