"use server"

import { revalidatePath } from "next/cache"
import TutorModel from "@/modals/tutors.modal"
import { connectDB } from "@/lib/dbconnection"

// Create Tutor (already implemented in AddTutorModal)
export async function createTutor({ formData }) {
    try {
      console.log(formData)
  
      await connectDB()
  
      // Handle different input types
      let data;
      if (formData instanceof FormData) {
        // If it's a FormData object
        data = Object.fromEntries(formData.entries())
      } else if (typeof formData === 'object') {
        // If it's already a plain object
        data = formData
      } else {
        throw new Error('Invalid form data format')
      }
  
      // Handle social links
      const socialsLinks = data.socialLinks
        ? (Array.isArray(data.socialLinks)
            ? data.socialLinks
            : JSON.parse(data.socialLinks))
        : []
  
      // Create image handling more robust
      let imageData = data.image
      if (imageData instanceof File) {
        // Convert File to base64 or upload to storage
        const buffer = await imageData.arrayBuffer()
        const base64Image = Buffer.from(buffer).toString('base64')
        imageData = `data:${imageData.type};base64,${base64Image}`
      }
  
      // Create new tutor
      const newTutor = new TutorModel({
        name: data.basicDetails?.name || data.name,
        description: data.description?.description || data.description || '',
        rating: Number(data.description?.rating || data.rating || 0),
        reviews: Number(data.description?.reviews || data.reviews || 0),
        college: data.basicDetails?.college || data.college,
        specialist: data.basicDetails?.specialist || data.specialist,
        image: imageData || '/default-avatar.png',
        location: data.basicDetails?.location || data.location,
        socialsLinks,
        isActive: data.isActive !== 'false'
      })
  
      await newTutor.save()
  
      // Revalidate paths
      revalidatePath('/admin-tutors')
      revalidatePath('/tutors')
  
      return {
        success: true,
        message: 'Tutor created successfully',
        tutor: JSON.parse(JSON.stringify(newTutor))
      }
    } catch (error) {
      console.error('Create Tutor Error:', error)
      return {
        success: false,
        message: error.message || 'An unexpected error occurred'
      }
    }
  }
// Update Tutor
export async function updateTutor(tutorId, { formData }) {
    try {
      await connectDB();


  console.log('updateTutor called with tutorId:', formData);
      // Determine which fields have changed
      const updateFields = {};
  
      // Basic Details Check
      if (formData.basicDetails) {
        if (formData.basicDetails.name) updateFields.name = formData.basicDetails.name;
        if (formData.basicDetails.college) updateFields.college = formData.basicDetails.college;
        if (formData.basicDetails.location) updateFields.location = formData.basicDetails.location;
        if (formData.basicDetails.specialist) updateFields.specialist = formData.basicDetails.specialist;
      }
  
      // Description Check
      if (formData.description) {
        if (formData.description.description !== undefined) 
          updateFields.description = formData.description.description;
        
        if (formData.description.rating !== undefined) 
          updateFields.rating = Number(formData.description.rating);
        
        if (formData.description.reviews !== undefined) 
          updateFields.reviews = Number(formData.description.reviews);
      }
  
      // Image Handling
      if (formData.image) {
        let imageData = formData.image;
        if (imageData instanceof File) {
          const buffer = await imageData.arrayBuffer();
          const base64Image = Buffer.from(buffer).toString('base64');
          updateFields.image = `data:${imageData.type};base64,${base64Image}`;
        } else {
          updateFields.image = imageData;
        }
      }
  
      // Social Links Handling
      if (formData.socialLinks && formData.socialLinks.length > 0) {
        updateFields.socialsLinks = formData.socialLinks;
      }
  
      // Check if there are any fields to update
      if (Object.keys(updateFields).length === 0) {
        return {
          success: false,
          message: 'No fields to update'
        };
      }
  
      // Find and update the tutor
      const updatedTutor = await TutorModel.findByIdAndUpdate(
        tutorId, 
        { $set: updateFields }, 
        { 
          new: true,  // Return the modified document
          runValidators: true  // Run model validations
        }
      );
  
      if (!updatedTutor) {
        return {
          success: false,
          message: 'Tutor not found'
        };
      }
  
      // Revalidate paths
      revalidatePath('/admin-tutors');
      revalidatePath('/tutors');
  
      return {
        success: true,
        message: 'Tutor updated successfully',
        tutor: JSON.parse(JSON.stringify(updatedTutor))
      };
  
    } catch (error) {
      console.error('Update Tutor Error:', error);
      return {
        success: false,
        message: error.message || 'An unexpected error occurred'
      };
    }
  }
  
  // Delete function
  export async function deleteTutor(tutorId) {
    try {
      await connectDB();
  
      // Soft delete (recommended)
      const deletedTutor = await TutorModel.findByIdAndUpdate(
        tutorId, 
        { 
          isActive: false 
        }, 
        { 
          new: true 
        }
      );
  
      if (!deletedTutor) {
        return {
          success: false,
          message: 'Tutor not found'
        };
      }
  
      // Alternatively, for hard delete:
      // const deletedTutor = await TutorModel.findByIdAndDelete(tutorId);
  
      // Revalidate paths
      revalidatePath('/admin-tutors');
      revalidatePath('/tutors');
  
      return {
        success: true,
        message: 'Tutor deactivated successfully',
        tutor: JSON.parse(JSON.stringify(deletedTutor))
      };
  
    } catch (error) {
      console.error('Delete Tutor Error:', error);
      return {
        success: false,
        message: error.message || 'An unexpected error occurred'
      };
    }
  }
  

// Get Single Tutor
export async function getTutorById(id) {
  try {
    await connectDB()

    const tutor = await TutorModel.findById(id)

    if (!tutor) {
      return { 
        success: false, 
        message: 'Tutor not found' 
      }
    }

    return { 
      success: true, 
      tutor:JSON.parse(JSON.stringify(tutor)) 
    }
  } catch (error) {
    console.error('Get Tutor Error:', error)
    return { 
      success: false, 
      message: error.message 
    }
  }
}

// Get All Tutors
export async function getTutors() {
  try {
    await connectDB()

    const tutors = await TutorModel.find()

    return {
      success: true,
      tutors:JSON.parse(JSON.stringify(tutors))
    }
  } catch (error) {
    console.error('Get All Tutors Error:', error)
    return { 
      success: false, 
      message: error.message 
    }
  } 
    }