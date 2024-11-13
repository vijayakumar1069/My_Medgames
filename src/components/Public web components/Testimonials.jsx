import React from 'react'
import Small_Title from './Small_Title'
import Large_Title from './Large_Title'
import { Button } from '../ui/button'
import Testmonials_Card from './Testmonials_Card'
import { reviews } from '@/utils/constvalues'

const Testimonials = () => {
  return (
    <div className="w-full h-full flex justify-center items-center  flex-col space-y-8  py-10 bg-[#F4F6FC]">
      <div className="lg:w-10/12 md:w-11/12 w-full space-y-4 md:space-y-0 flex flex-col md:flex-row md:justify-between justify-center items-center">
        
        {/* Left Side: Text Content */}
        <div className="flex-1 mb-4 md:mb-0 md:text-left text-center  space-y-4 md:pr-5">
          <Small_Title title="Testimonials" />
          <Large_Title title="What Our Students Say About Our Medical Tutors" text={true} left={false} />
        </div>

        {/* Right Side: Button */}
        <div className="basis-1/4 flex  justify-center md:text-right">
          <Button className="bg-[#4F9F76] text-white px-8 py-2 rounded-md hover:bg-transparent hover:text-[#4F9F76] border border-[#4F9F76]">
            View More
          </Button>
        </div>
      </div>
      <div className="lg:w-10/12 md:w-11/12 w-full grid grid-cols-1 lg:grid-cols-2   gap-5 p-5 md:p-0 justify-items-center  ">
          {
            reviews.map((item) => (
              <Testmonials_Card key={item.id} review={item} />
            ))
          }
        </div>
    </div>
  )
}

export default Testimonials
