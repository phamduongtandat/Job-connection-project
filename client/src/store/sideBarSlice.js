import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpen: false,
};

const sideBarSlice = createSlice({
  name: 'sideBar',
  initialState,
  reducers: {
    openSideBar: (state) => {
      state.isOpen = true;
    },
    closeSideBar: (state) => {
      state.isOpen = false;
    },
  },
});

export const sideBarReducer = sideBarSlice.reducer;
export const { openSideBar, closeSideBar } = sideBarSlice.actions;
