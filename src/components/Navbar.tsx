import React from "react";

const Navbar: React.FC = () => {
    return (
        <>
            {/* <!-- Backtotop start --> */}
            <div id="scroll-percentage">
                <span id="scroll-percentage-value" data-default-color="var(--rr-color-900)" data-scroll-color="var(--rr-theme-primary)"></span>
            </div>
            {/* <!-- Backtotop end --> */}

            {/* <!-- Offcanvas area start --> */}
            <div className="fix">
                <div className="offcanvas__area">
                    <div className="offcanvas__wrapper">
                        <div className="offcanvas__content">
                            <div className="offcanvas__top d-flex justify-content-between align-items-center">
                                <div className="offcanvas__logo">
                                    <a href="/">
                                        <img src="/assets/imgs/logo/logo-white.svg" alt="logo not found" />
                                    </a>
                                </div>
                                <div className="offcanvas__close">
                                    <button className="offcanvas-close-icon animation--flip">
                                        <span className="offcanvas-m-lines">
                                            <span className="offcanvas-m-line line--1"></span><span className="offcanvas-m-line line--2"></span><span className="offcanvas-m-line line--3"></span>
                                        </span>
                                    </button>
                                </div>
                            </div>
                            <div className="mobile-menu fix"></div>
                            <div className="offcanvas__social">
                                <h4 className="offcanvas__title mb-20">Subscribe & Follow</h4>
                                <p className="mb-30">Medical practices evolved over millennia, from ancient civilizations like Egypt and Mesopotamia to the groundbreaking</p>
                                <ul className="header-top-socail-menu d-flex">
                                    <li><a href="https://www.facebook.com/"><i className="fab fa-facebook-f"></i></a></li>
                                    <li><a href="https://twitter.com/"><i className="fab fa-twitter"></i></a></li>
                                    <li><a href="https://www.pinterest.com/"><i className="fa-brands fa-pinterest-p"></i></a></li>
                                    <li><a href="https://vimeo.com/"><i className="fa-brands fa-vimeo-v"></i></a></li>
                                </ul>
                            </div>
                            <div className="offcanvas__btn d-sm-none">
                                <div className="header__btn-wrap">
                                    <a href="https://themeforest.net/user/rrdevs/portfolio" className="rr-btn rr-btn__theme rr-btn__theme-white mt-40 mt-sm-35 mt-xs-30">
                                        <span className="btn-wrap">
                                            <span className="text-one">Purchase Now</span>
                                            <span className="text-two">Purchase Now</span>
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="offcanvas__overlay"></div>
            <div className="offcanvas__overlay-white"></div>
            {/* <!-- Offcanvas area start --> */}

            {/* <!-- Header area start --> */}
            <header>
                <div className="header-4-top theme-bg-primary">
                    <div className="container">
                        <div className="row">
                            <div className="col-8 d-none d-lg-block">
                                <div className="header-4-top__menu d-flex">
                                    <a href="https://maps.app.goo.gl/BUA2hZbxWPt8EATx9"><i className="fa-solid fa-location-dot"></i> 6391 Elgin St. Celina, 10299</a>
                                    <a href="tel:6295550129"><i className="fa-solid fa-phone"></i> (629) 555-0129</a>
                                    <a href="mailto:info@medilix.com"><i className="fa-solid fa-envelope"></i> info@medilix.com</a>
                                </div>
                            </div>
                            <div className="col-lg-4 col-12">
                                <div className="header-4-top__menu-social d-flex justify-content-lg-end justify-content-center">
                                    <a href="https://www.facebook.com/"><i className="fab fa-facebook-f"></i></a>
                                    <a href="https://www.instagram.com/"><i className="fa-brands fa-instagram"></i></a>
                                    <a href="https://twitter.com/">
                                        <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10.0596 6.77295L15.8879 -0.00195312H14.5068L9.44607 5.8806L5.40411 -0.00195312H0.742188L6.85442 8.89352L0.742188 15.998H2.12338L7.4676 9.78587L11.7362 15.998H16.3981L10.0593 6.77295H10.0596ZM8.16787 8.97189L7.54857 8.0861L2.62104 1.03779H4.74248L8.71905 6.726L9.33834 7.61179L14.5074 15.0056H12.386L8.16787 8.97223V8.97189Z" fill="white" />
                                        </svg>
                                    </a>
                                    <a href="https://www.linkedin.com/"><i className="fa-brands fa-linkedin"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="header-sticky" className="header__area header-4__background header-4">
                    <div className="container">
                        <div className="mega__menu-wrapper p-relative">
                            <div className="header__main">
                                <div className="header__logo">
                                    <a href="/">
                                        <div className="logo">
                                            <img src="/assets/imgs/logo/logo.svg" alt="logo not found" />
                                        </div>
                                    </a>
                                </div>

                                <div className="mean__menu-wrapper d-none d-lg-block">
                                    <div className="main-menu main-menu-3">
                                        <nav id="mobile-menu">
                                            <ul>
                                                <li><a href="/">Home</a></li>
                                                <li><a href="/contact">contact</a></li>
                                                <li><a href="/about">About</a></li>
                                                {/* <li><a href="/faq">FAQ</a></li> */}
                                            </ul>
                                        </nav>
                                    </div>
                                </div>

                                <div className="header__right">
                                    <div className="header__action d-flex align-items-center">
                                        <div className="header__btn-wrap d-none d-sm-inline-flex">
                                            <div className="rr-header-icon-search">
                                                <button className="search-open-btn">
                                                    <i className="fa-solid fa-magnifying-glass"></i>
                                                </button>
                                            </div>
                                        </div>

                                        <div className="header__hamburger">
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
            {/* <!-- Header area end --> */}
        </>
    )
}

export default Navbar;