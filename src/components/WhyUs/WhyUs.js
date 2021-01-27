import React from "react";
import "./_whyUs.scss";
import phone from "../../images/phone-color.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCompress,
  faMemory,
  faMobile,
  faShieldAlt,
} from "@fortawesome/free-solid-svg-icons";

const WhyUs = () => {
  return (
    <section className="why-us">
      <div className="container">
        <div className="row m-0 p-0">
          <div className="col-md-5 p-2 offset-md-1 why-us__left">
            <h4>More Easy And More Powerful And Personal App Built For You</h4>
            <div className="d-flex text-justify mt-3">
              <span className="logo-compress mt-2">
                <FontAwesomeIcon icon={faCompress} className="m-2" />
              </span>
              <div>
                <h5>Expert User Experience Component</h5>
                <p>
                  This is version ofip Lorem Ipsum. Proin gravida nibh vel vlit
                  auctor aliquet. Aen ean itudin, lorem quis.
                </p>
              </div>
            </div>
            <div className="d-flex text-justify">
              <span className="logo-mobile mt-2">
                <FontAwesomeIcon icon={faMobile} className="ml-2" />
              </span>
              <div>
                <h5>Clean User Interface Design</h5>
                <p>
                  This is version ofip Lorem Ipsum. Proin gravida nibh vel vlit
                  auctor aliquet. Aen ean itudin, lorem quis.
                </p>
              </div>
            </div>
            <div className="d-flex text-justify">
              <span className="logo-shield mt-2">
                <FontAwesomeIcon icon={faShieldAlt} className="m-2" />
              </span>
              <div>
                <h5>Highly Secuired System</h5>
                <p>
                  This is version ofip Lorem Ipsum. Proin gravida nibh vel vlit
                  auctor aliquet. Aen ean itudin, lorem quis.
                </p>
              </div>
            </div>
            <div className="d-flex text-justify">
              <span className="logo-memory mt-2">
                <FontAwesomeIcon icon={faMemory} className="m-2" />
              </span>
              <div>
                <h5>Unlimited Storage As Need</h5>
                <p>
                  This is version ofip Lorem Ipsum. Proin gravida nibh vel vlit
                  auctor aliquet. Aen ean itudin, lorem quis.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 p-5">
            <img src={phone} alt="" className="img-fluid h-75" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
