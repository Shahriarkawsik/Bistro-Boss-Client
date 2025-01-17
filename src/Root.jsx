import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import Footer from "./Components/Footer";

const Root = () => {
  return (
    <div>
      <NavBar />
      {/* className="min-h-screen" */}
      <div>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Root;
