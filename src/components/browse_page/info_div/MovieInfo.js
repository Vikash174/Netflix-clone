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
import MOVIE_LANG from "../../../utils/languages/MovieInfo/MovieInfoLangConstant";

const MovieInfo = () => {
  const dispatch = useDispatch();
  const movieId = useSelector((state) => state.currentInfoMovie.movieId);
  const langKey = useSelector((state) => state.config.language);

  useMovieInfo(movieId);
  useMovieTrailerAndLogo(movieId);

  const movieData = useSelector((state) => state.currentInfoMovie.movie);
  const videoUrl = useSelector(
    (state) => state.currentInfoMovie.movieTrailerUrl
  );
  const movieLogo = useSelector((state) => state.currentInfoMovie.movieLogo);

  const closeInfoDivHandler = () => {
    dispatch(setShowInfoDiv(false));
    dispatch(removeInfoMovie());
  };

  return movieData === null ? null : (
    <div className=" fixed h-[90vh] w-[90vw] left-0 top-0 bottom-0 right-0 my-auto mx-auto bg-black inset-24 overflow-y-scroll z-50 flex flex-col scrollbar-none p-2">
      <div className="fixed left-[85%] sm:left-[90%]">
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

      <div className="w-[100%] mx-auto bg-white p-2 rounded shadow-lg ">
        <h1 className="text-3xl font-bold mb-4">
          {MOVIE_LANG[langKey].movieInformation}
        </h1>

        <div className="text-lg">
          <p>
            <strong>{MOVIE_LANG[langKey].title}:</strong> {movieData.title}
          </p>
          <p>
            <strong>{MOVIE_LANG[langKey].overview}:</strong>{" "}
            {movieData.overview}
          </p>
          <p>
            <strong>{MOVIE_LANG[langKey].genres}:</strong>{" "}
            {movieData.genres.map((genre) => genre.name).join(", ")}
          </p>
          <p>
            <strong>{MOVIE_LANG[langKey].releaseDate}:</strong>{" "}
            {movieData.release_date}
          </p>
          <p>
            <strong>{MOVIE_LANG[langKey].runtime}:</strong> {movieData.runtime}{" "}
            minutes
          </p>
          <p>
            <strong>{MOVIE_LANG[langKey].voteAvg}:</strong>{" "}
            {movieData.vote_average}
          </p>

          <div className="mt-6">
            <p className="font-bold">
              {MOVIE_LANG[langKey].productionCompanies}:
            </p>
            {movieData.production_companies.map((company) => (
              <div key={company.id} className="flex items-center mb-2">
                <img
                  className="w-28 h-12 object-center rounded mr-4"
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
