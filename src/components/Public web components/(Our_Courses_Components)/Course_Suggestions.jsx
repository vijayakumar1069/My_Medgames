import React from 'react';

import Large_Title from '../(Home page)/Large_Title';
import Course_Details_Page_Card from './Course_Details_Page_Card';
import { courses } from '@/utils/constvalues';

// Function to get 3 random courses excluding the current course
const getRandomCourses = (courses, currentCourse_Name) => {

  // Exclude the current course
  const filteredCourses = courses.filter(course => course.name !== currentCourse_Name);

  // Ensure the array has at least 3 courses
  if (filteredCourses.length <= 3) {
    return filteredCourses;
  }

  // Shuffle the filtered courses
  const shuffledCourses = [...filteredCourses];
  for (let i = shuffledCourses.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledCourses[i], shuffledCourses[j]] = [shuffledCourses[j], shuffledCourses[i]];
  }

  // Return the first 3 courses
  return shuffledCourses.slice(0, 3);
};

const Course_Suggestions = ({ suggestionsCourses }) => {
 
  return (
    <div className="w-full h-full flex justify-center items-center flex-col space-y-8 p-3 py-10">
      <div className="w-full flex flex-col space-y-5">
        <Large_Title title="Courses You May Like" left={true} text={true} />

        <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 p-3 md:p-0 justify-items-center xl:justify-items-start">
          {suggestionsCourses.map((item,index) => (
            <Course_Details_Page_Card key={index} course={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Course_Suggestions;
