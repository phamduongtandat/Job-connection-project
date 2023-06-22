import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './authSlice';
import { modalReducer } from './modalSlice';
import { sideBarReducer } from './sideBarSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    sideBar: sideBarReducer,
    modal: modalReducer,
  },
});
