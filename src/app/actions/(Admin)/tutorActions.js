'use server';

import { revalidatePath } from 'next/cache';


import Tutor from '@/modals/tutors.modal';
import { connectDB } from '@/lib/dbconnection';
import { deepClone } from '@/lib/convert_to_JSON';


export async function createTutor(formData) {
  try {
    await connectDB();
    
    
    
    const newTutor = await Tutor.create(formData);
    
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
    
    
    
    const updatedTutor = await Tutor.findByIdAndUpdate(id, formData, { 
      new: true,
      runValidators: true 
    });
    
    // Revalidate specific paths
    revalidatePath('/meet-our-tutors', 'page');
    revalidatePath('/admin-tutors', 'page');

    // Optional: Revalidate layout if you have a layout that might contain tutor data
    revalidatePath('/', 'layout');

    return { success: true, tutor: deepClone(updatedTutor) };
  } catch (error) {
    console.error('Update Tutor Error:', error);
    return { success: false, error: error.message || 'An error occurred' };
  }
}

export async function deleteTutor(id) {
  try {
    await connectDB();
    
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

export async function getTutors() {
  try {
    await connectDB();
  
    const tutors = await Tutor.find().sort({ createdAt: -1 });
   
    return deepClone(tutors);
  } catch (error) {
    return { success: false, error: error.message || 'An error occurred' };
    return [];
  }
}

export async function getTutorById(id) {
  try {
    await connectDB();
    
    const tutor = await Tutor.findById(id);
    return deepClone(tutor);
  } catch (error) {
    console.error('Get Tutor By ID Error:', error);
    return { success: false, error: error.message || 'An error occurred' };
    return null;
  }
}
