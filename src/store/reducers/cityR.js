import { createReducer } from '@reduxjs/toolkit'
import readCity from '../actions/cityA.js'

const initialState = {
    city: {}
};

const cityReducer = createReducer( initialState, (builder) => {
    builder.addCase( readCity.fulfilled, (store, action) => {
        const newState = { ...store, city: action.payload}
        return newState
    })
});

export default cityReducer;