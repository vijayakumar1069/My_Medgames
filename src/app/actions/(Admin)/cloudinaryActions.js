// app/actions/cloudinaryActions.ts
'use server'

import { v2 as cloudinary } from 'cloudinary'

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
})

export async function uploadToCloudinary(file, fileType) {
  // Determine resource type and folder based on file type
  const determineResourceType = () => {
    if (fileType) return fileType
    
    const fileName = file.name.toLowerCase()
    if (fileName.endsWith('.pdf')) return 'pdf'
    if (['mp4', 'mpeg', 'mov', 'avi'].some(ext => fileName.endsWith(ext))) return 'video'
    return 'image'
  }

  const resourceType = determineResourceType()

  // Convert File to Buffer
  const bytes = await file.arrayBuffer()
  const buffer = Buffer.from(bytes)

  return new Promise((resolve, reject) => {
    cloudinary.uploader.upload_stream(
      {
        folder: 'course-resources', // Single folder
        resource_type: resourceType === 'pdf' ? 'raw' : resourceType,
        upload_preset: process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET
      },
      (error, result) => {
        if (error) {
          reject(error)
        } else {
          resolve({
            cloudinaryPublicId: result.public_id,
            secureUrl: result.secure_url,
            originalFilename: result.original_filename || file.name,
            bytes: result.bytes,
            format: result.format,
            resourceType: result.resource_type
          })
        }
      }
    ).end(buffer)
  })
}

export async function deleteFromCloudinary(publicId) {
  try {
    const result = await cloudinary.uploader.destroy(publicId)
    return result
  } catch (error) {
    console.error('Cloudinary deletion error:', error)
    throw error
  }
}
