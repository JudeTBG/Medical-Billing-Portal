import React,{ ReactNode } from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";

interface Props {
	children: ReactNode;
}
const MainLayout: React.FC<Props> = ({ children }) => {

    return (
        <main className="main-layout">
            <div id="preloader">
                <div className="preloader-close">x</div>
                <div className="sk-three-bounce">
                    <div className="sk-child sk-bounce1"></div>
                    <div className="sk-child sk-bounce2"></div>
                    <div className="sk-child sk-bounce3"></div>
                </div>
            </div>
            <div className="loading-form">
                <div className="sk-three-bounce">
                    <div className="sk-child sk-bounce1"></div>
                    <div className="sk-child sk-bounce2"></div>
                    <div className="sk-child sk-bounce3"></div>
                </div>
            </div>
            <div id="scroll-percentage">
                <span id="scroll-percentage-value" data-default-color="var(--rr-color-900)" data-scroll-color="var(--rr-theme-primary)"></span>
            </div>
            {/* Backtotop end --> */}

            {/* <!-- Offcanvas area start --> */}
            <div className="fix">
                <div className="offcanvas__area">
                    <div className="offcanvas__wrapper">
                        <div className="offcanvas__content">
                            <div className="offcanvas__top d-flex justify-content-between align-items-center">
                                <div className="offcanvas__logo">
                                    <a href="index.html">
                                        <img src="/src/assets/imgs/logo/logo-white.svg" alt="logo not found"/>
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
            <Header />
            <section >{children}</section>
            <Footer />

        </main>
    );
};
export default MainLayout;