import React from "react";
import "./_expertise.scss";
import expertVideo from "../../images/expert-thumbnil.png";
import exportChart from "../../images/Layer_2.png";
import { faBuromobelexperte } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartBar, faCode, faSync } from "@fortawesome/free-solid-svg-icons";

const Expertise = () => {
  return (
    <section className="container expert">
      <div className="row offset-md-1 mt-5">
        <div className="col-md-4">
          <h6 className="text-primary">Expertise</h6>
          <h4 className="font-weight-bolder">
            Speciality in Those Field, Get Faster Solution
          </h4>
          <p>This is of Lorem Ipsum. Proin lorem graida nibh vel.</p>
          <div className="expert__video-area">
            <img src={expertVideo} alt="" className="img-fluid " />
            <img src={exportChart} alt="" className="expert-chart" />
          </div>
        </div>
        <div className="col-md-8 mt-5 pt-3">
          <div className="row expert__details ml-2">
            <div className="col-md-5 mb-3">
              <span className="logo__sync">
                <FontAwesomeIcon icon={faSync} />
              </span>
              <h5 className="mt-3">
                Research & <br /> Analysis
              </h5>
              <p>
                This is version of Lorwem Ipum.lor Proin gravida nibh vel velit
                erlorem aliqu.
              </p>
            </div>
            <div className="col-md-5">
              <span className="logo__research">
                <FontAwesomeIcon icon={faBuromobelexperte} />
              </span>
              <h5 className="mt-3">
                UI/UX Design & <br /> Research
              </h5>
              <p>
                This is version of Lorwem Ipum.lor Proin gravida nibh vel velit
                erlorem aliqu.
              </p>
            </div>
            <div className="col-md-5">
              <span className="logo__develop">
                <FontAwesomeIcon icon={faCode} />
              </span>
              <h5 className="mt-3">Expert Code for App Development</h5>
              <p>
                This is version of Lorwem Ipum.lor Proin gravida nibh vel velit
                erlorem aliqu.
              </p>
            </div>
            <div className="col-md-5">
              <span className="logo__expert">
                <FontAwesomeIcon icon={faChartBar} />
              </span>
              <h5 className="mt-3">Expert User Experience</h5>
              <p>
                This is version of Lorwem Ipum.lor Proin gravida nibh vel velit
                erlorem aliqu.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expertise;
