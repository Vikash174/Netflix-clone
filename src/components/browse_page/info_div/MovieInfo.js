import React from "react";
import MoviePlaying from "../main_div/MoviePlaying";
import { useDispatch, useSelector } from "react-redux/es/exports";
import {
  removeInfoMovie,
  setShowInfoDiv,
} from "../../../redux/slices/currentMovieInfo";
import useMovieInfo from "../../../custom_hooks/useMovieInfo";
import { IMAGE_CDN_URL, LOGOS_IMAGE_CDN_URL } from "../../../utils/constant";
import VideoBackground from "../main_div/VideoBackground";
import useMovieTrailerAndLogo from "../../../custom_hooks/useMovieTrailerAndLogo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import MovieTitleAndDescription from "../main_div/MovieTitleAndDescription";

const MovieInfo = () => {
  const dispatch = useDispatch();
  const movieId = useSelector((state) => state.currentInfoMovie.movieId);

  useMovieInfo(movieId);
  useMovieTrailerAndLogo(movieId);

  const movieData = useSelector((state) => state.currentInfoMovie.movie);
  const videoUrl = useSelector(
    (state) => state.currentInfoMovie.movieTrailerUrl
  );
  const movieLogo = useSelector((state) => state.currentInfoMovie.movieLogo);

  console.log("movie logo " + movieLogo + " video url " + videoUrl);
  const closeInfoDivHandler = () => {
    dispatch(setShowInfoDiv(false));
    dispatch(removeInfoMovie());
  };

  return movieData === null ? null : (
    <div className="h-[85%] w-[85%] bg-black fixed inset-24 m-auto overflow-y-scroll z-50 flex flex-col scrollbar-none">
      <div className="fixed left-[90%]">
        <button className="text-4xl text-white " onClick={closeInfoDivHandler}>
          <FontAwesomeIcon icon={faXmark} />
        </button>
      </div>
      <div>
        <MovieTitleAndDescription
          logoPath={movieLogo}
          trailerUrl={videoUrl}
          id={movieId}
        />

        <VideoBackground videoUrl={videoUrl} />
      </div>

      <div className="w-[100%] mx-auto bg-white p-8 rounded shadow-lg ">
        <h1 className="text-3xl font-bold mb-4">Movie Information</h1>

        <div className="text-lg">
          <p>
            <strong>Title:</strong> {movieData.title}
          </p>
          <p>
            <strong>Overview:</strong> {movieData.overview}
          </p>
          <p>
            <strong>Genres:</strong>{" "}
            {movieData.genres.map((genre) => genre.name).join(", ")}
          </p>
          <p>
            <strong>Release Date:</strong> {movieData.release_date}
          </p>
          <p>
            <strong>Runtime:</strong> {movieData.runtime} minutes
          </p>
          <p>
            <strong>Vote Average:</strong> {movieData.vote_average}
          </p>

          <div className="mt-6">
            <p className="font-bold">Production Companies:</p>
            {movieData.production_companies.map((company) => (
              <div key={company.id} className="flex items-center mb-2">
                <img
                  className="w-12 h-12 object-cover rounded mr-4"
                  src={`${LOGOS_IMAGE_CDN_URL}/${company.logo_path}`}
                  alt=" Logo"
                />
                <p>
                  {company.name} ({company.origin_country})
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieInfo;
