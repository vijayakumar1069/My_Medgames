"use client"
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { const_tutors } from "@/utils/constvalues";

// Validation schema using Zod
const locationFormSchema = z.object({
  location: z.string().min(1, "Please select a location."),
});

const Tutor_Filter_Component = ({ setLocation,locationOfTutors }) => {
  const form = useForm({
    resolver: zodResolver(locationFormSchema),
    defaultValues: {
      location: "",
    },
  });

  // Submit handler
  const onSubmit = (data) => {
   
    setLocation(data.location);
  };

  // Extract unique locations from const_tutors array
  const uniqueLocations = [...new Set(const_tutors.map(tutor => tutor.location))];

  // Reset handler
  const handleReset = () => {
    form.reset(); // Reset the form to its initial state
    setLocation(''); // Clear the location state (optional, depending on your requirements)
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-6 font-Manrope rounded-lg max-w-md"
      >
        <FormField
          control={form.control}
          name="location"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-lg font-semibold text-black">Location</FormLabel>
              <Select
                value={field.value}  // Use `field.value` here to bind the selected value
                onValueChange={field.onChange}  // Update the form value when a selection is made
                className="w-full rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500"
              >
                <FormControl>
                  <SelectTrigger className="rounded-md border-black text-black p-2 bg-white">
                    <SelectValue className="text-black border text-lg" placeholder="Select a location" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent className="bg-white border border-gray-300 rounded-md shadow-lg">
                  {
                    // Map over unique locations
                    locationOfTutors.length>0 && locationOfTutors.map((location, index) => (
                      <SelectItem key={index} value={location} className="text-black hover:bg-gray-100">
                        {location}
                      </SelectItem>
                    ))
                  }
                </SelectContent>
              </Select>
              <FormMessage className="text-red-500 mt-1" />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          className="w-full bg-[#4F9F76] text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-all"
        >
          Apply Filter
        </Button>
        <Button
          type="button" // Change type to button so it doesn't submit the form
          onClick={handleReset} // Call reset handler when clicked
          className="w-full bg-[#274E49] text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-all"
        >
          Reset
        </Button>
      </form>
    </Form>
  );
};

export default Tutor_Filter_Component;
