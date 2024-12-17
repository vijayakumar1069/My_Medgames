'use client';

import { useState } from 'react';
import { Button } from "@/components/ui/button";

import { Trash2 } from 'lucide-react';
import { deleteTutor } from '@/app/actions/(Admin)/tutorActions';

export function DeleteTutorButton({ tutorId }) {
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = async () => {
    setIsDeleting(true);
    try {
      const result = await deleteTutor(tutorId);
      
      if (result.success) {
        
      } else {
       
      }
    } catch (error) {
      console
    } finally {
      setIsDeleting(false);
    }
  };

  return (
   <>
   <Button variant="destructive" disabled={isDeleting} onClick={handleDelete}>
      <Trash2 className="w-4 h-4 mr-2" />
      {isDeleting ? "Deleting..." : "Delete"}
    </Button>
   </>
  );
}
