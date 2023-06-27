import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { register, logIn, logOut, refreshUser } from './auth-operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

export const registerAsync = createAsyncThunk('auth/register', async (userData) => {
  const response = await register(userData);
  return response.data;
});

export const logInAsync = createAsyncThunk('auth/logIn', async (userData) => {
  const response = await logIn(userData);
  return response.data;
});

export const refreshUserAsync = createAsyncThunk('auth/refreshUser', async () => {
  const response = await refreshUser();
  return response.data;
});

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logOutFulfilled: (state) => {
      state = initialState;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerAsync.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logInAsync.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logOut.fulfilled, (state) => {
        state = initialState;
      })
      .addCase(refreshUserAsync.pending, (state) => {
        state.isRefreshing = true;
      })
      .addCase(refreshUserAsync.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshUserAsync.rejected, (state) => {
        state.isRefreshing = false;
      });
  },
});

export const { logOutFulfilled } = authSlice.actions;
export const authReducer = authSlice.reducer;
