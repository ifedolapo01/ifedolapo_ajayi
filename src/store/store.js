import { configureStore, createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
  name: "theme",
  initialState: { darkMode: false },
  reducers: {
    toggleDarkMode: (state) => {
      state.darkMode = !state.darkMode;
      if (state.darkMode) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    },
  },
});

export const { toggleDarkMode } = themeSlice.actions;

export const store = configureStore({
  reducer: {
    theme: themeSlice.reducer,
  },
});
