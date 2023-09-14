import { configureStore } from '@reduxjs/toolkit'
import citiesReducer from './reducers/citiesR'
import cityReducer from './reducers/cityR'
import itinerariesReducer from './reducers/itinerariesR'
import authReducer from './reducers/authR'

const store = configureStore ({
    reducer: {
            cities: citiesReducer,
            city: cityReducer,
            itineraries: itinerariesReducer,
            authentication: authReducer     
    }
});

export default store;