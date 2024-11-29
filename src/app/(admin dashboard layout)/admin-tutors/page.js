
import { getTutors } from "@/app/actions/(Admin)/tutorActions"
import { AddTutorModal } from "@/components/Admin components/admin tutor components/AddTutorModal"
import { TutorCardWrapper } from "@/components/Admin components/admin tutor components/TutorCardWrapper"
import { Button } from "@/components/ui/button"
import { PlusIcon } from "lucide-react"

// import { getTutors } from "@/actions/tutor-actions"



export default async function Admin_Tutors_Page() {
  const { tutors } = await getTutors()

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">
          Manage Tutors 
          <span className="text-gray-500 text-base ml-2">
            ({tutors.length} Total)
          </span>
        </h1>
        
        <AddTutorModal triggerMode="always-open">
          <Button className="flex items-center gap-2">
            <PlusIcon className="w-5 h-5" />
            Add Tutor
          </Button>
        </AddTutorModal>
      </div>

      <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6">
        {tutors.map((tutor) => (
          <TutorCardWrapper
            key={tutor._id}
            tutor={tutor}
          
          />
        ))}
      </div>

      {tutors.length === 0 && (
        <div className="text-center py-12 bg-gray-50 rounded-lg">
          <h2 className="text-2xl text-gray-600 mb-4">
            No Tutors Found
          </h2>
          <p className="text-gray-500 mb-6">
            Start by adding your first tutor
          </p>
          <AddTutorModal>
            <Button>
              <PlusIcon className="mr-2 w-5 h-5" />
              Add First Tutor
            </Button>
          </AddTutorModal>
        </div>
      )}

      {/* Pagination or Infinite Scroll for 20+ Tutors */}
      {tutors.length > 20 && (
        <div className="flex justify-center mt-8">
          <Button variant="outline">
            Load More Tutors
          </Button>
        </div>
      )}
    </div>
  )
}
