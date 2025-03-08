import React from "react";

const FaqPage: React.FC = () => {
    return (
        <>
            {/* <!-- search popup start --> */}
            <div className="search__popup">
                <div className="container">
                    <div className="row gx-30">
                        <div className="col-xxl-12">
                            <div className="search__wrapper">
                                <div className="search__top d-flex justify-content-between align-items-center">
                                    <div className="search__logo">
                                        <a href="index.html">
                                            <img src="src/assets/imgs/logo/logo-white.svg" alt="img" />
                                        </a>
                                    </div>
                                    <div className="search__close">
                                        <button type="button" className="search__close-btn search-close-btn">
                                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                                                <path d="M17 1L1 17" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                                                    stroke-linejoin="round" />
                                                <path d="M1 1L17 17" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                                                    stroke-linejoin="round" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                <div className="search__form">
                                    <form action="#">
                                        <div className="search__input">
                                            <input className="search-input-field" type="text" placeholder="Type here to search..." />
                                            <span className="search-focus-border"></span>
                                            <button type="submit">
                                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                    <path
                                                        d="M9.55 18.1C14.272 18.1 18.1 14.272 18.1 9.55C18.1 4.82797 14.272 1 9.55 1C4.82797 1 1 4.82797 1 9.55C1 14.272 4.82797 18.1 9.55 18.1Z"
                                                        stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                                                        stroke-linejoin="round" />
                                                    <path d="M19.0002 19.0002L17.2002 17.2002" stroke="currentColor" stroke-width="1.5"
                                                        stroke-linecap="round" stroke-linejoin="round" />
                                                </svg>
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- search popup end --> */}

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
                                    <a href="index.html">
                                        <img src="src/assets/imgs/logo/logo-white.svg" alt="logo not found" />
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
                                    <a href="index.html">
                                        <div className="logo">
                                            <img src="src/assets/imgs/logo/logo.svg" alt="logo not found" />
                                        </div>
                                    </a>
                                </div>

                                <div className="mean__menu-wrapper d-none d-lg-block">
                                    <div className="main-menu main-menu-3">
                                        <nav id="mobile-menu">
                                            <ul>
                                                <li className="has-dropdown has-mega-menu">
                                                    <a href="javascript:void(0)">Home</a>
                                                    <ul className="mega-menu mega-menu-grid-3">
                                                        <li>
                                                            <div className="home__menu-item">
                                                                <div className="home__menu-thumb">
                                                                    <img src="src/assets/imgs/menu/menu-home-1.jpg" alt="thumb not found" />
                                                                    <div className="home__menu-buttons">
                                                                        <a href="index.html" className="rr-btn">
                                                                            <span className="btn-wrap">
                                                                                <span className="text-one">MULTI PAGE <i className="fa-solid fa-plus"></i></span>
                                                                                <span className="text-two">MULTI PAGE <i className="fa-solid fa-plus"></i></span>
                                                                            </span>
                                                                        </a>
                                                                        <a href="index-one-page.html" className="rr-btn">
                                                                            <span className="btn-wrap">
                                                                                <span className="text-one">ONE PAGE <i className="fa-solid fa-plus"></i></span>
                                                                                <span className="text-two">ONE PAGE <i className="fa-solid fa-plus"></i></span>
                                                                            </span>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                                <h4 className="home__menu-title">Eye Care</h4>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="home__menu-item">
                                                                <div className="home__menu-thumb">
                                                                    <img src="src/assets/imgs/menu/menu-home-2.jpg" alt="thumb not found" />
                                                                    <div className="home__menu-buttons">
                                                                        <a href="index-2.html" className="rr-btn">
                                                                            <span className="btn-wrap">
                                                                                <span className="text-one">MULTI PAGE <i className="fa-solid fa-plus"></i></span>
                                                                                <span className="text-two">MULTI PAGE <i className="fa-solid fa-plus"></i></span>
                                                                            </span>
                                                                        </a>
                                                                        <a href="index-2-one-page.html" className="rr-btn">
                                                                            <span className="btn-wrap">
                                                                                <span className="text-one">ONE PAGE <i className="fa-solid fa-plus"></i></span>
                                                                                <span className="text-two">ONE PAGE <i className="fa-solid fa-plus"></i></span>
                                                                            </span>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                                <h4 className="home__menu-title">Dental Care</h4>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="home__menu-item">
                                                                <div className="home__menu-thumb">
                                                                    <img src="src/assets/imgs/menu/menu-home-3.jpg" alt="thumb not found" />
                                                                    <div className="home__menu-buttons">
                                                                        <a href="index-3.html" className="rr-btn">
                                                                            <span className="btn-wrap">
                                                                                <span className="text-one">MULTI PAGE <i className="fa-solid fa-plus"></i></span>
                                                                                <span className="text-two">MULTI PAGE <i className="fa-solid fa-plus"></i></span>
                                                                            </span>
                                                                        </a>
                                                                        <a href="index-3-one-page.html" className="rr-btn">
                                                                            <span className="btn-wrap">
                                                                                <span className="text-one">ONE PAGE <i className="fa-solid fa-plus"></i></span>
                                                                                <span className="text-two">ONE PAGE <i className="fa-solid fa-plus"></i></span>
                                                                            </span>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                                <h4 className="home__menu-title">Medical Care</h4>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="home__menu-item">
                                                                <div className="home__menu-thumb">
                                                                    <img src="src/assets/imgs/menu/menu-home-4.jpg" alt="thumb not found" />
                                                                    <div className="home__menu-buttons">
                                                                        <a href="index-4.html" className="rr-btn">
                                                                            <span className="btn-wrap">
                                                                                <span className="text-one">MULTI PAGE <i className="fa-solid fa-plus"></i></span>
                                                                                <span className="text-two">MULTI PAGE <i className="fa-solid fa-plus"></i></span>
                                                                            </span>
                                                                        </a>
                                                                        <a href="index-4-one-page.html" className="rr-btn">
                                                                            <span className="btn-wrap">
                                                                                <span className="text-one">ONE PAGE <i className="fa-solid fa-plus"></i></span>
                                                                                <span className="text-two">ONE PAGE <i className="fa-solid fa-plus"></i></span>
                                                                            </span>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                                <h4 className="home__menu-title">Psycology & Counseling</h4>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="home__menu-item">
                                                                <div className="home__menu-thumb">
                                                                    <img src="src/assets/imgs/menu/menu-home-5.jpg" alt="thumb not found" />
                                                                    <div className="home__menu-buttons">
                                                                        <a href="index-5.html" className="rr-btn">
                                                                            <span className="btn-wrap">
                                                                                <span className="text-one">MULTI PAGE <i className="fa-solid fa-plus"></i></span>
                                                                                <span className="text-two">MULTI PAGE <i className="fa-solid fa-plus"></i></span>
                                                                            </span>
                                                                        </a>
                                                                        <a href="index-5-one-page.html" className="rr-btn">
                                                                            <span className="btn-wrap">
                                                                                <span className="text-one">ONE PAGE <i className="fa-solid fa-plus"></i></span>
                                                                                <span className="text-two">ONE PAGE <i className="fa-solid fa-plus"></i></span>
                                                                            </span>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                                <h4 className="home__menu-title">Skin Care</h4>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li className="has-dropdown active">
                                                    <a href="javascript:void(0)">Pages</a>
                                                    <ul className="submenu">
                                                        <li className="active"><a href="faq.html">Faq</a></li>
                                                        <li><a href="about-us.html">About us</a></li>
                                                        <li><a href="pricing.html">Pricing</a></li>
                                                        <li><a href="pricing-2.html">Pricing 2</a></li>
                                                        <li><a href="404.html">404 Page</a></li>
                                                        <li><a href="appoinment.html">Appointment</a></li>
                                                    </ul>
                                                </li>
                                                <li className="has-dropdown">
                                                    <a href="service.html">Services</a>
                                                    <ul className="submenu">
                                                        <li><a href="service.html">Service</a></li>
                                                        <li><a href="service-2.html">Service 2</a></li>
                                                        <li><a href="service-details.html">Services Details</a></li>
                                                    </ul>
                                                </li>
                                                <li className="has-dropdown">
                                                    <a href="doctor.html">Doctor</a>
                                                    <ul className="submenu">
                                                        <li><a href="doctor.html">Doctor</a></li>
                                                        <li><a href="doctor-2.html">Doctor 2</a></li>
                                                        <li><a href="doctor-details.html">Doctor Details</a></li>
                                                    </ul>
                                                </li>
                                                <li className="has-dropdown">
                                                    <a href="portfolio.html">Portfolio</a>
                                                    <ul className="submenu">
                                                        <li><a href="portfolio.html">Portfolio</a></li>
                                                        <li><a href="portfolio-2.html">Portfolio 2</a></li>
                                                        <li><a href="portfolio-details.html">Portfolio Details</a></li>
                                                    </ul>
                                                </li>
                                                <li className="has-dropdown">
                                                    <a href="blog.html">Blog</a>
                                                    <ul className="submenu">
                                                        <li><a href="blog.html">Blog</a></li>
                                                        <li><a href="blog-grid.html">Blog Grid</a></li>
                                                        <li><a href="blog-grid-2.html">Blog Grid 2</a></li>
                                                        <li><a href="blog-details.html">Blog Details</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="contact.html">contact</a></li>
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

            {/* <!-- Body main wrapper start --> */}
            <main>
                {/* <!-- Breadcrumb area start  --> */}
                <div className="breadcrumb__area header__background-color breadcrumb__header-up breadcrumb-space overly overflow-hidden">
                    <div className="breadcrumb__background" data-background="./src/assets/imgs/breadcrumb/page-header-1.png"></div>
                    <div className="container">
                        <div className="row align-items-center justify-content-between">
                            <div className="col-12">
                                <div className="breadcrumb__content text-center">
                                    <h2 className="breadcrumb__title mb-15 mb-sm-10 mb-xs-5 color-white title-animation">FAQ</h2>

                                    <div className="breadcrumb__menu">
                                        <nav>
                                            <ul>
                                                <li><span><a href="index.html">Home</a></span></li>
                                                <li className="active"><span>FAQ</span></li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Breadcrumb area start  --> */}

                {/* <!-- faq-page area start  --> */}
                <section className="faq-page section-space">
                    <div className="container">
                        <div className="row" id="accordionExample">
                            <div className="col-lg-6">
                                <div className="rr__faq-2">
                                    <div className="accordion">
                                        <div className="accordion-item">
                                            <h5 className="accordion-header" id="headingOne">
                                                <button className="accordion-button collapse" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                    How Your Path to Ultimate Wellness?
                                                </button>
                                            </h5>
                                            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                                <div className="accordion-body">
                                                    <p>Lorem Ipsum is simply dummy text the printing and typese Lorem Ipsum has been the industry's standard dummy text ever</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="accordion-item">
                                            <h5 className="accordion-header" id="headingTwo">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                                                    Where Your Health Finds a Home?
                                                </button>
                                            </h5>
                                            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                                <div className="accordion-body">
                                                    <p>Lorem Ipsum is simply dummy text the printing and typese Lorem Ipsum has been the industry's standard dummy text ever</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="accordion-item">
                                            <h5 className="accordion-header" id="headingThree">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
                                                    Where Caring Speaks Volumes?
                                                </button>
                                            </h5>
                                            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                                <div className="accordion-body">
                                                    <p>Lorem Ipsum is simply dummy text the printing and typese Lorem Ipsum has been the industry's standard dummy text ever</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="accordion-item">
                                            <h5 className="accordion-header" id="headingFour">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
                                                    What a Healthier Future?
                                                </button>
                                            </h5>
                                            <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                                <div className="accordion-body">
                                                    <p>Lorem Ipsum is simply dummy text the printing and typese Lorem Ipsum has been the industry's standard dummy text ever</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div className="rr__faq-2">
                                    <div className="accordion">
                                        <div className="accordion-item">
                                            <h5 className="accordion-header" id="headingFive">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="true" aria-controls="collapseFive">
                                                    What is medical care?
                                                </button>
                                            </h5>
                                            <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                                                <div className="accordion-body">
                                                    <p>Lorem Ipsum is simply dummy text the printing and typese Lorem Ipsum has been the industry's standard dummy text ever</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="accordion-item">
                                            <h5 className="accordion-header" id="headingSix">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="true" aria-controls="collapseSix">
                                                    What types of medical care are available?
                                                </button>
                                            </h5>
                                            <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
                                                <div className="accordion-body">
                                                    <p>Lorem Ipsum is simply dummy text the printing and typese Lorem Ipsum has been the industry's standard dummy text ever</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="accordion-item">
                                            <h5 className="accordion-header" id="headingSeven">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="true" aria-controls="collapseSeven">
                                                    How can I find a suitable medical provider?
                                                </button>
                                            </h5>
                                            <div id="collapseSeven" className="accordion-collapse collapse" aria-labelledby="headingSeven" data-bs-parent="#accordionExample">
                                                <div className="accordion-body">
                                                    <p>Lorem Ipsum is simply dummy text the printing and typese Lorem Ipsum has been the industry's standard dummy text ever</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="accordion-item">
                                            <h5 className="accordion-header" id="headingEight">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="true" aria-controls="collapseEight">
                                                    How do I prepare for a medical appointment?
                                                </button>
                                            </h5>
                                            <div id="collapseEight" className="accordion-collapse collapse" aria-labelledby="headingEight" data-bs-parent="#accordionExample">
                                                <div className="accordion-body">
                                                    <p>Lorem Ipsum is simply dummy text the printing and typese Lorem Ipsum has been the industry's standard dummy text ever</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="accordion-item">
                                            <h5 className="accordion-header" id="headingNine">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNine" aria-expanded="true" aria-controls="collapseNine">
                                                    How can I manage the cost of medical care?
                                                </button>
                                            </h5>
                                            <div id="collapseNine" className="accordion-collapse collapse" aria-labelledby="headingNine" data-bs-parent="#accordionExample">
                                                <div className="accordion-body">
                                                    <p>Lorem Ipsum is simply dummy text the printing and typese Lorem Ipsum has been the industry's standard dummy text ever</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- faq-page area start  --> */}

                {/* <!-- pricing-appointment area start  --> */}
                <section className="pricing-appointment section-space__bottom">
                    <div className="container">
                        <div className="row align-items-end mb-60 mb-sm-50 mb-xs-40">
                            <div className="col-lg-6">
                                <div className="section__title-wrapper">
                                    <h5 className="section__subtitle color-theme-primary mb-15 mb-xs-10 title-animation"><img src="src/assets/imgs/ask-quesiton/heart.png" alt="icon not found" className="img-fluid" /> Take Appointment</h5>
                                    <h2 className="section__title mb-0 title-animation">Radiant Resilience Your Wellness Your Strength</h2>
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div className="pricing-appointment__content-right mt-md-25 mt-sm-25 mt-xs-25">
                                    <p className="mb-0">Medical science encompasses a vast array of fields dedicated to understanding and treating ailments, promoting health, and enhanci quality of life. Here's a brief exploration into this multifaceted domain medical student company remain</p>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-lg-4">
                                <div className="pricing-appointment__contact-item__wrap d-flex flex-column">
                                    <div className="pricing-appointment__contact-item d-flex align-items-end">
                                        <div className="pricing-appointment__contact-item-icon d-flex align-items-center justify-content-center">
                                            <i className="fa-solid fa-phone"></i>
                                        </div>
                                        <div className="pricing-appointment__contact-item-text">
                                            <p>Requesting A Call:</p>
                                            <h5 className="mb-0"><a href="tel:6295550129">(629) 555-0129</a></h5>
                                        </div>
                                    </div>

                                    <div className="pricing-appointment__contact-item d-flex align-items-end">
                                        <div className="pricing-appointment__contact-item-icon d-flex align-items-center justify-content-center">
                                            <i className="fa-solid fa-clock"></i>
                                        </div>
                                        <div className="pricing-appointment__contact-item-text">
                                            <p>Sunday - Friday:</p>
                                            <h5 className="mb-0">9 am - 8 pm</h5>
                                        </div>
                                    </div>

                                    <div className="pricing-appointment__contact-item d-flex align-items-end">
                                        <div className="pricing-appointment__contact-item-icon d-flex align-items-center justify-content-center">
                                            <i className="fa-solid fa-location-dot"></i>
                                        </div>
                                        <div className="pricing-appointment__contact-item-text">
                                            <p>6391 Elgin St. Celina, Delaware </p>
                                            <h5 className="mb-0"><a href="https://maps.app.goo.gl/1N77c8d8zieLRaot7">Kentucky</a></h5>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-8">
                                <form id="pricing-appointment__form" method="POST" action="./mail.php" className="pricing-appointment__form mt-md-60 mt-sm-60 mt-xs-60">
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <div className="pricing-appointment__form-input">
                                                <input name="name" id="name" type="text" placeholder="Your name" />
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="pricing-appointment__form-input">
                                                <input name="email" id="email" type="text" placeholder="Your email" />
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="pricing-appointment__form-input">
                                                <input name="phone" id="phone" type="text" placeholder="Phone" />
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="pricing-appointment__form-select">
                                                <select name="doctor" id="doctor">
                                                    <option>Choose a Doctor</option>
                                                    <option>Dr. Rana</option>
                                                    <option>Dr. Sabbir</option>
                                                    <option>Dr. Rubel</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-sm-12">
                                            <div className="pricing-appointment__form-input">
                                                <textarea name="textarea" id="textarea" placeholder="Messege"></textarea>
                                            </div>
                                        </div>

                                        <div className="col-12">
                                            <button type="submit" className="rr-btn rr-btn__primary-color mt-0">
                                                <span className="btn-wrap">
                                                    <span className="text-one">Send Now</span>
                                                    <span className="text-two">Send Now</span>
                                                </span>
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- pricing-appointment area start  --> */}

            </main>
            {/* <!-- Body main wrapper end --> */}

            <section className="footer__cta footer__cta-bottom-up">
                <div className="container">
                    <div className="row mb-minus-30">
                        <div className="col-md-6">
                            <div className="footer__cta-item mb-30 theme-bg-primary d-flex flex-lg-row flex-column align-items-lg-center">
                                <div className="footer__cta-item-icon d-flex align-items-center justify-content-center">
                                    <img className="img-fluid" src="src/assets/imgs/footer__cta/footer__cta-item-1.png" alt="icon not found" />
                                </div>

                                <div className="footer__cta-item-text">
                                    <h4 className="color-white mb-15 mb-10">Expert Eye Care</h4>
                                    <p className="color-white mb-0">Et purus duis sollicitudin dignissim habitant. Egestas nulla quis venenatis cras sed eu massa eu faucibus</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="footer__cta-item mb-30 theme-bg-glow d-flex flex-lg-row flex-column align-items-lg-center">
                                <div className="footer__cta-item-icon d-flex align-items-center justify-content-center">
                                    <img className="img-fluid" src="src/assets/imgs/footer__cta/footer__cta-item-2.png" alt="icon not found" />
                                </div>

                                <div className="footer__cta-item-text">
                                    <h4 className="color-white mb-15 mb-10">Eye Health Provider</h4>
                                    <p className="color-white mb-0">Et purus duis sollicitudin dignissim habitant. Egestas nulla quis venenatis cras sed eu massa eu faucibus</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </>
    );
};

export default FaqPage;