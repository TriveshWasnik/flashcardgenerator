import { createSlice } from "@reduxjs/toolkit";

/* Create a reducer function for flashcard */
export const flashcardSlice = createSlice({
  name: "flashcard",
  initialState: {
    flashcards: [],
  },

  reducers: {
    addFlashcard: (state, action) => {
      state.flashcards.push(action.payload);
    },
  },
});

export const { addFlashcard } = flashcardSlice.actions;

export default flashcardSlice.reducer;
