import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import screen from "../../images/screen.png";
import React from "react";
import "./_steps.scss";
import { faSmile, faUser } from "@fortawesome/free-regular-svg-icons";

const Steps = () => {
  return (
    <section className="container steps">
      <div className="brand__header text-center m-auto">
        <h6 className="text-primary">Easy Steps</h6>
        <h4>Discover This App More Easy </h4>
        <p className="text-secondary">
          This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel
          velit auctor aliquet. Aenean sollicitudin, lorem quis.
        </p>
      </div>
      <div className="row">
        <div className="col-md-6 steps-left">
          <img src={screen} alt="" className="img-fluid pl-3" />
        </div>
        <div className="col-md-6 mt-5 pt-5">
          <div className="row">
            <div className="col-md-3 mt-2 text-center">
              <span className="steps__icon steps__icon-download">
                <FontAwesomeIcon icon={faDownload} />
              </span>
              <h6 className="mt-3">Download free trial</h6>
              <span className="steps__icon-bg">1</span>
            </div>
            <div className="col-md-8">
              <p className="text-justify text-secondary steps-text">
                This is version of Lorem Ipsum. Proin gravida nibh vel velit
                auctor aliquet. Aen ean itudin, lorem quis bibendum auctor, nisi
                elit cons tequat ipsum, nec sagittis sem nibh id elit.{" "}
              </p>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-md-8">
              <p className="text-justify text-secondary steps-text">
                This is version of Lorem Ipsum. Proin gravida nibh vel velit
                auctor aliquet. Aen ean itudin, lorem quis bibendum auctor, nisi
                elit cons tequat ipsum, nec sagittis sem nibh id elit.{" "}
              </p>
            </div>
            <div className="col-md-3 mt-2 text-center">
              <span className="steps__icon steps__icon-user">
                <FontAwesomeIcon icon={faUser} />
              </span>
              <h6 className="mt-3">Make your profile</h6>
              <span className="steps__icon-bg">2</span>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-md-3 mt-2 text-center">
              <span className="steps__icon steps__icon-smile">
                <FontAwesomeIcon icon={faSmile} />
              </span>
              <h6 className="mt-3">Use your app</h6>
              <span className="steps__icon-bg">3</span>
            </div>
            <div className="col-md-8">
              <p className="text-justify text-secondary steps-text">
                This is version of Lorem Ipsum. Proin gravida nibh vel velit
                auctor aliquet. Aen ean itudin, lorem quis bibendum auctor, nisi
                elit cons tequat ipsum, nec sagittis sem nibh id elit.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Steps;
