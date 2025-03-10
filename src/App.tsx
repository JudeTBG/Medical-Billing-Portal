import React from 'react'

import { RouteObject, useRoutes } from "react-router-dom";
import './App.css'
import HomePage from './pages/home/HomePage';
import AboutPage from './pages/about/AboutPage';
import ContactPage from './pages/contact/ContactPage';
import FaqPage from './pages/faq/FaqPage';
import PageNotfound from './pages/errors/PageNotfound';

const App: React.FC = () => {

  const routes: RouteObject[] = [ 
    {
      path: "/",
      element: (
        <HomePage />
      ),
    },
    {
      path: "/about",
      element: (
        <AboutPage />
      ),
    },
    {
      path: "/contact",
      element: (
        <ContactPage />
      ),
    },
    // {
    //   path: "/faq",
    //   element: (
    //     <FaqPage />
    //   ),
    // },
    {
      path: "*",
      element: <PageNotfound />,
    },

  ]
  return useRoutes(routes);
}

export default App
