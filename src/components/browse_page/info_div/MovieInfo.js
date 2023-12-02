import React from "react";
import MoviePlaying from "../main_div/MoviePlaying";
import { useDispatch } from "react-redux/es/exports";
import { setShowInfoDiv } from "../../../redux/slices/currentMovieInfo";

const MovieInfo = () => {
  const dispatch = useDispatch();

  const closeInfoDivHandler = () => {
    dispatch(setShowInfoDiv(false));
  };

  return (
    <div className="h-screen w-[500px] bg-orange-900 fixed inset-24 m-auto overflow-hidden  z-50">
      <div>
        <button className="text-2xl text-white" onClick={closeInfoDivHandler}>
          *
        </button>
      </div>
    </div>
  );
};

export default MovieInfo;
