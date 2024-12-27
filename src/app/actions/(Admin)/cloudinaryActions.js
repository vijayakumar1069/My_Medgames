// app/actions/cloudinaryActions.js

"use server";

import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function uploadToCloudinary(
  file,
  folder = "default",
  customOptions = {}
) {
 
  // Convert File to Buffer
  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  // Default upload options
  const defaultOptions = {
    folder: folder,
    resource_type: "auto", // Automatically detect resource type
  

    // Optional transformations for images
    // ...(file.type.startsWith("image/") && {
    //   transformation: [
    //     {
    //       width: "auto",
    //       crop: "limit",
    //       quality: "auto",
    //     },
    //   ],
    // }),
  };

  // Merge default and custom options
  const uploadOptions = {
    ...defaultOptions,
    ...customOptions,
  };

  return new Promise((resolve, reject) => {
    cloudinary.uploader
      .upload_stream(uploadOptions, (error, result) => {
        if (error) {
          console.error("Cloudinary Upload Error:", error);
          reject(error);
        } else {
          resolve({
            cloudinaryPublicId: result.public_id,
            secureUrl: result.secure_url,
            originalFilename: file.name || result.original_filename, // Ensures correct file name            bytes: result.bytes,
            format: result.format,
            resourceType: result.resource_type,
            mimeType: file.type,
          });
        }
      })
      .end(buffer);
  });
}

// Delete file from Cloudinary
export async function deleteFromCloudinary(publicId) {
  try {
    const result = await cloudinary.uploader.destroy(publicId);
    return result;
  } catch (error) {
    console.error("Cloudinary deletion error:", error);
    throw error;
  }
}

// Bulk delete files from Cloudinary
export async function bulkDeleteFromCloudinary(publicIds) {
  try {
    const deletionPromises = publicIds.map((publicId) =>
      deleteFromCloudinary(publicId)
    );
    return await Promise.all(deletionPromises);
  } catch (error) {
    console.error("Bulk Cloudinary deletion error:", error);
    throw error;
  }
}
// Multi-file upload function
export async function uploadMultipleFiles(files, folder = "default") {
  try {
    // Upload files in parallel
    const uploadPromises = files.map((file) =>
      uploadToCloudinary(file, folder)
    );

    // Wait for all uploads to complete
    return await Promise.all(uploadPromises);
  } catch (error) {
    console.error("Multiple File Upload Error:", error);
    throw error;
  }
}
