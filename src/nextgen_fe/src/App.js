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
import Profile from './pages/Profile';
import AboutUs from './pages/AboutUs';
import CreateCards from './pages/CreateCards';
import Contribute from './components/Contribute';
import EditCard from './pages/EditCard';

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
        path: "/Profile",
        element: <Profile />,
      },
      {
        path: "/aboutUs",
        element: <AboutUs />,
      },
      {
        path: "/CreateCards",
        element: <CreateCards />,
      },
      {
        path: "/Contribute",
        element: <Contribute />,
      },
      {
        path: "/EditCard",
        element: <EditCard />,
      },
      {
        path: "/readMore",
        element: <ReadMore />,
      },
    ],
  },
]);


export default router;
