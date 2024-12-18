// app/meet-our-tutors/page.tsx
import { Suspense } from "react";
import { getTutors } from "@/app/actions/(Admin)/tutorActions";
import Meet_Our_Tutor from "@/components/Public web components/(Meet_Our_Tutors_Components)/Meet_Our_Tutor";
import Image_Bg from "@/components/Public web components/Image_Bg";
import Skeleton from "@/components/Public web components/Skeleton";

// Server Component
async function TutorsContent() {
  const tutors = await getTutors();

  if (!tutors || tutors.length === 0) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <p className="text-lg text-gray-600">
          No tutors available at the moment.
        </p>
      </div>
    );
  }

  return (
    <div className="mt-[0.1px]">
      {/* <Image_Bg bg_Image="/tutorbg.png"/> */}
      <Meet_Our_Tutor initialTutors={tutors} />
    </div>
  );
}

export default async function Meet_Our_Tutors_Page() {
  return (
    <div className="mt-[0.1px]">
      <Image_Bg bg_Image="/tutorbg.png" />
      <Suspense fallback={<Skeleton />}>
        <TutorsContent />
      </Suspense>
    </div>
  );
}
