import React, { useState } from "react";
import MainLayout from "../../layouts/MainLayout";

const HomePage: React.FC = () => {
  const [readmore1, setReadmore1] = useState(true);
  const [readmore2, setReadmore2] = useState(true);
  const [readmore3, setReadmore3] = useState(true);
  const [readmore4, setReadmore4] = useState(true);
  return (
    <MainLayout>
      <main className="body-background">
        <section className="banner banner__space overflow-hidden">
          <div className="container">
            <div className="banner__shape">
              <img
                src="/assets/imgs/banner/banner-shape.png"
                alt="image not found"
              />
            </div>
            <div className="row">
              <div className="col-12">
                <div className="banner__content text-center">
                  <h1 className="mb-25 mb-xs-20 title-animation">
                    Simplifying Medical Billing for a Healthier Bottom Line
                  </h1>
                  <a href="/about" className="rr-btn">
                    <div className="panel wow"></div>
                    <span className="btn-wrap">
                      <span className="text-one">
                        Read More <i className="fa-solid fa-plus"></i>
                      </span>
                      <span className="text-two">
                        Read More <i className="fa-solid fa-plus"></i>
                      </span>
                    </span>
                  </a>
                  <div className="banner__media mt-45 mt-xs-35 position-relative">
                    <div className="panel wow"></div>
                    <img
                      className="img-fluid"
                      data-parallax='{"scale": 1.2, "smoothness": 15}'
                      src="/assets/imgs/home/marek-studzinski-ZFfBwfiB2CM-unsplash.jpg"
                      alt="images not found"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="service service__space">
          <div className="container">
            <div className="row mb-minus-30">
              <div className="col-xl-4 col-lg-4 col-md-4">
                <div className="service__item mb-30">
                  <div className="service__item-icon mb-20 mb-xs-15">
                    <img
                      src="/assets/imgs/home/payment.png"
                      alt="icon not found"
                    />
                  </div>

                  {/* <h4 className="mb-25 mb-xs-20"><a href="/faq">Harbor Health</a></h4> */}

                  <p className="mb-40 mb-xs-30">
                    <b>Stop waiting for payments</b> <br /> We streamline your
                    billing, minimize errors, and aggressively follow up on
                    claims, significantly reducing your accounts receivable
                    timeline.
                  </p>

                  {/* <a className="rr-a-btn" href="/faq">Read More <i className="fa-solid fa-circle-plus"></i></a> */}
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-4">
                <div className="service__item mb-30">
                  <div className="service__item-icon mb-20 mb-xs-15">
                    <img
                      src="/assets/imgs/home/revenue_cycle.png"
                      alt="icon not found"
                    />
                  </div>

                  {/* <h4 className="mb-25 mb-xs-20"><a href="/faq">Radius Wellness</a></h4> */}

                  <p className="mb-40 mb-xs-30">
                    <b>Accelerate Your Revenue Cycle</b> <br /> Our expert
                    medical billing services ensure faster claims processing and
                    quicker reimbursements, putting more money in your practice,
                    sooner.
                  </p>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-4">
                <div className="service__item mb-30">
                  <div className="service__item-icon mb-20 mb-xs-15">
                    <img
                      src="/assets/imgs/home/billings.png"
                      alt="icon not found"
                    />
                  </div>

                  {/* <h4 className="mb-25 mb-xs-20"><a href="/faq">Radius Wellness</a></h4> */}

                  <p className="mb-40 mb-xs-30">
                    <b>Refine your billing process</b> <br /> We focus on
                    streamlining each step, from patient registration to payment
                    posting, minimizing errors and maximizing the efficiency of
                    your revenue cycle management.
                  </p>

                  {/* <a className="rr-a-btn" href="/faq">Read More <i className="fa-solid fa-circle-plus"></i></a> */}
                </div>
              </div>
              {/* <div className="col-xl-4 col-lg-4 col-md-4">
                <div className="service__item mb-30">
                  <div className="service__item-icon mb-20 mb-xs-15">
                    <img
                      src="/assets/imgs/service/service__item-4.png"
                      alt="icon not found"
                    />
                  </div>

                  <h4 className="mb-25 mb-xs-20"><a href="/faq">Net Healthcare</a></h4>

                  <p className="mb-40 mb-xs-30">
                    Et purus duis sollicitudin sed dign issim habi tant. Egestas
                    nulla quis venenatis Et purus{" "}
                  </p>

                  <a className="rr-a-btn" href="/faq">
                    Read More <i className="fa-solid fa-circle-plus"></i>
                  </a>
                </div>
              </div> */}
            </div>
          </div>
        </section>

        <section className="about-us section-space overflow-hidden">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-6">
                <div className="section__title-wrapper about-us__content">
                  <h5 className="section__subtitle color-theme-primary mb-15 mb-xs-10 title-animation">
                    <img
                      src="/assets/imgs/ask-quesiton/heart.png"
                      alt="icon not found"
                      className="img-fluid"
                    />{" "}
                    Brief Introduction
                  </h5>

                  <p className="mb-30 mb-xs-25">
                    At Jude Billing Solutions, we're dedicated to maximizing
                    your revenue and streamlining your medical billing
                    processes. With years of experience and a team of certified
                    professionals, we ensure accurate coding, timely claim
                    submission, and effective denial management. Let us handle
                    the complexities of medical billing so you can focus on
                    providing exceptional patient care.
                  </p>
                </div>
              </div>

              <div className="col-xl-6">
                <div className="about-us__media d-flex flex-column flex-sm-row align-items-sm-start align-items-center justify-content-xl-end justify-content-center">
                  {/* <img
                    className="img-fluid about-us__media-big-shape"
                    src="/assets/imgs/about-us/shape-big.png"
                    alt="icon not found"
                  /> */}

                  <div className="about-us__media-experience-box__wrapper text-end">
                    <div className="about-us__media-img img1">
                      <img
                        style={{ height: 275, width: 292, objectFit: "cover" }}
                        className="img-fluid"
                        // className="img-fluid shape downUp"
                        src="/assets/imgs/home/david-travis-5bYxXawHOQg-unsplash.jpg"
                        alt="icon not found"
                      />
                    </div>
                    {/* <div className="about-us__media-experience-box d-inline-flex mt-20 text-start">
                      <h2 className="mb-0">
                        <span className="odometer" data-count="25">
                          0
                        </span>
                      </h2>
                      <p className="mb-0">Years Of experiences</p>
                    </div> */}
                  </div>
                  <div className="about-us__media-img img2">
                    {/* <img
                      style={{ width: 299, height: 516 }}
                      className="img-fluid"
                      alt="icon not found"
                    /> */}
                  </div>
                </div>
              </div>
            </div>

            <section className="treatment-process section-space__bottom">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <div className="section__title-wrapper treatment-process__content text-center mb-60 mb-xs-40">
                      <h2 className="section__title mb-20 mb-xs-15 title-animation">
                        Accurate, Efficient, and Reliable Medical Billing
                        Services
                      </h2>
                      <p className="mb-0">
                        Tired of dealing with claim denials and delayed
                        payments? Jude Billing Solutions offers comprehensive
                        medical billing solutions tailored to your practice's
                        needs. We'll help you increase revenue, improve cash
                        flow, and reduce administrative burdens, allowing you to
                        focus on what matters most – your patients.
                      </p>
                    </div>
                    <div className="skill-one__progress">
                      <div className="skill-one__progress-single">
                        <h5 className="skill-one__progress-title mb-10">
                          • Increased Revenue
                        </h5>
                      </div>
                      <div className="skill-one__progress-single">
                        <h5 className="skill-one__progress-title mb-10">
                          • Reduced Administrative Burden{" "}
                        </h5>
                      </div>
                      <div className="skill-one__progress-single">
                        <h5 className="skill-one__progress-title mb-10">
                          • Improved Compliance
                        </h5>
                      </div>{" "}
                      <div className="skill-one__progress-single">
                        <h5 className="skill-one__progress-title mb-10">
                          • Enhanced Patient Satisfaction
                        </h5>
                      </div>
                    </div>
                    <div style={{display:"flex",justifyContent:"center"}} className="treatment-process__media mb-30">
                      <iframe
                        width="80%"
                        height="500"
                        src="https://www.youtube.com/embed/1i1EzDtZpFA"
                        title="YouTube video"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>

                      {/* <a
                        href="https://www.youtube.com/watch?v=dyNpojnbNT4"
                        className="popup-video zooming"
                        data-effect="mfp-move-from-top vertical-middle"
                      >
                        <i className="fa-thin fa-play"></i>
                      </a> */}
                    </div>
                  </div>
                </div>

                <div className="row mb-minus-30">
                  <div className="col-xxl-3 col-lg-4 col-md-6">
                    <div className="treatment-process__item mb-30 text-center">
                      <div className="treatment-process__item-icon mb-20 mb-xs-15">
                        <img
                          src="/assets/imgs/treatment-process/treatment-process__item-1.png"
                          alt="icon not found"
                        />
                      </div>
                      <h4 className="mb-15 mb-xs-10">
                        <a href="/faq">
                          {" "}
                          Judebilling Solutions: Enhancing Your Revenue Cycle
                          Management
                        </a>
                      </h4>
                      <p className="mb-0">
                        {`   In today's complex healthcare landscape, efficient
                        Revenue Cycle Management (RCM) is paramount for
                        financial stability and allows healthcare providers to
                        focus on delivering quality patient care. Judebilling
                        Solutions offers a comprehensive suite of services
                        designed to optimize your RCM, minimize financial
                        losses, and improve your overall practice performance.
                        How Judebilling Solutions Improves Your RCM: - Reduces
                        Claim Denials: Our expert team ensures accurate coding
                        and meticulous claim preparation, significantly reducing
                        the chances of denials and rejections. This leads to
                        faster payment cycles and improved cash flow. -
                        Accelerates Payment Processing: By efficiently managing
                        the billing and follow-up processes, we minimize delays
                        in payments from insurance companies and patients,
                        ensuring a consistent revenue stream. - Optimizes
                        Collections: We proactively manage accounts receivable,
                        diligently following up on outstanding claims and
                        patient balances. This systematic approach maximizes
                        collections and reduces bad debt. - Ensures Compliance:
                        Our team stays up-to-date with the latest billing
                        regulations and coding guidelines, ensuring your
                        practice remains compliant and avoids costly penalties.
                        - Increases Efficiency: By outsourcing your RCM to
                        Judebilling Solutions, your staff can focus on core
                        competencies, such as patient care, leading to increased
                        productivity and satisfaction. - Provides Transparency:
                        We offer detailed reports and analytics, giving you
                        clear insights into your revenue cycle performance,
                        allowing you to make informed decisions and identify
                        areas for improvement. - Reduces Administrative Burden:
                        We handle the time-consuming and complex tasks
                        associated with medical billing, freeing up your staff
                        to concentrate on patient-centric activities. Benefits
                        of Partnering with Judebilling Solutions: - Improved
                        Financial Health: Our expertise in RCM translates to
                        increased revenue, reduced costs, and a healthier bottom
                        line for your practice. - Enhanced Focus on Patient
                        Care: By offloading billing responsibilities, your team
                        can dedicate more time and attention to patients,
                        improving satisfaction and outcomes. - Reduced
                        Operational Costs: Outsourcing your RCM can be more
                        cost-effective than maintaining an in-house billing
                        department, saving you on salaries, benefits, and
                        technology expenses. - Scalability: Our services can
                        scale with your practice, ensuring consistent and
                        efficient RCM regardless of your growth. - Access to
                        Expertise: You gain access to a team of experienced and
                        certified billing professionals who are experts in
                        navigating the complexities of medical billing.
                        Judebilling Solutions is committed to providing tailored
                        RCM solutions that meet the unique needs of your
                        practice. By partnering with us, you can optimize your
                        revenue cycle, improve financial performance, and focus
                        on what matters most – your patients.`.slice(
                          0,
                          readmore1 ? 300 : Infinity
                        )}
                        {readmore1 ? (
                          <a
                            onClick={() => setReadmore1(false)}
                            className="rr-a-btn"
                          >
                            Read More{" "}
                            <i className="fa-solid fa-circle-plus"></i>
                          </a>
                        ) : (
                          <a
                            onClick={() => setReadmore1(true)}
                            className="rr-a-btn"
                          >
                            Read Less{" "}
                            <i className="fa-solid fa-circle-minus"></i>
                          </a>
                        )}
                      </p>
                    </div>
                  </div>
                  <div className="col-xxl-3 col-lg-4 col-md-6">
                    <div className="treatment-process__item mb-30 text-center">
                      <div className="treatment-process__item-icon mb-20 mb-xs-15">
                        <img
                          src="/assets/imgs/treatment-process/treatment-process__item-2.png"
                          alt="icon not found"
                        />
                      </div>
                      <h4 className="mb-15 mb-xs-10">
                        <a href="/faq">
                          Why Choose Judebilling Solutions? A Young and
                          Innovative RCM Company Serving The Healthcare Practice
                          Industry Across the US
                        </a>
                      </h4>
                      <p className="mb-0">
                        {` In the ever-evolving landscape of healthcare, choosing
                        the right Revenue Cycle Management (RCM) partner is
                        crucial for financial health and sustainable growth.
                        Judebilling Solutions stands out as a young and
                        innovative RCM company serving the healthcare practice
                        industry across the US, bringing a fresh perspective and
                        cutting-edge solutions to optimize your revenue cycle.
                        But being young doesn't mean lacking expertise. Our team
                        is comprised of seasoned RCM professionals, armed with
                        in-depth knowledge of the latest industry trends,
                        regulations, and technologies. We combine this
                        experience with a forward-thinking approach, constantly
                        seeking innovative ways to improve efficiency, reduce
                        denials, and maximize your revenue. What sets
                        Judebilling Solutions apart? - Specialized Expertise
                        Across Diverse Specialties: We understand that each
                        medical specialty has its unique billing nuances and
                        challenges. That's why we offer tailored RCM services
                        for a wide range of specialties, including but not
                        limited to: - Primary Care: Ensuring accurate coding for
                        routine visits and preventative care. - Specialty Care
                        (Cardiology, Dermatology, Gastroenterology, etc.):
                        Navigating complex coding requirements and prior
                        authorizations. - Surgical Practices: Handling intricate
                        billing for procedures, anesthesia, and facility fees. -
                        Radiology & Imaging: Expertise in modality-specific
                        coding and payer rules. - Mental Health: Understanding
                        the specific billing requirements for behavioral health
                        services. - Physical Therapy & Rehabilitation: Managing
                        billing for various therapy modalities and treatment
                        plans. - Oncology: Handling complex billing for
                        chemotherapy, radiation, and supportive care. Our
                        specialized teams possess a deep understanding of the
                        specific coding guidelines, payer policies, and
                        compliance regulations relevant to your specialty,
                        ensuring accurate claim submission and faster
                        reimbursement. - Technology-Driven Solutions: We
                        leverage the latest RCM technologies to streamline
                        processes, automate tasks, and enhance accuracy. Our
                        advanced systems provide real-time reporting, allowing
                        you to track your revenue cycle performance and identify
                        areas for improvement. This technological edge
                        translates to greater efficiency, reduced errors, and
                        faster turnaround times. - Client-Centric Approach: At
                        Judebilling Solutions, we believe in building strong,
                        collaborative partnerships with our clients. Our
                        dedicated account managers provide personalized support
                        and are always available to answer your questions and
                        address your concerns. Focus on Transparency and
                        Communication: We believe that clear and consistent
                        communication is key to a successful partnership. We
                        provide regular reports and updates on your revenue
                        cycle performance, ensuring you have complete visibility
                        into our processes and results. - Commitment to
                        Continuous Improvement: We are not content with the
                        status quo. We are constantly seeking ways to improve
                        our processes, enhance our technology, and stay ahead of
                        industry changes. This commitment to continuous
                        improvement ensures that you always receive the highest
                        level of service and the best possible results. Why
                        choose a young company? While experience is valuable, a
                        young company often brings a fresh perspective, agility,
                        and a willingness to embrace innovation. Judebilling
                        Solutions combines the expertise of seasoned
                        professionals with the dynamism of a new company,
                        offering you the best of both worlds. We are eager to
                        prove our value and are committed to going the extra
                        mile to ensure your success. Choosing Judebilling
                        Solutions means partnering with a dedicated team that is
                        passionate about optimizing your revenue cycle, allowing
                        you to focus on what matters most – providing excellent
                        patient care. We are confident that our specialized
                        expertise across various specialties, technology-driven
                        solutions, client-centric approach, and unwavering
                        commitment to your success make us the ideal RCM partner
                        for your practice. Let us help you navigate the
                        complexities of medical billing and unlock your
                        practice's full financial potential.`.slice(
                          0,
                          readmore2 ? 300 : Infinity
                        )}
                        {readmore2 ? (
                          <a
                            onClick={() => setReadmore2(false)}
                            className="rr-a-btn"
                          >
                            Read More{" "}
                            <i className="fa-solid fa-circle-plus"></i>
                          </a>
                        ) : (
                          <a
                            onClick={() => setReadmore1(true)}
                            className="rr-a-btn"
                          >
                            Read Less{" "}
                            <i className="fa-solid fa-circle-minus"></i>
                          </a>
                        )}
                      </p>
                    </div>
                  </div>
                  <div className="col-xxl-3 col-lg-4 col-md-6">
                    <div className="treatment-process__item mb-30 text-center">
                      <div className="treatment-process__item-icon mb-20 mb-xs-15">
                        <img
                          src="/assets/imgs/treatment-process/treatment-process__item-3.png"
                          alt="icon not found"
                        />
                      </div>
                      <h4 className="mb-15 mb-xs-10">
                        <a href="/faq">
                          Expertise Across Specialties: Judebilling Solutions
                        </a>
                      </h4>
                      <p className="mb-0">
                        {`Judebilling Solutions understands the complexities of
                        medical billing across different specialties. Navigating
                        the nuances of coding, payer rules, and compliance
                        regulations can be challenging, and that's where our
                        expertise comes in. We provide tailored RCM services for
                        a wide range of medical specialties, ensuring accuracy,
                        efficiency, and maximum reimbursement. Our Specialized
                        Teams: We have dedicated teams of billing and coding
                        specialists with in-depth knowledge of the specific
                        requirements for various specialties, including: -
                        Cardiology: Handling complex coding for diagnostic
                        procedures, interventions, and cardiac rehabilitation. -
                        Orthopedics: Expertise in billing for surgical
                        procedures, fracture care, and physical therapy related
                        to musculoskeletal conditions. - Oncology: Managing
                        intricate billing for chemotherapy, radiation therapy,
                        and other cancer treatments. - Gastroenterology:
                        Accurate coding for endoscopic procedures, diagnostic
                        testing, and treatment of digestive disorders. -
                        Obstetrics and Gynecology: Specializing in billing for
                        prenatal care, delivery, gynecological procedures, and
                        women's health services. - Radiology: Expertise in
                        coding for various imaging modalities, including X-rays,
                        CT scans, MRIs, and ultrasounds. - Mental Health:
                        Understanding the specific billing requirements for
                        psychiatric evaluations, therapy sessions, and
                        medication management. - And many more: Our expertise
                        extends to numerous other specialties, ensuring
                        comprehensive coverage for your practice. Tailored
                        Solutions for Your Specialty: We recognize that each
                        specialty has unique billing challenges. Our approach
                        involves: - Specialized Coding: Our certified coders are
                        proficient in the specific coding guidelines (ICD-10,
                        CPT, HCPCS) relevant to your specialty, ensuring
                        accurate claim submission. - Payer Knowledge: We stay
                        up-to-date on the specific payer policies and
                        requirements for your specialty, minimizing denials and
                        maximizing reimbursement. - Compliance Expertise: We
                        ensure that your billing practices comply with all
                        relevant regulations, including HIPAA and
                        specialty-specific guidelines. - Customized Workflows:
                        We develop tailored workflows to address the unique
                        billing processes and challenges of your specialty.
                        Benefits of Our Specialty-Focused Approach: - Reduced
                        Denials: Our expertise in specialty-specific coding and
                        payer rules leads to fewer claim denials. - Faster
                        Reimbursement: Accurate claim submission and efficient
                        follow-up result in quicker payments. - Increased
                        Revenue: By maximizing collections and minimizing
                        revenue leakage, we help improve your bottom line. -
                        Improved Compliance: Our knowledge of regulations
                        ensures your practice stays compliant, avoiding
                        penalties and audits. - At Judebilling Solutions, we are
                        committed to providing the highest level of expertise
                        and service to meet the unique needs of your specialty.
                        Partner with us to optimize your revenue cycle and
                        achieve financial success.`.slice(
                          0,
                          readmore3 ? 300 : Infinity
                        )}
                        {readmore3 ? (
                          <a
                            onClick={() => setReadmore3(false)}
                            className="rr-a-btn"
                          >
                            Read More{" "}
                            <i className="fa-solid fa-circle-plus"></i>
                          </a>
                        ) : (
                          <a
                            onClick={() => setReadmore3(true)}
                            className="rr-a-btn"
                          >
                            Read Less{" "}
                            <i className="fa-solid fa-circle-minus"></i>
                          </a>
                        )}
                      </p>
                    </div>
                  </div>
                  <div className="col-xxl-3 col-lg-4 col-md-6">
                    <div className="treatment-process__item mb-30 text-center">
                      <div className="treatment-process__item-icon mb-20 mb-xs-15">
                        <img
                          src="/assets/imgs/treatment-process/treatment-process__item-4.png"
                          alt="icon not found"
                        />
                      </div>
                      <h4 className="mb-15 mb-xs-10">
                        <a href="/faq">
                          Protecting Patient Privacy: Judebilling Solutions'
                          Commitment to HIPAA Compliance
                        </a>
                      </h4>
                      <p className="mb-0">
                        {` At Judebilling Solutions, we understand that handling
                        Protected Health Information (PHI) is a responsibility
                        of the utmost importance. Compliance with the Health
                        Insurance Portability and Accountability Act (HIPAA) is
                        not just a regulatory requirement for us – it's a
                        fundamental aspect of our operations and a testament to
                        our commitment to safeguarding the privacy and security
                        of the patients whose information we process. HIPAA sets
                        the national standard for protecting sensitive patient
                        health information. It encompasses the Privacy Rule,
                        which establishes guidelines for the use and disclosure
                        of PHI, and the Security Rule, which outlines the
                        safeguards necessary to protect electronic PHI (ePHI).
                        Judebilling Solutions has built its infrastructure and
                        processes with these stringent requirements at the
                        forefront. Our Comprehensive Approach to HIPAA
                        Compliance: We have implemented a multi-faceted approach
                        to ensure adherence to all aspects of HIPAA regulations:
                        - Robust Security Infrastructure: We maintain a secure
                        technological environment designed to protect ePHI from
                        unauthorized access, use, or disclosure. This includes
                        employing advanced encryption methods for data
                        transmission and storage, implementing strict access
                        controls that limit information access to authorized
                        personnel based on their roles, and utilizing firewalls
                        and intrusion detection systems to safeguard our
                        networks. - Stringent Policies and Procedures: Our
                        internal policies and procedures are meticulously
                        crafted to align with HIPAA guidelines. These protocols
                        govern how PHI is handled throughout our operations,
                        from the moment we receive it to its secure storage and
                        eventual disposal. We regularly review and update these
                        policies to reflect any changes in regulations or best
                        practices. - Dedicated Employee Training: Every member
                        of the Judebilling Solutions team undergoes
                        comprehensive and ongoing HIPAA training. This training
                        covers the intricacies of the Privacy and Security
                        Rules, emphasizing the importance of patient
                        confidentiality, the proper handling of PHI, and the
                        potential consequences of non-compliance. We foster a
                        culture of privacy awareness, ensuring that every
                        employee understands their role in protecting patient
                        information. - Business Associate Agreements (BAAs): We
                        recognize our role as a Business Associate under HIPAA
                        and maintain Business Associate Agreements with our
                        clients. These agreements clearly outline our
                        responsibilities in protecting PHI and ensure a shared
                        commitment to compliance. - Access Controls and
                        Authentication: We implement strict access controls,
                        ensuring that only authorized personnel can access PHI
                        necessary for their job functions. This includes
                        multi-factor authentication and regular reviews of
                        access privileges. - Regular Security Assessments: We
                        regularly cross check and ensure the ongoing
                        effectiveness of our security measures. This proactive
                        approach allows us to continuously strengthen our
                        defenses and maintain a secure environment. - Incident
                        Response Plan: While we take every precaution to prevent
                        breaches, we also have a comprehensive incident response
                        plan in place to address any potential security
                        incidents. This plan outlines the steps we would take to
                        identify, contain, and remediate a breach, as well as
                        our procedures for notifying affected parties as
                        required by the Breach Notification Rule. Our Commitment
                        to Your Security and Your Patients' Privacy: At
                        Judebilling Solutions, we understand that the trust you
                        place in us to handle sensitive patient information is
                        paramount. Our unwavering commitment to HIPAA compliance
                        is a testament to our dedication to maintaining that
                        trust. We strive to be a reliable partner, ensuring that
                        your billing processes are not only efficient but also
                        conducted with the highest regard for patient privacy
                        and data security. By choosing Judebilling Solutions,
                        you can be confident that your patients' information is
                        in safe hands. We are dedicated to maintaining a secure
                        and compliant environment, allowing you to focus on
                        providing excellent patient care.`.slice(
                          0,
                          readmore4 ? 300 : Infinity
                        )}
                        {readmore4 ? (
                          <a
                            onClick={() => setReadmore4(false)}
                            className="rr-a-btn"
                          >
                            Read More{" "}
                            <i className="fa-solid fa-circle-plus"></i>
                          </a>
                        ) : (
                          <a
                            onClick={() => setReadmore4(true)}
                            className="rr-a-btn"
                          >
                            Read Less{" "}
                            <i className="fa-solid fa-circle-plus"></i>
                          </a>
                        )}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* <section className="pricing section-space__bottom">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <div className="section__title-wrapper text-center mb-60 mb-xs-40">
                      <h2 className="section__title mb-0 title-animation">
                        Cost Breakdown Summary
                      </h2>
                    </div>
                  </div>
                </div>

                <div className="row mb-minus-30">
                  <div className="col-xl-4 col-md-6">
                    <div className="pricing__item mb-30">
                      <h3 className="mb-15 mb-xs-10">Consult</h3>

                      <h2 className="pricing__item-price mb-25 mb-xs-20">
                        $19 <span className="body-font">/month</span>
                      </h2>

                      <p className="mb-20 pb-20 pricing__item__border-bottom">
                        Lorem Ipsum is simply dummy text the printing and typese
                        Lorem Ipsum
                      </p>

                      <div className="pricing__item-body">
                        <ul>
                          <li>
                            <i className="fa-solid fa-angle-right"></i> Mistakes
                            To Avoid
                          </li>
                          <li>
                            <i className="fa-solid fa-angle-right"></i> Your
                            Startup
                          </li>
                          <li>
                            <i className="fa-solid fa-angle-right"></i> Knew
                            About Fonts
                          </li>
                          <li>
                            <i className="fa-solid fa-angle-right"></i> Knew
                            About Fonts
                          </li>
                        </ul>
                      </div>

                      <a href="#" className="rr-btn mt-40 mt-xs-30">
                        <span className="btn-wrap">
                          <span className="text-one">
                            Start now{" "}
                            <i className="fa-solid fa-circle-plus"></i>
                          </span>
                          <span className="text-two">
                            Start now{" "}
                            <i className="fa-solid fa-circle-plus"></i>
                          </span>
                        </span>
                      </a>
                    </div>
                  </div>

                  <div className="col-xl-4 col-md-6">
                    <div className="pricing__item active mb-30">
                      <h3 className="mb-15 mb-xs-10">Intensive</h3>

                      <h2 className="pricing__item-price mb-25 mb-xs-20">
                        $40 <span className="body-font">/month</span>
                      </h2>

                      <p className="mb-20 pb-20 pricing__item__border-bottom">
                        Lorem Ipsum is simply dummy text the printing and typese
                        Lorem Ipsum
                      </p>

                      <div className="pricing__item-body">
                        <ul>
                          <li>
                            <i className="fa-solid fa-angle-right"></i> Mistakes
                            To Avoid
                          </li>
                          <li>
                            <i className="fa-solid fa-angle-right"></i> Your
                            Startup
                          </li>
                          <li>
                            <i className="fa-solid fa-angle-right"></i> Knew
                            About Fonts
                          </li>
                          <li>
                            <i className="fa-solid fa-angle-right"></i> Knew
                            About Fonts
                          </li>
                        </ul>
                      </div>

                      <a href="#" className="rr-btn mt-40 mt-xs-30">
                        <span className="btn-wrap">
                          <span className="text-one">
                            Start now{" "}
                            <i className="fa-solid fa-circle-plus"></i>
                          </span>
                          <span className="text-two">
                            Start now{" "}
                            <i className="fa-solid fa-circle-plus"></i>
                          </span>
                        </span>
                      </a>
                    </div>
                  </div>

                  <div className="col-xl-4 col-md-6">
                    <div className="pricing__item mb-30">
                      <h3 className="mb-15 mb-xs-10">Private</h3>

                      <h2 className="pricing__item-price mb-25 mb-xs-20">
                        $99 <span className="body-font">/month</span>
                      </h2>

                      <p className="mb-20 pb-20 pricing__item__border-bottom">
                        Lorem Ipsum is simply dummy text the printing and typese
                        Lorem Ipsum
                      </p>

                      <div className="pricing__item-body">
                        <ul>
                          <li>
                            <i className="fa-solid fa-angle-right"></i> Mistakes
                            To Avoid
                          </li>
                          <li>
                            <i className="fa-solid fa-angle-right"></i> Your
                            Startup
                          </li>
                          <li>
                            <i className="fa-solid fa-angle-right"></i> Knew
                            About Fonts
                          </li>
                          <li>
                            <i className="fa-solid fa-angle-right"></i> Knew
                            About Fonts
                          </li>
                        </ul>
                      </div>

                      <a href="#" className="rr-btn mt-40 mt-xs-30">
                        <span className="btn-wrap">
                          <span className="text-one">
                            Start now{" "}
                            <i className="fa-solid fa-circle-plus"></i>
                          </span>
                          <span className="text-two">
                            Start now{" "}
                            <i className="fa-solid fa-circle-plus"></i>
                          </span>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section> */}

            {/* <section className="testimonial section-space__bottom">
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-xl-6">
                    <div className="testimonial__media">
                      <img
                        className="img-fluid"
                        src="/assets/imgs/testimonial/testimonial.png"
                        alt="image not found"
                      />
                    </div>
                  </div>
                  <div className="col-xl-6">
                    <div className="swiper testimonial__slider mt-lg-40 mt-md-40 mt-sm-40 mt-xs-40">
                      <div className="swiper-wrapper">
                        <div className="swiper-slide">
                          <div className="testimonial__item">
                            <div className="testimonial__item-icon mb-20 mb-xs-15">
                              <img
                                className="img-fluid"
                                src="/assets/imgs/testimonial/qoute.png"
                                alt="icon not found"
                              />
                            </div>

                            <div className="testimonial__item-content mb-35 mb-xs-30">
                              <p className="mb-0">
                                Leverage agile frameworks to provide a robust
                                synopsis for strategy foster Leverage agile
                                frame works to provide a robust synopsis for
                                strateg foster collaborative thinking to further
                              </p>
                            </div>

                            <div className="testimonial__item-author d-flex align-items-center">
                              <div className="testimonial__item-thumb">
                                <img
                                  className="img-fluid"
                                  src="/assets/imgs/testimonial/thumb.png"
                                  alt="icon not found"
                                />
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
                              <img
                                className="img-fluid"
                                src="/assets/imgs/testimonial/qoute.png"
                                alt="icon not found"
                              />
                            </div>

                            <div className="testimonial__item-content mb-35 mb-xs-30">
                              <p className="mb-0">
                                Leverage agile frameworks to provide a robust
                                synopsis for strategy foster Leverage agile
                                frame works to provide a robust synopsis for
                                strateg foster collaborative thinking to further
                              </p>
                            </div>

                            <div className="testimonial__item-author d-flex align-items-center">
                              <div className="testimonial__item-thumb">
                                <img
                                  className="img-fluid"
                                  src="/assets/imgs/testimonial/thumb.png"
                                  alt="icon not found"
                                />
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
                          <svg
                            width="51"
                            height="16"
                            viewBox="0 0 51 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M0.292893 7.29289C-0.0976311 7.68342 -0.0976311 8.31658 0.292893 8.70711L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41421 8L8.07107 2.34315C8.46159 1.95262 8.46159 1.31946 8.07107 0.928932C7.68054 0.538408 7.04738 0.538408 6.65685 0.928932L0.292893 7.29289ZM1 9H51V7H1V9Z"
                              fill="#071C3C"
                            />
                          </svg>
                        </div>

                        <div className="testimonial__slider__arrow-next">
                          <svg
                            width="51"
                            height="16"
                            viewBox="0 0 51 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M50.7071 7.29289C51.0976 7.68342 51.0976 8.31658 50.7071 8.70711L44.3431 15.0711C43.9526 15.4616 43.3195 15.4616 42.9289 15.0711C42.5384 14.6805 42.5384 14.0474 42.9289 13.6569L48.5858 8L42.9289 2.34315C42.5384 1.95262 42.5384 1.31946 42.9289 0.928932C43.3195 0.538408 43.9526 0.538408 44.3431 0.928932L50.7071 7.29289ZM50 9H2.98023e-08V7H50V9Z"
                              fill="#071C3C"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section> */}

            <section className="ask-question section-space__top">
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-lg-6">
                    {/* <div className="section__title-wrapper ask-question__content mb-40 mb-xs-30">
                      <h5 className="section__subtitle color-theme-primary mb-15 mb-xs-10 title-animation">
                        <img
                          src="/assets/imgs/ask-quesiton/heart.png"
                          alt="icon not found"
                          className="img-fluid"
                        />{" "}
                        Ask Question
                      </h5>
                      <h2 className="section__title mb-0 title-animation">
                        Healing Harmony Uniting Care and Compassion
                      </h2>
                    </div> */}

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

                  {/* <div className="col-lg-6">
                    <div className="ask-question__media text-lg-end text-center mt-xs-40 mt-sm-40 mt-md-40 position-relative overflow-hidden">
                      <img
                        className="img-fluid"
                        src="/assets/imgs/ask-quesiton/ask-question.png"
                        alt="image not found"
                      />
                    </div>
                  </div> */}
                </div>
              </div>
            </section>

            {/* <div className="brand__area section-space">
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

            {/* <section className="team section-space__bottom">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <div className="section__title-wrapper text-center mb-60 mb-xs-40">
                      <h2 className="section__title mb-0 title-animation">
                        Physician Directory
                      </h2>
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
                              <img
                                className="img-fluid"
                                src="/assets/imgs/team/team__item-1.jpg"
                                alt="image not found"
                              />
                            </div>

                            <div className="team__item-content">
                              <div className="team__item-content-left">
                                <h4 className="mb-10">
                                  <a href="doctor-details.html">
                                    Kathryn Murphy
                                  </a>
                                </h4>
                                <p className="mb-0">Medical Assistant</p>
                              </div>

                              <div className="team__item-content-right">
                                <div className="team__item-content-share">
                                  <a href="https://x.com/">
                                    <svg
                                      width="16"
                                      height="16"
                                      viewBox="0 0 16 16"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M9.52217 6.77686L15.4785 0.00195312H14.0671L8.89516 5.88451L4.76437 0.00195312H0L6.24656 8.89742L0 16.002H1.41155L6.87321 9.78977L11.2356 16.002H16L9.52183 6.77686H9.52217ZM7.58887 8.97579L6.95596 8.09L1.92015 1.04169H4.0882L8.15216 6.72991L8.78507 7.61569L14.0677 15.0095H11.8997L7.58887 8.97613V8.97579Z"
                                        fill="#071C3C"
                                      />
                                    </svg>
                                  </a>
                                  <a href="https://www.facebook.com/">
                                    <i className="fa-brands fa-facebook-f"></i>
                                  </a>
                                  <a href="https://www.instagram.com/">
                                    <i className="fa-brands fa-instagram"></i>
                                  </a>
                                  <a href="https://bd.linkedin.com/">
                                    <i className="fa-brands fa-linkedin-in"></i>
                                  </a>
                                </div>
                                <button>
                                  <i className="fa-regular fa-share-nodes"></i>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="swiper-slide">
                          <div className="team__item">
                            <div className="team__item-media">
                              <img
                                className="img-fluid"
                                src="/assets/imgs/team/team__item-2.jpg"
                                alt="image not found"
                              />
                            </div>

                            <div className="team__item-content">
                              <div className="team__item-content-left">
                                <h4 className="mb-10">
                                  <a href="doctor-details.html">
                                    Savannah Nguyen
                                  </a>
                                </h4>
                                <p className="mb-0">Medical Assistant</p>
                              </div>

                              <div className="team__item-content-right">
                                <div className="team__item-content-share">
                                  <a href="https://x.com/">
                                    <svg
                                      width="16"
                                      height="16"
                                      viewBox="0 0 16 16"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M9.52217 6.77686L15.4785 0.00195312H14.0671L8.89516 5.88451L4.76437 0.00195312H0L6.24656 8.89742L0 16.002H1.41155L6.87321 9.78977L11.2356 16.002H16L9.52183 6.77686H9.52217ZM7.58887 8.97579L6.95596 8.09L1.92015 1.04169H4.0882L8.15216 6.72991L8.78507 7.61569L14.0677 15.0095H11.8997L7.58887 8.97613V8.97579Z"
                                        fill="#071C3C"
                                      />
                                    </svg>
                                  </a>
                                  <a href="https://www.facebook.com/">
                                    <i className="fa-brands fa-facebook-f"></i>
                                  </a>
                                  <a href="https://www.instagram.com/">
                                    <i className="fa-brands fa-instagram"></i>
                                  </a>
                                  <a href="https://bd.linkedin.com/">
                                    <i className="fa-brands fa-linkedin-in"></i>
                                  </a>
                                </div>
                                <button>
                                  <i className="fa-regular fa-share-nodes"></i>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="swiper-slide">
                          <div className="team__item">
                            <div className="team__item-media">
                              <img
                                className="img-fluid"
                                src="/assets/imgs/team/team__item-3.jpg"
                                alt="image not found"
                              />
                            </div>

                            <div className="team__item-content">
                              <div className="team__item-content-left">
                                <h4 className="mb-10">
                                  <a href="doctor-details.html">
                                    Courtney Henry
                                  </a>
                                </h4>
                                <p className="mb-0">Medical Assistant</p>
                              </div>

                              <div className="team__item-content-right">
                                <div className="team__item-content-share">
                                  <a href="https://x.com/">
                                    <svg
                                      width="16"
                                      height="16"
                                      viewBox="0 0 16 16"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M9.52217 6.77686L15.4785 0.00195312H14.0671L8.89516 5.88451L4.76437 0.00195312H0L6.24656 8.89742L0 16.002H1.41155L6.87321 9.78977L11.2356 16.002H16L9.52183 6.77686H9.52217ZM7.58887 8.97579L6.95596 8.09L1.92015 1.04169H4.0882L8.15216 6.72991L8.78507 7.61569L14.0677 15.0095H11.8997L7.58887 8.97613V8.97579Z"
                                        fill="#071C3C"
                                      />
                                    </svg>
                                  </a>
                                  <a href="https://www.facebook.com/">
                                    <i className="fa-brands fa-facebook-f"></i>
                                  </a>
                                  <a href="https://www.instagram.com/">
                                    <i className="fa-brands fa-instagram"></i>
                                  </a>
                                  <a href="https://bd.linkedin.com/">
                                    <i className="fa-brands fa-linkedin-in"></i>
                                  </a>
                                </div>
                                <button>
                                  <i className="fa-regular fa-share-nodes"></i>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="swiper-slide">
                          <div className="team__item">
                            <div className="team__item-media">
                              <img
                                className="img-fluid"
                                src="/assets/imgs/team/team__item-1.jpg"
                                alt="image not found"
                              />
                            </div>

                            <div className="team__item-content">
                              <div className="team__item-content-left">
                                <h4 className="mb-10">
                                  <a href="doctor-details.html">
                                    Kathryn Murphy
                                  </a>
                                </h4>
                                <p className="mb-0">Medical Assistant</p>
                              </div>

                              <div className="team__item-content-right">
                                <div className="team__item-content-share">
                                  <a href="https://x.com/">
                                    <svg
                                      width="16"
                                      height="16"
                                      viewBox="0 0 16 16"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M9.52217 6.77686L15.4785 0.00195312H14.0671L8.89516 5.88451L4.76437 0.00195312H0L6.24656 8.89742L0 16.002H1.41155L6.87321 9.78977L11.2356 16.002H16L9.52183 6.77686H9.52217ZM7.58887 8.97579L6.95596 8.09L1.92015 1.04169H4.0882L8.15216 6.72991L8.78507 7.61569L14.0677 15.0095H11.8997L7.58887 8.97613V8.97579Z"
                                        fill="#071C3C"
                                      />
                                    </svg>
                                  </a>
                                  <a href="https://www.facebook.com/">
                                    <i className="fa-brands fa-facebook-f"></i>
                                  </a>
                                  <a href="https://www.instagram.com/">
                                    <i className="fa-brands fa-instagram"></i>
                                  </a>
                                  <a href="https://bd.linkedin.com/">
                                    <i className="fa-brands fa-linkedin-in"></i>
                                  </a>
                                </div>
                                <button>
                                  <i className="fa-regular fa-share-nodes"></i>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="swiper-slide">
                          <div className="team__item">
                            <div className="team__item-media">
                              <img
                                className="img-fluid"
                                src="/assets/imgs/team/team__item-2.jpg"
                                alt="image not found"
                              />
                            </div>

                            <div className="team__item-content">
                              <div className="team__item-content-left">
                                <h4 className="mb-10">
                                  <a href="doctor-details.html">
                                    Savannah Nguyen
                                  </a>
                                </h4>
                                <p className="mb-0">Medical Assistant</p>
                              </div>

                              <div className="team__item-content-right">
                                <div className="team__item-content-share">
                                  <a href="https://x.com/">
                                    <svg
                                      width="16"
                                      height="16"
                                      viewBox="0 0 16 16"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M9.52217 6.77686L15.4785 0.00195312H14.0671L8.89516 5.88451L4.76437 0.00195312H0L6.24656 8.89742L0 16.002H1.41155L6.87321 9.78977L11.2356 16.002H16L9.52183 6.77686H9.52217ZM7.58887 8.97579L6.95596 8.09L1.92015 1.04169H4.0882L8.15216 6.72991L8.78507 7.61569L14.0677 15.0095H11.8997L7.58887 8.97613V8.97579Z"
                                        fill="#071C3C"
                                      />
                                    </svg>
                                  </a>
                                  <a href="https://www.facebook.com/">
                                    <i className="fa-brands fa-facebook-f"></i>
                                  </a>
                                  <a href="https://www.instagram.com/">
                                    <i className="fa-brands fa-instagram"></i>
                                  </a>
                                  <a href="https://bd.linkedin.com/">
                                    <i className="fa-brands fa-linkedin-in"></i>
                                  </a>
                                </div>
                                <button>
                                  <i className="fa-regular fa-share-nodes"></i>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="swiper-slide">
                          <div className="team__item">
                            <div className="team__item-media">
                              <img
                                className="img-fluid"
                                src="/assets/imgs/team/team__item-3.jpg"
                                alt="image not found"
                              />
                            </div>

                            <div className="team__item-content">
                              <div className="team__item-content-left">
                                <h4 className="mb-10">
                                  <a href="doctor-details.html">
                                    Courtney Henry
                                  </a>
                                </h4>
                                <p className="mb-0">Medical Assistant</p>
                              </div>

                              <div className="team__item-content-right">
                                <div className="team__item-content-share">
                                  <a href="https://x.com/">
                                    <svg
                                      width="16"
                                      height="16"
                                      viewBox="0 0 16 16"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M9.52217 6.77686L15.4785 0.00195312H14.0671L8.89516 5.88451L4.76437 0.00195312H0L6.24656 8.89742L0 16.002H1.41155L6.87321 9.78977L11.2356 16.002H16L9.52183 6.77686H9.52217ZM7.58887 8.97579L6.95596 8.09L1.92015 1.04169H4.0882L8.15216 6.72991L8.78507 7.61569L14.0677 15.0095H11.8997L7.58887 8.97613V8.97579Z"
                                        fill="#071C3C"
                                      />
                                    </svg>
                                  </a>
                                  <a href="https://www.facebook.com/">
                                    <i className="fa-brands fa-facebook-f"></i>
                                  </a>
                                  <a href="https://www.instagram.com/">
                                    <i className="fa-brands fa-instagram"></i>
                                  </a>
                                  <a href="https://bd.linkedin.com/">
                                    <i className="fa-brands fa-linkedin-in"></i>
                                  </a>
                                </div>
                                <button>
                                  <i className="fa-regular fa-share-nodes"></i>
                                </button>
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
            </section> */}

            {/* <section className="take-appointment section-space overflow-hidden">
              <div className="container">
                <div
                  className="take-appointment__container-shape"
                  data-background="/assets/imgs/take-appointment/container-shape.png"
                ></div>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="section__title-wrapper take-appointment__content">
                      <h5 className="section__subtitle color-theme-primary mb-15 mb-xs-10 title-animation">
                        <img
                          src="/assets/imgs/ask-quesiton/heart.png"
                          alt="icon not found"
                          className="img-fluid"
                        />{" "}
                        Take appointment
                      </h5>
                      <h2 className="section__title mb-20 mb-xs-15 title-animation">
                        Infinite Wellness Where Possibilities Unfold
                      </h2>

                      <p className="mb-30 mb-xs-25">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed sit amet rcus nunc. Duis egestas ac ante sed Lorem
                        ipsum dolor sit amet, consectetur adipiscing elit. Sed
                        sit amet rcus nunc. Duis egestas ac ante sed{" "}
                      </p>

                      <div className="take-appointment__call d-flex align-items-center">
                        <div className="take-appointment__call-icon">
                          <i className="fa-solid fa-phone"></i>
                        </div>
                        <div className="take-appointment__call-text">
                          <p className="mb-0">Requesting A Call:</p>
                          <h5 className="mb-0">
                            <a href="tel:6295550129">(629) 555-0129</a>
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="take-appointment__form mt-md-50 mt-sm-40 mt-xs-40">
                      <div className="row">
                        <div className="col-sm-6">
                          <div className="take-appointment__form-input">
                            <label>Your name</label>
                            <div className="input-wrapper">
                              <input
                                name="name"
                                id="name"
                                type="text"
                                placeholder="Your name..."
                              />
                              <i className="fa-solid fa-user"></i>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="take-appointment__form-input">
                            <label>Your Phone</label>
                            <div className="input-wrapper">
                              <input
                                name="phone"
                                id="phone"
                                type="text"
                                placeholder="Your phone..."
                              />
                              <i className="fa-solid fa-phone"></i>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="take-appointment__form-input">
                            <label>health type</label>
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
                            <label>Your Email</label>
                            <div className="input-wrapper">
                              <input
                                name="email"
                                id="email"
                                type="text"
                                placeholder="Your email..."
                              />
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
                            <label>Select Date</label>
                            <div className="input-wrapper">
                              <input
                                id="datepicker"
                                name="date"
                                type="text"
                                placeholder="YY/MM/DD"
                              />
                              <i className="fa-solid fa-calendar-days"></i>
                            </div>
                          </div>
                        </div>
                        <div className="col-12">
                          <button
                            type="submit"
                            className="rr-btn rr-btn__primary-color mt-10 mt-xs-10"
                          >
                            <span className="btn-wrap">
                              <span className="text-one">
                                Appointment now{" "}
                                <i className="fa-solid fa-plus"></i>
                              </span>
                              <span className="text-two">
                                Appointment now{" "}
                                <i className="fa-solid fa-plus"></i>
                              </span>
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section> */}

            {/* <section className="blog section-space__bottom">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <div className="section__title-wrapper text-center mb-60 mb-xs-40">
                      <h2 className="section__title mb-0 title-animation">
                        Latest Blog Hub
                      </h2>
                    </div>
                  </div>
                </div>

                <div className="row mb-minus-30">
                  <div className="col-xl-4 col-md-6">
                    <div className="blog__item mb-30">
                      <a href="/faq" className="blog__item-media d-block position-relative overflow-hidden">
                                                <div className="panel wow"></div>
                                                <img className="img-fluid" src="/assets/imgs/blog/blog-item-1.jpg" alt="image not found" />
                                            </a>

                      <div className="blog__item-content">
                        <div className="blog__item-content-date mb-15 mb-xs-10">
                          <i className="fa-solid fa-calendar-days"></i>{" "}
                          <span>October 19, 2022</span>
                        </div>
                        <h4 className="mb-15 mb-xs-10">
                          <a href="/faq">
                            Optimal Oasis Nurturing Health in Every Aspect
                          </a>
                        </h4>
                        <p className="mb-40 mb-xs-30">
                          Explore the dynamic commerce through our insightful
                          blogs. Learn Explore the dynamic
                        </p>

                        <a className="rr-a-btn" href="/faq">View More <i className="fa-solid fa-circle-plus"></i></a>
                      </div>
                    </div>
                  </div>

                  <div className="col-xl-4 col-md-6">
                    <div className="blog__item mb-30">
                      <a href="/faq" className="blog__item-media d-block position-relative overflow-hidden">
                                                <div className="panel wow"></div>
                                                <img className="img-fluid" src="/assets/imgs/blog/blog-item-2.jpg" alt="image not found" />
                                            </a>

                      <div className="blog__item-content">
                        <div className="blog__item-content-date mb-15 mb-xs-10">
                          <i className="fa-solid fa-calendar-days"></i>{" "}
                          <span>October 19, 2022</span>
                        </div>
                        <h4 className="mb-15 mb-xs-10">
                          <a href="/faq">Embark on Health Wellness Begins</a>
                        </h4>
                        <p className="mb-40 mb-xs-30">
                          Explore the dynamic commerce through our insightful
                          blogs. Learn Explore the dynamic
                        </p>

                        <a className="rr-a-btn" href="/faq">View More <i className="fa-solid fa-circle-plus"></i></a>
                      </div>
                    </div>
                  </div>

                  <div className="col-xl-4 col-md-6">
                    <div className="blog__item mb-30">
                      <a href="/faq" className="blog__item-media d-block position-relative overflow-hidden">
                                                <div className="panel wow"></div>
                                                <img className="img-fluid" src="/assets/imgs/blog/blog-item-3.jpg" alt="image not found" />
                                            </a>

                      <div className="blog__item-content">
                        <div className="blog__item-content-date mb-15 mb-xs-10">
                          <i className="fa-solid fa-calendar-days"></i>{" "}
                          <span>October 19, 2022</span>
                        </div>
                        <h4 className="mb-15 mb-xs-10">
                          <a href="/faq">
                            Flourishing Healthier Revive Radiance
                          </a>
                        </h4>
                        <p className="mb-40 mb-xs-30">
                          Explore the dynamic commerce through our insightful
                          blogs. Learn Explore the dynamic
                        </p>

                        <a className="rr-a-btn" href="/faq">View More <i className="fa-solid fa-circle-plus"></i></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section> */}
          </div>
        </section>
      </main>
    </MainLayout>
  );
};

export default HomePage;
