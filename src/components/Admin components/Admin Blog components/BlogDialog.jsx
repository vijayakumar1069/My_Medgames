"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { PlusIcon, EditIcon } from "lucide-react";
import { BlogPostForm } from "./BlogPostForm";
import { getBlogByIdForEdit } from "@/app/actions/(Admin)/blogs_function";
import Skeleton from "@/components/Public web components/Skeleton";
import Loading from "../Loading";
import { useRequest } from "@/components/custom hooks/useRequest";
import EditingComponentLoader from "@/components/EditingComponentLoader";

export function BlogDialog({ type = "add", editID }) {
  const [isOpen, setIsOpen] = useState(false);
  const [initialData, setInitialData] = useState({});
  const { loading, success, error, sendRequest } = useRequest();

  const handleSubmitSuccess = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    // Fetch data only when the dialog is open and editID is valid
    if (isOpen && type === "edit" && editID) {
      const fetchData = async () => {
        try {
          const res = await sendRequest(() => getBlogByIdForEdit(editID));

          if (res.success) {
            setInitialData(res.blog);
          }
        } catch (error) {
          console.error("Error fetching blog:", error);
        }
      };

      fetchData();
    }
  }, [isOpen, editID, type]); // Trigger the fetch only when isOpen, editID, or type changes

  if (loading) {
    return <EditingComponentLoader />;
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {type === "add" ? (
          <Button
            variant="outline"
            className="bg-blue-400 hover:bg-blue-500 text-black"
            size="sm"
          >
            <PlusIcon className="mr-2 h-4 w-4" /> Add Blog
          </Button>
        ) : (
          <Button
            variant="outline"
            size="sm"
            className="bg-green-400 xp-2 py-4 h-9 hover:bg-green-500 text-black"
          >
            <EditIcon className="mr-2 h-4 w-4" /> Edit
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>
            {type === "add" ? "Add New Blog" : "Edit Blog"}
          </DialogTitle>
        </DialogHeader>
        <DialogDescription>Edit</DialogDescription>

        <BlogPostForm
          initialData={initialData}
          onSubmitSuccess={handleSubmitSuccess}
        />
      </DialogContent>
    </Dialog>
  );
}
