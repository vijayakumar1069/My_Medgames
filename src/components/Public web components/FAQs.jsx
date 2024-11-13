import React from 'react'
import Small_Title from './Small_Title'
import Large_Title from './Large_Title'

const FAQs = () => {
  return (
    <div className='w-full h-full bg-[#F4F6FC] flex justify-center items-center flex-col space-y-8 px-5 py-10'>
    <Small_Title title='FAQs' />
    <Large_Title title="Got Questions? We've Got Answers"/>
  
    {/* <div className="lg:w-10/12 md:w-11/12 w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3   gap-5  ">
      {
        blogs.map((item) => (
          <Blog_Card key={item.id} blog={item} />
        ))
      }
    </div> */}

</div>
  )
}

export default FAQs