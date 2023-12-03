import React, { useEffect } from "react";
import Header from "../Header";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux/es/exports";
import { useNavigate } from "react-router-dom";

import MoviePlaying from "./main_div/MoviePlaying";
import MovieListContainer from "./movies_types_div/MovieListContainer";
import useAddMoviesListToReduxStore from "../../custom_hooks/useAddMoviesListToReduxStore";
import MovieInfo from "./info_div/MovieInfo";
import { setShowInfoDiv } from "../../redux/slices/currentMovieInfo";

const Browse = () => {
  const reduxState = useSelector((state) => state);

  const user = reduxState.user;
  const movies = reduxState.movies.nowPlayingMovies;
  const showInfoDiv = reduxState.currentInfoMovie.showInfoDiv;

  const navigate = useNavigate();

  useAddMoviesListToReduxStore("now_playing"); //using custom hook for geting data
  useAddMoviesListToReduxStore("popular"); //using custom hook for geting data
  useAddMoviesListToReduxStore("upcoming"); //using custom hook for geting data
  useAddMoviesListToReduxStore("top_rated"); //using custom hook for geting data

  useEffect(() => {
    if (user === null) {
      navigate("/logIn");
      return;
    }
  }, []);

  return (
    <div className={showInfoDiv ? "pointer-events-none opacity-40 " : ""}>
      <Header isSignUp={false} isBrowse={true} />
      {movies && <MoviePlaying movie={movies[0]} />}
      <MovieListContainer />
    </div>
  );
};

export default Browse;
