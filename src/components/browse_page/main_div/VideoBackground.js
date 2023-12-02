import React from "react";
import { useSelector } from "react-redux/es/exports";

const VideoBackground = () => {
  const videoUrl = useSelector((state) => state.movies.youtubeTrailer);

  return (
    <div className="shadow-inner">
      <iframe
        className="w-screen h-[80vh] object-cover pointer-events-none "
        src={videoUrl}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share "
      ></iframe>
    </div>
  );
};

export default VideoBackground;
