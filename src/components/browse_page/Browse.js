import React, { useEffect } from "react";
import Header from "../Header";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import useNowPlayingMovies from "../../custom_hooks/useNowPlayingMovies";
import MoviePlaying from "./main_div/MoviePlaying";

const Browse = () => {
  const user = useSelector((state) => state.user);
  const movies = useSelector((state) => state.movies.nowPlayingMovies);

  const navigate = useNavigate();

  useNowPlayingMovies(); //using custom hook for geting data

  useEffect(() => {
    if (user === null) {
      navigate("/logIn");
      return;
    }
  }, []);

  return (
    <div>
      <Header isSignUp={false} isBrowse={true} />
      {movies && <MoviePlaying movie={movies[1]} />}
    </div>
  );
};

export default Browse;
