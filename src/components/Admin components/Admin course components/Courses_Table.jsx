import { getCourses } from "@/app/actions/(Admin)/courseActions";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import Image from "next/image";
import { DeleteCourse } from "./DeleteCourse";
import { CourseCreationDialog } from "./CourseCreationDialog";

export async function Courses_Table() {
  let Courses;
  try {
    const res = await getCourses();

    Courses = await res.courses;

    if (Courses.error) {
      return (
        <div>
          <p>{Courses.error.message}</p>
        </div>
      );
    }
  } catch (error) {
    return (
      <div>
        <p>{error.message}</p>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow>
            {/* <TableHead className="text-center">Image</TableHead> */}
            <TableHead>Name</TableHead>
            <TableHead>Price</TableHead>
            {/* <TableHead>College</TableHead>
              <TableHead>Specialist</TableHead>
              <TableHead>Location</TableHead> */}
            <TableHead className="text-center">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {Courses.length > 0 ? (
            Courses.map((course) => (
              <TableRow key={course._id} className="w-full">
               
                <TableCell>{course.name}</TableCell>
                <TableCell>{course.price}</TableCell>
              
                <TableCell className="flex text-center gap-2 justify-center items-center w-full mx-auto">
                  <CourseCreationDialog type="edit" initialData={course} />
                  <DeleteCourse courseId={course._id} />
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={6} className="text-center text-gray-500 py-4">
                No Courses available. Add a new Courses to get started.
                {/* <TutorDialog type="add" /> */}
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
