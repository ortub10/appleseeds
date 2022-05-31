import React, { useRef } from "react";
import video from "./Life could be a dream.mp4";

const Exercise21_2 = () => {
  const vidRef = useRef(null);
  const handlePlayVideo = () => {
    vidRef.current.play();
  };

  const handlePuseVideo = () => {
    vidRef.current.pause();
  };
  return (
    <>
      <video src={video} ref={vidRef} />
      <div>
        <button onClick={handlePlayVideo}>Play</button>
        <button onClick={handlePuseVideo}>Pause</button>
      </div>
    </>
  );
};

export default Exercise21_2;
