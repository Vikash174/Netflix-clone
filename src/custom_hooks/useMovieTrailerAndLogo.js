import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import {
  addMovieLogoFilePath,
  addYoutubeTrailer,
} from "../redux/slices/moviesSlice";
import {
  addMovieTrailerUrl,
  addMovieLogo,
} from "../redux/slices/currentMovieInfo";

const useMovieTrailerAndLogo = (id) => {
  const dispatch = useDispatch();
  const showInfoDiv = useSelector(
    (state) => state.currentInfoMovie.showInfoDiv
  );

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

        const url = `https://www.youtube.com/embed/${trailersArray[0].key}?rel=0?version=3&autoplay=1&controls=0&&showinfo=0&loop=1&playlist=${trailersArray[0].key}&mute=1`;

        if (showInfoDiv) {
          dispatch(addMovieTrailerUrl(url));
        } else {
          dispatch(addYoutubeTrailer(url));
        }
      } else {
        if (showInfoDiv) {
          dispatch(addMovieLogo(jsonRes.logos[0].file_path));
        } else {
          dispatch(addMovieLogoFilePath(jsonRes.logos[0].file_path));
        }
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
