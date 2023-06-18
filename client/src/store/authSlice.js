import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoggedIn: null,
  user: {},
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logUserIn: (state, action) => {
      state.user = action.payload;
      state.isLoggedIn = true;
    },
    logUserOut: (state, action) => {
      state.isLoggedIn = false;
    },
  },
});

export const { logUserIn, logUserOut } = authSlice.actions;
export const authReducer = authSlice.reducer;
