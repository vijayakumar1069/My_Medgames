import React from 'react';
import Small_Title from "./Small_Title";
import Large_Title from "./Large_Title";
import Tutor_Card from "./Tutor_Card";
import { getTutors } from "@/app/actions/(Admin)/tutorActions";
import EditingComponentLoader from '@/components/EditingComponentLoader';

// Error Boundary Component
function ErrorFallback({ error }) {
  return (
    <div className="w-full h-full flex justify-center items-center flex-col space-y-8 p-3 py-10">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-red-500 mb-4">Oops! Something went wrong</h2>
        <p className="text-gray-600 mb-2">Error: {error.message}</p>
        <p className="text-sm text-gray-500">
          We&apos;re sorry, but we couldn&apos;t load the tutors at this time.
          Please try again later or contact support.
        </p>
      </div>
    </div>
  );
}

// Loading Component
function LoadingState() {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <EditingComponentLoader />
    </div>
  );
}

async function Tutors() {
  let tutors = [];
  let error = null;

  try {
    tutors = await getTutors();
  } catch (catchError) {

    error = catchError;
  }

  // If there's an error, render error boundary
  if (error) {
    return <ErrorFallback error={error} />;
  }

  return (
    <div className="w-full h-full flex justify-center items-center overflow-hidden flex-col py-10">
      <div className="mb-5">
        <Small_Title title="Our Tutors" />
      </div>
      <div className="mb-5">
        <Large_Title title="Meet the Professional Tutors" />
      </div>

      <div className="xl:w-9/12 md:w-11/12 w-full mt-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-8 lg:gap-3 justify-items-center">
        {tutors.length > 0 ? (
          tutors.map((item) => (
            <Tutor_Card key={item._id} tutor={item} />
          ))
        ) : (
          <div className="col-span-full text-center text-gray-500">
            <p>No tutors found</p>
            <p className="text-sm mt-2">Check back later or contact administration</p>
          </div>
        )}
      </div>
    </div>
  );
}

// Wrap the component with Suspense for loading state
export default async function TutorsPage() {
  return (
    <React.Suspense fallback={<LoadingState />}>
      <Tutors />
    </React.Suspense>
  );
}
