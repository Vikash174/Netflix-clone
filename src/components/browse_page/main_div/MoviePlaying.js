import React from "react";
import MovieTitleAndDescription from "./MovieTitleAndDescription";
import VideoBackground from "./VideoBackground";
import useMovieTrailerAndLogo from "../../../custom_hooks/useMovieTrailerAndLogo";

const MoviePlaying = (props) => {
  const { id } = props.movie;

  // using custom hook to save tailer and logo into redux store
  useMovieTrailerAndLogo(id);

  return (
    <div>
      <MovieTitleAndDescription />
      <VideoBackground />
    </div>
  );
};

export default MoviePlaying;
