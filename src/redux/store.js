import { configureStore } from "@reduxjs/toolkit";
import darkModeReducer from "./darkmodeslice";

export const store = configureStore({
  reducer: {
    darkMode: darkModeReducer,
  },
});
