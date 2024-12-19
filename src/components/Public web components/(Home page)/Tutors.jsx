import React from "react";
import Small_Title from "./Small_Title";
import Large_Title from "./Large_Title";
import Tutor_Card from "./Tutor_Card";
import { getTutors } from "@/app/actions/(Admin)/tutorActions";
import Loading from "@/components/Admin components/Loading";

const Tutors = async () => {
  try {
    const homepageTutors = await getTutors();

    return (
      <div className="w-full h-full flex justify-center items-center overflow-hidden flex-col py-10">
        <div className="mb-5">
          <Small_Title title="Our Tutors" />
        </div>
        <div className="mb-5">
          <Large_Title title="Meet the Professional Tutors" />
        </div>

        <div className="xl:w-9/12 md:w-11/12 w-full mt-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-8 lg:gap-3 justify-items-center">
          {homepageTutors.length > 0 ? (
            homepageTutors.map((item) => (
              <Tutor_Card key={item._id} tutor={item} />
            ))
          ) : (
            <p>No tutors found</p>
          )}
        </div>
      </div>
    );
  } catch (error) {
    console.error('Failed to fetch tutors:', error);
    return (
      <div className="w-full h-full flex justify-center items-center flex-col space-y-8 p-3 py-10">
        <p>Error loading tutors: {error.message}</p>
      </div>
    );
  }
};

export default Tutors;
