import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constant";
import { useDispatch } from "react-redux";
import {
  addMovieLogoFilePath,
  addYoutubeTrailerKey,
} from "../redux/slices/moviesSlice";

const useMovieTrailerAndLogo = (id) => {
  const dispatch = useDispatch();

  const setURLs = async (queryStr) => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}/${queryStr}`,
        API_OPTIONS
      );
      const jsonRes = await response.json();

      if (queryStr === "videos") {
        const trailersArray = jsonRes.results.filter(
          (result) => result.type === "Trailer"
        );
        dispatch(addYoutubeTrailerKey(trailersArray[0].key));
      } else {
        dispatch(addMovieLogoFilePath(jsonRes.logos[0].file_path));
      }
    } catch (error) {
      console.error("Something went wrong while fetching the data", error);
    }
  };

  useEffect(() => {
    setURLs("videos");
    setURLs("images");
  }, []);
};

export default useMovieTrailerAndLogo;
