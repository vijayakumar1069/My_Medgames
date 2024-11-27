import React from 'react'
import Small_Title from './Small_Title'
import Large_Title from './Large_Title'
import Tutor_Card from './Tutor_Card'
import { const_tutors } from '@/utils/constvalues'

const Tutors = () => {
  return (
    <div className='w-full h-full flex justify-center items-center overflow-hidden flex-col space-y-5  py-10'>
        <Small_Title title='Our Tutors' />
        <Large_Title title="Meet the Professional Tutors"/>
        {/* Add more tutor components here */}
        <div className="lg:w-10/12 md:w-11/12 w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-5 justify-items-center md:justify-items-center  ">
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