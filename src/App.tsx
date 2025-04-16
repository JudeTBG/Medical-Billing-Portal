import React from "react";

import { RouteObject, useRoutes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/home/HomePage";
import AboutPage from "./pages/about/AboutPage";
import ContactPage from "./pages/contact/ContactPage";
import Testimonials from "./pages/testimonials/Testimonials";
import PageNotfound from "./pages/errors/PageNotfound";
import TermsPage from "./pages/terms/Terms";
import PrivacyPolicy from "./pages/privacyPolicy/PrivacyPolicy";

const App: React.FC = () => {
  const routes: RouteObject[] = [
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/home",
      element: <HomePage />,
    },
    {
      path: "/about",
      element: <AboutPage />,
    },
    {
      path: "/terms",
      element: <TermsPage />,
    },    {
      path: "/privacy-policy",
      element: <PrivacyPolicy />,
    },
    {
      path: "/contact",
      element: <ContactPage />,
    },
    {
      path: "/testimonials",
      element: <Testimonials />,
    },
    {
      path: "*",
      element: <PageNotfound />,
    },
  ];
  return useRoutes(routes);
};

export default App;
