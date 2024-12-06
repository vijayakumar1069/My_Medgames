'use client'

import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { deleteFromCloudinary, uploadToCloudinary } from '@/app/actions/(Admin)/cloudinaryActions'

export function CourseVideoForm({ onDataUpdate, currentData, setActiveTab }) {
  const [uploadedVideos, setUploadedVideos] = useState(currentData.video_section || [])
  const [isUploading, setIsUploading] = useState(false)

  const handleVideoUpload = async (event) => {
    const files = event.target.files
  
    if (files) {
      setIsUploading(true)
  
      try {
        const uploadPromises = Array.from(files).map(async (file) => {
          // Explicitly specify 'video' for video files
          return await uploadToCloudinary(file, 'video')
        })
  
        const newVideos = await Promise.all(uploadPromises)
  
        const updatedVideos = [...uploadedVideos, ...newVideos]
        
        setUploadedVideos(updatedVideos)
        
        onDataUpdate && onDataUpdate({
          video_section: updatedVideos
        })
  
      } catch (error) {
        console.error('Video upload error:', error)
      } finally {
        setIsUploading(false)
      }
    }
  }

  const handleRemoveVideo = async (publicId) => {
    try {
      // Delete from Cloudinary
      await deleteFromCloudinary(publicId)

      // Update local state
      const updatedVideos = uploadedVideos.filter(video => video.cloudinaryPublicId !== publicId)
     
      setUploadedVideos(updatedVideos)

      onDataUpdate && onDataUpdate({
        video_section: updatedVideos
      })
    } catch (error) {
      console.error('Error removing video:', error)
    }
  }

  return (
    <div className="space-y-4 h-fit">
      <div className="flex items-center space-x-2">
        <Input
          type="file"
          multiple
          onChange={handleVideoUpload}
          accept="video/mp4,video/mpeg,video/quicktime,video/x-msvideo"
          disabled={isUploading}
        />
        {isUploading && <span>Uploading...</span>}
      </div>

      {uploadedVideos.length > 0 && (
        <div className="mt-4">
          <h3 className="font-semibold mb-2">Uploaded Videos:</h3>
          {uploadedVideos.map((video, index) => (
            <div
              key={video.cloudinaryPublicId || index}
              className="flex items-center justify-between p-2 border rounded mb-2"
            >
              <div className="flex items-center space-x-2">
                <span>{video.originalFilename}</span>
                <span className="text-sm text-gray-500">
                  {video.bytes ? `(${(video.bytes / 1024 / 1024).toFixed(2)} MB)` : ''}
                </span>
              </div>
              <div className="flex items-center space-x-2">
                {/* Optional: Add video preview */}
                <a 
                  href={video.secureUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-blue-500 hover:underline"
                >
                  Preview
                </a>
                <Button
                  type="button"
                  variant="destructive"
                  size="sm"
                  onClick={() => handleRemoveVideo(video.cloudinaryPublicId)}
                >
                  Remove
                </Button>
              </div>
            </div>
          ))}
        </div>
      )}

      {uploadedVideos.length > 0 && (
        <Button
          type="button"
          onClick={() => {
      
            onDataUpdate && onDataUpdate({
              video_section: uploadedVideos
            })
            setActiveTab('review')
          }}
          disabled={isUploading}
        >
          Save Videos
        </Button>
      )}
    </div>
  )
}
