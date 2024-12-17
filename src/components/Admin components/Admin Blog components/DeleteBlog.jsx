'use client';

import { useState } from 'react';
import { Button } from "@/components/ui/button";

import { Trash2 } from 'lucide-react';
import { deleteTutor } from '@/app/actions/(Admin)/tutorActions';
import { useRequest } from '@/components/custom hooks/useRequest';
import { deleteBlog } from '@/app/actions/(Admin)/blogs_function';

export function DeleteBlog({ blogId }) {
 const{loading,sendRequest}=useRequest();

 const handleDeleteRequest = async () => {
    await sendRequest(()=>deleteBlog(blogId));

 }

  return (
   <>
   <Button variant="destructive" disabled={loading} onClick={handleDeleteRequest}>
      <Trash2 className="w-4 h-4 mr-2" />
      {loading ? "Deleting..." : "Delete"}
    </Button>
   </>
  );
}
