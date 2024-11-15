import React from 'react'

const Small_Title = ({title,color}) => {
  
  return (
    <div className={`font-Manrope ${color != undefined ? `text-${color}` : "text-[#4F9F76]"} text-xl sm:text-2xl font-semibold`}
    >
      {title}

    </div>
  )
}

export default Small_Title