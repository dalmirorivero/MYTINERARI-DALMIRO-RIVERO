import React, { useState, useEffect } from 'react'
import Arrow from '../Arrow/Arrow'
import './carousel.css'

const images = [
  [
    {
      src: '/AUSTRALIA.jpg',
      description: 'PERKS - AUSTRALIA',
    },
    {
      src: '/BRASIL.jpg',
      description: 'RIO DE JANEIRO - BRASIL',
    },
    {
      src: '/BSAS.jpg',
      description: 'BUENOS AIRES - ARGENTINA',
    },
    {
      src: '/EGIPTO.jpg',
      description: 'CAIRO - EGYPT',
    },
  ],
  [
    {
      src: '/ESPAÑA.jpg',
      description: 'MADRID - SPAIN',
    },
    {
      src: '/GRECIA.jpg',
      description: 'ATENAS - GREECE',
    },
    {
      src: '/ITALIA.jpg',
      description: 'ROME - ITALY',
    },
    {
      src: '/JAPON.jpg',
      description: 'YAMANASHI - JAPAN',
    },
  ],
  [
    {
      src: '/LONDRES.jpg',
      description: 'LONDON - UK',
    },
    {
      src: '/NEWYORK.jpg',
      description: 'NEW YORK - USA',
    },
    {
      src: '/PARIS.jpg',
      description: 'PARIS - FRANCE',
    },
    {
      src: '/SHANGAI.jpg',
      description: 'SHANGAI - CHINA',
    },
  ]
];

const Carousel = () => {
  const [index, setIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const next = () => {
    setIsTransitioning(true); 
    setTimeout(() => {
      setIndex((index + 1) % images.length);
      setIsTransitioning(false); 
    }, 700); 
  };
  
  const prev = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setIndex((index - 1 + images.length) % images.length);
      setIsTransitioning(false);
    }, 700); 
  };

  useEffect(() => {
    const interval = setInterval(next, 4000);
    return () => clearInterval(interval)
  }, [index]);

  return (
    <div className="w-full flex flex-col justify-center items-center overflow-hidden">

      <div className="flex items-center justify-between w-full mt-12">
        <Arrow src='/keyboard-left-arrow-button-1_icon-icons.com_72690.png' alt='flecha-i' fn={prev}/>
      <div className="flex xs:flex-col md:flex-row items-center justify-center">
        {images[index].map((item, idx) => (
          <div key={idx} className={`xs:w-full  md:w-1/4 mx-2 relative ${isTransitioning ? 'fade-out' : 'fade-in'}`} style={{transition: 'opacity 1s ease-in-out'}}>
            <img className="w-full h-full object-cover" src={item.src} alt='city'/>
            <p className="text-center font-bold mt-5 italic text-gray-600">
              {item.description}
            </p>
          </div>
        ))}
      </div>
          <Arrow src='/keyboard-right-arrow-button-1_icon-icons.com_72690.png' alt='r-arrow' fn={next}/>
      </div>
  
      <div className="flex w-full justify-center">
        {images.map((_, indexMap) => (
          <span key={indexMap} className={`cursor-pointer inline-block w-10 h-2 rounded-full mx-2 mt-6 ${indexMap === index ? 'bg-customOrange' : 'bg-customGreen'}`} 
                onClick={() => setIndex(indexMap)}/>
        ))}
      </div>
    </div>
  )
};

export default Carousel;