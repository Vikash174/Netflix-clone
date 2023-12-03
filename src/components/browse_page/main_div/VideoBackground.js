import React from "react";

const VideoBackground = (props) => {
  const { videoUrl } = props;

  return (
    <div className="shadow-inner">
      <iframe
        className="w-[100%] h-[80vh]  aspect-video pointer-events-none "
        src={videoUrl}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share "
      ></iframe>
    </div>
  );
};

export default VideoBackground;
