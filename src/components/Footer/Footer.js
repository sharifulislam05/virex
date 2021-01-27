import React from "react";
import "./_footer.scss";
import FooterCol from "./FooterCol";
import logo from "../../images/logo.png";
import apple from "../../images/apple-app-btn.png";
import google from "../../images/play-store-app-btn.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  const company = [
    { name: "Advertise", link: "/advertise" },
    { name: "Support", link: "/support" },
    { name: "Marketing", link: "/marketing" },
    { name: "Contact", link: "/contact" },
    { name: "About us", link: "/about" },
  ];
  const links = [
    { name: "Home", link: "/home" },
    { name: "Features", link: "/feature" },
    { name: "Pricing", link: "/price" },
    { name: "Screenshot", link: "/screenshot" },
    { name: "Testimonial", link: "/testimonial" },
  ];
  const download = [];
  return (
    <footer className="footer-container ">
      <div className="container">
        <div className="row pt-5 m-0">
          <div className="col-md-4">
            <img src={logo} alt="" className="mb-4" />
            <p className="text-justify">
              This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel
              revelit auctor aliquet. Aenean lic eitudin, lorem quis
              bibendum.This is Photoshop's version of Lorem Ipsum. Proin .
            </p>
            <div>
              <ul className="list-inline d-flex">
                <li className="mr-2">
                  <a href="/" className="icon-facebook">
                    <FontAwesomeIcon className="icon" icon={faFacebook} />
                  </a>
                </li>
                <li className="mr-2">
                  <a href="/" className="icon-twitter">
                    <FontAwesomeIcon className="icon" icon={faTwitter} />
                  </a>
                </li>
                <li className="mr-2">
                  <a href="/" className="icon-linkedin">
                    <FontAwesomeIcon className="icon" icon={faLinkedinIn} />
                  </a>
                </li>
                <li className="mr-2">
                  <a href="/" className="icon-instragram">
                    <FontAwesomeIcon className="icon" icon={faInstagram} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <FooterCol menuTitle="Company" menuList={company}></FooterCol>
          <FooterCol menuTitle="Quick Links" menuList={links}></FooterCol>
          <FooterCol menuTitle="Download Link" menuList={download}>
            <img src={google} alt="" className="mb-3" />
            <img src={apple} alt="" />
          </FooterCol>
        </div>
        <div className="text-center copyright">
          <p className="m-0 p-3">
            Copyright {new Date().getFullYear()} All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
