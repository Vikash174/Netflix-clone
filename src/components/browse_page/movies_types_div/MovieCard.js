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
  };

  return (
    <div>
      <div
        className="p-1 w-24 hover:cursor-pointer lg:w-32 transition ease-in-out hover:scale-90 xl:w-40 xl:p-2"
        onClick={movieCardClickHandler}
      >
        <img
          className="w-28 aspect-auto rounded-lg lg:w-32 xl:w-40"
          src={IMAGE_CDN_URL + poster_path}
          alt="movie poster"
        />
      </div>
    </div>
  );
};

export default MovieCard;
