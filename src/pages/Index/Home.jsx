import React from 'react'
import Carousel from '../../components/Carousel/Carousel'
import Button from '../../components/Button/Button'

const Home = () => {
    return (
    <main className="flex flex-col items-center justify-around min-h-screen  text-center font-josefin">          
        <section className="flex items-center justify-center">
            <h1 className="xs:text-2xl xs:mx-9 sm:text-2xl md:text-3xl md:mx-6 lg:text-5xl font-bold transform hover:scale-105 transition duration-300 my-12 mb-0">
                Find your perfect trip, designed by insiders who know and love their cities!
            </h1>            
        </section>

        <section>
            <Carousel />
        </section>

        <section className="flex xs:flex-col  sm:flex-row sm:justify-center m-12 p-10 w-full justify-between bg-customGreen text-customOrange">
            <div className="flex-1 mx-[10vw]">
                <ol className="flex-row items-center justify-between text-center sm:justify-center">
                    <li className="xs:text-3xl md:text-5xl font-bold">195</li>
                    <li className="text-lg text-white">COUNTRIES</li>
                </ol>
            </div>
                
            <div className="flex-1 mx-[10vw]">
                <ol className="flex-row items-center justify-between text-center sm:justify-start">
                    <li className="xs:text-3xl md:text-5xl font-bold">7</li>
                    <li className="text-lg text-white">CONTINENTS</li>
                </ol>
            </div>
                
            <div className="flex-1 mx-[10vw]">
                <ol className="flex-row items-center justify-between text-center sm:justify-start">
                    <li className="xs:text-3xl md:text-5xl font-bold">5</li>
                    <li className="text-lg text-white">OCEANS</li>
                </ol>
            </div>
        </section>

        <section className="flex flex-col items-center justify-center mb-8">
            <h2 className="flex w-2/3 font-bold text-2xl items-center text-center mt-2 mb-6">
                Our app will help you find the perfect path for your next trip. With an easy-to-use interface and a host of itinerary options, planning your next trip has never been easier.
            </h2>
            <Button title='UNLOCK YOUR ADVENTURE! ✈️' to='/cities' />
        </section>        
    </main>
    )
};

export default Home;