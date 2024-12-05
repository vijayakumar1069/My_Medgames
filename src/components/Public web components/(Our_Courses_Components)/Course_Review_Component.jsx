import { IconStar } from "@tabler/icons-react";
import React from "react";
import Course_Details_review_Card from "./Course_Details_review_Card";

const Course_Review_Component = ({ course }) => {
  const { reviews } = course;

  // Calculate star ratings
  const totalReviews = reviews?.length;
  const starCounts = [5, 4, 3, 2, 1].map((star) => ({
    star,
    count: reviews?.filter((review) => review.rating === star).length,
    percentage: totalReviews
      ? (reviews.filter((review) => review.rating === star).length /
          totalReviews) *
        100
      : 0,
  }));


  return (
    <div className="mt-6  flex flex-col space-y-5 p-5">
     
        <div className=" w-full flex space-x-5 sm:flex-row flex-col justify-center items-center sm:space-y-0 space-y-6 ">
          <div className="max-w-40 flex flex-col justify-center items-center space-y-2 bg-white drop-shadow-2xl p-5 rounded-lg">
            <h1 className="text-2xl font-semibold text-[#4F9F76]">5</h1>

            <div className="flex items-center space-x-1 text-yellow-500">
              {[...Array(5)].map((_, i) => (
                <IconStar
                  className="text-yellow-500"
                  fill="currentColor"
                  key={i}
                />
              ))}
            </div>
            <p>{starCounts[0].count} rating</p>
          </div>
          <div className="w-full px-5">
            {starCounts?.map(({ star, count, percentage,index }) => (
              <div key={index} className="flex items-center space-x-4">
                {/* Star label */}
                <div className="flex items-center space-x-3">
                  <p className="font-medium">{star}</p>
                  <IconStar className="text-yellow-500" fill="currentColor" />
                </div>

                {/* Progress bar */}
                <div className="flex-1 h-4 bg-gray-200 rounded-lg">
                  <div
                    className="h-4 bg-yellow-500 rounded-lg"
                    style={{ width: `${percentage}%` }}
                  ></div>
                </div>

                {/* Count */}
                <p className="text-gray-600">{count}</p>
              </div>
            ))}
          </div>
        </div>
      
      <div className="">
        <h1 className="text-2xl font-bold mb-5">Reviews</h1>
        <div className="w-full grid grid-cols-1 items-center gap-10">

        {
          reviews?.map((review) => (
           <Course_Details_review_Card key={review.id} review={review} />
          ))
        }
        </div>
      </div>
    </div>
  );
};

export default Course_Review_Component;
