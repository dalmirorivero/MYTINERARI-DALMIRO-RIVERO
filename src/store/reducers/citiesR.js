import { createReducer } from '@reduxjs/toolkit'
import readCities  from '../actions/citiesA.js'

const initialState = {
    cities: []
};

const citiesReducer = createReducer( initialState, (builder) => {
    builder.addCase( readCities.fulfilled, ( store, action) => {
        const newState = { ...store, cities: action.payload }
        return newState
    })
});

export default citiesReducer;