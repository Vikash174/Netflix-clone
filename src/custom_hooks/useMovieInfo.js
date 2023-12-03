import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS, GET_MOVIE_INFO_URL } from "../utils/constant";
import { addInfoMovie } from "../redux/slices/currentMovieInfo";

const useMovieInfo = (movieId) => {
  const dispatch = useDispatch();

  const addMovieInfoToRedux = async () => {
    try {
      const response = await fetch(GET_MOVIE_INFO_URL + movieId, API_OPTIONS);
      const jsonData = await response.json();

      dispatch(addInfoMovie(jsonData));
    } catch (error) {
      console.error("Something went wrong while fetching the movies" + error);
    }
  };

  useEffect(() => {
    addMovieInfoToRedux();
  }, []);
};

export default useMovieInfo;
