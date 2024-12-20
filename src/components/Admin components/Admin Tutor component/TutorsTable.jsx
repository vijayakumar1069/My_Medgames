import { 
    Table, 
    TableBody, 
    TableCell, 
    TableHead, 
    TableHeader, 
    TableRow 
  } from "@/components/ui/table";
  import { getTutors } from "@/app/actions/(Admin)/tutorActions";
  import { TutorDialog } from "./TutorDialog";
  import { DeleteTutorButton } from "./DeleteTutorButton";
import Image from "next/image";
  
  export async function TutorsTable() {
    const tutors = await getTutors();
    
    if (tutors.error) {
   
      return (
        <div>
          <p>{tutors.message}</p>
        </div>
      );
    }
  
    return (
      <div className="overflow-x-auto bg-white p-3 rounded-md">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="text-center">Image</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Graduation</TableHead>
              <TableHead>College</TableHead>
              {/* <TableHead>Specialist</TableHead> */}
              <TableHead>Location</TableHead>
              <TableHead className="text-center">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {tutors.length > 0 ? (
              tutors.map((tutor) => (
                <TableRow key={tutor._id}>
                  <TableCell className=" ">
                    <div className="relative w-10 h-10">

                    <Image
                      src={tutor.image?.url}
                      alt={tutor.name}
                      fill
                      className="rounded-full"
                      
                    />
                    </div>
                  </TableCell>
                  <TableCell>{tutor.name}</TableCell>
                  <TableCell>{tutor.graduation}</TableCell>
                  <TableCell>{tutor.college}</TableCell>
                  {/* <TableCell>{tutor.specialist}</TableCell> */}
                  <TableCell>{tutor.location}</TableCell>
                  <TableCell className="flex gap-2">
                    <TutorDialog 
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
                    <DeleteTutorButton tutorId={tutor._id} />
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={6} className="text-center text-gray-500 py-4">
                  No tutors available. Add a new tutor to get started.
                  <TutorDialog type="add" />
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    );
  }
  