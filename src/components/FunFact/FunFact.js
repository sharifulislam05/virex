import React from "react";
import "./_funfact.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAward,
  faCheckDouble,
  faNetworkWired,
  faSmile,
} from "@fortawesome/free-solid-svg-icons";

const FunFact = () => {
  return (
    <section className="funfact">
      <div className="container">
        <div className="row m-0 pl-5 p-5">
          <div className="col-md-3">
            <div className="d-flex">
              <p className="fact-logo">
                <FontAwesomeIcon
                  icon={faCheckDouble}
                  className="check-double"
                />
              </p>
              <div className="fact-text">
                <h6>1200+</h6>
                <p>project completed</p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="d-flex">
              <p className="fact-logo">
                <FontAwesomeIcon
                  icon={faNetworkWired}
                  className="network-wired"
                />
              </p>
              <div className="fact-text">
                <h6>15</h6>
                <p>Working in</p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="d-flex">
              <p className="fact-logo">
                <FontAwesomeIcon icon={faAward} className="award" />
              </p>
              <div className="fact-text">
                <h6>120</h6>
                <p>Award Won</p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="d-flex">
              <p className="fact-logo">
                <FontAwesomeIcon icon={faSmile} className="smile" />
              </p>
              <div className="fact-text">
                <h6>3200+</h6>
                <p>Happy Clients</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FunFact;
