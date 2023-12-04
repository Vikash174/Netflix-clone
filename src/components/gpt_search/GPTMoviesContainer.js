import React from "react";
import { useSelector } from "react-redux";

const GPTMoviesContainer = () => {
  const gptSuggestedMovies = useSelector(
    (state) => state?.movies?.gptSuggestMovies
  );

  return (
    <div>
      <MovieList movies={gptSuggestedMovies} />
    </div>
  );
};

const MovieList = ({ movies }) => {
  return movies === null ? null : (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {movies.map((movieGroup, index) => (
        <React.Fragment key={index}>
          {movieGroup.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </React.Fragment>
      ))}
    </div>
  );
};

const MovieCard = ({ movie }) => {
  return (
    <div className="max-w-xs mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <img
        className="w-full h-48 object-cover object-center"
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{movie.title}</h2>
        <p className="text-gray-600 text-sm mb-4">{movie.overview}</p>
        <div className="flex justify-between items-center">
          <span className="text-gray-700">{movie.release_date}</span>
          <span className="text-gray-700">{movie.vote_average}</span>
        </div>
      </div>
    </div>
  );
};

export default GPTMoviesContainer;
