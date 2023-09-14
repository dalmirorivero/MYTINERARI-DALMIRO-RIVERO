import { createReducer } from '@reduxjs/toolkit';
import { auth, signin, signout, signup } from '../actions/authA';

const initialState = {
    user: {},
    token: null,
    isAuthenticated: false,
    status: 'offline'
};

const authReducer = createReducer(initialState, (builder) => {
    builder.addCase(signin, (state, action) => {
        const { user, token } = action.payload;
        state.user = user;
        state.token = token;
        state.isAuthenticated = true;
    })
        .addCase(signup, (state, action) => {
            const { user, token } = action.payload;
            state.user = user;
            state.token = token;
            state.isAuthenticated = true;
        })
        .addCase(auth.fulfilled, (state, action) => {
            const { user } = action.payload;
            state.user = user;
            state.isAuthenticated = true;
        })
        .addCase(signout.fulfilled, (state, action) => {
            state.user = {};
            state.token = null;
            state.isAuthenticated = false;
        })
});

export default authReducer;