import { createSlice } from "@reduxjs/toolkit";

const currentMovieInfoSlice = createSlice({
  name: "currentMovieInfo",
  initialState: {
    showInfoDiv: false,
    movie: null,
    movieId: null,
    movieTrailerUrl: null,
    movieLogo: null,
  },
  reducers: {
    setShowInfoDiv: (state, action) => {
      state.showInfoDiv = action.payload;
    },
    setMovieId: (state, action) => {
      state.movieId = action.payload;
    },
    addInfoMovie: (state, action) => {
      state.movie = action.payload;
    },
    removeInfoMovie: (state) => {
      state.movie = null;
    },
    addMovieTrailerUrl: (state, action) => {
      state.movieTrailerUrl = action.payload;
    },
    addMovieLogo: (state, action) => {
      state.movieLogo = action.payload;
    },
  },
});

export const {
  setShowInfoDiv,
  addInfoMovie,
  removeInfoMovie,
  setMovieId,
  addMovieTrailerUrl,
  addMovieLogo,
} = currentMovieInfoSlice.actions;

export default currentMovieInfoSlice.reducer;
