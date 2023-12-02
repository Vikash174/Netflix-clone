import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const MovieListContainer = () => {
  const movies = useSelector((state) => state.movies);

  return (
    <div className="bg-black -mt-36">
      <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovies} />
      <MovieList title={"Popular"} movies={movies?.popularMovies} />
      <MovieList title={"Top Rated"} movies={movies?.topRatedMovies} />
      <MovieList title={"Upcoming"} movies={movies?.upcomingMovies} />
    </div>
  );
};

export default MovieListContainer;
