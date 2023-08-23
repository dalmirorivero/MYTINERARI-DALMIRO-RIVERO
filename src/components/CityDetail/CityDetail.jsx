import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

export const CityDetail = () => {
  const { country } = useParams();
  const [city, setCity] = useState([]);

  useEffect(() => {
    const dataFetch = async () => {
      try {
        const response = await axios.get('http://localhost:8082/api/cities');
        const responseData = response.data;
        const cityArray = responseData.response;       
        const foundCity = cityArray.find(city => city.country.toLowerCase() === country.toLowerCase());
         
        setCity(foundCity);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    dataFetch();
  }, [country]);

  if (!city) {
    return <p>City not found.</p>;
  }

  return (
  <div className="xs:w-full xs:ml-0 xs:my-[32%] xs:items-center sm:my-[8%] md:my-[1%] lg:my-[12%] lg:ml-[25%] lg:w-1/2 xl:my-[9%] xxl:my-5 card-container max-h-screen h-fit flex justify-center flex-col items-center">
    <div className="flex flex-row justify-center text-center">
      <div className="card m-5 border rounded-lg shadow-md hover:shadow-xl flex flex-col justify-between">
        <div className="city-detail w-full" key={city.name}> 
            <img className=" border-b-8 w-full rounded-t-lg border-customOrange" src={city.image} alt='City' />
            <div className="container py-2 xs:px-0 md:px-8 font-bold text-center flex flex-col justify-center">
                <h1 className="text-2xl text-customGreen">{city.country}
                  <p className="font-thin inline"> - {city.name}</p>
                </h1>
                <p className="mt-2 xs:text-lg md:text-xl">⚠️ SITE UNDER CONSTRUCTION ⚠️</p>
            </div>
        </div>
        <div className="flex flex-col items-center justify-center mb-3">
            <button>
              <a className="text-2xl hover:text-customOrange font-bold" href='/cities'>
                ⮌
              </a>
            </button>
        </div>
      </div>
    </div>
 </div>
  );
};