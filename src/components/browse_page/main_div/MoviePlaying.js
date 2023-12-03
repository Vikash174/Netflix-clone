import React from "react";
import MovieTitleAndDescription from "./MovieTitleAndDescription";
import VideoBackground from "./VideoBackground";
import useMovieTrailerAndLogo from "../../../custom_hooks/useMovieTrailerAndLogo";
import { useSelector } from "react-redux/es/exports";

const MoviePlaying = (props) => {
  const { id } = props.movie;

  // using custom hook to save tailer and logo into redux store
  useMovieTrailerAndLogo(id);

  const videoUrl = useSelector((state) => state.movies.youtubeTrailer);
  const logoPath = useSelector((state) => state.movies.movieLogoFilePath);

  return (
    <div>
      <MovieTitleAndDescription
        logoPath={logoPath}
        trailerUrl={videoUrl}
        id={id}
      />
      <VideoBackground videoUrl={videoUrl} />
    </div>
  );
};

export default MoviePlaying;
