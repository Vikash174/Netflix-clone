import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { addYoutubeTrailer } from "../../../redux/slices/moviesSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faVolumeHigh,
  faVolumeXmark,
  faPlay,
  faCircleInfo,
} from "@fortawesome/free-solid-svg-icons";

const MovieTitleAndDescription = () => {
  const trailer_logoFilePath = useSelector((state) => state.movies);
  const dispatch = useDispatch();

  const [isMute, setIsMute] = useState(true);

  const volumeBtnClickHanlder = () => {
    // console.log("mute button");
    const currUrl = trailer_logoFilePath.youtubeTrailer;

    const isMuted = currUrl.charAt(currUrl.length - 1) === "1";

    let updateUrl = `${currUrl.slice(0, -1)}${isMuted ? "0" : "1"}`;

    dispatch(addYoutubeTrailer(updateUrl));
    setIsMute(isMuted ? false : true);
  };
  return (
    <div className="absolute top-[40%] left-[5%] p-5  flex justify-between w-[95%] items-center ">
      <div>
        <div>
          <img
            className="w-60"
            src={`https://image.tmdb.org/t/p/w500${trailer_logoFilePath.movieLogoFilePath}`}
            alt="movie logo"
          />
        </div>
        <div className="p-2">
          <button className="p-2 m-2 w-24 text-black bg-white font-semibold text-lg rounded-md">
            <FontAwesomeIcon icon={faPlay} /> Play
          </button>
          <button className="p-2 m-2 w-44 text-white bg-[#6d6d6eb3] font-semibold text-lg rounded-md">
            <FontAwesomeIcon icon={faCircleInfo} /> More Info
          </button>
        </div>
      </div>
      <div className="text-white w-40 flex justify-between items-center">
        <button
          className="border border-white rounded-full p-1"
          onClick={volumeBtnClickHanlder}
        >
          {isMute ? (
            <FontAwesomeIcon icon={faVolumeHigh} />
          ) : (
            <FontAwesomeIcon icon={faVolumeXmark} />
          )}
        </button>
        <span className="border-l-4 border-white border-spacing-x-1	 w-28 bg-[#6d6d6eb3] p-1">
          {"U/A 13+"}
        </span>
      </div>
    </div>
  );
};

export default MovieTitleAndDescription;
