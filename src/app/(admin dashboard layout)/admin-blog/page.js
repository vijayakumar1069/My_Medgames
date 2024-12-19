import { BlogDialog } from "@/components/Admin components/Admin Blog components/BlogDialog";
import { BlogPostForm } from "@/components/Admin components/Admin Blog components/BlogPostForm";
import { BlogTable } from "@/components/Admin components/Admin Blog components/BlogTable";
import Skeleton from "@/components/Public web components/Skeleton";
import { Suspense } from "react";

export default function AdminBlogPage() {
  return (
    <div className="container mx-auto py-8">
      <div className="space-y-6">
        <div className="flex justify-end">
          <BlogDialog type="add" />
        </div>

        <h1 className="text-xl font-semibold">Blogs  List</h1>
        <Suspense fallback={<Skeleton />}>
          <BlogTable />
        </Suspense>
      </div>
    </div>
  );
}
