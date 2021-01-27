import React from "react";
import "./_download.scss";
import apple from "../../images/apple-app-btn.png";
import google from "../../images/play-store-app-btn.png";

const Download = () => {
  return (
    <section className="download-container">
      <div className="container">
        <div className="col-md-5 offset-md-1 pt-5 download-text">
          <h6>App Download</h6>
          <h3>Download The App With Top Features</h3>
          <p>
            This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel
            velit auctor aliquet. Aenean sollicitudin, lorem quis.
          </p>
          <div>
            <img src={google} alt="" className="mr-3" />
            <img src={apple} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Download;
