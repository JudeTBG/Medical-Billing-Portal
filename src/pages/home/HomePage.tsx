import React from 'react'
import MainLayout from '../../layouts/MainLayout'

const HomePage: React.FC = () => {
    return (
        <MainLayout>
            <main className="body-background">
                <section className="banner banner__space overflow-hidden">
                    <div className="container">
                        <div className="banner__shape">
                            <img src="/assets/imgs/banner/banner-shape.png" alt="image not found" />
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <div className="banner__content text-center">
                                    <h1 className="mb-25 mb-xs-20 title-animation">Meet Your Compassion In Eye Care With Us</h1>
                                    <a href="/about" className="rr-btn">
                                        <div className="panel wow"></div>
                                        <span className="btn-wrap">
                                            <span className="text-one">Read More <i className="fa-solid fa-plus"></i></span>
                                            <span className="text-two">Read More <i className="fa-solid fa-plus"></i></span>
                                        </span>
                                    </a>
                                    <div className="banner__media mt-45 mt-xs-35 position-relative">
                                        <div className="panel wow"></div>
                                        <img className="img-fluid" data-parallax='{"scale": 1.2, "smoothness": 15}' src="/assets/imgs/banner/banner.jpg" alt="images not found" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="service service__space">
                    <div className="container">
                        <div className="row mb-minus-30">
                            <div className="col-xl-3 col-lg-4 col-md-6">
                                <div className="service__item mb-30">
                                    <div className="service__item-icon mb-20 mb-xs-15">
                                        <img src="/assets/imgs/service/service__item-1.png" alt="icon not found" />
                                    </div>

                                    {/* <h4 className="mb-25 mb-xs-20"><a href="/faq">Harbor Health</a></h4> */}

                                    <p className="mb-40 mb-xs-30">Et purus duis sollicitudin sed dign issim habi tant. Egestas nulla quis venenatis Et purus </p>

                                    {/* <a className="rr-a-btn" href="/faq">Read More <i className="fa-solid fa-circle-plus"></i></a> */}
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6">
                                <div className="service__item mb-30">
                                    <div className="service__item-icon mb-20 mb-xs-15">
                                        <img src="/assets/imgs/service/service__item-2.png" alt="icon not found" />
                                    </div>

                                    {/* <h4 className="mb-25 mb-xs-20"><a href="/faq">Radius Wellness</a></h4> */}

                                    <p className="mb-40 mb-xs-30">Et purus duis sollicitudin sed dign issim habi tant. Egestas nulla quis venenatis Et purus </p>

                                    <a className="rr-a-btn" href="/faq">Read More <i className="fa-solid fa-circle-plus"></i></a>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6">
                                <div className="service__item mb-30">
                                    <div className="service__item-icon mb-20 mb-xs-15">
                                        <img src="/assets/imgs/service/service__item-3.png" alt="icon not found" />
                                    </div>

                                    {/* <h4 className="mb-25 mb-xs-20"><a href="/faq">Radius Wellness</a></h4> */}

                                    <p className="mb-40 mb-xs-30">Et purus duis sollicitudin sed dign issim habi tant. Egestas nulla quis venenatis Et purus </p>

                                    {/* <a className="rr-a-btn" href="/faq">Read More <i className="fa-solid fa-circle-plus"></i></a> */}
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6">
                                <div className="service__item mb-30">
                                    <div className="service__item-icon mb-20 mb-xs-15">
                                        <img src="/assets/imgs/service/service__item-4.png" alt="icon not found" />
                                    </div>

                                    {/* <h4 className="mb-25 mb-xs-20"><a href="/faq">Net Healthcare</a></h4> */}

                                    <p className="mb-40 mb-xs-30">Et purus duis sollicitudin sed dign issim habi tant. Egestas nulla quis venenatis Et purus </p>

                                    <a className="rr-a-btn" href="/faq">Read More <i className="fa-solid fa-circle-plus"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="about-us section-space overflow-hidden">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-xl-6">
                                <div className="section__title-wrapper about-us__content">
                                    <h5 className="section__subtitle color-theme-primary mb-15 mb-xs-10 title-animation"><img src="/assets/imgs/ask-quesiton/heart.png" alt="icon not found" className="img-fluid" /> About us</h5>
                                    <h2 className="section__title mb-30 mb-xs-20 title-animation">Nurture Nature Blossoming in Health and Happiness</h2>

                                    <p className="mb-30 mb-xs-25">Et purus duis sollicitudin dignissim habitant. Egestas nulla quis venenatis cras sed eu massa eu faucibus Urna fusce Et purus duis sollicitudin dignissim habitant.</p>

                                    <div className="skill-one__progress">
                                        <div className="skill-one__progress-single">
                                            <h5 className="skill-one__progress-title mb-10">Last mile delivery</h5>
                                            <div className="bar">
                                                <div className="bar-inner count-bar counted" data-percent="90%">
                                                    <div className="count-text">90%</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="skill-one__progress-single">
                                            <h5 className="skill-one__progress-title mb-10">Cross docking </h5>
                                            <div className="bar">
                                                <div className="bar-inner count-bar counted" data-percent="76%">
                                                    <div className="count-text">76%</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="skill-one__progress-single">
                                            <h5 className="skill-one__progress-title mb-10">Inventory management </h5>
                                            <div className="bar">
                                                <div className="bar-inner count-bar counted" data-percent="76%">
                                                    <div className="count-text">80%</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="col-xl-6">
                                <div className="about-us__media d-flex flex-column flex-sm-row align-items-sm-start align-items-center justify-content-xl-end justify-content-center">
                                    <img className="img-fluid about-us__media-big-shape" src="/assets/imgs/about-us/shape-big.png" alt="icon not found" />

                                    <div className="about-us__media-experience-box__wrapper text-end">
                                        <div className="about-us__media-img img1">
                                            <img className="img-fluid shape downUp" src="/assets/imgs/about-us/shape-2.png" alt="icon not found" />
                                            <img className="img-fluid" src="/assets/imgs/about-us/about-us__media-1.jpg" alt="icon not found" />
                                        </div>
                                        <div className="about-us__media-experience-box d-inline-flex mt-20 text-start">
                                            <h2 className="mb-0"><span className="odometer" data-count="25">0</span></h2>
                                            <p className="mb-0">Years Of experience</p>
                                        </div>
                                    </div>
                                    <div className="about-us__media-img img2">
                                        <img className="img-fluid shape upDown" src="/assets/imgs/about-us/shape-1.png" alt="icon not found" />
                                        <img className="img-fluid" src="/assets/imgs/about-us/about-us__media-2.jpg" alt="icon not found" />

                                    </div>
                                </div>
                            </div>
                        </div>



                        <section className="treatment-process section-space__bottom">
                            <div className="container">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="section__title-wrapper treatment-process__content text-center mb-60 mb-xs-40">
                                            <h2 className="section__title mb-20 mb-xs-15 title-animation">Our Treatment Process</h2>
                                            <p className="mb-0">Medical science encompasses a vast array of fields dedicated to understanding and treating ailments, promoting health, and enhanci quality of life. Here's a brief exploration into this multifaceted</p>
                                        </div>

                                        <div className="treatment-process__media mb-30">
                                            <img className="img-fluid" data-parallax='{"scale": 1.2, "smoothness": 15}' src="/assets/imgs/treatment-process/treatment-process.jpg" alt="image not found" />

                                            <a href="https://www.youtube.com/watch?v=dyNpojnbNT4" className="popup-video zooming" data-effect="mfp-move-from-top vertical-middle">
                                                <i className="fa-thin fa-play"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                <div className="row mb-minus-30">
                                    <div className="col-xxl-3 col-lg-4 col-md-6">
                                        <div className="treatment-process__item mb-30 text-center">
                                            <div className="treatment-process__item-icon mb-20 mb-xs-15">
                                                <img src="/assets/imgs/treatment-process/treatment-process__item-1.png" alt="icon not found" />
                                            </div>
                                            <h4 className="mb-15 mb-xs-10"><a href="/faq">Catalyst Services</a></h4>
                                            <p className="mb-0">Et purus duis sollicitudin sed dign issim habi tant.</p>
                                        </div>
                                    </div>
                                    <div className="col-xxl-3 col-lg-4 col-md-6">
                                        <div className="treatment-process__item mb-30 text-center">
                                            <div className="treatment-process__item-icon mb-20 mb-xs-15">
                                                <img src="/assets/imgs/treatment-process/treatment-process__item-2.png" alt="icon not found" />
                                            </div>
                                            {/* <h4 className="mb-15 mb-xs-10"><a href="/faq">Wave Solutions</a></h4> */}
                                            <p className="mb-0">Et purus duis sollicitudin sed dign issim habi tant.</p>
                                        </div>
                                    </div>
                                    <div className="col-xxl-3 col-lg-4 col-md-6">
                                        <div className="treatment-process__item mb-30 text-center">
                                            <div className="treatment-process__item-icon mb-20 mb-xs-15">
                                                <img src="/assets/imgs/treatment-process/treatment-process__item-3.png" alt="icon not found" />
                                            </div>
                                            {/* <h4 className="mb-15 mb-xs-10"><a href="/faq">Health Hub</a></h4> */}
                                            <p className="mb-0">Et purus duis sollicitudin sed dign issim habi tant.</p>
                                        </div>
                                    </div>
                                    <div className="col-xxl-3 col-lg-4 col-md-6">
                                        <div className="treatment-process__item mb-30 text-center">
                                            <div className="treatment-process__item-icon mb-20 mb-xs-15">
                                                <img src="/assets/imgs/treatment-process/treatment-process__item-4.png" alt="icon not found" />
                                            </div>
                                            {/* <h4 className="mb-15 mb-xs-10"><a href="/faq">Weave Solutions</a></h4> */}
                                            <p className="mb-0">Et purus duis sollicitudin sed dign issim habi tant.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section className="pricing section-space__bottom">
                            <div className="container">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="section__title-wrapper text-center mb-60 mb-xs-40">
                                            <h2 className="section__title mb-0 title-animation">Cost Breakdown Summary</h2>
                                        </div>
                                    </div>
                                </div>

                                <div className="row mb-minus-30">
                                    <div className="col-xl-4 col-md-6">
                                        <div className="pricing__item mb-30">
                                            <h3 className="mb-15 mb-xs-10">Consult</h3>

                                            <h2 className="pricing__item-price mb-25 mb-xs-20">$19 <span className="body-font">/month</span></h2>

                                            <p className="mb-20 pb-20 pricing__item__border-bottom">Lorem Ipsum is simply dummy text the printing and typese Lorem Ipsum</p>

                                            <div className="pricing__item-body">
                                                <ul>
                                                    <li><i className="fa-solid fa-angle-right"></i> Mistakes To Avoid</li>
                                                    <li><i className="fa-solid fa-angle-right"></i> Your Startup</li>
                                                    <li><i className="fa-solid fa-angle-right"></i> Knew About Fonts</li>
                                                    <li><i className="fa-solid fa-angle-right"></i> Knew About Fonts</li>
                                                </ul>
                                            </div>

                                            <a href="#" className="rr-btn mt-40 mt-xs-30">
                                                <span className="btn-wrap">
                                                    <span className="text-one">Start now <i className="fa-solid fa-circle-plus"></i></span>
                                                    <span className="text-two">Start now <i className="fa-solid fa-circle-plus"></i></span>
                                                </span>
                                            </a>
                                        </div>
                                    </div>

                                    <div className="col-xl-4 col-md-6">
                                        <div className="pricing__item active mb-30">
                                            <h3 className="mb-15 mb-xs-10">Intensive</h3>

                                            <h2 className="pricing__item-price mb-25 mb-xs-20">$40 <span className="body-font">/month</span></h2>

                                            <p className="mb-20 pb-20 pricing__item__border-bottom">Lorem Ipsum is simply dummy text the printing and typese Lorem Ipsum</p>

                                            <div className="pricing__item-body">
                                                <ul>
                                                    <li><i className="fa-solid fa-angle-right"></i> Mistakes To Avoid</li>
                                                    <li><i className="fa-solid fa-angle-right"></i> Your Startup</li>
                                                    <li><i className="fa-solid fa-angle-right"></i> Knew About Fonts</li>
                                                    <li><i className="fa-solid fa-angle-right"></i> Knew About Fonts</li>
                                                </ul>
                                            </div>

                                            <a href="#" className="rr-btn mt-40 mt-xs-30">
                                                <span className="btn-wrap">
                                                    <span className="text-one">Start now <i className="fa-solid fa-circle-plus"></i></span>
                                                    <span className="text-two">Start now <i className="fa-solid fa-circle-plus"></i></span>
                                                </span>
                                            </a>
                                        </div>
                                    </div>

                                    <div className="col-xl-4 col-md-6">
                                        <div className="pricing__item mb-30">
                                            <h3 className="mb-15 mb-xs-10">Private</h3>

                                            <h2 className="pricing__item-price mb-25 mb-xs-20">$99 <span className="body-font">/month</span></h2>

                                            <p className="mb-20 pb-20 pricing__item__border-bottom">Lorem Ipsum is simply dummy text the printing and typese Lorem Ipsum</p>

                                            <div className="pricing__item-body">
                                                <ul>
                                                    <li><i className="fa-solid fa-angle-right"></i> Mistakes To Avoid</li>
                                                    <li><i className="fa-solid fa-angle-right"></i> Your Startup</li>
                                                    <li><i className="fa-solid fa-angle-right"></i> Knew About Fonts</li>
                                                    <li><i className="fa-solid fa-angle-right"></i> Knew About Fonts</li>
                                                </ul>
                                            </div>

                                            <a href="#" className="rr-btn mt-40 mt-xs-30">
                                                <span className="btn-wrap">
                                                    <span className="text-one">Start now <i className="fa-solid fa-circle-plus"></i></span>
                                                    <span className="text-two">Start now <i className="fa-solid fa-circle-plus"></i></span>
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section className="testimonial section-space__bottom">
                            <div className="container">
                                <div className="row align-items-center">
                                    <div className="col-xl-6">
                                        <div className="testimonial__media">
                                            <img className="img-fluid" src="/assets/imgs/testimonial/testimonial.png" alt="image not found" />
                                        </div>
                                    </div>
                                    <div className="col-xl-6">
                                        <div className="swiper testimonial__slider mt-lg-40 mt-md-40 mt-sm-40 mt-xs-40">
                                            <div className="swiper-wrapper">
                                                <div className="swiper-slide">
                                                    <div className="testimonial__item">
                                                        <div className="testimonial__item-icon mb-20 mb-xs-15">
                                                            <img className="img-fluid" src="/assets/imgs/testimonial/qoute.png" alt="icon not found" />
                                                        </div>

                                                        <div className="testimonial__item-content mb-35 mb-xs-30">
                                                            <p className="mb-0">Leverage agile frameworks to provide a robust synopsis for strategy foster Leverage agile frame works to provide a robust synopsis for strateg foster collaborative thinking to further</p>
                                                        </div>

                                                        <div className="testimonial__item-author d-flex align-items-center">
                                                            <div className="testimonial__item-thumb">
                                                                <img className="img-fluid" src="/assets/imgs/testimonial/thumb.png" alt="icon not found" />
                                                            </div>
                                                            <div className="testimonial__item-text">
                                                                <h4>Eleanor Pena</h4>
                                                                <p className="mb-0">Fuel Company</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="swiper-slide">
                                                    <div className="testimonial__item">
                                                        <div className="testimonial__item-icon mb-20 mb-xs-15">
                                                            <img className="img-fluid" src="/assets/imgs/testimonial/qoute.png" alt="icon not found" />
                                                        </div>

                                                        <div className="testimonial__item-content mb-35 mb-xs-30">
                                                            <p className="mb-0">Leverage agile frameworks to provide a robust synopsis for strategy foster Leverage agile frame works to provide a robust synopsis for strateg foster collaborative thinking to further</p>
                                                        </div>

                                                        <div className="testimonial__item-author d-flex align-items-center">
                                                            <div className="testimonial__item-thumb">
                                                                <img className="img-fluid" src="/assets/imgs/testimonial/thumb.png" alt="icon not found" />
                                                            </div>
                                                            <div className="testimonial__item-text">
                                                                <h4>Eleanor Pena</h4>
                                                                <p className="mb-0">Fuel Company</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="testimonial__slider__arrow d-flex">
                                                <div className="testimonial__slider__arrow-prev">
                                                    <svg width="51" height="16" viewBox="0 0 51 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M0.292893 7.29289C-0.0976311 7.68342 -0.0976311 8.31658 0.292893 8.70711L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41421 8L8.07107 2.34315C8.46159 1.95262 8.46159 1.31946 8.07107 0.928932C7.68054 0.538408 7.04738 0.538408 6.65685 0.928932L0.292893 7.29289ZM1 9H51V7H1V9Z" fill="#071C3C" />
                                                    </svg>
                                                </div>

                                                <div className="testimonial__slider__arrow-next">
                                                    <svg width="51" height="16" viewBox="0 0 51 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M50.7071 7.29289C51.0976 7.68342 51.0976 8.31658 50.7071 8.70711L44.3431 15.0711C43.9526 15.4616 43.3195 15.4616 42.9289 15.0711C42.5384 14.6805 42.5384 14.0474 42.9289 13.6569L48.5858 8L42.9289 2.34315C42.5384 1.95262 42.5384 1.31946 42.9289 0.928932C43.3195 0.538408 43.9526 0.538408 44.3431 0.928932L50.7071 7.29289ZM50 9H2.98023e-08V7H50V9Z" fill="#071C3C" />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section className="ask-question section-space__top">
                            <div className="container">
                                <div className="row align-items-center">
                                    <div className="col-lg-6">
                                        <div className="section__title-wrapper ask-question__content mb-40 mb-xs-30">
                                            <h5 className="section__subtitle color-theme-primary mb-15 mb-xs-10 title-animation"><img src="/assets/imgs/ask-quesiton/heart.png" alt="icon not found" className="img-fluid" /> Ask Question</h5>
                                            <h2 className="section__title mb-0 title-animation">Healing Harmony Uniting Care and Compassion</h2>
                                        </div>

                                        {/* <div className="rr__faq">
                                            <div className="accordion" id="accordionExample">
                                                <div className="accordion-item">
                                                    <h5 className="accordion-header" id="headingOne">
                                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                            How Your Path to Ultimate Wellness?
                                                        </button>
                                                    </h5>
                                                    <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                                        <div className="accordion-body">
                                                            <p>Lorem Ipsum is simply dummy text the printing and typese Lorem Ipsum has been the industry's standard dummy text ever</p>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="accordion-item">
                                                    <h5 className="accordion-header" id="headingTwo">
                                                        <button className="accordion-button collapse" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                                                            Where Your Health Finds a Home?
                                                        </button>
                                                    </h5>
                                                    <div id="collapseTwo" className="accordion-collapse collapse show" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                                        <div className="accordion-body">
                                                            <p>Lorem Ipsum is simply dummy text the printing and typese Lorem Ipsum has been the industry's standard dummy text ever</p>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="accordion-item">
                                                    <h5 className="accordion-header" id="headingThree">
                                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
                                                            Where Your Health Finds a Home?
                                                        </button>
                                                    </h5>
                                                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                                        <div className="accordion-body">
                                                            <p>Lorem Ipsum is simply dummy text the printing and typese Lorem Ipsum has been the industry's standard dummy text ever</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div> */}
                                    </div>

                                    <div className="col-lg-6">
                                        <div className="ask-question__media text-lg-end text-center mt-xs-40 mt-sm-40 mt-md-40 position-relative overflow-hidden">
                                            <img className="img-fluid" src="/assets/imgs/ask-quesiton/ask-question.png" alt="image not found" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <div className="brand__area section-space">
                            <div className="container">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="swiper brand__active">
                                            <div className="swiper-wrapper">
                                                <div className="swiper-slide">
                                                    <div className="brand__item text-center">
                                                        <div className="brand__thumb">
                                                            <img className="img-fluid" src="/assets/imgs/brand/brand-1.png" alt="image not found" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="swiper-slide">
                                                    <div className="brand__item text-center">
                                                        <div className="brand__thumb">
                                                            <img className="img-fluid" src="/assets/imgs/brand/brand-2.png" alt="image not found" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="swiper-slide">
                                                    <div className="brand__item text-center">
                                                        <div className="brand__thumb">
                                                            <img className="img-fluid" src="/assets/imgs/brand/brand-3.png" alt="image not found" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="swiper-slide">
                                                    <div className="brand__item text-center">
                                                        <div className="brand__thumb">
                                                            <img className="img-fluid" src="/assets/imgs/brand/brand-4.png" alt="image not found" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="swiper-slide">
                                                    <div className="brand__item text-center">
                                                        <div className="brand__thumb">
                                                            <img className="img-fluid" src="/assets/imgs/brand/brand-5.png" alt="image not found" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <section className="team section-space__bottom">
                            <div className="container">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="section__title-wrapper text-center mb-60 mb-xs-40">
                                            <h2 className="section__title mb-0 title-animation">Physician Directory</h2>
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-12">
                                        <div className="swiper team__slider">
                                            <div className="swiper-wrapper">
                                                <div className="swiper-slide">
                                                    <div className="team__item">
                                                        <div className="team__item-media">
                                                            <img className="img-fluid" src="/assets/imgs/team/team__item-1.jpg" alt="image not found" />
                                                        </div>

                                                        <div className="team__item-content">
                                                            <div className="team__item-content-left">
                                                                <h4 className="mb-10"><a href="doctor-details.html">Kathryn Murphy</a></h4>
                                                                <p className="mb-0">Medical Assistant</p>
                                                            </div>

                                                            <div className="team__item-content-right">
                                                                <div className="team__item-content-share">
                                                                    <a href="https://x.com/">
                                                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                            <path d="M9.52217 6.77686L15.4785 0.00195312H14.0671L8.89516 5.88451L4.76437 0.00195312H0L6.24656 8.89742L0 16.002H1.41155L6.87321 9.78977L11.2356 16.002H16L9.52183 6.77686H9.52217ZM7.58887 8.97579L6.95596 8.09L1.92015 1.04169H4.0882L8.15216 6.72991L8.78507 7.61569L14.0677 15.0095H11.8997L7.58887 8.97613V8.97579Z" fill="#071C3C" />
                                                                        </svg>
                                                                    </a>
                                                                    <a href="https://www.facebook.com/"><i className="fa-brands fa-facebook-f"></i></a>
                                                                    <a href="https://www.instagram.com/"><i className="fa-brands fa-instagram"></i></a>
                                                                    <a href="https://bd.linkedin.com/"><i className="fa-brands fa-linkedin-in"></i></a>
                                                                </div>
                                                                <button><i className="fa-regular fa-share-nodes"></i></button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="swiper-slide">
                                                    <div className="team__item">
                                                        <div className="team__item-media">
                                                            <img className="img-fluid" src="/assets/imgs/team/team__item-2.jpg" alt="image not found" />
                                                        </div>

                                                        <div className="team__item-content">
                                                            <div className="team__item-content-left">
                                                                <h4 className="mb-10"><a href="doctor-details.html">Savannah Nguyen</a></h4>
                                                                <p className="mb-0">Medical Assistant</p>
                                                            </div>

                                                            <div className="team__item-content-right">
                                                                <div className="team__item-content-share">
                                                                    <a href="https://x.com/">
                                                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                            <path d="M9.52217 6.77686L15.4785 0.00195312H14.0671L8.89516 5.88451L4.76437 0.00195312H0L6.24656 8.89742L0 16.002H1.41155L6.87321 9.78977L11.2356 16.002H16L9.52183 6.77686H9.52217ZM7.58887 8.97579L6.95596 8.09L1.92015 1.04169H4.0882L8.15216 6.72991L8.78507 7.61569L14.0677 15.0095H11.8997L7.58887 8.97613V8.97579Z" fill="#071C3C" />
                                                                        </svg>
                                                                    </a>
                                                                    <a href="https://www.facebook.com/"><i className="fa-brands fa-facebook-f"></i></a>
                                                                    <a href="https://www.instagram.com/"><i className="fa-brands fa-instagram"></i></a>
                                                                    <a href="https://bd.linkedin.com/"><i className="fa-brands fa-linkedin-in"></i></a>
                                                                </div>
                                                                <button><i className="fa-regular fa-share-nodes"></i></button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="swiper-slide">
                                                    <div className="team__item">
                                                        <div className="team__item-media">
                                                            <img className="img-fluid" src="/assets/imgs/team/team__item-3.jpg" alt="image not found" />
                                                        </div>

                                                        <div className="team__item-content">
                                                            <div className="team__item-content-left">
                                                                <h4 className="mb-10"><a href="doctor-details.html">Courtney Henry</a></h4>
                                                                <p className="mb-0">Medical Assistant</p>
                                                            </div>

                                                            <div className="team__item-content-right">
                                                                <div className="team__item-content-share">
                                                                    <a href="https://x.com/">
                                                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                            <path d="M9.52217 6.77686L15.4785 0.00195312H14.0671L8.89516 5.88451L4.76437 0.00195312H0L6.24656 8.89742L0 16.002H1.41155L6.87321 9.78977L11.2356 16.002H16L9.52183 6.77686H9.52217ZM7.58887 8.97579L6.95596 8.09L1.92015 1.04169H4.0882L8.15216 6.72991L8.78507 7.61569L14.0677 15.0095H11.8997L7.58887 8.97613V8.97579Z" fill="#071C3C" />
                                                                        </svg>
                                                                    </a>
                                                                    <a href="https://www.facebook.com/"><i className="fa-brands fa-facebook-f"></i></a>
                                                                    <a href="https://www.instagram.com/"><i className="fa-brands fa-instagram"></i></a>
                                                                    <a href="https://bd.linkedin.com/"><i className="fa-brands fa-linkedin-in"></i></a>
                                                                </div>
                                                                <button><i className="fa-regular fa-share-nodes"></i></button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="swiper-slide">
                                                    <div className="team__item">
                                                        <div className="team__item-media">
                                                            <img className="img-fluid" src="/assets/imgs/team/team__item-1.jpg" alt="image not found" />
                                                        </div>

                                                        <div className="team__item-content">
                                                            <div className="team__item-content-left">
                                                                <h4 className="mb-10"><a href="doctor-details.html">Kathryn Murphy</a></h4>
                                                                <p className="mb-0">Medical Assistant</p>
                                                            </div>

                                                            <div className="team__item-content-right">
                                                                <div className="team__item-content-share">
                                                                    <a href="https://x.com/">
                                                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                            <path d="M9.52217 6.77686L15.4785 0.00195312H14.0671L8.89516 5.88451L4.76437 0.00195312H0L6.24656 8.89742L0 16.002H1.41155L6.87321 9.78977L11.2356 16.002H16L9.52183 6.77686H9.52217ZM7.58887 8.97579L6.95596 8.09L1.92015 1.04169H4.0882L8.15216 6.72991L8.78507 7.61569L14.0677 15.0095H11.8997L7.58887 8.97613V8.97579Z" fill="#071C3C" />
                                                                        </svg>
                                                                    </a>
                                                                    <a href="https://www.facebook.com/"><i className="fa-brands fa-facebook-f"></i></a>
                                                                    <a href="https://www.instagram.com/"><i className="fa-brands fa-instagram"></i></a>
                                                                    <a href="https://bd.linkedin.com/"><i className="fa-brands fa-linkedin-in"></i></a>
                                                                </div>
                                                                <button><i className="fa-regular fa-share-nodes"></i></button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="swiper-slide">
                                                    <div className="team__item">
                                                        <div className="team__item-media">
                                                            <img className="img-fluid" src="/assets/imgs/team/team__item-2.jpg" alt="image not found" />
                                                        </div>

                                                        <div className="team__item-content">
                                                            <div className="team__item-content-left">
                                                                <h4 className="mb-10"><a href="doctor-details.html">Savannah Nguyen</a></h4>
                                                                <p className="mb-0">Medical Assistant</p>
                                                            </div>

                                                            <div className="team__item-content-right">
                                                                <div className="team__item-content-share">
                                                                    <a href="https://x.com/">
                                                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                            <path d="M9.52217 6.77686L15.4785 0.00195312H14.0671L8.89516 5.88451L4.76437 0.00195312H0L6.24656 8.89742L0 16.002H1.41155L6.87321 9.78977L11.2356 16.002H16L9.52183 6.77686H9.52217ZM7.58887 8.97579L6.95596 8.09L1.92015 1.04169H4.0882L8.15216 6.72991L8.78507 7.61569L14.0677 15.0095H11.8997L7.58887 8.97613V8.97579Z" fill="#071C3C" />
                                                                        </svg>
                                                                    </a>
                                                                    <a href="https://www.facebook.com/"><i className="fa-brands fa-facebook-f"></i></a>
                                                                    <a href="https://www.instagram.com/"><i className="fa-brands fa-instagram"></i></a>
                                                                    <a href="https://bd.linkedin.com/"><i className="fa-brands fa-linkedin-in"></i></a>
                                                                </div>
                                                                <button><i className="fa-regular fa-share-nodes"></i></button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="swiper-slide">
                                                    <div className="team__item">
                                                        <div className="team__item-media">
                                                            <img className="img-fluid" src="/assets/imgs/team/team__item-3.jpg" alt="image not found" />
                                                        </div>

                                                        <div className="team__item-content">
                                                            <div className="team__item-content-left">
                                                                <h4 className="mb-10"><a href="doctor-details.html">Courtney Henry</a></h4>
                                                                <p className="mb-0">Medical Assistant</p>
                                                            </div>

                                                            <div className="team__item-content-right">
                                                                <div className="team__item-content-share">
                                                                    <a href="https://x.com/">
                                                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                            <path d="M9.52217 6.77686L15.4785 0.00195312H14.0671L8.89516 5.88451L4.76437 0.00195312H0L6.24656 8.89742L0 16.002H1.41155L6.87321 9.78977L11.2356 16.002H16L9.52183 6.77686H9.52217ZM7.58887 8.97579L6.95596 8.09L1.92015 1.04169H4.0882L8.15216 6.72991L8.78507 7.61569L14.0677 15.0095H11.8997L7.58887 8.97613V8.97579Z" fill="#071C3C" />
                                                                        </svg>
                                                                    </a>
                                                                    <a href="https://www.facebook.com/"><i className="fa-brands fa-facebook-f"></i></a>
                                                                    <a href="https://www.instagram.com/"><i className="fa-brands fa-instagram"></i></a>
                                                                    <a href="https://bd.linkedin.com/"><i className="fa-brands fa-linkedin-in"></i></a>
                                                                </div>
                                                                <button><i className="fa-regular fa-share-nodes"></i></button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="team__scrollbar mt-80 mt-sm-60 mt-xs-45"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section className="take-appointment section-space overflow-hidden">
                            <div className="container">
                                <div className="take-appointment__container-shape" data-background="/assets/imgs/take-appointment/container-shape.png">
                                </div>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="section__title-wrapper take-appointment__content">
                                            <h5 className="section__subtitle color-theme-primary mb-15 mb-xs-10 title-animation"><img src="/assets/imgs/ask-quesiton/heart.png" alt="icon not found" className="img-fluid" /> Take appointment</h5>
                                            <h2 className="section__title mb-20 mb-xs-15 title-animation">Infinite Wellness Where Possibilities Unfold</h2>

                                            <p className="mb-30 mb-xs-25">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet rcus nunc. Duis egestas ac ante sed  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet rcus nunc. Duis egestas ac ante sed </p>

                                            <div className="take-appointment__call d-flex align-items-center">
                                                <div className="take-appointment__call-icon">
                                                    <i className="fa-solid fa-phone"></i>
                                                </div>
                                                <div className="take-appointment__call-text">
                                                    <p className="mb-0">Requesting A Call:</p>
                                                    <h5 className="mb-0"><a href="tel:6295550129">(629) 555-0129</a></h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-6">
                                        <div className="take-appointment__form mt-md-50 mt-sm-40 mt-xs-40">
                                            <div className="row">
                                                <div className="col-sm-6">
                                                    <div className="take-appointment__form-input">
                                                        <label >Your name</label>
                                                        <div className="input-wrapper">
                                                            <input name="name" id="name" type="text" placeholder="Your name..." />
                                                            <i className="fa-solid fa-user"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-sm-6">
                                                    <div className="take-appointment__form-input">
                                                        <label >Your Phone</label>
                                                        <div className="input-wrapper">
                                                            <input name="phone" id="phone" type="text" placeholder="Your phone..." />
                                                            <i className="fa-solid fa-phone"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-sm-6">
                                                    <div className="take-appointment__form-input">
                                                        <label >health type</label>
                                                        <div className="take-appointment__form-input-select">
                                                            <select id="health">
                                                                <option>Choose one...</option>
                                                                <option>Good</option>
                                                                <option>Very Good</option>
                                                                <option>Week</option>
                                                                <option>Very Week</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-sm-6">
                                                    <div className="take-appointment__form-input">
                                                        <label >Your Email</label>
                                                        <div className="input-wrapper">
                                                            <input name="email" id="email" type="text" placeholder="Your email..." />
                                                            <i className="fa-solid fa-paper-plane"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-sm-6">
                                                    <div className="take-appointment__form-input">
                                                        <label>Select doctor</label>
                                                        <div className="take-appointment__form-input-select">
                                                            <select id="doctor">
                                                                <option>Your doctor...</option>
                                                                <option>Dr. Paul</option>
                                                                <option>Dr. Sabbir</option>
                                                                <option>Dr. Rubel</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-sm-6">
                                                    <div className="take-appointment__form-input">
                                                        <label >Select Date</label>
                                                        <div className="input-wrapper">
                                                            <input id="datepicker" name="date" type="text" placeholder="YY/MM/DD" />
                                                            <i className="fa-solid fa-calendar-days"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <button type="submit" className="rr-btn rr-btn__primary-color mt-10 mt-xs-10">
                                                        <span className="btn-wrap">
                                                            <span className="text-one">Appointment now <i className="fa-solid fa-plus"></i></span>
                                                            <span className="text-two">Appointment now <i className="fa-solid fa-plus"></i></span>
                                                        </span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section className="blog section-space__bottom">
                            <div className="container">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="section__title-wrapper text-center mb-60 mb-xs-40">
                                            <h2 className="section__title mb-0 title-animation">Latest Blog Hub</h2>
                                        </div>
                                    </div>
                                </div>

                                <div className="row mb-minus-30">
                                    <div className="col-xl-4 col-md-6">
                                        <div className="blog__item mb-30">
                                            {/* <a href="/faq" className="blog__item-media d-block position-relative overflow-hidden">
                                                <div className="panel wow"></div>
                                                <img className="img-fluid" src="/assets/imgs/blog/blog-item-1.jpg" alt="image not found" />
                                            </a> */}

                                            <div className="blog__item-content">
                                                <div className="blog__item-content-date mb-15 mb-xs-10"><i className="fa-solid fa-calendar-days"></i> <span>October 19, 2022</span></div>
                                                <h4 className="mb-15 mb-xs-10"><a href="/faq">Optimal Oasis Nurturing Health in Every Aspect</a></h4>
                                                <p className="mb-40 mb-xs-30">Explore the dynamic commerce through our insightful blogs. Learn Explore the dynamic</p>

                                                {/* <a className="rr-a-btn" href="/faq">View More <i className="fa-solid fa-circle-plus"></i></a> */}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-xl-4 col-md-6">
                                        <div className="blog__item mb-30">
                                            {/* <a href="/faq" className="blog__item-media d-block position-relative overflow-hidden">
                                                <div className="panel wow"></div>
                                                <img className="img-fluid" src="/assets/imgs/blog/blog-item-2.jpg" alt="image not found" />
                                            </a> */}

                                            <div className="blog__item-content">
                                                <div className="blog__item-content-date mb-15 mb-xs-10"><i className="fa-solid fa-calendar-days"></i> <span>October 19, 2022</span></div>
                                                <h4 className="mb-15 mb-xs-10"><a href="/faq">Embark on Health Wellness Begins</a></h4>
                                                <p className="mb-40 mb-xs-30">Explore the dynamic commerce through our insightful blogs. Learn Explore the dynamic</p>

                                                {/* <a className="rr-a-btn" href="/faq">View More <i className="fa-solid fa-circle-plus"></i></a> */}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-xl-4 col-md-6">
                                        <div className="blog__item mb-30">
                                            {/* <a href="/faq" className="blog__item-media d-block position-relative overflow-hidden">
                                                <div className="panel wow"></div>
                                                <img className="img-fluid" src="/assets/imgs/blog/blog-item-3.jpg" alt="image not found" />
                                            </a> */}

                                            <div className="blog__item-content">
                                                <div className="blog__item-content-date mb-15 mb-xs-10"><i className="fa-solid fa-calendar-days"></i> <span>October 19, 2022</span></div>
                                                <h4 className="mb-15 mb-xs-10"><a href="/faq">Flourishing Healthier Revive Radiance</a></h4>
                                                <p className="mb-40 mb-xs-30">Explore the dynamic commerce through our insightful blogs. Learn Explore the dynamic</p>

                                                {/* <a className="rr-a-btn" href="/faq">View More <i className="fa-solid fa-circle-plus"></i></a> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </section>
            </main>
        </MainLayout>
    )
}

export default HomePage