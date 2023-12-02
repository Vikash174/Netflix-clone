import { createSlice } from "@reduxjs/toolkit";

const currentMovieInfoSlice = createSlice({
  name: "currentMovieInfo",
  initialState: {
    showInfoDiv: false,
    movie: null,
  },
  reducers: {
    setShowInfoDiv: (state, action) => {
      state.showInfoDiv = action.payload;
    },
    addInfoMovie: (state, action) => {
      state.movie = action;
    },
    removeInfoMovie: (state) => {
      state.movie = null;
    },
  },
});

export const { setShowInfoDiv, addInfoMovie, removeInfoMovie } =
  currentMovieInfoSlice.actions;

export default currentMovieInfoSlice.reducer;
