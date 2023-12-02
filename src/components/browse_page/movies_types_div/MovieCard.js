import React from "react";
import { IMGAGE_CDN_URL } from "../../../utils/constant";
import { useDispatch } from "react-redux";
import { setShowInfoDiv } from "../../../redux/slices/currentMovieInfo";

const MovieCard = (props) => {
  const { poster_path } = props.movie;

  const dispatch = useDispatch();

  const movieCardClickHandler = () => {
    dispatch(setShowInfoDiv(true));
    // dispatch(addInfoMovie(props);
  };

  return (
    <div>
      <div
        className="p-4 w-40 hover:cursor-pointer"
        onClick={movieCardClickHandler}
      >
        <img
          className="w-48 aspect-auto rounded-lg"
          src={IMGAGE_CDN_URL + poster_path}
          alt="movie poster"
        />
      </div>
    </div>
  );
};

export default MovieCard;
