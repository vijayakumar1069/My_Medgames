
import { TutorDialog } from "@/components/Admin components/Admin Tutor component/TutorDialog";
import { TutorsTable } from "@/components/Admin components/Admin Tutor component/TutorsTable";
import Skeleton from "@/components/Public web components/Skeleton";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Suspense } from "react";

export default function AdminTutorsPage() {
  return (
    
    <div className="container mx-auto py-8">
    <div className="space-y-6">
      <div className="flex justify-end">
        <TutorDialog type="add" />
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Tutors List</CardTitle>
        </CardHeader>
        <CardContent>
          <Suspense fallback={<Skeleton />}>
            <TutorsTable />
          </Suspense>
        </CardContent>
      </Card>
    </div>
  </div>
  );
}
