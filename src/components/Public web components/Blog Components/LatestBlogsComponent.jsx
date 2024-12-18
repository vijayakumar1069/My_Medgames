import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Clock, Calendar } from "lucide-react";
import { formatDate } from "@/utils/formatDateFunction";
import { IconCoins, IconMoneybag } from "@tabler/icons-react";
import { Button } from "@/components/ui/button";

const LatestBlogsComponent = ({ Allcourses }) => {
  console.log("Allcourses", Allcourses);
  return (
    <div className="bg-white shadow-md rounded-lg p-4 sm:p-6 ">
      <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4">
        Our Courses
      </h2>

      <div className="space-y-3 sm:space-y-4">
        {Allcourses.map((course) => (
          <Link
            href={`/our-courses/${course._id}`}
            key={course._id}
            className="block hover:bg-gray-50 transition duration-300  hover:scale-105 rounded-lg p-2 sm:p-3"
          >
            <div className="flex flex-row lg:flex-col xl:flex-row items-center gap-3 sm:gap-4">
              {/* Image Container */}
              <div className="relative w-20 h-20 md:w-28 md:h-28 xl:w-32 xl:h-32 flex-shrink-0">
                <Image
                  src={course.img_for_home}
                  alt={course.name}
                  fill
                  className="object-cover rounded-md"
                  sizes="(max-width: 640px) 80px, 
                         (max-width: 768px) 96px,
                         112px"
                  priority={false}
                  quality={100}
                />
              </div>

              {/* Content Container */}
              <div className="flex-grow min-w-0"> {/* min-w-0 prevents flex item from overflowing */}
                <h3 className="text-sm sm:text-base font-medium text-gray-800 line-clamp-2 mb-1 sm:mb-2">
                  {course.name}
                </h3>
                <p className="text-xs sm:text-sm text-gray-500 line-clamp-3 mb-1 sm:mb-2">
                  {course.description}
                </p>

                {/* Date and Time Container */}
                {/* <div className="flex flex-col  flex-wrap items-start sm:items-center gap-1 sm:gap-3 text-xs sm:text-sm text-gray-500">
                  <div className="flex items-center">
                    <Calendar className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                    <span className="truncate">{formatDate(course.startDate)}</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                    <span className="truncate">{formatDate(course.endDate)}</span>
                  </div>
                </div> */}
                {/*Price */}
                {/* <div className="flex flex-col  flex-wrap items-start sm:items-center gap-1 sm:gap-3 ">
                  <div className="flex items-center bg-[#4F9F76] text-white py-1 px-2 rounded">
                    <IconCoins className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                    <span className="truncate ">
                      {course.price}$
                    </span>
                  </div>
                </div> */}
              </div>
            </div>
          </Link>
        ))}
        <Link href={"/our-courses"} className="block hover:bg-gray-50 transition duration-300  hover:scale-105 rounded-lg p-2 sm:p-3">
          <Button className="w-full bg-[#4F9F76] text-white py-2 px-4 rounded hover:bg-[#274E49]">
            View All Courses
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default LatestBlogsComponent;
