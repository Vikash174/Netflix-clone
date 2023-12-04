import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";
import BROWSE_LANG from "../../../utils/languages/Browse/BrowseLangConstant";

const MovieListContainer = () => {
  const movies = useSelector((state) => state.movies);
  const langKey = useSelector((state) => state.config.language);

  return (
    <div className="bg-black -mt-36">
      <MovieList
        title={BROWSE_LANG[langKey].nowPlaying}
        movies={movies?.nowPlayingMovies}
      />
      <MovieList
        title={BROWSE_LANG[langKey].popular}
        movies={movies?.popularMovies}
      />
      <MovieList
        title={BROWSE_LANG[langKey].topRated}
        movies={movies?.topRatedMovies}
      />
      <MovieList
        title={BROWSE_LANG[langKey].upcoming}
        movies={movies?.upcomingMovies}
      />
    </div>
  );
};

export default MovieListContainer;
