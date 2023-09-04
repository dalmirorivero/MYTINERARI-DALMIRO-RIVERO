import { configureStore } from '@reduxjs/toolkit'
import citiesReducer from './reducers/citiesR'
import cityReducer from './reducers/cityR'
import itinerariesReducer from './reducers/itinerariesR'

const store = configureStore ({
    reducer: {
            cities: citiesReducer,
            city: cityReducer,
            itineraries: itinerariesReducer     
    }
})

export default store;