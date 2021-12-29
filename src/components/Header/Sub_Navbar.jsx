import React, { useState, useRef } from "react";
import UserModal from "./UserModal";

function Sub_Navbar({ handleNavbarzIndex }) {
  const list = useRef(["French", "German", "Italia"]);
  //Set Language
  const [language, setLanguage] = useState("English");
  const [languages, setLanguages] = useState(list.current);

  const handleLanguage = (index) => {
    const temp = language;
    setLanguage(languages[index]);
    list.current[index] = temp;
    setLanguages(list.current);
  };

  //open & close Modal
  const [modal, setModal] = useState(false);

  return (
    <div
      onMouseOver={() => handleNavbarzIndex(true)}
      onMouseOut={() => handleNavbarzIndex(false)}
      className="sub-navbar"
    >
      <div className="left-inner">
        <ul>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="mailto:setsail@qode.com"
            >
              <i className="far fa-envelope"></i>
              setsail@qode.com
            </a>
          </li>
          <li>
            <a href="tel:1%20562%20867%205309">
              <i className="fas fa-phone"></i>1 562 867 5309
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.google.rs/maps/place/Charging+Bull/@40.7055242,-74.0133806,20z/data=!4m5!3m4!1s0x0:0xc7db393ae1eff521!8m2!3d40.7055537!4d-74.0134436"
            >
              <i className="fas fa-map-marker-alt"></i>
              Broadway & Morris St, New York
            </a>
          </li>
        </ul>
      </div>
      <div className="right-inner">
        <ul className="social-network">
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://twitter.com/QodeInteractive"
            >
              <i className="fab fa-twitter"></i>
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.pinterest.com/qodeinteractive/"
            >
              <i className="fab fa-pinterest-p"></i>
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.facebook.com/QodeInteractive/"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.instagram.com/qodeinteractive/"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </li>
        </ul>
        <div className="language">
          <button className="current-language">
            {language}
            <i className="fas fa-chevron-down"></i>
          </button>
          <ul className="other-languages">
            {languages.map((languageItem, index) => {
              return (
                <li onClick={() => handleLanguage(index)} key={index}>
                  {languageItem}
                </li>
              );
            })}
          </ul>
        </div>
        <div onClick={() => setModal(!modal)} className="user">
          <i className="user-icon far fa-user-circle"></i>
          {modal && <UserModal />}
        </div>
      </div>
    </div>
  );
}

export default Sub_Navbar;
