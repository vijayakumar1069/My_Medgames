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
import { useRequest } from "@/components/custom hooks/useRequest";
import Skeleton from "@/components/Public web components/Skeleton";
import Loading from "../Loading";
import EditingComponentLoader from "@/components/EditingComponentLoader";

export function TutorCardWrapper({ tutor }) {
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedTutor, setSelectedTutor] = useState(null);

  const { toast } = useToast();
  const { loading, error, success, sendRequest } = useRequest();

  const handleView = async () => {
    try {
      const res = await sendRequest(() => getTutorById(tutor._id));
      if (res.success) {
        setSelectedTutor(res.tutor);
        setIsViewModalOpen(true);
      } else {
        toast({
          type: "error",
          message: res.message,
        });
      }
    } catch (error) {
      toast({
        type: "error",
        message: "Failed to fetch tutor details",
      });
    }
  };

  const handleEdit = () => {
    setSelectedTutor(tutor);
    setIsEditModalOpen(true);
  };

  return (
    <>
      {loading && (
        <div className="absolute inset-0 z-10 bg-black/10">
          <EditingComponentLoader />
        </div>
      )}
      <TutorCard
        tutor={tutor}
        onView={handleView}
        onEdit={handleEdit}
        // onDelete={handleDelete}
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
              name: selectedTutor.name || "",
              college: selectedTutor.college || "",
              location: selectedTutor.location || "",
              specialist: selectedTutor.specialist || "",
            },
            description: {
              description: selectedTutor.description || "",
              rating: selectedTutor.rating || 0,
              reviews: selectedTutor.reviews || 0,
            },
            socialLinks: selectedTutor.socialsLinks || [],
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
