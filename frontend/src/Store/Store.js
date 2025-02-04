import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../slices/rootReducer.js";

export const store = configureStore({
  reducer: rootReducer,
});