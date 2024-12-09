import React from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form"

// Schedule Schema
const scheduleSchema = z.object({
  startDate: z.date(),
  endDate: z.date(),
  dailyStartTime: z.string(),
  dailyEndTime: z.string(),
  classDays: z.array(z.string()).min(1, "Select at least one class day"),
  via: z.enum(["Zoom", "Microsoft Teams", "Google Meet", "Offline Classes"]),
});


export function CourseScheduleForm({
  onDataUpdate,
  currentData,
  setActiveTab,
}) {
  const form = useForm({
    resolver: zodResolver(scheduleSchema),
    defaultValues: {
      startDate: new Date(currentData.startDate) || new Date(),
      endDate:new Date(currentData.endDate) || new Date(),
      dailyStartTime: currentData.dailyStartTime || '',
      dailyEndTime: currentData.dailyEndTime || '',
      classDays: currentData.classDays || [],
      via:currentData.via || "", // Default empty
    },
  });


  const onSubmit = (data) => {
    onDataUpdate(data);
    setActiveTab("description");
   
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <div className="flex space-x-4">
          <FormField
            control={form.control}
            name="startDate"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Start Date</FormLabel>
                <FormControl>
                  <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={field.onChange}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="endDate"
            render={({ field }) => (
              <FormItem>
                <FormLabel>End Date</FormLabel>
                <FormControl>
                  <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={field.onChange}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="flex space-x-4">
          <FormField
            control={form.control}
            name="dailyStartTime"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Daily Start Time</FormLabel>
                <FormControl>
                  <Input type="time" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="dailyEndTime"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Daily End Time</FormLabel>
                <FormControl>
                  <Input type="time" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="classDays"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Class Days</FormLabel>
              <FormControl>
                <Select 
                  onValueChange={(value) => {
                    const currentDays = field.value || []
                    const newDays = currentDays.includes(value)
                      ? currentDays.filter(day => day !== value)
                      : [...currentDays, value]
                    field.onChange(newDays)
                  }}
                  value={field.value[0]}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select Class Days" />
                  </SelectTrigger>
                  <SelectContent>
                    {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map((day) => (
                      <SelectItem key={day} value={day}>
                        {day}
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
  name="via"
  render={({ field }) => (
    <FormItem>
      <FormLabel>Conducted Via</FormLabel>
      <FormControl>
        <Select
          onValueChange={field.onChange}
          value={field.value}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select Method" />
          </SelectTrigger>
          <SelectContent>
            {["Zoom", "Microsoft Teams", "Google Meet", "Offline Classes"].map((method) => (
              <SelectItem key={method} value={method}>
                {method}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </FormControl>
      <FormMessage />
    </FormItem>
  )}
/>


        <Button type="submit">Save Schedule</Button>
      </form>
    </Form>
  )
}
