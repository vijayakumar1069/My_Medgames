
import { TutorDialog } from "@/components/Admin components/Admin Tutor component/TutorDialog";
import { TutorsTable } from "@/components/Admin components/Admin Tutor component/TutorsTable";
import Skeleton from "@/components/Public web components/Skeleton";
import { Suspense } from "react";

export default function AdminTutorsPage() {
  return (
    
    <div className="container mx-auto py-8">
    <div className="space-y-6">
      <div className="flex justify-end">
        <TutorDialog type="add" />
      </div>
      
      <h1 className="text-xl font-semibold">Tutors List</h1>
          <Suspense fallback={<Skeleton />}>
            <TutorsTable />
          </Suspense>
    
    </div>
  </div>
  );
}
