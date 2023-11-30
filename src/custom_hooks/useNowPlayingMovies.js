import { useEffect } from "react";
import { addNowPlayingMovies } from "../redux/slices/moviesSlice";
import { API_OPTIONS, NOW_PLAYING_MOVIES_URL } from "../utils/constant";
import { useDispatch } from "react-redux";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  const getNowPlayingMovies = async () => {
    try {
      const response = await fetch(NOW_PLAYING_MOVIES_URL, API_OPTIONS);
      const jsonData = await response.json();

      dispatch(addNowPlayingMovies(jsonData.results));
    } catch (error) {
      console.error("Something went wrong while fetching the movies" + error);
    }
  };

  useEffect(() => {
    getNowPlayingMovies();
  }, []);
};

export default useNowPlayingMovies;
