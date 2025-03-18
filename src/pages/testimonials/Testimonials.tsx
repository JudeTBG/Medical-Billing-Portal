import React, { useRef } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import "./index.css";
const Testimonials: React.FC = () => {
  const testimonialsData = [
    {
      id: 1,
      name: "Dr. Aisha Nair",
      role: "General Physician",
      testimonial:
        "The billing services have significantly reduced my administrative workload. Highly recommended!",
      image: "https://media.licdn.com/dms/image/v2/C5603AQGsjD7opw2vUg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1627559436012?e=2147483647&v=beta&t=mscHgi5rAuOmuKY8De9nYu_1402Lp7nJu3jMmyRXdgE",
    },
    {
      id: 2,
      name: "Rajesh Verma",
      role: "Clinic Manager",
      testimonial:
        "Accurate billing and quick claim processing. We’ve saved so much time and money!",
      image: "https://media.licdn.com/dms/image/v2/D4D03AQGNaz9hAJlu4g/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1727960593244?e=2147483647&v=beta&t=GH2lX2BSnyb580Q9TpRSDuiE7-3t-JtH9RFlUFUcT9s",
    },
    {
      id: 3,
      name: "Dr. Priya Mehta",
      role: "Medical Practitioner",
      testimonial:
        "Outstanding support and seamless integration with our existing system. A game-changer!",
      image: "https://philadelphia-allergy.com/wp-content/uploads/2023/04/priya-mehta-portrait.jpg",
    },
    {
      id: 4,
      name: "Ananya Iyer",
      role: "Hospital Administrator",
      testimonial:
        "Managing medical finances has never been this easy. A must-have for every hospital!",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgnO4yIfe8QG0_y7cZOvo79AyPUwVvZJAMpQ&s",
    },
    {
      id: 5,
      name: "Dr. Rohan Malhotra",
      role: "Cardiologist",
      testimonial:
        "Their precise billing system ensures no errors. I can focus on patient care stress-free.",
      image: "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1rGjt2.img?w=768&h=512&m=6&x=895&y=281&s=287&d=287",
    },

    {
      id: 7,
      name: "Dr. Neha Sharma",
      role: "Pediatrician",
      testimonial:
        "With their billing service, I can spend more time with my little patients instead of paperwork.",
      image: "https://assets.lybrate.com/img/documents/doctor/dp/dd9aee920d72e3faa1ee8b193cebfde6/Dentistry-NehaSharma-Gurgaon-51064e",
    },
    {
      id: 8,
      name: "Vikram Desai",
      role: "CEO, MedTech Solutions",
      testimonial:
        "Their technology-driven approach to billing has transformed our financial workflow.",
      image: "https://media.licdn.com/dms/image/v2/D5603AQFZZqfz4m0zJQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1684074698230?e=2147483647&v=beta&t=WH2jGy0J6liAWzMaoGI7_r3VHl1C_GuQXeN6ReP0G_c",
    },
  ];
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };
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
        <section className="testimonials">
          <h2>What Our Clients Say</h2>
          <div className="testimonials-wrapper">
            <button className="scroll-btn left" onClick={scrollLeft}>
              ‹
            </button>
            <div
              className="testimonials-scroll-container"
              ref={scrollContainerRef}
            >
              <div className="testimonials-container">
                {testimonialsData.map((testimonial) => (
                  <div key={testimonial.id} className="testimonial-card">
                    <div>

                      <img src={testimonial.image} alt={testimonial.name} />
                    </div>
                    <h3>{testimonial.name}</h3>
                    <p className="role">{testimonial.role}</p>
                    <p className="testimonial-text">
                      {testimonial.testimonial}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <button className="scroll-btn right" onClick={scrollRight}>
              ›
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Testimonials;
