import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  nowPlayingMovies: null,
  popularMovies: null,
  topRatedMovies: null,
  upcomingMovies: null,
  youtubeTrailer: null,
  movieLogoFilePath: null,
};

export const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addTopRatedMovies: (state, action) => {
      state.topRatedMovies = action.payload;
    },
    addUpcomingMovies: (state, action) => {
      state.upcomingMovies = action.payload;
    },
    addYoutubeTrailer: (state, action) => {
      state.youtubeTrailer = action.payload;
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
  addPopularMovies,
  addTopRatedMovies,
  addUpcomingMovies,
  addYoutubeTrailer,
} = moviesSlice.actions;

export default moviesSlice.reducer;
