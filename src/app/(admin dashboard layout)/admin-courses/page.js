import { getCourses } from "@/app/actions/(Admin)/courseActions";
import { CourseCreationDialog } from "@/components/Admin components/Admin course components/CourseCreationDialog";
import { Courses_Table } from "@/components/Admin components/Admin course components/Courses_Table";
import Skeleton from "@/components/Public web components/Skeleton";
import { Suspense } from "react";

export default async function Admin_Courses_page() {
 

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <CourseCreationDialog />
            <Suspense fallback={<Skeleton />}>
                <Courses_Table />
            </Suspense>
        </Suspense>
    );
}