"use client";

import { useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  deleteTutor,
  getTutorById,
  updateTutor,
} from "@/app/actions/(Admin)/tutorActions";
import TutorCard from "./TutorCard";
import { AddTutorModal } from "./AddTutorModal";
import { useToast } from "@/hooks/use-toast";

export function TutorCardWrapper({ tutor, onDeleteSuccess, onUpdateSuccess }) {
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedTutor, setSelectedTutor] = useState(null);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleView = async () => {
    setLoading(true);
    try {
      const response = await getTutorById(tutor._id);
      if (response.success) {
        setSelectedTutor(response.tutor);
        setIsViewModalOpen(true);
      } else {
        toast.error(response.message);
      }
    } catch (error) {
      toast.error("Failed to fetch tutor details");
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = () => {
    setSelectedTutor(tutor);
    setIsEditModalOpen(true);
  };

  const handleDelete = async () => {
    const confirmed = window.confirm(
      `Are you sure you want to delete ${tutor.name}?`
    );
    if (confirmed) {
      setLoading(true);
      try {
        const response = await deleteTutor(tutor._id);
        if (response.success) {
          toast.success(response.message);
          onDeleteSuccess && onDeleteSuccess(tutor._id);
        } else {
          toast.error(response.message);
        }
      } catch (error) {
        toast.error("Failed to delete tutor");
      } finally {
        setLoading(false);
      }
    }
  };

//   const handleUpdateSubmit = async (updatedData) => {
//     setLoading(true);
//     // Perform validation and sanitization here before sending the request
//     console.log("Validation and sanitization:", updatedData);
//     try {
//       const response = await updateTutor(tutor._id, updatedData);
//       if (response.success) {
//         toast.success(response.message);
//         onUpdateSuccess && onUpdateSuccess(response.tutor);
//         setIsEditModalOpen(false);
//       } else {
//         toast.error(response.message);
//       }
//     } catch (error) {
//       toast.error("Failed to update tutor");
//     } finally {
//       setLoading(false);
//     }
//   };

  return (
    <>
      <TutorCard
        tutor={tutor}
        onView={handleView}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />

      {/* View Modal */}
      {isViewModalOpen && selectedTutor && (
        <Dialog open={true} onOpenChange={() => setIsViewModalOpen(false)}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Tutor Details</DialogTitle>
            </DialogHeader>
            <div className="p-4">
              <pre>{JSON.stringify(selectedTutor, null, 2)}</pre>
            </div>
          </DialogContent>
        </Dialog>
      )}

      {/* Edit Modal */}
      {isEditModalOpen && selectedTutor && (
  <AddTutorModal
    initialData={{
      _id: selectedTutor._id,
      image: selectedTutor.image || null,
      basicDetails: {
        name: selectedTutor.name || '',
        college: selectedTutor.college || '',
        location: selectedTutor.location || '',
        specialist: selectedTutor.specialist || ''
      },
      description: {
        description: selectedTutor.description || '',
        rating: selectedTutor.rating || 0,
        reviews: selectedTutor.reviews || 0
      },
      socialLinks: selectedTutor.socialsLinks || []
    }}
    // onSubmit={handleUpdateSubmit}
    isEditMode={true}
     triggerMode="default"
     setIsEditModalOpen={setIsEditModalOpen}
     setSelectedTutor={setSelectedTutor}
  />
)}

    </>
  );
}
