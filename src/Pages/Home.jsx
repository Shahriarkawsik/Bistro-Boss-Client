import React from "react";
import Banner from "../Components/Banner";
import Category from "../Components/Category";
import About from "../Components/About";
import Menu from "../Components/Menu";
import CallUs from "../Components/CallUs";
import RecommendFood from "../Components/RecommendFood";
import OurMenu from "../Components/OurMenu";

const Home = () => {
  return (
    <div className="space-y-20 mb-20">
      <Banner />
      <Category />
      <About />
      <Menu />
      <CallUs />
      <RecommendFood />
      <OurMenu />
    </div>
  );
};

export default Home;
