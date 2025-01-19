import React from "react";
import Banner from "../Components/Banner";
import Category from "../Components/Category";
import About from "../Components/About";
import Menu from "../Components/Menu";
import CallUs from "../Components/CallUs";
import RecommendFood from "../Components/RecommendFood";
import OurMenu from "../Components/OurMenu";
import Testimonials from "../Components/Testimonials";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <div className="space-y-20 mb-20">
      <Helmet>
        <title>Home | Boss Restaurant</title>
      </Helmet>
      <Banner />
      <Category />
      <About />
      <Menu />
      <CallUs />
      <RecommendFood />
      <OurMenu />
      <Testimonials />
    </div>
  );
};

export default Home;
