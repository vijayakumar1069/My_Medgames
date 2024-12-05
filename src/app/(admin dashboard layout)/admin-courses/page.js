import { getCourses } from "@/app/actions/(Admin)/courseActions";
import { CourseCreationDialog } from "@/components/Admin components/Admin course components/CourseCreationDialog";
import { Courses_Table } from "@/components/Admin components/Admin course components/Courses_Table";
import { Suspense } from "react";

export default async function Admin_Courses_page() {
 

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <CourseCreationDialog />
            <Courses_Table />
        </Suspense>
    );
}