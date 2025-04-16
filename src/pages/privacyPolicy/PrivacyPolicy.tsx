import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import mammoth from "mammoth";
const PrivacyPolicy: React.FC = () => {
  const [docContent, setDocContent] = useState("");

  useEffect(() => {
    // Fetch the docx file as an ArrayBuffer
    fetch("/assets/docs/PrivacyPolicy.docx")
      .then((response) => response.arrayBuffer())
      .then((arrayBuffer) => mammoth.convertToHtml({ arrayBuffer }))
      .then((result) => {
        setDocContent(result.value); // HTML content
      })
      .catch((err) => {
        console.error("Error loading .docx file:", err);
      });
  }, []);
  return (
    <>
      <Navbar />

      {/* <!-- Body main wrapper start --> */}
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
                    Privacy Policy
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
                          <span>Privacy Policy</span>
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

        {/* <!--about-us-2 start --> */}
        <section className="about-us-2 about-us-2__space">
          <div className="container">
            <div className="row d-flex align-items-center">
              <div className="col-lg-12">
                <div className="about-us-2__main-content">
                  <div className=" about-us-2__content mb-60 mb-xs-50">
                    {/* <h5 className="section__subtitle color-theme-primary mb-15 mb-xs-10 title-animation">
                      <img
                        src="/assets/imgs/ask-quesiton/heart.png"
                        alt="icon not found"
                        className="img-fluid"
                      />{" "}
                      terms
                    </h5> */}
                    {/* <h2 className="section__title mb-20 title-animation">
                      Holistic Haven Where Health Every Day
                    </h2> */}
                    <p className="mb-0">
                      <div
                        className="docx-content"
                        dangerouslySetInnerHTML={{ __html: docContent }}
                      />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default PrivacyPolicy;
