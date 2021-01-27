import React, { useState } from "react";
import brandImg from "../../../images/virex.png";
import "./_navbar.scss";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const [openSub, setOpenSub] = useState(false);
  const [activeNav, setActiveNav] = useState("home");

  return (
    <nav className="navbar navbar-expand-lg navbar-light navbar__container">
      <a className="navbar-brand" href="#home">
        <img src={brandImg} alt="" />
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-5">
          <li class="nav-item dropdown">
            <a
              className={`nav-link dropdown-toggle mr-3 ${
                activeNav === "home" && "activeNav"
              }`}
              onClick={() => setActiveNav("home")}
              href="#home"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Home
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="#home">
                SEO Marketing
              </a>
              <a
                href="#home"
                onMouseEnter={() => setOpen(!open)}
                className={`dropdown-item ${open ? "list-active" : ""}`}
              >
                App Landing Page
              </a>
              {open && (
                <ul className="sub-menu list-unstyled">
                  <li className={`my-3 ${openSub === "dark" ? "list-active" : ""}`}>
                    <a
                      href="#home"
                      onMouseEnter={() => setOpenSub("dark")}
                      className="ml-4 text-dark"
                    >
                      Dark Mode
                    </a>
                  </li>
                  <li
                    className={` ${openSub === "light" ? "list-active" : ""}`}
                  >
                    <a
                      href="#home"
                      onMouseEnter={() => setOpenSub("light")}
                      className="ml-4 text-dark"
                    >
                      Light Mode
                    </a>
                  </li>
                </ul>
              )}
              <a class="dropdown-item" href="#home">
                Sass Landing Page
              </a>
              <a class="dropdown-item" href="#home">
                Personal Portfolio
              </a>
            </div>
          </li>
          <li className="nav-item mr-3">
            <a className="nav-link" href="#home">
              Features
            </a>
          </li>
          <li className="nav-item mr-3">
            <a className="nav-link" href="#home">
              Screenshots
            </a>
          </li>
          <li className="nav-item mr-3">
            <a className="nav-link" href="#home">
              Steps
            </a>
          </li>
          <li className="nav-item mr-3">
            <a className="nav-link" href="#home">
              Functions
            </a>
          </li>
          <li className="nav-item mr-3">
            <a className="nav-link" href="#home">
              Connect
            </a>
          </li>
          <li className="nav-item ml-5">
            <button className="brand__btn ml-auto">Download</button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
