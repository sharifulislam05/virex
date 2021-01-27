import React from "react";
import phone2 from "../../../images/phone2.png";
import phone3 from "../../../images/phone3.png";
import "./_banner.scss";

const Banner = () => {
  return (
    <section>
      <div className="row p-0 m-0">
        <div className="col-md-4 p-0 mt-5 banner__left">
          <h6>Creative App Of 2020</h6>
          <h3>Best Mobile App For Your Storage Management</h3>
          <p className="text-secondary">
            This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel
            velit auctor aliquet.{" "}
          </p>
          <button className="brand__btn try-btn">Try Free Trail</button>
          <button className="brand__btn download-btn">Download</button>
          <div className="d-flex mt-5 pt-5 ">
            <div className="d-flex mr-3">
              <h4 className="mr-2 pr-2 brand-text border-right">50.6k</h4>
              <p>
                App <br /> Download
              </p>
            </div>
            <div className="d-flex">
              <h4 className="mr-2  pr-2 brand-text border-right">16.2k</h4>
              <p>
                Positive <br /> Review
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-8 d-flex header__right">
          <img src={phone2} alt="" className="phn-small" />
          <img src={phone3} alt="" className="phn-big" />
        </div>
      </div>
    </section>
  );
};

export default Banner;
