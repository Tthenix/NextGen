import React from 'react';
import {
  createBrowserRouter
} from "react-router-dom";

import Home from './pages/Home';
import ReadMore from './pages/ReadMore';
import LayoutPublic from './layout/LayoutPublic';
import NotFound from './pages/NotFound';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import Perfil from './pages/Perfil';
import AboutUs from './pages/AboutUs';


export const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutPublic />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/perfil",
        element: <Perfil />,
      },
      {
        path: "/aboutUs",
        element: <AboutUs />,
      },
      {
        path: "/readMore",
        element: <ReadMore />,
      },
    ],
  },
]);


export default router;
