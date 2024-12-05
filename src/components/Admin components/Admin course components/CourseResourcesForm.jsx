'use client'

import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { deleteFromCloudinary, uploadToCloudinary } from '@/app/actions/(Admin)/cloudinaryActions'


export function CourseResourcesForm({ onDataUpdate, currentData ,setActiveTab}) {
  const [uploadedFiles, setUploadedFiles] = useState(currentData.downloadable_pdf || [])
  const [isUploading, setIsUploading] = useState(false)

  const handleFileUpload = async (event) => {
    const files = event.target.files
  
    if (files) {
      setIsUploading(true)
  
      try {
        const uploadPromises = Array.from(files).map(async (file) => {
          // Explicitly specify 'pdf' for PDF files
          return await uploadToCloudinary(file, 'pdf')
        })
        console.log('Uploading files:', uploadPromises)
        const newFiles = await Promise.all(uploadPromises)
        
        console.log('Uploaded files:', newFiles)
  
        const updatedFiles = [...uploadedFiles, ...newFiles]
        
        setUploadedFiles(updatedFiles)
        
        onDataUpdate && onDataUpdate({
          downloadable_pdf: updatedFiles
        })
  
      } catch (error) {
        console.error('Upload error:', error)
      } finally {
        setIsUploading(false)
      }
    }
  }

  const handleRemoveFile = async (publicId) => {
    try {
      // Delete from Cloudinary
      await deleteFromCloudinary(publicId)

      // Update local state
      const updatedFiles = uploadedFiles.filter(file => file.cloudinaryPublicId !== publicId)
      
      setUploadedFiles(updatedFiles)

      onDataUpdate && onDataUpdate({
        downloadable_pdf: updatedFiles
      })
    } catch (error) {
      console.error('Error removing file:', error)
    }
  }

  return (
    <div className="space-y-4 ">
      <div className="flex items-center space-x-2">
        <Input
          type="file"
          multiple
          onChange={handleFileUpload}
          accept=".pdf,.doc,.docx,.jpg,.jpeg,.png,.mp4"
          disabled={isUploading}
        />
        {isUploading && <span>Uploading...</span>}
      </div>

      {uploadedFiles.length > 0 && (
        <div className="mt-4">
          <h3 className="font-semibold mb-2">Uploaded Files:</h3>
          {uploadedFiles.map((file, index) => (
            <div
              key={file.cloudinaryPublicId || index}
              className="flex items-center justify-between p-2 border rounded mb-2"
            >
              <div className="flex items-center space-x-2">
                <span>{file.originalFilename}</span>
                <span className="text-sm text-gray-500">
                  {file.bytes ? `(${(file.bytes / 1024 / 1024).toFixed(2)} MB)` : ''}
                </span>
              </div>
              <div className="flex items-center space-x-2">
              <a 
                  href={file.secureUrl} 
                  
                  rel="noopener noreferrer" 
                  className="text-blue-500 hover:underline"
                >
                  Preview
                </a>
              <Button
                type="button"
                variant="destructive"
                size="sm"
                onClick={() => handleRemoveFile(file.cloudinaryPublicId)}
              >
                Remove
              </Button>
                </div>
            </div>
          ))}
        </div>
      )}

      {uploadedFiles.length > 0 && (
        <Button
          type="button"
          onClick={() => {
            console.log('Saving files:', uploadedFiles)
            onDataUpdate && onDataUpdate({
              resources: uploadedFiles
            })
            setActiveTab('video')
          }}
          disabled={isUploading}
        >
          Save Resources
        </Button>
      )}
    </div>
  )
}
