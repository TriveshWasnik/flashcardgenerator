import { configureStore } from "@reduxjs/toolkit";
import flashcardReducer from "../redux/flashcardSlice";
/* Create a Store for Flashcard */
export const store = configureStore({
  reducer: {
    flashcard: flashcardReducer,
  },
});
