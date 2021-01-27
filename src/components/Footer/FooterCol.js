import { faGreaterThan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const FooterCol = (props) => {
  return (
    <div className="col-6 col-md-2">
      {props.menuTitle ? (
        <h5 className="footer__menu-header mb-5 mt-3">{props.menuTitle}</h5>
      ) : (
        " "
      )}
      {props.menuList.map((item, index) => {
        return (
          <ul className="list-unstyled " key={index}>
            {" "}
            <li>
              <a href="/" className="footer__link">
                <FontAwesomeIcon icon={faGreaterThan} />
                {item.name}
              </a>
            </li>
          </ul>
        );
      })}
      {props.children}
    </div>
  );
};

export default FooterCol;
