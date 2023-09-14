import { createAction, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import LS from '../../utils/localStorage.js'
import { toast, Flip } from 'react-toastify'

const signin = createAction('signin', (credentials) => {
    const reducerData = {
        user: credentials.user,
        token: credentials.clave,
        status: 'online',
        isAuthenticated: true
    }
    LS.set('token', credentials.clave)
    toast('✈️ Welcome ' + credentials.user.name + '!', {
        position: 'top-center',
        transition: Flip
    });
    return {
        payload: reducerData
    }
});

const signup = createAction('signup', (credentials) => {
    const reducerData = {
        user: credentials.user,
        token: credentials.clave,
        status: 'online',
        isAuthenticated: true
    }
    toast('✈️ Welcome aboard ' + credentials.user.name + '!', {
        position: 'top-center',
        transition: Flip
    });
    return {
        payload: reducerData
    }
});

const auth = createAsyncThunk('auth', async () => {
    const token = LS.getText('token')
    const { data } = await axios.get('http://localhost:8082/api/auth/signin/', {
        headers: {
            Authorization: "Bearer " + token
        }
    })
    const reducerData = {
        user: data.user,
        status: 'online',
        isAuthenticated: true
    }
    toast('✈️ Welcome ' + data.user.name + '!', {
        position: 'top-center',
        transition: Flip
    });
    return reducerData
});

const signout = createAsyncThunk(
    'signout',
    async () => {
        try {
            let token = LS.getText('token')
            let { data } = await axios.post('http://localhost:8082/api/auth/logout', null, {
                headers: {
                    Authorization: "Bearer " + token
                }
            })
            console.log(data);
            LS.clear('token')
            return {
                user: {},
                token: '',
                status: 'offline',
                isAuthenticated: false
            }
        } catch (error) {
            return {
                user: {},
                token: ''
            }
        }
    }
);

export { signin, signup, auth, signout };