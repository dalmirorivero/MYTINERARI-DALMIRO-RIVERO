import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const readCities = createAsyncThunk( 'readcities', async(filterText) => {
    try {
        let res = await axios('http://localhost:8082/api/cities')
        const search = filterText.trim().toLowerCase()
        const filteredCities = res.data.response.filter(
            city =>  city.name.toLowerCase().startsWith(search.trim().toLowerCase()) ||
            city.country.toLowerCase().startsWith(search.trim().toLowerCase()))     
        return filteredCities
    } catch (error) {
        console.log(error)
        return { cities: [] }
    }
});

export default readCities;