import { createReducer } from '@reduxjs/toolkit'
import readItineraries from '../actions/itinerariesA.js'

const initialState = {
    itineraries: []
};

const itinerariesReducer = createReducer( initialState, (builder) => {
    builder.addCase( readItineraries.fulfilled, (store, action) => {
        const newState = { ...store, itineraries: action.payload}
        return newState
    })
});

export default itinerariesReducer;