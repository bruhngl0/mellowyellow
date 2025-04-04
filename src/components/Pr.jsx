import React from "react";
import ImageOne from "./ImageOne";
import "../styles/pr.scss"





const Pr = () => {
  return (
    <div className="pr-video-container">
      <div className="pr-video-item">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="pr-video"
        >
          <source src="kafka.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="pr-video-item">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="pr-video"
        >
          <source src="pr3.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="pr-video-item">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="pr-video"
        >
          <source src="pr1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default Pr;
