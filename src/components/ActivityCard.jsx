import React from 'react'


const Activity = ({ title, image, height = "h-48" }) => {
  return (
    <>
    
    <div className={`relative w-full ${height} rounded-xl overflow-hidden group`}>
      <img src={image} alt={title} className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition" />
      <div className="absolute bottom-3 left-4 text-white font-medium text-sm sm:text-base">
        {title}
      </div>
    </div>
    
    </>
  )
}

export default Activity