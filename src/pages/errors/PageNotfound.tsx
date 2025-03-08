import React from "react";
import MainLayout from "../../layouts/MainLayout";

const PageNotfound: React.FC = () => {
    return (
        <MainLayout>
            <main >
                <div className="breadcrumb__area header__background-color breadcrumb__header-up breadcrumb-space overly overflow-hidden">
                    <div className="breadcrumb__background" data-background="./assets/imgs/breadcrumb/page-header-1.png"></div>
                    <div className="container">
                        <div className="row align-items-center justify-content-between">
                            <div className="col-12">
                                <div className="breadcrumb__content text-center">
                                    <h2 className="breadcrumb__title mb-15 mb-sm-10 mb-xs-5 color-white title-animation">404 Error</h2>

                                    <div className="breadcrumb__menu">
                                        <nav>
                                            <ul>
                                                <li><span><a href="index.html">Home</a></span></li>
                                                <li className="active"><span>404 Error</span></li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <section className="error section-space">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <div className="error__media text-lg-end text-center">
                                    <img className="img-fluid" src="/assets/imgs/404/404.png" alt="icon not found" />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="error__content mt-md-55 mt-sm-50 mt-xs-40">
                                    <h1 className="title">404</h1>
                                    <p className="mb-40 mb-xs-30">Ethics are integral to medical practice, guiding decisions regarding high patient care, confidentiality, consent, and end-of-life care</p>
                                    <a href="index.html" className="rr-btn">
                                        <span className="btn-wrap">
                                            <span className="text-one">Go Back Home</span>
                                            <span className="text-two">Go Back Home</span>
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </MainLayout>
    )
}
export default PageNotfound;