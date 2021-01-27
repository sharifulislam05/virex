import React from "react";
import "./_subscribe.scss";

const Subscribe = () => {
  return (
    <section className="subscribe ">
      <div className="container">
        <div className="row py-4">
          <div className="col-md-5 subscribe-header ml-5">
            <h3>Subscribe Our Newsletter</h3>
            <p className="text-justify">
              This is Photoshop's version of Lorem Ipsum. Proin gravida nibih
              vel velit auctor aliquet. Aenean sollicitudin, lorem quis.This
              isaw Photoshop's version of Lorem Ipsum.
            </p>
          </div>
          <div className="col-md-4 input__subscribe mt-5">
            <input type="text" placeholder="Your Email" />
            <button>Subscribe</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
