import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer>
            <section className="footer__area-common white-bg overflow-hidden" data-background="/src/assets/imgs/footer/background.png">
                <div className="container">
                    <div className="row mb-minus-50">
                        <div className="col-lg-3 col-6">
                            <div className="footer__widget footer__widget-item-1">
                                <div className="footer__logo mb-30 mb-xs-25">
                                    <a href="index.html">
                                        <img className="img-fluid" src="/src/assets/imgs/logo/footer-logo.svg" alt="logo not found" />
                                    </a>
                                </div>

                                <div className="footer__content">
                                    <p className="mb-0">It is a long established fact that a reader will be distracted</p>
                                </div>

                                <div className="footer__social mt-30 mt-xs-30">
                                    <a href="https://www.instagram.com/"><i className="fa-brands fa-instagram"></i></a>
                                    <a href="https://www.facebook.com/"><i className="fab fa-facebook-f"></i></a>
                                    <a href="https://twitter.com/">
                                        <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10.0596 6.77295L15.8879 -0.00195312H14.5068L9.44607 5.8806L5.40411 -0.00195312H0.742188L6.85442 8.89352L0.742188 15.998H2.12338L7.4676 9.78587L11.7362 15.998H16.3981L10.0593 6.77295H10.0596ZM8.16787 8.97189L7.54857 8.0861L2.62104 1.03779H4.74248L8.71905 6.726L9.33834 7.61179L14.5074 15.0056H12.386L8.16787 8.97223V8.97189Z" fill="#071C3C" />
                                        </svg>
                                    </a>
                                    <a href="https://www.linkedin.com/"><i className="fa-brands fa-linkedin-in"></i></a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-2 col-6">
                            <div className="footer__widget footer__widget-item-2">
                                <div className="footer__widget-title">
                                    <h4>Services</h4>
                                </div>
                                <div className="footer__link">
                                    <ul>
                                        <li><a href="about-us.html">Reliable Rentals</a></li>
                                        <li><a href="about-us.html">Golden Key Properties</a></li>
                                        <li><a href="about-us.html">Swift Home Sales</a></li>
                                        <li><a href="about-us.html">Elite Realty Services</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-6">
                            <div className="footer__widget footer__widget-item-3">
                                <div className="footer__widget-title">
                                    <h4>Our newsletter</h4>
                                </div>

                                <div className="footer__subscribe-content">
                                    <p className="mb-30 mb-xs-25">Custom Software Development Tailored Solutions for Your Business Custom </p>

                                    <div className="footer__subscribe d-flex mt-30 mt-xs-25">
                                        <input type="text" placeholder="Enter e-mail" />
                                        <button type="submit" className="rr-btn rr-btn__theme">
                                            <span className="btn-wrap">
                                                <span className="text-one"><i className="fa-solid fa-paper-plane"></i></span>

                                                <span className="text-two"><i className="fa-solid fa-paper-plane"></i></span>
                                            </span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-6">
                            <div className="footer__widget footer__widget-item-4">
                                <div className="footer__widget-title">
                                    <h4>Our Office</h4>
                                </div>

                                <div className="footer__link footer__link-location">
                                    <ul>
                                        <li><a href="mailto:debra.holt@example.com"><i className="fa-solid fa-envelope"></i> debra.holt@example.com</a></li>
                                        <li><a href="https://maps.app.goo.gl/4XYAPDmpesGnSbsC8"><i className="fa-solid fa-location-dot"></i> 3891 Ranchview Dr. Richardson, California 62639</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer__bottom-wrapper">
                    <div className="container">
                        <div className="footer__bottom">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="footer__copyright text-lg-start text-center">
                                        <p className="mb-0">© <a href="index.html">Medilix</a>  2024 | All Rights Reserved</p>
                                    </div>
                                </div>

                                <div className="col-lg-6">
                                    <div className="footer__copyright-menu">
                                        <ul>
                                            <li><a href="about-us.html">Trams & Condition</a></li>
                                            <li><a href="about-us.html">Privacy Policy</a></li>
                                            <li><a href="contact.html">Contact Us</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </footer>
    );
}

export default Footer;