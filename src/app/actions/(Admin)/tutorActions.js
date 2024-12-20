'use server';

import { revalidatePath } from 'next/cache';


import Tutor from '@/modals/tutors.modal';
import { connectDB } from '@/lib/dbconnection';
import { deepClone } from '@/lib/convert_to_JSON';
import { cache } from 'react';
import { deleteFromCloudinary, uploadToCloudinary } from './cloudinaryActions';


export async function createTutor(formData) {

  try {
    await connectDB();
    
    const tutorPhotoUpload=await uploadToCloudinary(formData.image,"tutors resources")
    
    const newTutor = await Tutor.create(
      {
        name: formData.name,
        graduation: formData.graduation,
        college: formData.college,
        specialist: formData.specialist,
        location: formData.location,
        image:{
          url:tutorPhotoUpload.secureUrl,
          cloudinary_id: tutorPhotoUpload.cloudinaryPublicId,
          fileName:tutorPhotoUpload.originalFilename
        }
      }
    );
    
    // Revalidate specific paths
    revalidatePath('/meet-our-tutors', 'page');
    revalidatePath('/admin-tutors', 'page');

    // Optional: Revalidate layout if you have a layout that might contain tutor data
    revalidatePath('/', 'layout');

    return { success: true, tutor:deepClone(newTutor) };
  } catch (error) {
    console.error('Create Tutor Error:', error);
    return { success: false, error: error.message || 'An error occurred' };
  }
}

export async function updateTutor(id, formData) {
  try {
    await connectDB();

  const update={};
  if(formData.name)
  {
    update.name=formData.name;
  }
  if(formData.graduation)
  {
    update.graduation=formData.graduation;
  }
  if(formData.college)
  {
    update.college=formData.college;
  }
  if(formData.specialist)
  {
    update.specialist=formData.specialist;
  }
  if(formData.location)
  {
    update.location=formData.location;
  }
  if(formData.image)
  {
    // const tutorPhotoUpload=await uploadToCloudinary(formData.image,"tutors resources")
    // update.image={
    //   url:tutorPhotoUpload.secureUrl,
    //   cloudinary_id: tutorPhotoUpload.cloudinaryPublicId,
    //   fileName:tutorPhotoUpload.originalFilename
    // };
    update.image=formData.image;
  }
  
  const tutor = await Tutor.findByIdAndUpdate(id, update, { new: true });
    
    
    
    
    
    // Revalidate specific paths
    revalidatePath('/meet-our-tutors', 'page');
    revalidatePath('/admin-tutors', 'page');

    // Optional: Revalidate layout if you have a layout that might contain tutor data
    revalidatePath('/', 'layout');

    return { success: true };
  } catch (error) {
    console.error('Update Tutor Error:', error);
    return { success: false, error: error.message || 'An error occurred' };
  }
}

export async function deleteTutor(id) {
  try {
    await connectDB();
    
    const existingtutor=await Tutor.findById(id);
    if(!existingtutor)
    {
      throw new Error("Failed to delete tutor");
    }
    await deleteFromCloudinary(existingtutor.image.cloudinary_id);
    
    await Tutor.findByIdAndDelete(id);
    
    // Revalidate specific paths
    revalidatePath('/meet-our-tutors', 'page');
    revalidatePath('/admin-tutors', 'page');

    // Optional: Revalidate layout if you have a layout that might contain tutor data
    revalidatePath('/', 'layout');

    return { success: true };
  } catch (error) {
    console.error('Delete Tutor Error:', error);
    return { success: false, error: error.message || 'An error occurred' };
  }
}

export const getTutors = cache(async () => {
  try {
    await connectDB();

    const tutors = await Tutor.find()
      .select('_id name graduation location image college description')
      .sort({ createdAt: 1 })
      .lean()
      .exec();

    if (!tutors?.length) {
      return []; // Explicitly return an empty array
    }

    return deepClone(tutors);
  } catch (error) {
    console.error('Error fetching tutors:', error);
    return []; // Ensure you always return something
  }
});


export async function getTutorById(id) {
  try {
    await connectDB();
    
    const tutor = await Tutor.findById(id);
    return deepClone(tutor);
  } catch (error) {
    console.error('Get Tutor By ID Error:', error);
    return { success: false, error: error.message || 'An error occurred' };
  
  }
}


export async function getHomepageTutors()
{
  try {
    await connectDB();
    
    const tutors = await Tutor.find().sort({ createdAt: 1 });
    if(!tutors)
    {
      throw new Error("Failed to fetch tutors");
    }
    return {
      success: true,
      message: 'Tutors fetched successfully',
      homeTutors: deepClone(tutors),
    }

  } catch (error) {
    
    return {
      success: false,
      message: 'Failed to fetch tutors',
      error: error.message,
    };
  }

}