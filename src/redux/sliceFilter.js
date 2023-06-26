import { createSlice } from '@reduxjs/toolkit';

const filtersSlice = createSlice({
  name: 'filters',
  initialState: '',
  reducers: {
    query(state, action) {
      return (state = action.payload);
    },
  },
});

export const { query } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;