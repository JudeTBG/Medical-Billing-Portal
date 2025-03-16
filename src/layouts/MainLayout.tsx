import React, { ReactNode, useState, useEffect } from "react";
import Header from "../components/HomeNav";
import Footer from "../components/Footer";

interface Props {
  children: ReactNode;
}
const MainLayout: React.FC<Props> = ({ children }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="main-layout">
      <div id="preloader" style={{ display: loading ? "block" : "none" }}>
        <div className="preloader-close" onClick={() => setLoading(false)}>
          x
        </div>
        <div className="sk-three-bounce">
          <div className="sk-child sk-bounce1"></div>
          <div className="sk-child sk-bounce2"></div>
          <div className="sk-child sk-bounce3"></div>
        </div>
      </div>
      <div className="loading-form">
        <div className="sk-three-bounce">
          <div className="sk-child sk-bounce1"></div>
          <div className="sk-child sk-bounce2"></div>
          <div className="sk-child sk-bounce3"></div>
        </div>
      </div>
      <div id="scroll-percentage">
        <span
          id="scroll-percentage-value"
          data-default-color="var(--rr-color-900)"
          data-scroll-color="var(--rr-theme-primary)"
        ></span>
      </div>
      <Header />
      <section>{children}</section>
      <Footer />
    </main>
  );
};
export default MainLayout;
