import React from 'react';

const DestinationCard = ({ destinationImg, destinationHead, destinationPara }) => {
  return (
    <div id='destinationImage' className=" w-[100px] flex flex-col items-center p-0 m-0">
       <img className="h-[200px] w-[200px] md:h-[100px] md:w-[100px] object-cover rounded-full mb-2" src={destinationImg} alt="" /> 
      <h3 className="text-sm md:text-base font-medium text-gray-800">{destinationHead}</h3>
      <p className="text-xs md:text-sm text-gray-500">{destinationPara}</p>
    </div>
  );
};

export default DestinationCard;