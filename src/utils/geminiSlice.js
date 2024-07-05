import { createSlice } from "@reduxjs/toolkit";

const geminiSlice = createSlice({
  name: "gemini",
  initialState: {
    showGeminiSearch: false,
    movieResults: null,
    movieNames: null,
  },
  reducers: {
    toggleGeminiSearchView: (state) => {
      state.showGeminiSearch = !state.showGeminiSearch;
    },
    addGeminiMovieResult: (state, action) => {
      const { movieNames, movieResults } = action.payload;
      state.movieNames = movieNames;
      state.movieResults = movieResults;
    },
  },
});

export const { toggleGeminiSearchView, addGeminiMovieResult } = geminiSlice.actions;

export default geminiSlice.reducer;