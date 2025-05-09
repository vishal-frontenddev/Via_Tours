// components/TourCard.jsx
import React from "react";

const TourCard = ({ image, location, title, rating, reviews, duration, price }) => {
  return (
    <div className="rounded-xl shadow-sm overflow-hidden border hover:shadow-md transition duration-300">
      <div className="h-48 md:h-52 lg:h-56 w-full overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover object-center"
        />
      </div>
      <div className="p-4 flex flex-col gap-2">
        <p className="text-sm text-gray-500">{location}</p>
        <h3 className="text-base font-semibold text-gray-900 leading-snug line-clamp-2">
          {title}
        </h3>
        <div className="flex items-center text-sm text-gray-600">
          <span>⭐ {rating}</span>
          <span className="ml-1">({reviews})</span>
        </div>
        <div className="flex justify-between text-sm text-gray-700 mt-2">
          <span>{duration}</span>
          <span className="font-semibold">From ${price}</span>
        </div>
      </div>
    </div>
  );
};

export default TourCard;
