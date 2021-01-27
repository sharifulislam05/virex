import React from "react";
import "./_solution.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import phone from "../../images/solution-phone.png";
import {
  faBoxes,
  faDownload,
  faShareAlt,
  faSync,
} from "@fortawesome/free-solid-svg-icons";

const Solution = () => {
  return (
    <section className="container solution">
      <div className="row">
        <div className="col-md-5 solution__left">
          <img src={phone} alt="" className="img-fluid ml-3" />
        </div>
        <div className="col-md-7 mt-3 ">
          <h4 className="font-weight-bolder mb-4">
            Perfect Solution For Your ios & <br /> Android Device
          </h4>
          <div className="row solution__details">
            <div className="col-md-5 mb-3">
              <span className="solution__logo">
                <FontAwesomeIcon icon={faSync} />
              </span>
              <h5 className="mt-3">Get Regular Update</h5>
              <p>
                This is Photoshop's version of Loem Ipum. Proin gravida nibh vel
                velit er aliqu.
              </p>
            </div>
            <div className="col-md-5 mb-3">
              <span className="solution__logo">
                <FontAwesomeIcon icon={faDownload} />
              </span>
              <h5 className="mt-3">Free Download</h5>
              <p>
                This is Photoshop's version of Loem Ipum. Proin gravida nibh vel
                velit er aliqu.
              </p>
            </div>
            <div className="col-md-5 mb-3">
              <span className="solution__logo">
                <FontAwesomeIcon icon={faShareAlt} />
              </span>
              <h5 className="mt-3">Shareable Access</h5>
              <p>
                This is Photoshop's version of Loem Ipum. Proin gravida nibh vel
                velit er aliqu.
              </p>
            </div>
            <div className="col-md-5 mb-3">
              <span className="solution__logo">
                <FontAwesomeIcon icon={faBoxes} />
              </span>
              <h5 className="mt-3">Customise Storage</h5>
              <p>
                This is Photoshop's version of Loem Ipum. Proin gravida nibh vel
                velit er aliqu.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;
