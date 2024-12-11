import React from 'react'
import Small_Title from '../(Home page)/Small_Title'
import Large_Title from '../(Home page)/Large_Title'
import Upcoming_Events_card from './Upcoming_Events_card'
import { upcoming_events } from '@/utils/constvalues'

const Upcoming_Events_Main = () => {
  return (
    <div className="w-full h-full flex justify-center items-center  flex-col space-y-8 p-3 py-10 ">
    <div className="lg:w-9/12 md:w-11/12 w-full flex flex-col  space-y-5 ">
      <div className="flex flex-col space-y-4 justify-center items-center w-full">
        <Small_Title title="Events" color={"[#4A4A4A]"} />
        <Large_Title title="Upcoming Events" />
      </div>
      <div className=" w-full grid grid-cols-1 md:grid-cols-2  xl:grid-cols-3 gap-10 p-3 md:p-0 justify-items-center xl:justify-items-start">
        {upcoming_events.map((item) => (
          // <Course_Card key={item.id} course={item} />
          <Upcoming_Events_card key={item.id} event={item} />
        ))}
      </div>
    </div>
  </div>
  )
}

export default Upcoming_Events_Main