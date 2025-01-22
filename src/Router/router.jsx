import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import Home from "../Pages/Home";
import OurMenuPage from "../Pages/OurMenuPage";
import OurShop from "../Pages/OurShop";
import ContactUs from "../Pages/ContactUs";
import SignIn from "../Pages/SignIn";
import PrivateRoute from "./PrivateRoute";
import SignUp from "../Pages/SignUp";
import Dashboard from "./../Layout/Dashboard";
import Cart from "./../Pages/Dashboard/Cart";
import DashboardHome from "./../Pages/Dashboard/DashboardHome";
import Reservation from "./../Pages/Dashboard/Reservation";
import MyCart from "../Pages/Dashboard/User/MyCart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    // errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <OurMenuPage />,
      },
      {
        path: "/ourShop",
        element: (
          <PrivateRoute>
            <OurShop />
          </PrivateRoute>
        ),
      },
      {
        path: "/contactUs",
        element: <ContactUs />,
      },
      {
        path: "/signIn",
        element: <SignIn />,
      },
      {
        path: "/signUp",
        element: <SignUp />,
      },
    ],
  },
  {
    path: "dashboard",
    element: <Dashboard />,
    children: [
      { path: "home", element: <DashboardHome /> },
      { path: "reservation", element: <Reservation /> },
      { path: "myCart", element: <MyCart /> },
    ],
  },
]);

export default router;
