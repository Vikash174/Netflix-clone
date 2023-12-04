import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../slices/userSlice";
import moviesReducer from "../slices/moviesSlice";
import currentMovieInfo from "../slices/currentMovieInfo";
import confiReducer from "../slices/configSlice";

export const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducer,
    currentInfoMovie: currentMovieInfo,
    config: confiReducer,
  },
});
