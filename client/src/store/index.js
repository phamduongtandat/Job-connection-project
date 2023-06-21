import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './authSlice';
import { sideBarReducer } from './sideBarSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    sideBar: sideBarReducer,
  },
});
