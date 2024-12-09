
import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

export const uploadToCloudinary = async (file, folder) => {
  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  return new Promise((resolve, reject) => {
    cloudinary.uploader.upload_stream(
      { 
        folder: folder,
        resource_type: 'auto',
        public_id: `resource_${Date.now()}`,
        access_mode: 'public'
      },
      (error, result) => {
        if (error) reject(error);
        else resolve(result);
      }
    ).end(buffer);
  });
};

export const generateDownloadLink = (publicUrl, originalFileName) => {
  return `${publicUrl}?download=true&filename=${encodeURIComponent(originalFileName)}`;
};

export function generateVideoThumbnail(publicId, options = {}) {
  const defaultOptions = {
    width: 480,
    height: 270,
    crop: 'fill',
    gravity: 'center',
    format: 'jpg',
    time: 3 // seconds into the video
  }

  const mergedOptions = { ...defaultOptions, ...options }

  return cloudinary.url(publicId, {
    resource_type: 'video',
    transformation: [
      { 
        width: mergedOptions.width, 
        height: mergedOptions.height, 
        crop: mergedOptions.crop, 
        gravity: mergedOptions.gravity,
        format: mergedOptions.format,
        start_offset: mergedOptions.time
      }
    ]
  })
}