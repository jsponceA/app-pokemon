import { createSlice } from "@reduxjs/toolkit";

export const configSlice = createSlice({
  name: "config",
  initialState: {
    perPage: 4,
    darkMode: false,
  },
  reducers: {
    setPerPage: (state, action) => {
      state.perPage = action.payload;
    },
    setDarkMode: (state, action) => {
      state.darkMode = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setPerPage, setDarkMode } = configSlice.actions;

export default configSlice.reducer;
