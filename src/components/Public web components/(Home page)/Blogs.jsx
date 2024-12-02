import React from 'react'
import Small_Title from './Small_Title'
import Large_Title from './Large_Title'
import Blog_Card from './Blog_Card'
import { blogService } from '@/utils/blogService'

const Blogs = () => {
  const blogs=blogService.getAllBlogs();
  return (
    <div className='w-full h-full bg-[#F4F6FC] flex justify-center items-center flex-col space-y-8  py-10'>
    <Small_Title title='Blogs & News' />
    <Large_Title title="Welcome to Our Blogs"/>
    <div className="max-w-4xl mx-auto">

    <p className='text-[#4A4A4A] text-center px-3'>Explore our latest articles, insights, and tips. Whether youre looking for health advice, tech innovations, or lifestyle tips, we have something for everyone. Dive into our diverse range of topics and enrich your knowledge!</p>
    </div>
    <div className="lg:w-10/12 md:w-11/12 w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 justify-items-center px-2 md:px-0  gap-5  ">
      {
        blogs.map((item) => (
          <Blog_Card key={item.id} blog={item} />
        ))
      }
    </div>

</div>
  )
}

export default Blogs