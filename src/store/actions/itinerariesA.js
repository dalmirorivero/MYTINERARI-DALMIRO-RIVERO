import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const readItineraries = createAsyncThunk( 'readitineraries', async(id) => {
    try {
        let res = await axios('http://localhost:8082/api/itineraries/cities/'+id)
        return res.data.response
    } catch (error) {
        console.log(error)
        return { itineraries: [] }
    }
});

export default readItineraries;