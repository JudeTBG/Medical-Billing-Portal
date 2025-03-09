import React from "react";
import Navbar from "../../components/Navbar";

const FaqPage: React.FC = () => {
    return (
        <>
            <Navbar />

            {/* <!-- Body main wrapper start --> */}
            <main>
                {/* <!-- Breadcrumb area start  --> */}
                <div className="breadcrumb__area header__background-color breadcrumb__header-up breadcrumb-space overly overflow-hidden">
                    <div className="breadcrumb__background" data-background=".//assets/imgs/breadcrumb/page-header-1.png"></div>
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
                                    <h5 className="section__subtitle color-theme-primary mb-15 mb-xs-10 title-animation"><img src="/assets/imgs/ask-quesiton/heart.png" alt="icon not found" className="img-fluid" /> Take Appointment</h5>
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
                                    <img className="img-fluid" src="/assets/imgs/footer__cta/footer__cta-item-1.png" alt="icon not found" />
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
                                    <img className="img-fluid" src="/assets/imgs/footer__cta/footer__cta-item-2.png" alt="icon not found" />
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