import React, { useEffect } from "react";
import Header from "../Header";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import MoviePlaying from "./main_div/MoviePlaying";
import MovieListContainer from "./movies_types_div/MovieListContainer";
import useAddMoviesListToReduxStore from "../../custom_hooks/useAddMoviesListToReduxStore";
import ShimmerBrowse from "./ShimmerBrowse";

const Browse = () => {
  const user = useSelector((state) => state.user);
  const movies = useSelector((state) => state.movies.nowPlayingMovies);
  const showInfoDiv = useSelector(
    (state) => state.currentInfoMovie.showInfoDiv
  );

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
  }, [navigate, user]);

  return movies === null ? (
    <div>
      <Header /> <ShimmerBrowse />
    </div>
  ) : (
    <div className={showInfoDiv ? "pointer-events-none opacity-40 " : ""}>
      <Header isSignUp={false} isBrowse={true} />
      {movies && <MoviePlaying movie={movies[0]} />}
      <MovieListContainer />
    </div>
  );
};

export default Browse;
