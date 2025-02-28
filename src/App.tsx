import React from 'react'
import {  RouteObject, useRoutes } from "react-router-dom";
import './App.css'
import HomePage from './pages/home/HomePage';
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
        path: "*",
        element: <PageNotfound />,
      },

    ]
    return useRoutes(routes);
}

export default App
