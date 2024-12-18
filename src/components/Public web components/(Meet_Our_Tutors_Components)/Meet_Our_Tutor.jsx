'use client';

import React, { useState, useMemo } from "react";
import Tutor_Filter_Component from "./Tutor_Filter_Component";
import Meet_Our_Tutor_Card from "./Meet_Our_Tutor_Card";

const Meet_Our_Tutor = ({ initialTutors }) => {
  const [location, setLocation] = useState("");

  // Memoize locations array
  const locationOfTutors = useMemo(() => 
    Array.from(new Set(initialTutors.map((tutor) => tutor.location))),
    [initialTutors]
  );

  // Memoize filtered tutors
  const filteredTutors = useMemo(() => 
    location
      ? initialTutors.filter((tutor) => tutor.location === location)
      : initialTutors,
    [initialTutors, location]
  );

  return (
    <section className="w-full h-full flex justify-center items-center flex-col space-y-8 p-3 py-10 bg-[#fff]">
      <div className="md:w-9/12 w-full grid grid-cols-2 md:grid-cols-4 justify-center gap-8">
        <aside className="md:col-span-2 lg:col-span-1 col-span-2 flex flex-col w-full h-fit space-y-4 shadow-md p-8 rounded-md">
          <div className="mb-1">
            <h1 className="text-black text-2xl font-medium">Filter Tutors</h1>
          </div>
          <div className="w-full outline-dashed outline-[0.1px] outline-[#4A4A4A]/20" />
          <Tutor_Filter_Component 
            setLocation={setLocation} 
            locationOfTutors={locationOfTutors}
          />
        </aside>

        <main className="md:col-span-2 lg:col-span-3 col-span-2 flex justify-center items-center">
          {filteredTutors.length === 0 ? (
            <div className="flex justify-center items-center flex-col space-y-4">
              <h1 className="text-black text-2xl font-medium">No Tutors Found</h1>
              <p className="text-gray-600 text-sm">Please select a different filter.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {filteredTutors.map((tutor) => (
                <Meet_Our_Tutor_Card
                  key={tutor._id}
                  tutor={tutor}
                />
              ))}
            </div>
          )}
        </main>
      </div>
    </section>
  );
};

export default Meet_Our_Tutor;
