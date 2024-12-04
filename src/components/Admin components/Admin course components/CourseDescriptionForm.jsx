"use client";
import React, { useState } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Trash2, Plus } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { sections } from "@/utils/constvalues";

// Comprehensive Course Description Schema
const courseDescriptionSchema = z.object({
  objective: z.string().min(10, "Objective must be detailed"),
  key_features: z
    .array(z.string())
    .min(1, "At least one key feature is required"),
  topic_covered: z
    .array(z.string())
    .min(1, "At least one topic must be covered"),
  benefits: z.array(z.string()).min(1, "At least one benefit must be listed"),
  additional_resources: z.array(z.string()).optional(),
});

const CourseCourseBuilderForm = ({ onDataUpdate, currentData, setActiveTab }) => {
  console.log("currentData", currentData);
  const form = useForm({
    resolver: zodResolver(courseDescriptionSchema),
    defaultValues: {
      objective: currentData.objective || "wqddddddddddddddscddd",
      key_features: currentData.key_features || ["dwqqqqqqqscccqqqqqqqqqqqq"],
      topic_covered: currentData.topic_covered || ["dwqqqqqqqqcssssssssqqqqqqq"],
      benefits: currentData.benefits || ["dwqqqqqqqcsssssssqqqqqq"],
      additional_resources: currentData.additional_resources || ["dwqqqqqqqqqqSSSSSSSSqqqqqqq"],
    },
  });

  const [descriptionMode, setDescriptionMode] = useState("builder");

  // Initialize useFieldArray for all list-type fields
  const keyFeaturesArray = useFieldArray({ control: form.control, name: "key_features" });
  const topicsCoveredArray = useFieldArray({ control: form.control, name: "topic_covered" });
  const benefitsArray = useFieldArray({ control: form.control, name: "benefits" });
  const additionalResourcesArray = useFieldArray({ control: form.control, name: "additional_resources" });

  const arraysByKey = {
    key_features: keyFeaturesArray,
    topic_covered: topicsCoveredArray,
    benefits: benefitsArray,
    additional_resources: additionalResourcesArray,
  };

  const onSubmit = (data) => {
    onDataUpdate(data);
    setActiveTab("schedule");
    console.log(data);
    // Implement save logic
  };

  // Render input based on section type
  const renderSectionInput = (section) => {
    if (section.type === "textarea") {
      return (
        <FormField
          control={form.control}
          name={section.key}
          render={({ field }) => (
            <FormItem>
              <FormLabel>{section.label}</FormLabel>
              <FormControl>
                <Textarea
                  placeholder={`Enter ${section.label.toLowerCase()}`}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      );
    }

    if (section.type === "list") {
      const { fields, append, remove } = arraysByKey[section.key];

      return (
        <FormItem>
          <FormLabel>{section.label}</FormLabel>
          {fields.map((field, index) => (
            <div key={field.id} className="flex items-center space-x-2 mb-2">
              <FormControl>
                <Input
                  placeholder={`Enter ${section.label.toLowerCase().slice(0, -1)}`}
                  {...form.register(`${section.key}.${index}`)}
                />
              </FormControl>
              {fields.length > 1 && (
                <Button
                  type="button"
                  variant="destructive"
                  size="icon"
                  onClick={() => remove(index)}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              )}
            </div>
          ))}
          <Button type="button" variant="outline" onClick={() => append("")}>
            <Plus className="mr-2 h-4 w-4" /> Add {section.label.slice(0, -1)}
          </Button>
        </FormItem>
      );
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Course Builder</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs value={descriptionMode} onValueChange={setDescriptionMode}>
          <TabsList>
            <TabsTrigger value="builder">Course Description Builder</TabsTrigger>
          </TabsList>

          <TabsContent value="builder">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <ScrollArea className="h-[600px] w-full rounded-md border p-4">
                  {sections.map((section) => (
                    <Card key={section.key} className="mb-4">
                      <CardHeader>
                        <CardTitle>
                          <div className="flex items-center">
                            <span className="mr-2">{section.icon}</span>
                            {section.label}
                            {section.optional && (
                              <Badge variant="secondary" className="ml-2">
                                Optional
                              </Badge>
                            )}
                          </div>
                        </CardTitle>
                      </CardHeader>
                      <CardContent>{renderSectionInput(section)}</CardContent>
                    </Card>
                  ))}
                </ScrollArea>

                <Button type="submit" className="w-full">
                  Save Course Description
                </Button>
              </form>
            </Form>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default CourseCourseBuilderForm;
