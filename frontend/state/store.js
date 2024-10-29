import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "./todoSlice";

export const store = configureStore({
  reducer: {
    todosState: todosReducer, // slice of state refers to this which comes from todoSlice
  },
});
