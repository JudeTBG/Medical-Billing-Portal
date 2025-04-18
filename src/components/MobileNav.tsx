import React from "react";

interface Props {
  closeMobileNav: () => void;
}
const currentPath = window.location.pathname;

const MobileNav: React.FC<Props> = ({ closeMobileNav }) => {
  return (
    <>
      <div className="offcanvas__area">
        <div className="offcanvas__wrapper">
          <div className="offcanvas__content">
            <div className="offcanvas__top d-flex justify-content-between align-items-center">
              <div className="offcanvas__logo">
                <a href="/">
                  <img
                    src="/assets/imgs/logo/jude-logo.svg"
                    alt="logo not found"
                  />
                </a>
              </div>
              <div className="offcanvas__close">
                <button
                  onClick={closeMobileNav}
                  className="offcanvas-close-icon animation--flip"
                >
                  <span className="offcanvas-m-lines">
                    <span className="offcanvas-m-line line--1"></span>
                    <span className="offcanvas-m-line line--2"></span>
                    <span className="offcanvas-m-line line--3"></span>
                  </span>
                </button>
              </div>
            </div>
            <div className="hamberger__menu_wrapper">
              <ul className="offcanvas__menu">
                <li
                  className={`menu-item-has-children has-mega-menu ${
                    currentPath === "/" || currentPath === "/home"
                      ? "active"
                      : ""
                  }`}
                >
                  <a href="/">Home</a>
                </li>
                <li
                  className={`menu-item-has-children has-mega-menu ${
                    currentPath === "/about" ? "active" : ""
                  }`}
                >
                  <a href="/about">About</a>
                </li>
                <li
                  className={`menu-item-has-children has-mega-menu ${
                    currentPath === "/contact" ? "active" : ""
                  }`}
                >
                  <a href="/contact">Contact</a>
                </li>
                <li
                  className={`menu-item-has-children  has-mega-menu ${
                    currentPath === "/testimonials" ? "active" : ""
                  }`}
                >
                  <a href="/testimonials">Testimonials</a>
                </li>
              </ul>
            </div>
            <div className="mobile-menu fix"></div>
            <div className="offcanvas__social">
              <h4 className="offcanvas__title mb-20">Subscribe & Follow</h4>
              <p className="mb-30">
                Medical practices evolved over millennia, from ancient
                civilizations like Egypt and Mesopotamia to the groundbreaking
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="offcanvas__overlay"></div>
      <div className="offcanvas__overlay-white"></div>
    </>
  );
};

export default MobileNav;
