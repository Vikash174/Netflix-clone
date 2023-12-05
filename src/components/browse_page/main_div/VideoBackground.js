import React from "react";

const VideoBackground = (props) => {
  const { videoUrl } = props;

  return (
    <div className="shadow-inner">
      <iframe
        className="w-[100%] h-[50vh]  aspect-video pointer-events-none  md:h-[60vh] lg:h-[80vh] xl:h-[90vh]"
        src={videoUrl}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share "
      ></iframe>
    </div>
  );
};

export default VideoBackground;
