import React from 'react'
import Svg_Bg from '../Svg_Bg'
import About_Us_SVG_BG from './About_Us_SVG_BG'
import Why_Us_Card from './Why_Us_Card'
import { why_Us_contents } from '@/utils/constvalues'

const Why_Us = () => {
  return (
    <div className='relative'>
        <About_Us_SVG_BG/>
        <div className="">
        <div className="lg:absolute lg:left-1/2 transform lg:-translate-x-1/2 lg:bottom-[30px] justify-items-center p-5  xl:bottom-[100px] 2xl:bottom-[50px] lg:w-9/12 w-full z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {why_Us_contents.map((content,index) => (
              <Why_Us_Card key={content.id} index={index} content={content} />

            ))}
          </div>
        </div>
        </div>
        <div className="pb-[10px] md:pb-[20px] lg:pb-[300px] xl:pb-[300px] 2xl:pb-[250px] relative"></div>
    </div>
  )
}

export default Why_Us