import React from "react";
import { useSelector } from "react-redux/es/exports";
const VideoBackground = () => {
  const youtubeKey = useSelector((state) => state.movies.youtubeTrailerKey);

  return (
    <div className="shadow-inner">
      <iframe
        className="w-screen h-[80vh] aspect-video pointer-events-none "
        src={`https://www.youtube.com/embed/${youtubeKey}?rel=0?version=3&autoplay=1&controls=0&&showinfo=0&loop=1&mute=1&playlist=${youtubeKey}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share "
      ></iframe>
    </div>
  );
};

export default VideoBackground;
