import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch} from 'react-redux'
import readCity from '../../store/actions/cityA'
import readItineraries from '../../store/actions/itinerariesA'

function generateEmojis(price) {
  const emoji = '💲';
  return emoji.repeat(price);
}

function generateHashtags(hashtagsArray) {
  if (!hashtagsArray || hashtagsArray.length === 0) return null; 
  const hashtagElements = hashtagsArray.map((hashtag, index) => (
    <span key={index}> #{hashtag} </span>
  ));
  return (
    <div className="text-blue-500">
      {hashtagElements}
    </div>
  );
}

export const CityDetail = () => {
  const { _id } = useParams();
  const [showMore, setShowMore] = useState(false);
  const dispatch = useDispatch();
  const city = useSelector(store => store.city.city);
  const itineraries = useSelector (store => store.itineraries.itineraries);
  
useEffect(() => {   
    dispatch(readCity(_id))
    dispatch(readItineraries(_id))    
}, [_id]);

const toggleShowMore = () => {
  setShowMore(!showMore);
};

  if (!city) {
    return <p>City not found.</p>;    
  }

  return (
    <div className="xs:w-full xs:ml-0 xs:my-[32%] xs:items-center sm:my-[8%] md:my-[1%] lg:my-[12%] lg:ml-[25%] lg:w-1/2 xl:my-[9%] xxl:my-5 card-container max-h-screen h-fit flex justify-center flex-col items-center">
      <div className="flex flex-row justify-center text-center">
        <div className="card m-5 border rounded-lg shadow-md hover:shadow-xl flex flex-col justify-between">
          <div className="city-detail w-full" key={city.name}>
            <img className="border-b-8 w-full rounded-t-lg border-customOrange" src={city.image} alt="City" />
            <div className="container py-2 xs:px-0 md:px-8 font-bold text-center flex flex-col justify-center">
              <h1 className="text-2xl text-customGreen mb-4">
                {city.country}
                <p className="font-thin inline"> - {city.name}</p>
              </h1>
              {itineraries.length > 0 ? ( 
                <ul>
                {itineraries.map((itinerary) => (        
                  <div key={itinerary._id}>
                    <li className="flex flex-row justify-around items-center sm:ml-10 md:ml-8 lg:ml-12 xxl:ml-5">
                      <div className="w-[6%] text-center flex flex-col items-center">
                        <img className="border border-customGreen rounded-full" src={itinerary.user_id.photo} alt="userphoto" />
                        <p className="text-center"> {itinerary.user_id.name} </p>          
                      </div>

                      <div className="text-center">
                        <p>Price range:</p>
                        <p>{generateEmojis(itinerary.price)}</p>
                      </div>

                      <div>
                        <p>Duration:</p>
                        <p> {itinerary.duration} days.</p>
                      </div>
                    </li>
                    <li  className="flex justify-center items-center text-center">
                      <p> ❤{itinerary.like} </p>
                    </li>
                    <li className="flex justify-center items-center text-center">
                      {generateHashtags(itinerary.hashtag)} 
                    </li>
                  </div>
                ))}
                </ul>
                ) : (
                <p>No itineraries available for {city.name}.</p>
              )}

              <div className="flex justify-center">
                <button onClick={toggleShowMore} className="text-2xl hover:text-customOrange font-bold">
                  {showMore ? (
                    <i className="fa fa-solid fa-caret-up hover:text-customOrange text-4xl"></i>
                  ) : ((
                    <i className="fa fa-solid fa-caret-down hover:text-customOrange text-4xl"></i>
                  ))}
                </button>
              </div>
              {showMore && (
              <div>
                <p>⚠ UNDER CONSTRUCTION ⚠</p>
              </div>
              )}
              <div className="flex justify-center mt-2 mb-2">
                <button className="text-center mt-0 button-text mx-2 bg-customGreen hover:bg-customOrange text-white font-bold py-1 px-4 rounded">
                  <a href="/cities">GO BACK TO CITIES</a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};