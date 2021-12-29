import React from "react";

function SideMenu({ right, handleSideMenu }) {
  return (
    <div
      onClick={(e) => e.stopPropagation()}
      style={(right = { right })}
      className="navbar__side-menu"
    >
      <div onClick={handleSideMenu} className="navbar__side-menu-close">
        <i className="fas fa-times"></i>
      </div>
      <div className="side-menu__logo">
        <img
          src="https://setsail.qodeinteractive.com/wp-content/uploads/2018/09/logo.png"
          alt="SetSail Logo"
          className="side-menu__logo-img"
        />
      </div>
      <div className="side-menu__desc">
        <img
          src="https://setsail.qodeinteractive.com/wp-content/uploads/2018/09/sidearea-img-2.png"
          alt="SetSail Description"
          className="side-menu__desc-img"
        />
      </div>
      <div className="side-menu__map">
        <img
          src="https://setsail.qodeinteractive.com/wp-content/uploads/2018/09/sidearea-img.jpg"
          alt="SetSail Map"
          className="side-menu__map-img"
        />
        <p className="side-menu__map-desc">
          Lorem ipsum dolor sit amet, consectetuer adipis cing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis theme natoque
        </p>
      </div>
      <div className="side-menu__search">
        <div className="side-menu__search-title">Find Your Destination</div>
        <input
          type="text"
          placeholder="Search..."
          className="side-menu__search-input"
        />
        <button className="side-menu__search-btn">
          <i className="fas fa-search"></i>
        </button>
      </div>
      <div className="side-menu__follow-me">
        <div className="side-menu__social-network-title">Follow Me</div>
        <div className="side-menu__social-network">
          <span className="side-menu__social-network-item">
            <i className="fab fa-twitter"></i>
          </span>
          <span className="side-menu__social-network-item">
            <i className="fab fa-pinterest-p"></i>
          </span>
          <span className="side-menu__social-network-item">
            <i className="fab fa-facebook-f"></i>
          </span>
          <span className="side-menu__social-network-item">
            <i className="fab fa-instagram"></i>
          </span>
        </div>
      </div>
    </div>
  );
}

export default SideMenu;
