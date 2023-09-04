import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const readCity = createAsyncThunk( 'readcity', async(id) => {
    try {
        let res = await axios('http://localhost:8082/api/cities/'+id)
        return res.data.response 
    } catch (error) {
        console.log(error)
        return { city: {} }
    }
});

export default readCity;