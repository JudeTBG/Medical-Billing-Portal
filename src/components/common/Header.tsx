import React from "react";

const Header: React.FC = () => {
    return (
        <header>
            <div id="header-sticky" className="header__area header-1">
                <div className="container">
                    <div className="mega__menu-wrapper p-relative">
                        <div className="header__main">
                            <div className="header__logo">
                                <a href="index.html">
                                    <div className="logo">
                                        <img src="/assets/imgs/logo/logo.svg" alt="logo not found"/>
                                    </div>
                                </a>
                            </div>

                            <div className="mean__menu-wrapper d-none d-lg-block">
                                <div className="main-menu">
                                    <nav id="mobile-menu">
                                        <ul>
                                            <li className=" has-mega-menu active">
                                                <a href="/">Home</a>
                                                
                                            </li>
                                            <li >
                                                <a href="/about">About</a>
                                                
                                            </li>
                                            <li >
                                                <a href="/contact">Contact</a>
                                                
                                            </li>
                                            <li >
                                                <a href="/faq">faq</a>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>

                            <div className="header__right">
                                <div className="header__action d-flex align-items-center">
                                    <div className="header__btn-wrap d-none d-sm-inline-flex">
                                        <a href="contact.html" className="rr-btn rr-btn__primary">
                                            <span className="btn-wrap">
                                                <span className="text-one">Read More <i className="fa-solid fa-plus"></i></span>
                                                <span className="text-two">Read More <i className="fa-solid fa-plus"></i></span>
                                            </span>
                                        </a>
                                    </div>

                                    <div className="header__hamburger ml-20 d-xl-none">
                                        <div className="sidebar__toggle">
                                            <a className="bar-icon" href="javascript:void(0)">
                                                <span></span>
                                                <span></span>
                                                <span></span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;