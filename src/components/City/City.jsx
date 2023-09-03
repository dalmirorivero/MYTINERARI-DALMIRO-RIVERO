import React, { useEffect, useState } from 'react'
import Button from '../Button/Button'
import axios from 'axios'

export const City = () => {
  const [cities, setCities] = useState([]);
  const [filterText, setFilterText] = useState('');
  
  useEffect(() =>{
  axios('http://localhost:8082/api/cities')
  .then(res => setCities(res.data.response))
  }, [])

  const filteredCities = cities.filter(city =>
    city.name.toLowerCase().startsWith(filterText.trim().toLowerCase()) ||
    city.country.toLowerCase().startsWith(filterText.trim().toLowerCase())
  );

  return (
    <div className="mx-5">
      <h1 className="text-center font-bold transform hover:scale-105 transition-transform duration-300 ease-in-out text-4xl pt-7">
        CHOOSE YOUR FUTURE DESTINATION!
      </h1>
      <br />
      <div className="flex items-center justify-center">
        <input
          type="text"
          placeholder="Filter cities..."
          value={filterText}
          onChange={e => setFilterText(e.target.value)}
          className="mb-3 rounded-lg p-2 xs:w-full md:w-1/2 border"
        />
      </div>

      {filteredCities.length === 0 ? (<p className="text-center flex items-center justify-center h-[69vh] text-2xl">❌ NO CITIES MATCH YOUR SEARCH ❌</p> ) : (
        <div className="card-container ">
          {Array.from({ length: Math.ceil(filteredCities.length / 5) }).map((_, groupIndex) => (
            <div className="flex xs:flex-col lg:flex-row  text-center" key={groupIndex}>
              {filteredCities.slice(groupIndex * 5, (groupIndex + 1) * 5).map(city => (
                <div className="card m-5 border rounded-lg shadow-md hover:shadow-xl flex flex-col justify-between" key={city.name}>
                  <div className="w-full">
                    <img className="border-b-8 rounded-t-lg border-customOrange" src={city.image} alt="photo" />
                      <div className="container py-2 text-center font-bold flex flex-col justify-center max-w-full">
                      <h1 className="text-2xl text-customGreen">{city.country}
                        <p className="font-thin inline"> - {city.name}</p>
                      </h1>
                        <p>Description.</p>
                      </div>
                  </div>
                  <div className="pb-2">
                    <Button title='CHOOSE THIS TRIP' to={`/city/${city._id}`} />
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default City;