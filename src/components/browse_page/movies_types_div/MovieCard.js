import React from "react";
import { IMAGE_CDN_URL } from "../../../utils/constant";
import { useDispatch } from "react-redux";
import {
  setMovieId,
  setShowInfoDiv,
} from "../../../redux/slices/currentMovieInfo";

const MovieCard = (props) => {
  const { poster_path, id } = props.movie;

  const dispatch = useDispatch();

  const movieCardClickHandler = () => {
    dispatch(setShowInfoDiv(true));
    dispatch(setMovieId(id));
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
          src={IMAGE_CDN_URL + poster_path}
          alt="movie poster"
        />
      </div>
    </div>
  );
};

export default MovieCard;
