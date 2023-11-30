import React from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";

const MovieTitleAndDescription = () => {
  const logoFilePath = useSelector((state) => state.movies.movieLogoFilePath);
  return (
    <div className="absolute top-[40%] left-[5%] p-5  flex justify-between w-[95%] items-center ">
      <div>
        <div>
          <img
            className="w-36"
            src={`https://image.tmdb.org/t/p/w500${logoFilePath}`}
            alt="movie logo"
          />
        </div>
        <div className=" ">
          <button className="p-2  text-black bg-white">▶ Play</button>
          <button className="p-2  text-white bg-slate-400">ℹ More Info</button>
        </div>
      </div>
      <div className="text-white">
        <button>Unmute</button>
        <span>U/A 13+</span>
      </div>
    </div>
  );
};

export default MovieTitleAndDescription;
