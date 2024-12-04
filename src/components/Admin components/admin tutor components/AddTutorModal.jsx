"use client";

import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { ImageUpload } from "./ImageUpload";
import { BasicDetailsForm } from "./BasicDetailsForm";
import { DescriptionForm } from "./DescriptionForm";
import { SocialLinksForm } from "./SocialLinksForm";
import { createTutor, updateTutor } from "@/app/actions/(Admin)/tutorActions";
import { Loader2 } from "lucide-react";
import { useRequest } from "@/components/custom hooks/useRequest";

export function AddTutorModal({
  children,
  initialData,

  isEditMode = false,
  triggerMode = "default",
  setIsEditModalOpen,
  setSelectedTutor
}) {
  // Determine initial tab based on edit mode and data completeness
  const determineInitialTab = () => {
    if (isEditMode) {
      return "image";
    }
    return null;
  };

  const [activeTab, setActiveTab] = useState(determineInitialTab());
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [formData, setFormData] = useState(
    initialData || {
      image: null,
      basicDetails: {
        name: "",
        college: "",
        location: "",
        specialist: "",
      },
      description: {
        description: "",
        rating: 0,
        reviews: 0,
      },
      socialLinks: [],
    }
  );

  useEffect(() => {
    const initialTab = determineInitialTab();
    setActiveTab(initialTab);

    // Control modal open state based on triggerMode and edit mode
    if (triggerMode === "default") {
      setIsModalOpen(isEditMode ? initialTab !== null : false);
    }
    // else if (triggerMode === 'always-open') {
    //   setIsModalOpen(true);
    // }
  }, [isEditMode, initialData, triggerMode]);

  const { loading, error, success, sendRequest } = useRequest();

  const handleImageUpload = (image) => {
    setFormData((prev) => ({
      ...prev,
      image,
    }));
  };

  const handleFormUpdate = (section, data) => {
    setFormData((prev) => ({
      ...prev,
      [section]: {
        // Spread existing data to preserve previous entries
        ...prev[section],
        ...data,
      },
    }));
  };

  const handleImagePreviewComplete = () => {
    setActiveTab("basic");
  };

  const handleSubmit = async () => {
    const response = await sendRequest(() =>
      isEditMode
        ? updateTutor(initialData._id, { formData })
        : createTutor({ formData })
    );

    if (response.success) {
      //   onSubmit && onSubmit(response.tutor);
      setIsModalOpen(false);
    //   setSelectedTutor(null);
      setIsEditModalOpen(false);
    }
  };
  // Render nothing if in edit mode with no tabs to open
  if (isEditMode && !activeTab && triggerMode === "default") return null;

  // Modify tab navigation logic
  const navigateTab = (direction) => {
    const tabOrder = ["image", "basic", "description", "social"];
    const currentIndex = tabOrder.indexOf(activeTab);

    if (direction === "next" && currentIndex < tabOrder.length - 1) {
      setActiveTab(tabOrder[currentIndex + 1]);
    } else if (direction === "prev" && currentIndex > 0) {
      setActiveTab(tabOrder[currentIndex - 1]);
    }
  };

  return (
    <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
      {/* Always render children trigger if provided */}
      {children && <DialogTrigger asChild>{children}</DialogTrigger>}
      {(triggerMode === "always-open" || isEditMode) && (
        <DialogContent className="max-w-2xl" >
          <DialogHeader>
            <DialogTitle>
              {isEditMode ? "Edit Tutor" : "Add New Tutor"}
            </DialogTitle>
            <DialogDescription>
              {isEditMode
                ? "Update Tutor Details"
                : "Enter Tutor Details"}
            </DialogDescription>
          </DialogHeader>

          <Tabs
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full"
          >
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="image">Image</TabsTrigger>
              <TabsTrigger value="basic">Basic Details</TabsTrigger>
              <TabsTrigger value="description">Description</TabsTrigger>
              <TabsTrigger value="social">Social Links</TabsTrigger>
            </TabsList>

            <TabsContent value="image">
              <div className="flex justify-center p-6">
                <ImageUpload
                  onImageUpload={handleImageUpload}
                  onImagePreviewComplete={handleImagePreviewComplete}
                  initialImage={formData.image}
                />
              </div>
            </TabsContent>

            <TabsContent value="basic">
              <BasicDetailsForm
                onUpdate={(data) => {
                  handleFormUpdate("basicDetails", data);
                  navigateTab("next");
                }}
                initialValues={formData.basicDetails}
              />
            </TabsContent>

            <TabsContent value="description">
              <DescriptionForm
                onUpdate={(data) => {
                  handleFormUpdate("description", data);
                  navigateTab("next");
                }}
                initialValues={formData.description}
              />
            </TabsContent>

            <TabsContent value="social">
              <SocialLinksForm
                onUpdate={(data) => {
                  handleFormUpdate("socialLinks", data);
                }}
                initialValues={formData.socialLinks}
              />
            </TabsContent>
          </Tabs>

          <div className={`flex ${activeTab=="image"?"justify-end":"justify-between"}  mt-4`}>
            {/* Add Previous button for non-first tabs */}
            {activeTab !== "image" && (
              <Button variant="outline" onClick={() => navigateTab("prev")}>
                Previous
              </Button>
            )}

            {activeTab !== "social" && (
              <Button onClick={() => navigateTab("next")} >Next</Button>
            )}

            {activeTab === "social" && (
              <Button
                onClick={handleSubmit}
                disabled={loading}
                className="bg-green-600 hover:bg-green-700"
              >
                {loading ? (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                ) : isEditMode ? (
                  "Update Tutor"
                ) : (
                  "Create Tutor"
                )}
              </Button>
            )}
          </div>

          {error && <div className="text-red-500 text-sm p-4">{error}</div>}

          {success && (
            <div className="text-green-500 text-sm p-4">{success}</div>
          )}
        </DialogContent>
      )}
    </Dialog>
  );
}
