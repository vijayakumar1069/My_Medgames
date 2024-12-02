import React from 'react'
import Small_Title from './Small_Title'
import Large_Title from './Large_Title'
import Tutor_Card from './Tutor_Card'
import { const_tutors } from '@/utils/constvalues'

const Tutors = () => {
  return (
    <div className='w-full h-full flex justify-center items-center overflow-hidden flex-col    py-10'>
      <div className="mb-5">

        <Small_Title title='Our Tutors' />
      </div>
      <div className="mb-5">

        <Large_Title title="Meet the Professional Tutors"/>
      </div>
        {/* Add more tutor components here */}
        <div className="lg:w-10/12 md:w-11/12 w-full mt-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4   gap-8 justify-items-center md:justify-items-center  ">
          {
            const_tutors.map((item,index) => (
              <Tutor_Card key={`${item.id}-${index}`} tutor={item} />
            ))
          }
        </div>
    </div>
  )
}

export default Tutors