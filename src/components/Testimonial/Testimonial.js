import React from "react";
import "./_testimonial.scss";
import teamMember from "../../images/team-member.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faArrowRight,
  faQuoteLeft,
  faStar,
} from "@fortawesome/free-solid-svg-icons";

const Testimonial = () => {
  return (
    <section className="container">
      <div className="mb-5 d-flex justify-content-center">
        <div className="d-flex align-items-center mr-5">
          <FontAwesomeIcon icon={faArrowLeft} className="text-primary" />
        </div>
        <div className="testimonial__container text-center ">
          <div className="testimonial__header">
            <h6 className="text-primary">Testimonial</h6>
            <h4>Our Lovely Clients Review </h4>
            <p className="text-secondary">
              This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel
              velit auctor aliquet. Aenean sollicitudin, lorem quis.
            </p>
            <img src={teamMember} alt="" /> <br />
            <FontAwesomeIcon icon={faQuoteLeft} className="text-primary mt-4" />
          </div>
          <div className="feedbacks">
            <p>
              This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel
              velit auctor aliquet. Aenean sollicit wudin, lorem quis bibendum
              auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.
              Duis sed odio sit aet nih vulputate cursus a sit amet mauris.
              Morbi accumsan ipsum velit.
            </p>
            <div className="feedbacks__star">
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
            </div>
            <h6>Danial Henry</h6>
          </div>
        </div>
        <div className="d-flex align-items-center ml-5">
          <FontAwesomeIcon icon={faArrowRight} className="text-primary" />
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
