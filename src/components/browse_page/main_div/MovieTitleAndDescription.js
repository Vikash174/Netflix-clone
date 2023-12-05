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
import {
  addMovieTrailerUrl,
  setMovieId,
  setShowInfoDiv,
} from "../../../redux/slices/currentMovieInfo";
import BROWSE_LANG from "../../../utils/languages/Browse/BrowseLangConstant";

const MovieTitleAndDescription = (props) => {
  const { logoPath, trailerUrl, id } = props;
  const dispatch = useDispatch();
  const showInfoDiv = useSelector(
    (state) => state.currentInfoMovie.showInfoDiv
  );
  const langKey = useSelector((state) => state.config.language);
  const [isMute, setIsMute] = useState(true);

  const volumeBtnClickHanlder = () => {
    const currUrl = trailerUrl;

    const isMuted = currUrl.charAt(currUrl.length - 1) === "1";

    let updateUrl = `${currUrl.slice(0, -1)}${isMuted ? "0" : "1"}`;

    showInfoDiv
      ? dispatch(addMovieTrailerUrl(updateUrl))
      : dispatch(addYoutubeTrailer(updateUrl));

    setIsMute(isMuted ? false : true);
  };
  const moreInfoHandler = () => {
    dispatch(setShowInfoDiv(true));
    dispatch(setMovieId(id));
  };
  return (
    <div className="absolute top-[25%] left-[2%] p-1  flex justify-between w-[97%] items-end  sm:top-[30%] md:top-[35%] lg:top-[45%]">
      <div>
        <div>
          <img
            className="w-24 md:w-32 lg:w-40 xl:w-60"
            src={`https://image.tmdb.org/t/p/w500${logoPath}`}
            alt="movie logo"
          />
        </div>
        <div className="">
          <button className="p-1 m-1 w-12 text-black bg-white font-semibold text-[0.8rem] rounded-md lg:text-lg lg:w-20 mt-2">
            <FontAwesomeIcon icon={faPlay} /> {BROWSE_LANG[langKey].play}
          </button>
          {!showInfoDiv && (
            <button
              className="p-1 m-1 w-24 text-white bg-[#6d6d6eb3] font-semibold text-[0.8rem] rounded-md lg:text-lg lg:w-32"
              onClick={moreInfoHandler}
            >
              <FontAwesomeIcon icon={faCircleInfo} />{" "}
              {BROWSE_LANG[langKey].moreInfo}
            </button>
          )}
        </div>
      </div>
      <div className="text-white w-28 flex justify-between items-center">
        <button
          className="border border-white rounded-full p-1 text-sm"
          onClick={volumeBtnClickHanlder}
        >
          {isMute ? (
            <FontAwesomeIcon icon={faVolumeHigh} />
          ) : (
            <FontAwesomeIcon icon={faVolumeXmark} />
          )}
        </button>
        <span className="border-l-4 border-white border-spacing-x-1	 w-28 bg-[#6d6d6eb3] p-1 text-sm">
          {"U/A 13+"}
        </span>
      </div>
    </div>
  );
};

export default MovieTitleAndDescription;
