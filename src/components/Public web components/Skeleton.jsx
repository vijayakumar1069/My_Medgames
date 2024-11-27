import React from "react";

const Skeleton = () => {
  return (
    <div className="w-full h-full flex flex-col space-y-6 p-6 bg-gray-100">
      {/* Skeleton Header */}
      <div className="animate-pulse flex space-x-4">
        <div className="bg-gray-300 rounded-full h-12 w-12"></div>
        <div className="flex-1 space-y-4 py-1">
          <div className="h-4 bg-gray-300 rounded w-3/4"></div>
          <div className="h-4 bg-gray-300 rounded w-1/2"></div>
        </div>
      </div>

      {/* Skeleton Cards */}
      <div className="animate-pulse grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array(6)
          .fill("")
          .map((_, index) => (
            <div
              key={index}
              className="flex flex-col space-y-4 p-4 bg-white shadow rounded-lg"
            >
              <div className="w-full h-48 bg-gray-300 rounded"></div>
              <div className="h-4 bg-gray-300 rounded w-3/4"></div>
              <div className="h-4 bg-gray-300 rounded w-1/2"></div>
              <div className="h-6 bg-gray-300 rounded w-full"></div>
            </div>
          ))}
      </div>

      {/* Skeleton Footer */}
      <div className="animate-pulse flex justify-between items-center">
        <div className="h-8 bg-gray-300 rounded w-32"></div>
        <div className="h-8 bg-gray-300 rounded w-24"></div>
      </div>
    </div>
  );
};

export default Skeleton;
