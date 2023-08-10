import React from 'react'

const Arrow = ({ src, alt, fn }) => {
  return (
    <div className="p-4 cursor-pointer" onClick={fn}>
      <img className="w-1/2 z-10 ml-5 max-w-md hidden md:block" src={src} alt={alt}/>
    </div>
  )
};

export default Arrow;