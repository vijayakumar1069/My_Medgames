import Image from 'next/image'
import React from 'react'
import Breadcrumb_Wrapper from './Breadcrumb_Wrapper'

const Svg_Bg = () => {
  return (
    <div className="relative w-full h-[400px] ">
      {/* Image with custom overlay */}
      <div className="relative w-full h-full">
     
        <div className="absolute inset-0 bg-[#E9f8F3]/70 z-5"></div>
      </div>

      {/* Content */}
      <div className="">

      <Breadcrumb_Wrapper headingTextColor="text-black"/>
      </div>
      <div className="">
        
      </div>
      
    </div>
  )
}

export default Svg_Bg