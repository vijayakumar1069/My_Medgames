"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ImageIcon, Trash2Icon, SaveIcon } from "lucide-react";

export function ImageUpload({
  onImageUpload,
  initialImage,
  onImagePreviewComplete,
}) {
  const [previewImage, setPreviewImage] = useState(initialImage || null);
  const [uploadedFile, setUploadedFile] = useState(null);
  const fileInputRef = useRef(null);

  useEffect(() => {
    // If initialImage is a File or Blob
    if (initialImage instanceof File || initialImage instanceof Blob) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result);
        setUploadedFile(initialImage);
      };
      reader.readAsDataURL(initialImage);
    }
    // If initialImage is a string (base64 or URL)
    else if (typeof initialImage === "string") {
      setPreviewImage(initialImage);
    }
  }, [initialImage]);
  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      // Validate file size (optional)
      const maxSizeInBytes = 5 * 1024 * 1024; // 5MB
      if (file.size > maxSizeInBytes) {
        alert("File size exceeds 5MB. Please choose a smaller image.");
        return;
      }

      // Validate file type
      const allowedTypes = ["image/jpeg", "image/png", "image/gif"];
      if (!allowedTypes.includes(file.type)) {
        alert("Please upload a valid image file (JPEG, PNG, GIF)");
        return;
      }

      const reader = new FileReader();

      reader.onloadend = () => {
        // Set preview image
        setPreviewImage(reader.result);

        // Store the actual file
        setUploadedFile(file);
      };

      reader.onerror = (error) => {
        console.error("File reading error", error);
        alert("Error reading file. Please try again.");
      };

      // Read the file
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveImage = () => {
    setPreviewImage(null);
    setUploadedFile(null);

    // Reset file input
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }

    // Notify parent component
    onImageUpload(null);
  };

  const handleSaveImage = () => {
    if (uploadedFile) {
      onImageUpload(uploadedFile);
      onImagePreviewComplete && onImagePreviewComplete();
    } else {
      alert("Please select an image first");
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept="image/jpeg,image/png,image/gif"
        className="hidden"
      />

      {previewImage ? (
        <div className="relative w-64 h-64">
          <img
            src={previewImage}
            alt="Tutor Preview"
            className="object-cover rounded-lg shadow-md w-full h-full"
          />
          <div className="absolute top-2 right-2 flex space-x-2">
            <Button
              type="button"
              variant="destructive"
              size="icon"
              className="bg-white/70 hover:bg-white"
              onClick={handleRemoveImage}
            >
              <Trash2Icon className="w-4 h-4" />
            </Button>
          </div>
        </div>
      ) : (
        <div className="w-64 h-64 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center">
          <Button type="button" variant="outline" onClick={triggerFileInput}>
            <ImageIcon className="mr-2 w-4 h-4" />
            Upload Profile Image
          </Button>
        </div>
      )}

      {/* File information and actions */}
      <div className="flex flex-col items-center space-y-2">
        {uploadedFile && (
          <div className="text-sm text-gray-600">
            {uploadedFile.name} - {(uploadedFile.size / 1024).toFixed(2)} KB
          </div>
        )}

        {previewImage && (
          <div className="flex space-x-2">
            <Button type="button" onClick={triggerFileInput} variant="outline">
              Change Image
            </Button>
            <Button
              type="button"
              onClick={handleSaveImage}
              className="bg-green-500 hover:bg-green-600 text-white"
            >
              <SaveIcon className="mr-2 w-4 h-4" />
              Save Image
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
