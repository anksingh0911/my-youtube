import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name : 'app',
  initialState:{
    isMenuOpen: true,
    isDark: false,
  },
  reducers:{
    toggleMenu:(state)=>{
      state.isMenuOpen = !state.isMenuOpen
    },
    closeMenu:(state)=>{
      state.isMenuOpen= false;
    },
    darkTheme:(state)=>{
      state.isDark = !state.isDark
    }
  }
});
 export const {toggleMenu, closeMenu, darkTheme}= appSlice.actions;
 export default appSlice.reducer;