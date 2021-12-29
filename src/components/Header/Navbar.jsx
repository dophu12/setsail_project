import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom";
import InputBtn from "../Modules/InputBtn";
import Btn from "../Modules/Btn";
import SideMenu from "./SideMenu";
import UserModal from "./UserModal";

function Navbar({ zIndex, handleNavbarzIndex }) {
  //show search-modal
  const [active, setActive] = useState(false);

  //show side menu
  const [right, setRight] = useState("-458px");
  const handleSideMenu = (e) => {
    e.stopPropagation();
    right === "0px" ? setRight("-458px") : setRight("0px");
  };
  window.addEventListener("click", () => setRight("-458px"));

  //show menu on mobile and tablet
  const [showMenu, setShowMenu] = useState(false);
  const location = useLocation();
  //hide menu on vacation-showcase and destination-carousel Pages
  const bool =
    location.pathname === "/vacation-showcase" ||
    location.pathname === "/destination-carousel";

  const handleShowMenu = (e) => {
    e.stopPropagation();
    setShowMenu(!showMenu);
  };
  window.addEventListener("click", () => {
    if (window.innerWidth < 1024 || bool) setShowMenu(false);
  });

  useEffect(() => {
    if (window.innerWidth > 1023 && !bool) setShowMenu((pre) => !pre);
  }, [bool]);

  //open & close Modal
  const [modal, setModal] = useState(false);

  //handle navbar when scroll
  const [isFixed, setFixed] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 1000 ? setFixed(true) : setFixed(false);
    });
  }, []);

  return (
    <div
      style={{
        zIndex: zIndex ? "9" : "10",
      }}
      onMouseOver={() => handleNavbarzIndex?.(false)}
      className={`navbar ${isFixed ? "fixed" : ""}`}
      id="navbar"
    >
      <div onClick={handleShowMenu} className="menu-icon__mobile__tablet">
        <i className="fas fa-bars"></i>
      </div>
      <div className="navbar__logo">
        <a href="/setsail_project">
          <img
            src="https://setsail.qodeinteractive.com/wp-content/uploads/2018/09/logo.png"
            alt="Logo"
            className="navbar__logo-img"
          />
        </a>
      </div>
      <div className={`menu ${showMenu ? "" : "hidden"}`}>
        <div className="overlay__mobile__table"></div>
        <ul
          onClick={(e) => e.stopPropagation()}
          style={{ left: showMenu ? "0" : "-100%" }}
          className="menu_list"
        >
          <div onClick={handleShowMenu} className="menu__list__icon-close">
            <i className="fas fa-times"></i>
          </div>
          <li className="menu_item">
            <NavLink
              to="/"
              className="menu_link"
              style={({ isActive }) => {
                return {
                  color: isActive ? "#fff" : "",
                  backgroundColor: isActive ? "#30A9AD" : "",
                };
              }}
            >
              Home
            </NavLink>
          </li>
          <li className="menu_item">
            <NavLink
              to="/winter-holidays"
              className="menu_link"
              style={({ isActive }) => {
                return {
                  color: isActive ? "#fff" : "",
                  backgroundColor: isActive ? "#30A9AD" : "",
                };
              }}
            >
              Winter
            </NavLink>
          </li>
          <li className="menu_item">
            <NavLink
              to="/new-year-trips"
              className="menu_link"
              style={({ isActive }) => {
                return {
                  color: isActive ? "#fff" : "",
                  backgroundColor: isActive ? "#30A9AD" : "",
                };
              }}
            >
              New Year
            </NavLink>
          </li>
          <li className="menu_item">
            <NavLink
              to="/vacation-showcase"
              className="menu_link"
              style={({ isActive }) => {
                return {
                  color: isActive ? "#fff" : "",
                  backgroundColor: isActive ? "#30A9AD" : "",
                };
              }}
            >
              Showcase
            </NavLink>
          </li>
          <li className="menu_item">
            <NavLink
              to="/destination-carousel"
              className="menu_link"
              style={({ isActive }) => {
                return {
                  color: isActive ? "#fff" : "",
                  backgroundColor: isActive ? "#30A9AD" : "",
                };
              }}
            >
              Carousel
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar__right-inner">
        <div className="navbar__cart">
          <i className="fas fa-cart-arrow-down"></i>
          <div className="navbar__cart__dropdown">
            <ul className="navbar__cart__list">
              <li className="navbar__cart__no-item-notification">
                No products in the cart
              </li>
            </ul>
          </div>
        </div>
        <div onClick={() => setActive(!active)} className="navbar__search">
          <i className="fas fa-search"></i>
          <div
            className={`${active ? "navbar__search__modal" : "non-display"}`}
          >
            <div className="overlay"></div>
            <div
              onClick={(e) => e.stopPropagation()}
              className="navbar__search__inner"
            >
              <InputBtn
                className="navbar__search__input"
                type="text"
                placeholder="Search..."
              />
              <Btn
                className="bg-cyan-btn navbar__search__btn"
                padding="16px 72px"
              >
                FIND NOW
              </Btn>
            </div>
          </div>
        </div>
        <div
          onClick={(e) => handleSideMenu(e)}
          className="navbar__side-menu-icon"
        >
          <i className="fas fa-bars"></i>
          <SideMenu right={right} handleSideMenu={handleSideMenu} />
        </div>
      </div>

      <div
        onClick={() => setModal(!modal)}
        className="user-icon__mobile__tablet"
      >
        <i className="far fa-user-circle"></i>
        {modal && <UserModal />}
      </div>
    </div>
  );
}

export default Navbar;
