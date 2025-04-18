import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const AboutPage: React.FC = () => {
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
                    About Us
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
                          <span>About Us</span>
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
              {/* <div className="col-lg-6">
                <div className="about-us-2__media">
                  <div className="about-us-2__media-image-1">
                    <a
                      href="https://www.youtube.com/watch?v=dyNpojnbNT4"
                      className="popup-video"
                      data-effect="mfp-move-from-top vertical-middle"
                    >
                      <i className="fa-solid fa-play zooming"></i>
                    </a>
                    <img
                      src="/assets/imgs/about-us-2/about-us-1.jpg"
                      className="img-fluid"
                      alt="image not found"
                    />
                  </div>
                  <div className="about-us-2__media-image-2">
                    <img
                      src="/assets/imgs/about-us-2/about-us-2.jpg"
                      className="img-fluid"
                      alt="image not found"
                    />
                    <div className="circle upDown">
                      <svg
                        width="111"
                        height="111"
                        viewBox="0 0 111 111"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          opacity="0.2"
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M110.785 60.6122L0.517544 60.6122C0.406443 59.4679 0.330326 58.31 0.302317 57.1451L111 57.1451C110.972 58.31 110.896 59.4679 110.785 60.6122ZM109.661 67.6711L1.6416 67.6711C1.38486 66.5272 1.16266 65.3689 0.975465 64.204L110.327 64.204C110.14 65.3689 109.918 66.5272 109.661 67.6711ZM107.545 74.7304L3.76465 74.7304C3.33425 73.5931 2.94589 72.4352 2.59905 71.2633L108.704 71.2633C108.364 72.4352 107.975 73.5931 107.545 74.7304ZM104.325 81.7892L6.98383 81.7892C6.36624 80.6589 5.79063 79.501 5.24913 78.3221L106.053 78.3221C105.519 79.501 104.936 80.6589 104.325 81.7892ZM99.7326 88.8551L11.5702 88.8551C10.7094 87.7317 9.89809 86.5809 9.13485 85.388L102.175 85.388C101.405 86.5809 100.593 87.7318 99.7326 88.8551ZM93.3218 95.9144L17.9809 95.9144C16.7873 94.8116 15.6427 93.6537 14.5536 92.4473L96.7492 92.4473C95.6601 93.6537 94.515 94.8116 93.3218 95.9144ZM83.8722 102.973L27.4236 102.973C25.6333 101.919 23.9131 100.761 22.2616 99.5061L89.0412 99.5062C87.3896 100.755 85.662 101.919 83.8722 102.973ZM64.2512 110.033C61.448 110.469 58.5757 110.698 55.6479 110.698C52.72 110.698 49.8478 110.469 47.0446 110.033C42.7224 109.36 38.5663 108.188 34.6321 106.565L76.6633 106.565C72.7294 108.188 68.5734 109.36 64.2512 110.033ZM0.517545 50.0858L110.785 50.0858C110.896 51.2302 110.972 52.3881 111 53.5529L0.302317 53.5529C0.330326 52.388 0.406444 51.2302 0.517545 50.0858ZM1.64862 43.02L109.654 43.02C109.918 44.1643 110.14 45.3222 110.327 46.4871L0.975467 46.4871C1.16266 45.3222 1.38487 44.1643 1.64862 43.02ZM3.76465 35.9611L107.538 35.9611C107.968 37.098 108.357 38.2564 108.704 39.4282L2.59905 39.4282C2.94589 38.2564 3.33425 37.098 3.76465 35.9611ZM6.99079 28.9018L104.318 28.9018C104.936 30.0322 105.512 31.19 106.046 32.3689L5.25614 32.3689C5.79064 31.19 6.37319 30.0322 6.99079 28.9018ZM11.5702 21.843L99.7326 21.843C100.593 22.9663 101.405 24.1172 102.175 25.3101L9.13486 25.3101C9.89809 24.1172 10.7094 22.9663 11.5702 21.843ZM17.981 14.7837L93.3218 14.7837C94.515 15.8795 95.6601 17.0443 96.7492 18.2508L14.5536 18.2508C15.6427 17.0443 16.7873 15.8794 17.981 14.7837ZM27.4236 7.71783L83.8722 7.71783C85.662 8.77907 87.3826 9.93693 89.0342 11.1849L22.2686 11.1849C23.9132 9.92992 25.6333 8.77906 27.4236 7.71783ZM47.0861 0.658978C49.8753 0.221974 52.7336 0.000198036 55.6479 0.00019829C58.5617 0.000198545 61.4205 0.221975 64.2097 0.65898C68.5459 1.3313 72.7154 2.50319 76.6563 4.12609L34.6391 4.12608C38.5799 2.50319 42.7499 1.33129 47.0861 0.658978Z"
                          fill="#185EC8"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div> */}
              <div className="col-lg-6">
                <div className="about-us-2__main-content">
                  <div className="section__title-wrapper about-us-2__content mb-60 mb-xs-50">
                    <h5 className="section__subtitle color-theme-primary mb-15 mb-xs-10 title-animation">
                      <img
                        src="/assets/imgs/ask-quesiton/heart.png"
                        alt="icon not found"
                        className="img-fluid"
                      />{" "}
                      About Us
                    </h5>
                    {/* <h2 className="section__title mb-20 title-animation">
                      Holistic Haven Where Health Every Day
                    </h2> */}
                    <p className="mb-0">
                      Jude Billing Solutions streamlines medical
                      billing for healthcare providers. Our comprehensive
                      revenue cycle management services maximize reimbursements,
                      reduce administrative burdens, and improve efficiency.
                      From coding and claims submission to denial management and
                      payment posting, we handle it all, so you can focus on
                      what matters most: patient care. No matter where you're
                      located, Jude Billing Solutions can help. We cater to
                      healthcare providers in all 50 states, including
                      California.
                    </p>
                  </div>

                  <div className="about-us-2__main-content__list">
                    <div className="about-us-2__main-content__list-item">
                      <div className="about-us-2__main-content__list-item-icon">
                        <svg
                          width="30"
                          height="30"
                          viewBox="0 0 30 30"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clipPath="url(#clip0_9843_578)">
                            <path
                              d="M23.8477 4.33594C23.2984 4.33594 22.7659 4.40871 22.2588 4.54436C20.9302 2.83084 18.8755 1.81641 16.6992 1.81641C15.0095 1.81641 13.7096 2.65898 12.4524 3.47385C12.2819 3.58441 12.1076 3.69732 11.9331 3.8076C10.626 2.53793 8.85955 1.81641 7.03124 1.81641C5.07152 1.81641 3.18568 2.64404 1.8573 4.08697L2.50388 4.68223C3.66632 3.41947 5.3165 2.69531 7.03124 2.69531C8.55052 2.69531 10.0208 3.26473 11.1447 4.27365C9.96082 4.91449 8.76632 5.28826 7.87107 5.28826V6.16717C9.04482 6.16717 10.6232 5.63455 12.0933 4.7424C12.3765 4.57055 12.6581 4.38797 12.9305 4.21137C14.1333 3.43172 15.2695 2.69531 16.6992 2.69531C18.5046 2.69531 20.2148 3.49301 21.3785 4.85379C19.212 5.80687 17.6953 7.97361 17.6953 10.4882C17.6953 11.5507 17.9695 12.5938 18.4895 13.5133V15.8463H20.3305C20.1952 16.2821 20.0743 16.7433 19.9675 17.2328L17.9194 18.4228L17.3054 22.0457L19.3526 23.2277C19.345 23.5525 19.3398 23.8846 19.3375 24.2255L20.2164 24.2315C20.2403 20.7351 20.5601 18.0471 21.192 16.0386C22.0173 16.4336 22.9252 16.6406 23.8477 16.6406C27.2401 16.6406 30.0001 13.8807 30.0001 10.4883C30.0001 7.09588 27.2401 4.33594 23.8477 4.33594ZM18.274 21.5902L18.7172 18.9758L19.7522 18.3744C19.5684 19.5125 19.4474 20.7891 19.3854 22.2318L18.274 21.5902ZM23.8477 15.7617C22.9019 15.7617 21.9741 15.5082 21.1645 15.0288L21.0609 14.9675H19.3684V13.2749L19.307 13.1713C18.8276 12.362 18.5742 11.4342 18.5742 10.4882C18.5742 7.58045 20.9399 5.21478 23.8477 5.21478C26.7554 5.21478 29.1211 7.58045 29.1211 10.4882C29.1211 13.396 26.7554 15.7617 23.8477 15.7617Z"
                              fill="#185EC8"
                            />
                            <path
                              d="M25.166 7.85156H22.5293V9.16992H21.2109V11.8066H22.5293V13.1251H25.166V11.8067H26.4844V9.16998H25.166V7.85156ZM25.6055 10.0488V10.9277H24.2871V12.2462H23.4082V10.9278H22.0898V10.0489H23.4082V8.73053H24.2871V10.0489H25.6055V10.0488Z"
                              fill="#185EC8"
                            />
                            <path
                              d="M16.6992 27.3046C15.2453 27.3046 14.0624 26.1218 14.0624 24.6679C14.0624 22.7264 13.8667 21.0916 13.4964 19.9406C13.0106 18.4306 12.3475 18.1136 11.8768 18.1136C11.4042 18.1136 10.7372 18.4327 10.2431 19.9528C9.86689 21.1104 9.66797 22.7409 9.66797 24.6679C9.66797 26.1218 8.48514 27.3046 7.03125 27.3046C5.57736 27.3046 4.39453 26.1218 4.39453 24.6679C4.39453 23.7035 4.36717 22.8204 4.31748 22.0079L6.17549 20.4153L6.23496 16.252L7.60822 14.3171L6.00264 11.5382V8.93626L1.07461 7.30513C1.25684 6.59884 1.56398 5.92847 1.98967 5.32114L1.26996 4.81665C0.43916 6.00194 0 7.39577 0 8.84761C0 10.6834 0.570762 11.8979 1.2317 13.3043C2.24924 15.4695 3.51563 18.1642 3.51563 24.6679C3.51563 26.6064 5.09273 28.1835 7.03125 28.1835C8.96977 28.1835 10.5469 26.6064 10.5469 24.6679C10.5469 20.3898 11.5359 18.9925 11.8768 18.9925C12.2256 18.9925 13.1835 20.3376 13.1835 24.6679C13.1835 26.6064 14.7606 28.1835 16.6992 28.1835C18.4348 28.1835 19.9307 26.8876 20.1787 25.1691L19.3088 25.0435C19.1228 26.3326 18.0009 27.3046 16.6992 27.3046ZM2.02711 12.9304C1.38557 11.5654 0.878906 10.4871 0.878906 8.84761C0.878906 8.62261 0.891563 8.39936 0.915469 8.17829L5.12373 9.57118V11.7739L6.56502 14.2685L5.36016 15.9663L5.30244 20.0063L4.23428 20.9218C3.85254 16.8157 2.85955 14.7018 2.02711 12.9304Z"
                              fill="#185EC8"
                            />
                            <path
                              d="M18.0176 4.49243H18.8965V5.37134H18.0176V4.49243Z"
                              fill="#185EC8"
                            />
                            <path
                              d="M16.2598 3.61353H17.1387V4.49243H16.2598V3.61353Z"
                              fill="#185EC8"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_9843_578">
                              <rect width="30" height="30" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                      <div className="about-us-2__main-content__list-item-text">
                        <h4 className="mb-10 title-animation">
                          Mission Statement
                        </h4>
                        <p className="mb-0">
                          Jude Billing Solutions is committed to improving the
                          financial performance of healthcare providers through
                          innovative, compliant, and customer-focused medical
                          billing solutions.
                        </p>
                      </div>
                    </div>
                    <div className="about-us-2__main-content__list-item">
                      <div className="about-us-2__main-content__list-item-icon">
                        <svg
                          width="30"
                          height="30"
                          viewBox="0 0 30 30"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clipPath="url(#clip0_9843_589)">
                            <path
                              d="M19.3468 11.4258H20.2257V12.3047H19.3468V11.4258Z"
                              fill="#185EC8"
                            />
                            <path
                              d="M25.166 17.0548V16.8164C25.166 15.9988 24.605 15.3098 23.8477 15.1142V10.1074C23.8477 8.89582 22.862 7.91016 21.6504 7.91016H20.2257V2.19727C20.2257 1.47029 19.6342 0.878906 18.9073 0.878906H16.2428C16.0614 0.367441 15.5729 0 15 0H9.33492C8.60801 0 8.01656 0.591387 8.01656 1.31836V15.3809C8.01656 16.1078 8.60795 16.6992 9.33492 16.6992H11.728V25.2346C11.728 27.3776 9.98455 29.1211 7.84154 29.1211C5.69853 29.1211 3.95508 27.3776 3.95508 25.2346V18.4014C4.7124 18.2058 5.27344 17.5168 5.27344 16.6992V16.0071C5.56119 15.7598 5.82645 15.4494 6.06158 15.0799C6.68689 14.0972 7.03125 12.7995 7.03125 11.4258C7.03125 10.0521 6.68689 8.75432 6.06158 7.7717C5.39701 6.72738 4.49285 6.15234 3.51562 6.15234C2.5384 6.15234 1.63424 6.72744 0.969668 7.7717C0.344355 8.75432 0 10.0521 0 11.4258C0 12.4255 0.184453 13.3973 0.533438 14.2361L1.34496 13.8985C1.04004 13.1657 0.878906 12.3107 0.878906 11.4258C0.878906 9.04371 2.08635 7.03125 3.51562 7.03125C4.9449 7.03125 6.15234 9.04371 6.15234 11.4258C6.15234 13.8079 4.94484 15.8203 3.51562 15.8203C2.85053 15.8203 2.21045 15.3908 1.71322 14.6111L0.972129 15.0836C1.20662 15.4513 1.47105 15.7605 1.75781 16.007V16.6992C1.75781 17.5168 2.31885 18.2058 3.07617 18.4014V25.2346C3.07617 27.8623 5.21391 30.0001 7.84154 30.0001C10.4692 30.0001 12.6069 27.8623 12.6069 25.2346V16.6992H15C15.5729 16.6992 16.0613 16.3318 16.2428 15.8203H18.9073C19.6342 15.8203 20.2257 15.2289 20.2257 14.502V13.1836H19.3468V14.502C19.3468 14.7443 19.1497 14.9414 18.9073 14.9414H16.3184V1.75781H18.9073C19.1497 1.75781 19.3468 1.95492 19.3468 2.19727V10.5469H20.2257V8.78906H21.6504C22.3773 8.78906 22.9688 9.38045 22.9688 10.1074V15.1142C22.2114 15.3098 21.6504 15.9988 21.6504 16.8164V17.0548C18.8664 17.826 16.8164 20.382 16.8164 23.4082C16.8164 27.0429 19.7735 30 23.4082 30C27.0429 30 30 27.0429 30 23.4082C30 20.382 27.95 17.826 25.166 17.0548ZM2.63672 16.6992V16.5379C2.91949 16.6443 3.2141 16.6992 3.51562 16.6992C3.81721 16.6992 4.11176 16.6443 4.39453 16.5379V16.6992C4.39453 17.1838 4.00025 17.5781 3.51562 17.5781C3.031 17.5781 2.63672 17.1838 2.63672 16.6992ZM15.4395 15.3809C15.4395 15.6231 15.2423 15.8203 15 15.8203H9.33492C9.09264 15.8203 8.89547 15.6231 8.89547 15.3809V1.31836C8.89547 1.07607 9.09258 0.878906 9.33492 0.878906H15C15.2423 0.878906 15.4395 1.07607 15.4395 1.31836V15.3809ZM22.5293 16.8164C22.5293 16.3318 22.9236 15.9375 23.4082 15.9375C23.8928 15.9375 24.2871 16.3318 24.2871 16.8164V16.8751C23.9995 16.8366 23.7062 16.8163 23.4082 16.8163C23.1102 16.8163 22.8169 16.8366 22.5293 16.8751V16.8164ZM23.4082 29.1211C20.2581 29.1211 17.6953 26.5583 17.6953 23.4082C17.6953 20.2581 20.2581 17.6953 23.4082 17.6953C26.5583 17.6953 29.1211 20.2581 29.1211 23.4082C29.1211 26.5583 26.5583 29.1211 23.4082 29.1211Z"
                              fill="#185EC8"
                            />
                            <path
                              d="M23.4082 18.5742C20.7428 18.5742 18.5742 20.7427 18.5742 23.4082C18.5742 26.0737 20.7428 28.2422 23.4082 28.2422C26.0736 28.2422 28.2422 26.0736 28.2422 23.4082C28.2422 20.7428 26.0736 18.5742 23.4082 18.5742ZM20.9415 26.4964L21.5437 25.8942L20.9222 25.2727L20.32 25.875C19.8646 25.306 19.5628 24.6093 19.4782 23.8477H20.332V22.9688H19.4781C19.5628 22.2072 19.8646 21.5105 20.32 20.9415L20.9222 21.5438L21.5437 20.9224L20.9415 20.3201C21.5105 19.8646 22.2071 19.5628 22.9688 19.4782V20.332H23.8477V19.4781C24.6093 19.5628 25.3059 19.8646 25.8749 20.32L25.2726 20.9224L25.8941 21.5438L26.4964 20.9415C26.9518 21.5105 27.2536 22.2072 27.3382 22.9688H26.4844V23.8477H27.3383C27.2537 24.6093 26.9518 25.306 26.4964 25.875L25.8942 25.2727L25.2727 25.8942L25.875 26.4964C25.1981 27.0382 24.3406 27.3633 23.4082 27.3633C22.4758 27.3633 21.6183 27.0382 20.9415 26.4964Z"
                              fill="#185EC8"
                            />
                            <path
                              d="M24.605 21.5898L23.9762 22.2187C23.8041 22.1362 23.6115 22.0898 23.4082 22.0898C22.6813 22.0898 22.0898 22.6812 22.0898 23.4082C22.0898 24.1352 22.6813 24.7265 23.4082 24.7265C24.1351 24.7265 24.7266 24.1352 24.7266 23.4082C24.7266 23.2049 24.6802 23.0123 24.5977 22.8402L25.2265 22.2113L24.605 21.5898ZM23.4082 23.8476C23.1659 23.8476 22.9687 23.6505 22.9687 23.4082C22.9687 23.1659 23.1659 22.9687 23.4082 22.9687C23.6505 22.9687 23.8477 23.1658 23.8477 23.4082C23.8477 23.6505 23.6505 23.8476 23.4082 23.8476Z"
                              fill="#185EC8"
                            />
                            <path
                              d="M3.35693 8.34961H4.23584V9.22852H3.35693V8.34961Z"
                              fill="#185EC8"
                            />
                            <path
                              d="M4.23584 10.1074H5.11475V10.9863H4.23584V10.1074Z"
                              fill="#185EC8"
                            />
                            <path
                              d="M17.589 4.39453H18.4679V5.27344H17.589V4.39453Z"
                              fill="#185EC8"
                            />
                            <path
                              d="M17.589 2.63672H18.4679V3.51562H17.589V2.63672Z"
                              fill="#185EC8"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_9843_589">
                              <rect width="30" height="30" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                      <div className="about-us-2__main-content__list-item-text">
                        <h4 className="mb-10 title-animation">
                          Vision Statement
                        </h4>
                        <p className="mb-0">
                          To be the leading provider of comprehensive medical
                          billing services, ensuring that healthcare providers
                          receive timely and accurate reimbursements
                        </p>
                      </div>
                    </div>
                  </div>
              
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!--about-us-2 end --> */}

        {/* <!-- service-3 area start --> */}
        {/* <section className="service-3 section-space__bottom">
          <div className="container">
            <div className="row mb-minus-50">
              <div className="col-xl-3 col-lg-4 col-sm-6">
                <div className="service-3__item mb-50">
                  <div className="service-3__item-header d-flex mb-40 mb-xs-35">
                    <div className="service-3__item-header-icon">
                      <img
                        className="img-fluid"
                        src="/assets/imgs/service-3/service-icon-1.png"
                        alt="icon not found"
                      />
                    </div>
                    <h4 className="mb-0">Get Fast Reply</h4>
                  </div>

                  <p className="mb-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    sit am rcus nunc. Duis egestas ac ante sed tincidunt
                  </p>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6">
                <div className="service-3__item mb-50">
                  <div className="service-3__item-header d-flex mb-40 mb-xs-35">
                    <div className="service-3__item-header-icon">
                      <img
                        className="img-fluid"
                        src="/assets/imgs/service-3/service-icon-2.png"
                        alt="icon not found"
                      />
                    </div>
                    <h4 className="mb-0">InspireHealth Hub</h4>
                  </div>

                  <p className="mb-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    sit am rcus nunc. Duis egestas ac ante sed tincidunt
                  </p>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6">
                <div className="service-3__item mb-50">
                  <div className="service-3__item-header d-flex mb-40 mb-xs-35">
                    <div className="service-3__item-header-icon">
                      <img
                        className="img-fluid"
                        src="/assets/imgs/service-3/service-icon-3.png"
                        alt="icon not found"
                      />
                    </div>
                    <h4 className="mb-0">Health Services</h4>
                  </div>

                  <p className="mb-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    sit am rcus nunc. Duis egestas ac ante sed tincidunt
                  </p>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6">
                <div className="service-3__item mb-50">
                  <div className="service-3__item-header d-flex mb-40 mb-xs-35">
                    <div className="service-3__item-header-icon">
                      <img
                        className="img-fluid"
                        src="/assets/imgs/service-3/service-icon-4.png"
                        alt="icon not found"
                      />
                    </div>
                    <h4 className="mb-0">Voyage Wellness</h4>
                  </div>

                  <p className="mb-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    sit am rcus nunc. Duis egestas ac ante sed tincidunt
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section> */}
        {/* <!-- service-3 area end --> */}

        {/* <!-- service-3 area start --> */}
        {/* <section className="wellness-expertise section-space__bottom">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="wellness-expertise__content">
                  <h2 className="section__title mb-15 mb-xs-10  title-animation">
                    Revitalize Radiance Your Wellness Expertise
                  </h2>
                  <p className="mb-40 mb-xs-30">
                    Lorem ipsum dolor sit amet, consectetur adipiLorem ipsum
                    dolor sit amet, consectetur adipiscing elit. Sed sit amet
                    rcus nunc. Duis egestas ac ante sed tincidunt. Lorem ipsum
                    dolor sit ametscing elit. Sed sit amet
                  </p>
                  <ul className="wellness-expertise__content__list">
                    <li>
                      <i className="fa-solid fa-check"></i>Mistakes To Avoid
                    </li>
                    <li>
                      <i className="fa-solid fa-check"></i>Knew About Fonts
                    </li>
                    <li>
                      <i className="fa-solid fa-check"></i>Your Startup
                    </li>
                    <li>
                      <i className="fa-solid fa-check"></i>Knew About Fonts
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="wellness-expertise__media">
                  <img
                    src=".//assets/imgs/wellness-expertise/wellness-expertise.png"
                    className="img-fluid"
                    alt="image not found"
                  />

                  <div className="wellness-expertise__media__box">
                    <div className="wellness-expertise__media__box-icon">
                      <img
                        className="img-fluid"
                        src="/assets/imgs/wellness-expertise/note.svg"
                        alt="icon not found"
                      />
                    </div>
                    <div className="wellness-expertise__media__box-text">
                      <h3>
                        <span className="odometer" data-count="380">
                          0
                        </span>
                        +
                      </h3>
                      <h6>Success Case</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}
        {/* <!-- slider-text end --> */}

        {/* <!-- slider-text start --> */}
        {/* <div className="slider-text">
          <div className="container">
            <div className="rr-scroller" data-speed="slow">
              <ul className="text-anim rr-scroller__inner">
                <li>
                  <img
                    src=".//assets/imgs/slider-text/health-guard.png"
                    alt=""
                  />
                </li>
                <li>
                  <strong>Health Guard</strong>
                </li>
                <li>
                  <img
                    src=".//assets/imgs/slider-text/health-guard.png"
                    alt=""
                  />
                </li>
                <li>Care Wise Medical</li>
                <li>
                  <img
                    src=".//assets/imgs/slider-text/health-guard.png"
                    alt=""
                  />
                </li>
                <li>
                  <strong>Health Guard</strong>
                </li>
                <li>
                  <img
                    src=".//assets/imgs/slider-text/health-guard.png"
                    alt=""
                  />
                </li>
                <li>Care Wise Medical</li>
                <li>
                  <img
                    src=".//assets/imgs/slider-text/health-guard.png"
                    alt=""
                  />
                </li>
                <li>
                  <strong>Health Guard</strong>
                </li>
                <li>
                  <img
                    src=".//assets/imgs/slider-text/health-guard.png"
                    alt=""
                  />
                </li>
                <li>Care Wise Medical</li>
                <li>
                  <img
                    src=".//assets/imgs/slider-text/health-guard.png"
                    alt=""
                  />
                </li>
                <li>
                  <strong>Health Guard</strong>
                </li>
                <li>
                  <img
                    src=".//assets/imgs/slider-text/health-guard.png"
                    alt=""
                  />
                </li>
                <li>Care Wise Medical</li>
              </ul>
            </div>
          </div>
        </div> */}
        {/* <!-- slider-text end --> */}

        {/* <!-- client-testimonial area start --> */}
        {/* <section className="client-testimonial section-space overflow-hidden">
          <div className="container">
            <div className="client-testimonial__shape">
              <img
                className="img-fluid"
                src="/assets/imgs/testimonial/client-testimonial__helth.png"
                alt="icon not found"
              />
            </div>
            <div className="row align-items-end mb-60 mb-sm-50 mb-xs-40">
              <div className="col-lg-7">
                <div className="section__title-wrapper client-testimonial__content">
                  <h5 className="section__subtitle color-theme-primary mb-15 mb-xs-10 title-animation">
                    <img
                      src="/assets/imgs/ask-quesiton/heart.png"
                      alt="icon not found"
                      className="img-fluid"
                    />{" "}
                    Clients Testimonial
                  </h5>
                  <h2 className="section__title mb-0 title-animation">
                    Nurture Nature Blossoming in Health and Happiness
                  </h2>
                </div>
              </div>

              <div className="col-lg-5">
                <div className="client-testimonial__content-right mt-md-25 mt-sm-25 mt-xs-25">
                  <p className="mb-0">
                    Medical science encompasses a vastf fields dedicated to
                    understanding and treating ailments, promotin health, and
                    enhanci quality of life. Here's a brief exploration into
                    this multifaceted domain medical student
                  </p>
                </div>
              </div>
            </div>

            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="client-testimonial__media">
                  <img
                    className="img-fluid"
                    src="/assets/imgs/client-testimonial/client-testimonial.png"
                    alt="icon not found"
                  />
                </div>
              </div>

              <div className="col-lg-6">
                <div className="client-testimonial__slider-wrapper">
                  <div className="swiper client-testimonial__slider">
                    <div className="swiper-wrapper">
                      <div className="swiper-slide">
                        <div className="client-testimonial__item">
                          <div className="client-testimonial__item-icon mb-30 mb-xs-25">
                            <img
                              className="img-fluid"
                              src="/assets/imgs/client-testimonial/qoute.png"
                              alt="icon not found"
                            />
                          </div>

                          <p className="mb-30 mb-xs-25">
                            Leverage agile frameworks provide a robust synopsis
                            for strategy foster Leverage a frame works to
                            provide a robust synopsis for strateg fr
                            collaborative thinking to further the overall value
                            prop osition
                          </p>

                          <div className="client-testimonial__item-author d-flex align-items-center">
                            <div className="client-testimonial__item-author-thumb">
                              <img
                                className="img-fluid"
                                src="/assets/imgs/client-testimonial/thumb.png"
                                alt="icon not found"
                              />
                            </div>
                            <div className="client-testimonial__item-author-content">
                              <h5>Jenny Wilson</h5>
                              <p className="mb-0">Businessman</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="client-testimonial__item">
                          <div className="client-testimonial__item-icon mb-30 mb-xs-25">
                            <img
                              className="img-fluid"
                              src="/assets/imgs/client-testimonial/qoute.png"
                              alt="icon not found"
                            />
                          </div>

                          <p className="mb-30 mb-xs-25">
                            Leverage agile frameworks provide a robust synopsis
                            for strategy foster Leverage a frame works to
                            provide a robust synopsis for strateg fr
                            collaborative thinking to further the overall value
                            prop osition
                          </p>

                          <div className="client-testimonial__item-author d-flex align-items-center">
                            <div className="client-testimonial__item-author-thumb">
                              <img
                                className="img-fluid"
                                src="/assets/imgs/client-testimonial/thumb.png"
                                alt="icon not found"
                              />
                            </div>
                            <div className="client-testimonial__item-author-content">
                              <h5>Jenny Wilson</h5>
                              <p className="mb-0">Businessman</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="client-testimonial__item">
                          <div className="client-testimonial__item-icon mb-30 mb-xs-25">
                            <img
                              className="img-fluid"
                              src="/assets/imgs/client-testimonial/qoute.png"
                              alt="icon not found"
                            />
                          </div>

                          <p className="mb-30 mb-xs-25">
                            Leverage agile frameworks provide a robust synopsis
                            for strategy foster Leverage a frame works to
                            provide a robust synopsis for strateg fr
                            collaborative thinking to further the overall value
                            prop osition
                          </p>

                          <div className="client-testimonial__item-author d-flex align-items-center">
                            <div className="client-testimonial__item-author-thumb">
                              <img
                                className="img-fluid"
                                src="/assets/imgs/client-testimonial/thumb.png"
                                alt="icon not found"
                              />
                            </div>
                            <div className="client-testimonial__item-author-content">
                              <h5>Jenny Wilson</h5>
                              <p className="mb-0">Businessman</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="client-testimonial__slider-dot"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}
        {/* <section className="client-testimonial section-space overflow-hidden">
          <div className="container">
            <div className="client-testimonial__shape">
              <img
                className="img-fluid"
                src="/assets/imgs/testimonial/client-testimonial__helth.png"
                alt="icon not found"
              />
            </div>
            <div className="row align-items-end mb-60 mb-sm-50 mb-xs-40">
              <div className="col-lg-7">
                <div className="section__title-wrapper client-testimonial__content">
                  <h5 className="section__subtitle color-theme-primary mb-15 mb-xs-10 title-animation">
                    <img
                      src="/assets/imgs/ask-quesiton/heart.png"
                      alt="icon not found"
                      className="img-fluid"
                    />{" "}
                    Clients Testimonial
                  </h5>
                  <h2 className="section__title mb-0 title-animation">
                    Nurture Nature Blossoming in Health and Happiness
                  </h2>
                </div>
              </div>

              <div className="col-lg-5">
                <div className="client-testimonial__content-right mt-md-25 mt-sm-25 mt-xs-25">
                  <p className="mb-0">
                    Medical science encompasses a vastf fields dedicated to
                    understanding and treating ailments, promotin health, and
                    enhanci quality of life. Here's a brief exploration into
                    this multifaceted domain medical student
                  </p>
                </div>
              </div>
            </div>

            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="client-testimonial__media">
                  <img
                    className="img-fluid"
                    src="/assets/imgs/client-testimonial/client-testimonial.png"
                    alt="icon not found"
                  />
                </div>
              </div>

              <div className="col-lg-6">
                <div className="client-testimonial__slider-wrapper">
                  <div className="swiper client-testimonial__slider">
                    <div className="swiper-wrapper">
                      <div className="swiper-slide">
                        <div className="client-testimonial__item">
                          <div className="client-testimonial__item-icon mb-30 mb-xs-25">
                            <img
                              className="img-fluid"
                              src="/assets/imgs/client-testimonial/qoute.png"
                              alt="icon not found"
                            />
                          </div>

                          <p className="mb-30 mb-xs-25">
                            Leverage agile frameworks provide a robust synopsis
                            for strategy foster Leverage a frame works to
                            provide a robust synopsis for strateg fr
                            collaborative thinking to further the overall value
                            prop osition
                          </p>

                          <div className="client-testimonial__item-author d-flex align-items-center">
                            <div className="client-testimonial__item-author-thumb">
                              <img
                                className="img-fluid"
                                src="/assets/imgs/client-testimonial/thumb.png"
                                alt="icon not found"
                              />
                            </div>
                            <div className="client-testimonial__item-author-content">
                              <h5>Jenny Wilson</h5>
                              <p className="mb-0">Businessman</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="client-testimonial__item">
                          <div className="client-testimonial__item-icon mb-30 mb-xs-25">
                            <img
                              className="img-fluid"
                              src="/assets/imgs/client-testimonial/qoute.png"
                              alt="icon not found"
                            />
                          </div>

                          <p className="mb-30 mb-xs-25">
                            Leverage agile frameworks provide a robust synopsis
                            for strategy foster Leverage a frame works to
                            provide a robust synopsis for strateg fr
                            collaborative thinking to further the overall value
                            prop osition
                          </p>

                          <div className="client-testimonial__item-author d-flex align-items-center">
                            <div className="client-testimonial__item-author-thumb">
                              <img
                                className="img-fluid"
                                src="/assets/imgs/client-testimonial/thumb.png"
                                alt="icon not found"
                              />
                            </div>
                            <div className="client-testimonial__item-author-content">
                              <h5>Jenny Wilson</h5>
                              <p className="mb-0">Businessman</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="client-testimonial__item">
                          <div className="client-testimonial__item-icon mb-30 mb-xs-25">
                            <img
                              className="img-fluid"
                              src="/assets/imgs/client-testimonial/qoute.png"
                              alt="icon not found"
                            />
                          </div>

                          <p className="mb-30 mb-xs-25">
                            Leverage agile frameworks provide a robust synopsis
                            for strategy foster Leverage a frame works to
                            provide a robust synopsis for strateg fr
                            collaborative thinking to further the overall value
                            prop osition
                          </p>

                          <div className="client-testimonial__item-author d-flex align-items-center">
                            <div className="client-testimonial__item-author-thumb">
                              <img
                                className="img-fluid"
                                src="/assets/imgs/client-testimonial/thumb.png"
                                alt="icon not found"
                              />
                            </div>
                            <div className="client-testimonial__item-author-content">
                              <h5>Jenny Wilson</h5>
                              <p className="mb-0">Businessman</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="client-testimonial__slider-dot"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}
        {/* <!-- client-testimonial area end --> */}

        {/* <!-- Brand area start --> */}
        {/* <div className="brand__area section-space__bottom">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="swiper brand__active">
                  <div className="swiper-wrapper">
                    <div className="swiper-slide">
                      <div className="brand__item text-center">
                        <div className="brand__thumb">
                          <img
                            className="img-fluid"
                            src="/assets/imgs/brand/brand-1.png"
                            alt="image not found"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="brand__item text-center">
                        <div className="brand__thumb">
                          <img
                            className="img-fluid"
                            src="/assets/imgs/brand/brand-2.png"
                            alt="image not found"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="brand__item text-center">
                        <div className="brand__thumb">
                          <img
                            className="img-fluid"
                            src="/assets/imgs/brand/brand-3.png"
                            alt="image not found"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="brand__item text-center">
                        <div className="brand__thumb">
                          <img
                            className="img-fluid"
                            src="/assets/imgs/brand/brand-4.png"
                            alt="image not found"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="brand__item text-center">
                        <div className="brand__thumb">
                          <img
                            className="img-fluid"
                            src="/assets/imgs/brand/brand-5.png"
                            alt="image not found"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </main>

      {/* <section className="footer__cta footer__cta-bottom-up">
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

export default AboutPage;
