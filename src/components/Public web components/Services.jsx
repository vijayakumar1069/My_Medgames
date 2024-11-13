import React from 'react'
import Small_Title from './Small_Title'
import Large_Title from './Large_Title'
import { services } from '@/utils/constvalues'
import Service_Section_Card from './Service_Section_Card'

const Services = () => {
  return (
    <div className='w-full h-full flex justify-center items-center flex-col  space-y-8 px-5 py-10'>
        <Small_Title title='Services' />
        <Large_Title title="We provide All-in-one Solution for every Students"/>
        <div className="lg:w-10/12 md:w-11/12 w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-5  ">
          {
            services.map((item) => (
              <Service_Section_Card key={item.id} data={item} />
            ))
          }
        </div>

    </div>
  )
}

export default Services