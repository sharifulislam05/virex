import React from "react";
import Banner from "./Bannner/Banner";
import NavBar from "./NavBar/NavBar";
import headerBg from "../../images/shape.png";
import "./_header.scss";

const Header = () => {
  return (
    <div className="header">
      <img src={headerBg} alt="" className="header-img" />
      <div className="header-main">
        <NavBar />
        <Banner />
      </div>
    </div>
  );
};

export default Header;
