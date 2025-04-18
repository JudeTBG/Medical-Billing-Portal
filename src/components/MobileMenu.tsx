import React from 'react';

const MobileMenu: React.FC = () => {
    return (
        <>
            <div className="fix">
                <div className="offcanvas__area">
                    <div className="offcanvas__wrapper">
                        <div className="offcanvas__content">
                            <div className="offcanvas__top d-flex justify-content-between align-items-center">
                                <div className="offcanvas__logo">
                                    <a href="index.html">
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
                        </div>
                    </div>
                </div>
            </div>
            <div className="offcanvas__overlay"></div>
            <div className="offcanvas__overlay-white"></div>
        </>
    );
};

export default MobileMenu;