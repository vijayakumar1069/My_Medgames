import React from 'react'

const Heading_Content_Component = ({title, content}) => {
  return (
    <div className='w-full flex flex-col space-y-3'>
        <h1 className='text-2xl font-bold'>{title}</h1>
        {
            content.map((item, index) => (
                <p className='text-base' key={index}>{item}</p>
            ))
        }

    </div>
  )
}

export default Heading_Content_Component