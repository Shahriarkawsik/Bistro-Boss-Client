import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import Footer from "./Components/Footer";

const Root = () => {
  const { pathname } = useLocation();

  return (
    <div>
      {pathname === "/signIn" || pathname === "/signUp" || <NavBar />}
      {/* <NavBar /> */}
      <div className="min-h-screen">
        <Outlet />
      </div>
      {pathname === "/signIn" || pathname === "/signUp" || <Footer />}
    </div>
  );
};

export default Root;
