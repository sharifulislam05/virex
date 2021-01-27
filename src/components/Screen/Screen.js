import React from "react";
import "./_screen.scss";
import btmIcon from "../../images/btm-icon.png";
import phone2 from "../../images/phone2.png";
import phone3 from "../../images/phone3.png";
import phone1 from "../../images/phone1.png";

const Screen = () => {
  return (
    <section className="container">
      <div className="screen__header text-center m-auto">
        <h6 className="text-primary">Applicaation Screens</h6>
        <h5 className="font-weight-bolder">
          Moder And User Friendly App Screens
        </h5>
        <p className="text-secondary px-5">
          This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel
          velit auctor aliquet. Aenean sollicitudin, lorem quis.
        </p>
      </div>
      <div className="screen offset-md-1 d-flex justify-content-between pt-4">
        <img src={phone3} alt="" className="mt-4" />
        <img src={phone2} alt="" className="screen__center" />
        <img src={phone1} alt="" className="mt-4" />
      </div>
      <div className="d-flex justify-content-center offset-md-1 my-5">
        <img src={btmIcon} alt="" />
      </div>
    </section>
  );
};

export default Screen;
