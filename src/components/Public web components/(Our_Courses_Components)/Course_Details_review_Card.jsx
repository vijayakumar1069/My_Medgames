import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { IconStar } from '@tabler/icons-react'
import React from 'react'

const Course_Details_review_Card = ({review}) => {
    const{id,review_content,name,image,small_description,rating}=review
  return (
    <div>
       <div className="flex items-center space-x-4">
        <Avatar className="w-20 h-20 md:w-24 md:h-24  bg-slate-400">
          <AvatarImage src={image} />
          <AvatarFallback>{name}</AvatarFallback>
        </Avatar>

        <div className="">
        <div className="flex items-center space-x-1 text-yellow-500">
          {[...Array(rating)].map((_, i) => (
            <IconStar className="text-yellow-500" fill="currentColor" key={i} />
          ))}
         
        </div>
        <h1 className='font-bold text-lg '>{name}</h1>
        <p className='font-semibold text-[#4A4A4A]'>{small_description}</p>
        <p>&quot; {review_content} &quot;</p>
        </div>
      </div>
    </div>
  )
}

export default Course_Details_review_Card