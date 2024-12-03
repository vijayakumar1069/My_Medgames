'use client';

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { TutorForm } from './TutorForm';
import { PlusIcon, EditIcon } from 'lucide-react';


export function TutorDialog({ type, initialData }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmitSuccess = () => {
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {type === 'add' ? (
          <Button variant="outline" className="bg-blue-400 hover:bg-blue-500 text-black" size="sm">
            <PlusIcon className="mr-2 h-4 w-4" /> Add Tutor
          </Button>
        ) : (
          <Button variant="outline" size="sm" className="bg-green-400 xp-2 py-4 h-9 hover:bg-green-500 text-black">
            <EditIcon className="mr-2 h-4 w-4" /> Edit
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>
            {type === 'add' ? 'Add New Tutor' : 'Edit Tutor'}
          </DialogTitle>
        </DialogHeader>
        <TutorForm 
          initialData={initialData}
          onSubmitSuccess={handleSubmitSuccess}
        />
      </DialogContent>
    </Dialog>
  );
}
