import React, { useRef } from "react";
import MovieCard from "./MovieCard";

const MovieList = (props) => {
  const { title, movies } = props;

  const movieCardContainer = useRef(null);

  const prevBtnClickHandler = () => {
    movieCardContainer.current.scrollLeft -= 290;
  };

  const nextBtnClickHandler = () => {
    movieCardContainer.current.scrollLeft += 290;
  };

  return (
    <div className="p-4 text-white">
      <div className="flex justify-between">
        <h2 className="text-2xl font-semibold">{title}</h2>
        <div className="flex text-white">
          <button
            className="border border-white p-2 m-1 rounded-md"
            onClick={prevBtnClickHandler}
          >
            {"<"}
          </button>
          <button
            className=" border border-white p-2 m-1 rounded-md"
            onClick={nextBtnClickHandler}
          >
            {">"}
          </button>
        </div>
      </div>
      <div
        ref={movieCardContainer}
        className="flex overflow-x-scroll scroll-smooth scrollbar-none"
      >
        {movies &&
          movies.map((movie) => {
            return <MovieCard key={movie.id} movie={movie} />;
          })}
      </div>
    </div>
  );
};

export default MovieList;
