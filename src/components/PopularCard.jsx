import React from 'react'

const PopularCard = ({ image, location, title, rating, reviews, duration, price }) => {
  return (
    <>
    
    <div className="rounded-xl border p-3 shadow-sm bg-white hover:shadow-md transition">
      <div className="relative h-44 w-full overflow-hidden rounded-xl">
        <img
          src={image}
          alt=""
          className="h-full w-full object-cover"
        />
        <div className="absolute bottom-0 right-0 bg-white h-5 w-5 rounded-tr-lg"></div>
      </div>
      <div className="mt-2">
        <p className="text-xs text-gray-500">{location}</p>
        <h3 className="text-sm font-medium mt-1">{title}</h3>
        <p className="text-xs text-gray-600 mt-1">
          ⭐ {rating} ({reviews})
        </p>
        <div className="flex justify-between text-sm mt-2 text-gray-700">
          <span>{duration}</span>
          <span className="font-semibold">From ${price}</span>
        </div>
      </div>
    </div>

    </>
  )
}

export default PopularCard