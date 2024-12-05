import { getCourses } from "@/app/actions/(Admin)/courseActions";
import { 
    Table, 
    TableBody, 
    TableCell, 
    TableHead, 
    TableHeader, 
    TableRow 
  } from "@/components/ui/table";


import Image from "next/image";
import { DeleteCourse } from "./DeleteCourse";
import { CourseCreationDialog } from "./CourseCreationDialog";
  
  export async function Courses_Table() {
    let Courses;
    try {
        const res=await getCourses();
      
        Courses=await res.courses;

   
        if (Courses.error) {
            console.log(Courses.error);
            return (
                <div>
                    <p>{Courses.error.message}</p>
                </div>
            );
        }
    } catch (error) {
        
        console.log(error);
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
                <TableRow key={course._id}>
                  {/* <TableCell className=" ">
                    <div className="relative w-10 h-10 flex justify-center items-center">

                    <Image
                      src={course.img_for_course_details_page !=" " ? course.img_for_course_details_page : null}
                      alt={course.name}
                      fill
                      className="rounded-full object-center"
                      
                    />
                    </div>
                  </TableCell> */}
                  <TableCell>{course.name}</TableCell>
                  <TableCell>{course.price}</TableCell>
                  {/* <TableCell>{course.college}</TableCell>
                  <TableCell>{course.specialist}</TableCell>
                  <TableCell>{course.location}</TableCell> */}
                  <TableCell className="flex gap-2">
                    {/* <TutorDialog 
                      type="edit" 
                      initialData={{
                        _id: tutor._id,
                        name: tutor.name,
                        graduation: tutor.graduation,
                        college: tutor.college,
                        specialist: tutor.specialist,
                        location: tutor.location,
                        image: tutor.image
                      }} 
                    />
                    <DeleteTutorButton tutorId={tutor._id} /> */}
                    <CourseCreationDialog type="edit" initialData={course} />
                    <DeleteCourse courseId={course._id} />
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={6} className="text-center text-gray-500 py-4">
                  No tutors available. Add a new tutor to get started.
                  {/* <TutorDialog type="add" /> */}
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    );
  }
  