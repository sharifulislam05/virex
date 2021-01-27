import React from "react";
import "./_video.scss";
import videoIcon from "../../images/vedio-icon.png";

const Video = () => {
  return (
    <section className="video-container ">
      <div className="d-flex justify-content-center">
        <img src={videoIcon} alt="" className="img-fluid" />
      </div>
    </section>
  );
};

export default Video;
