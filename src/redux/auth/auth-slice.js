import { createSlice } from "@reduxjs/toolkit";
import {register, logIn, logOut, refreshUser} from './auth-operations';

const initialState = {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
};

const authSlise = createSlice({
    name: 'auth',
    initialState,
    extraRedusers: {
        [register.fullfilled](state, action) {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true;
        },
        [logIn.fullfilled](state, action) {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true;
        },
        [logOut.fullfilled](state) {
            state = initialState;
        },
        [refreshUser.pending](state) {
            state.isRefreshing = true;
        },
        [refreshUser.fulfilled](state, action) {
            state.user = action.payload;
            state.isLoggedIn = true;
            state.isRefreshing = false;
        },
        [refreshUser.rejected](state) {
            state.isRefreshing = false;
        },
    },
});

export const authReducer = authSlise.reducer;