import React from 'react'
import Small_Title from './Small_Title'
import Large_Title from './Large_Title'
import { Button } from '../ui/button'
import { courses } from '@/utils/constvalues'
import Course_Card from './Course_Card'

const Courses = () => {
  return (
    <div className="w-full h-full flex justify-center items-center  flex-col space-y-8  py-10 bg-[#fff]">
      <div className="lg:w-10/12 md:w-11/12 w-full flex flex-col md:flex-row space-y-5 md:space-y-0 md:justify-between justify-center items-center">
        
        {/* Left Side: Text Content */}
        <div className="flex-1 mb-4 md:mb-0 md:text-left text-center  space-y-4 md:pr-5">
          <Small_Title title="Our Courses" />
          <Large_Title title="Providing the Best Learning Experience" text={true} left={false} />
        </div>

        {/* Right Side: Button */}
        <div className="basis-1/4 flex  justify-center md:text-right">
          <Button className="bg-[#4F9F76] text-white px-8 py-2 rounded-md hover:bg-transparent hover:text-[#4F9F76] border border-[#4F9F76]">
            All Courses
          </Button>
        </div>
      </div>
      <div className="lg:w-10/12 md:w-11/12 w-full grid grid-cols-1 xl:grid-cols-2   gap-5 p-5 md:p-0 justify-items-center xl:justify-items-start ">
          {
            courses.map((item) => (
              <Course_Card key={item.id} course={item} />
            ))
          }
        </div>
    </div>
  )
}

export default Courses