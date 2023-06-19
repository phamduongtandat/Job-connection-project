import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoggedIn: true,
  user: {
    role: 'admin',
    account_type: 'business',
  },
  isOpen: false,
  currentForm: 'sign_in',
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logUserIn: (state, action) => {
      state.user = action.payload;
      state.isLoggedIn = true;
    },
    logUserOut: (state) => {
      state.isLoggedIn = false;
    },
    openSignInModal: (state) => {
      state.isOpen = true;
      state.currentForm = 'sign_in';
    },
    openSignUpModal: (state) => {
      state.isOpen = true;
      state.currentForm = 'sign_up';
    },
    closeAuthModal: (state) => {
      state.isOpen = false;
    },
    toggleAuthForm: (state) => {
      if (state.currentForm === 'sign_in') state.currentForm = 'sign_up';
      else if (state.currentForm === 'sign_up') state.currentForm = 'sign_in';
    },
  },
});

export const {
  logUserIn,
  logUserOut,
  openSignInModal,
  openSignUpModal,
  closeAuthModal,
  toggleAuthForm,
} = authSlice.actions;

export const authReducer = authSlice.reducer;
