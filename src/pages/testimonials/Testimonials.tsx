import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const Testimonials: React.FC = () => {
  return (
    <>
      <Navbar />
      <main>
      
        {/* <!-- Breadcrumb area start  --> */}
        <div className="breadcrumb__area header__background-color breadcrumb__header-up breadcrumb-space overly overflow-hidden">
          <div
            className="breadcrumb__background"
            data-background=".//assets/imgs/breadcrumb/page-header-1.png"
          ></div>
          <div className="container">
            <div className="row align-items-center justify-content-between">
              <div className="col-12">
                <div className="breadcrumb__content text-center">
                  <h2 className="breadcrumb__title mb-15 mb-sm-10 mb-xs-5 color-white title-animation">
                    Testimonials
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
                          <span>Testimonials</span>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      <div>
        <h1>Testimonials</h1>
      </div>
      </main>

      <Footer />
    </>
  );
};

export default Testimonials;
