import React from "react";
import ImageOne from "./ImageOne";
import "../styles/pr.scss"





const web = () => {
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
          <source src="pr2.mp4" type="video/mp4" />
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
          <source src="basitan.mp4" type="video/mp4" />
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
          <source src="rro.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default web;