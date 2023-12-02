import { useEffect } from "react";
import {
  addNowPlayingMovies,
  addPopularMovies,
  addTopRatedMovies,
  addUpcomingMovies,
} from "../redux/slices/moviesSlice";
import { API_OPTIONS, NOW_PLAYING_MOVIES_URL } from "../utils/constant";
import { useDispatch } from "react-redux";

const useAddMoviesListToReduxStore = (categoryStr) => {
  const dispatch = useDispatch();

  const getNowPlayingMovies = async () => {
    try {
      console.log(
        NOW_PLAYING_MOVIES_URL + categoryStr + "&language=en-US&page=1"
      );
      const response = await fetch(
        NOW_PLAYING_MOVIES_URL + categoryStr,
        API_OPTIONS
      );
      const jsonData = await response.json();

      switch (categoryStr) {
        case "now_playing":
          dispatch(addNowPlayingMovies(jsonData.results));
          break;
        case "upcoming":
          dispatch(addUpcomingMovies(jsonData.results));
          break;
        case "popular":
          dispatch(addPopularMovies(jsonData.results));
          break;
        case "top_rated":
          dispatch(addTopRatedMovies(jsonData.results));
          break;

        default:
          break;
      }
    } catch (error) {
      console.error("Something went wrong while fetching the movies" + error);
    }
  };

  useEffect(() => {
    getNowPlayingMovies();
  }, []);
};

export default useAddMoviesListToReduxStore;
