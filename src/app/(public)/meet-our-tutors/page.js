// app/meet-our-tutors/page.tsx
import { Suspense } from 'react';
import { getTutors } from "@/app/actions/(Admin)/tutorActions";
import Meet_Our_Tutor from "@/components/Public web components/(Meet_Our_Tutors_Components)/Meet_Our_Tutor";
import Image_Bg from "@/components/Public web components/Image_Bg";
import Loading from '@/components/Admin components/Loading';



function TutorsContent({ tutors }) {
  if (tutors.length === 0) {
    return <div>No tutors found.</div>;
  }

  return (
    <div className="mt-[0.1px]">
      <Image_Bg bg_Image="/tutorbg.png"/>
      <Meet_Our_Tutor tutors={tutors}/>
    </div>
  );
}

export default async function Meet_Our_Tutors_Page() {
  let tutors = [];

  try {
    tutors = await getTutors();
  } catch (error) {
    console.error('Error fetching tutors:', error);
  }

  return (
    <Suspense fallback={<Loading />}>
      <TutorsContent tutors={tutors} />
    </Suspense>
  );
}
