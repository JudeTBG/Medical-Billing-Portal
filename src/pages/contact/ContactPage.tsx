import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const ContactPage: React.FC = () => {
  return (
    <>
      <Navbar />
      {/* <!-- Body main wrapper start --> */}
      <main>
        {/* <!-- Breadcrumb area start  --> */}
        <div className="breadcrumb__area header__background-color breadcrumb__header-up breadcrumb-space overly overflow-hidden">
          <div
            className="breadcrumb__background"
            data-background="/assets/imgs/breadcrumb/page-header-1.png"
          ></div>
          <div className="container">
            <div className="row align-items-center justify-content-between">
              <div className="col-12">
                <div className="breadcrumb__content text-center">
                  <h2 className="breadcrumb__title mb-15 mb-sm-10 mb-xs-5 color-white title-animation">
                    Contact
                  </h2>

                  <div className="breadcrumb__menu">
                    <nav>
                      <ul>
                        <li>
                          <span>
                            <a href="/">Home</a>
                          </span>
                        </li>
                        <li className="active">
                          <span>Contact</span>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Breadcrumb area start  --> */}

        {/* <!-- pricing-appointment area start  --> */}
        <section className="pricing-appointment section-space">
          <div className="container">
            <div className="row align-items-end mb-60 mb-sm-50 mb-xs-40">
              <div className="col-lg-6">
                <div className="section__title-wrapper">
                  <h5 className="section__subtitle color-theme-primary mb-15 mb-xs-10 title-animation">
                    <img
                      src="/assets/imgs/ask-quesiton/heart.png"
                      alt="icon not found"
                      className="img-fluid"
                    />{" "}
                    Get in Touch
                  </h5>
                  <h2 className="section__title mb-0 title-animation">
                    Your Billing Services starts here - Take the first step
                  </h2>
                </div>
              </div>

              {/* <div className="col-lg-6">
                <div className="pricing-appointment__content-right mt-md-25 mt-sm-25 mt-xs-25">
                  <p className="mb-0">
                    Medical science encompasses a vast array of fields dedicated
                    to understanding and treating ailments, promoting health,
                    and enhanci quality of life. Here's a brief exploration into
                    this multifaceted domain medical student company remain
                  </p>
                </div>
              </div> */}
            </div>

            <div className="row">
              <div className="col-lg-4">
                <div className="pricing-appointment__contact-item__wrap d-flex flex-column">
                  <div className="pricing-appointment__contact-item d-flex align-items-end">
                    <div className="pricing-appointment__contact-item-icon d-flex align-items-center justify-content-center">
                      <i className="fa-solid fa-phone"></i>
                    </div>
                    <div className="pricing-appointment__contact-item-text">
                      <p>Reach Us Here:</p>
                      <h5 className="mb-0">
                        <a href="tel:8316071006">831-607-1006</a>
                      </h5>
                    </div>
                  </div>

                  <div className="pricing-appointment__contact-item d-flex align-items-end">
                    <div className="pricing-appointment__contact-item-icon d-flex align-items-center justify-content-center">
                      <i className="fa-solid fa-clock"></i>
                    </div>
                    <div className="pricing-appointment__contact-item-text">
                      <p>Email Us:</p>
                      <h5 className="mb-0">
                        <a href="mailto:team@judebillingsolutions.com">
                          team@judebillingsolutions.com
                        </a>
                      </h5>
                    </div>
                  </div>

                  <div className="pricing-appointment__contact-item d-flex align-items-end">
                    <div className="pricing-appointment__contact-item-icon d-flex align-items-center justify-content-center">
                    <i className="fa-brands fa-whatsapp"></i>
                    </div>
                    <div className="pricing-appointment__contact-item-text">
                      <p>Whatsapp number</p>
                      <h5 className="mb-0">
                        <a>+91 - (0) 9884201673</a>
                      </h5>
                    </div>
                  </div>
                </div>
              </div>

              {/* <div className="col-lg-8">
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
                            </div> */}
            </div>
          </div>
        </section>
        {/* <!-- pricing-appointment area start  --> */}
      </main>
      {/* <!-- Body main wrapper end --> */}

      {/* <div className="contact__map contact__map-footer_up">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14600.157880481716!2d90.35107202273903!3d23.81719545680701!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c12c1b289e39%3A0x8d3bdfb80d3ebe88!2sRd%20No.%204%2C%20Dhaka%201216!5e0!3m2!1sen!2sbd!4v1701837409513!5m2!1sen!2sbd"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div> */}
{/* 
      <section className="footer__cta footer__cta-bottom-up">
        <div className="container">
          <div className="row mb-minus-30">
            <div className="col-md-6">
              <div className="footer__cta-item mb-30 theme-bg-primary d-flex flex-lg-row flex-column align-items-lg-center">
                <div className="footer__cta-item-icon d-flex align-items-center justify-content-center">
                  <img
                    className="img-fluid"
                    src="/assets/imgs/footer__cta/footer__cta-item-1.png"
                    alt="icon not found"
                  />
                </div>

                <div className="footer__cta-item-text">
                  <h4 className="color-white mb-15 mb-10">Expert Eye Care</h4>
                  <p className="color-white mb-0">
                    Et purus duis sollicitudin dignissim habitant. Egestas nulla
                    quis venenatis cras sed eu massa eu faucibus
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="footer__cta-item mb-30 theme-bg-glow d-flex flex-lg-row flex-column align-items-lg-center">
                <div className="footer__cta-item-icon d-flex align-items-center justify-content-center">
                  <img
                    className="img-fluid"
                    src="/assets/imgs/footer__cta/footer__cta-item-2.png"
                    alt="icon not found"
                  />
                </div>

                <div className="footer__cta-item-text">
                  <h4 className="color-white mb-15 mb-10">
                    Eye Health Provider
                  </h4>
                  <p className="color-white mb-0">
                    Et purus duis sollicitudin dignissim habitant. Egestas nulla
                    quis venenatis cras sed eu massa eu faucibus
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <Footer />
    </>
  );
};

export default ContactPage;
