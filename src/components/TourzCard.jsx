import React from 'react'

const TourzCard = ({tourzCardImg, tourzHead, tourzPara}) => {
  return (
    <>
    
    <div id="tourzCard" className="h-[250px] w-[280px] bg-white rounded-lg p-4 flex flex-col">
      <img className="w-[50px] h-[50px] mb-4" src={tourzCardImg} alt={tourzHead} />
      <h2 className="text-xl font-semibold text-black mb-2">{tourzHead}</h2>
      <p className="text-[14px] text-gray-700">{tourzPara}</p>
    </div>
    
    </>
  )
}

export default TourzCard