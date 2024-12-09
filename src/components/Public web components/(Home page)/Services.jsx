// Services.js
import React from "react";

import Small_Title from "./Small_Title";
import Large_Title from "./Large_Title";
import Service_Section_Card from "./Service_Section_Card";
import { getHomePageServices } from "@/app/actions/(Admin)/courseActions";
import ErrorBoundary from "@/app/(public)/error";

export const revalidate = 0;

const Services = async () => {
  try {
    const servicesResponse = await getHomePageServices();

    if (!servicesResponse.success) {
      throw new Error(servicesResponse.message);
    }

    const services = servicesResponse.servicesCourses;

    return (
      <div className="w-full h-full flex justify-center items-center flex-col space-y-8 px-5 py-10">
        <Small_Title title="Services" />
        <Large_Title title="We provide All-in-one Solution for every Students" />

        <div className="lg:w-10/12 md:w-11/12 w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {services && services.length > 0 ? (
            services.map((item) => (
              <Service_Section_Card key={item._id} data={item} />
            ))
          ) : (
            <div className="flex col-span-4 justify-center items-center flex-col mx-auto w-full space-y-8 p-3 py-10">
              <h1 className="text-right text-3xl font-bold text-gray-700">
                No Services Found
              </h1>
            </div>
          )}
        </div>
      </div>
    );
  } catch (error) {
    return (
      <div className="w-full h-full flex justify-center items-center flex-col space-y-8 p-3 py-10">
        <ErrorBoundary
          fallback={<div>Something went wrong</div>}
          errormessage={error.message}
        />
      </div>
    );
  }
};

export default Services;
