import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  nowPlayingMovies: null,
  youtubeTrailerKey: null,
  movieLogoFilePath: null,
};

export const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addYoutubeTrailerKey: (state, action) => {
      state.youtubeTrailerKey = action.payload;
    },
    addMovieLogoFilePath: (state, action) => {
      state.movieLogoFilePath = action.payload;
    },
  },
});

export const {
  addNowPlayingMovies,
  addYoutubeTrailerKey,
  addMovieLogoFilePath,
} = moviesSlice.actions;

export default moviesSlice.reducer;
