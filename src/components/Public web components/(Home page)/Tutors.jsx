import React, { Suspense } from "react";
import Small_Title from "./Small_Title";
import Large_Title from "./Large_Title";
import Tutor_Card from "./Tutor_Card";
import { getHomepageTutors } from "@/app/actions/(Admin)/tutorActions";
import Loading from "@/components/Admin components/Loading";

const Tutors = async() => {
  let homepageTutors;
  try {
    const res = await getHomepageTutors();
 
    if (res.success) {
      homepageTutors = res.homeTutors;
    } 
  } catch (error) {
    
    return (
      <div className="w-full h-full flex justify-center items-center  flex-col space-y-8 p-3 py-10 ">
        {error.message}
      </div>
    );
  }
  return (
    <div className="w-full h-full flex justify-center items-center overflow-hidden flex-col    py-10">
      <div className="mb-5">
        <Small_Title title="Our Tutors" />
      </div>
      <div className="mb-5">
        <Large_Title title="Meet the Professional Tutors" />
      </div>
      {/* Add more tutor components here */}
      <Suspense fallback={<Loading/>}>

      <div className="lg:w-10/12 md:w-11/12 w-full mt-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4   gap-8 justify-items-center md:justify-items-center  ">
        {homepageTutors && homepageTutors.map((item, index) => (
          <Tutor_Card key={`${item._id}-${index}`} tutor={item} />
        ))}
      </div>
        </Suspense>
    </div>
  );
};

export default Tutors;
