import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer>
      <section
        className="footer__area-common white-bg overflow-hidden"
        data-background="/assets/img/footer/background.png"
      >
        <div className="container">
          <div
            style={{ justifyContent: "space-around" }}
            className="row mb-minus-50"
          >
            <div className="col-lg-3 col-6">
              <div className="footer__widget footer__widget-item-1">
                <div className="footer__logo mb-30 mb-xs-25">
                  <a href="/">
                    <img
                      className="img-fluid"
                      src="/assets/imgs/logo/jude-logo.svg"
                      alt="logo not found"
                    />
                  </a>
                </div>

                <div className="footer__content">
                  <p className="mb-0">
                    JudeBillingSolutions: Effortless billing, exceptional result
                  </p>
                </div>

                <div className="footer__social mt-30 mt-xs-30">
                  <a href="https://www.instagram.com/">
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                  <a href="https://www.facebook.com/">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="https://twitter.com/">
                    <svg
                      width="17"
                      height="16"
                      viewBox="0 0 17 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.0596 6.77295L15.8879 -0.00195312H14.5068L9.44607 5.8806L5.40411 -0.00195312H0.742188L6.85442 8.89352L0.742188 15.998H2.12338L7.4676 9.78587L11.7362 15.998H16.3981L10.0593 6.77295H10.0596ZM8.16787 8.97189L7.54857 8.0861L2.62104 1.03779H4.74248L8.71905 6.726L9.33834 7.61179L14.5074 15.0056H12.386L8.16787 8.97223V8.97189Z"
                        fill="#071C3C"
                      />
                    </svg>
                  </a>
                  <a href="https://www.linkedin.com/">
                    <i className="fa-brands fa-linkedin-in"></i>
                  </a>
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
                    <li>
                      <a href="/about">Charge entry</a>
                    </li>
                    <li>
                      <a href="/about">Cash Posting</a>
                    </li>
                    <li>
                      <a href="/about">Coding</a>
                    </li>
                    <li>
                      <a href="/about">Account Receivables</a>
                    </li>{" "}
                    <li>
                      <a href="/about">Insurance Verification</a>
                    </li>
                  </ul>
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
                    <li>
                      <a href="mailto:team@judebillingsolutions.com">
                        <i className="fa-solid fa-envelope"></i>{" "}
                        team@judebillingsolutions.com
                      </a>
                    </li>
                    <li>
                      <a >
                        <i className="fa-solid fa-location-dot"></i>
                        Chennai - India office <br />
                        No. 1/116 Kanagarosi Street, <br />
                        Kavarapalayam , Avadi <br />
                        Chennai - 600054 <br />
                        India, Tamil Nadu
                      </a>
                    </li>
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
                    <p className="mb-0">
                      © <a href="/">judebillingsolutions.com</a> | All Rights
                      Reserved
                    </p>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="footer__copyright-menu">
                    <ul>
                      <li>
                        <Link to="/terms">Terms & Condition</Link>
                      </li>
                      <li>
                      <Link to="/privacy-policy">Privacy Policy</Link>

                      
                      </li>
                      <li>
                      <Link to="/contact">Contact Us</Link>

                      </li>
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
};

export default Footer;
