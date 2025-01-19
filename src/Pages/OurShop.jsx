import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import { Helmet } from "react-helmet-async";
import CustomPageBanner from "./../Components/CustomPageBanner";
import CustomRecommendFoodCard from "../Components/CustomRecommendFoodCard";

import foodImg from "../assets/home/slide1.jpg";
import shopImg from "../assets/shop/banner2.jpg";
import useMenu from "../hooks/useMenu";

const OurShop = () => {
  const [menuItems] = useMenu();

  //   const offeredFood = menuItems.filter((food) => food.category === "offered");
  const dessert = menuItems.filter((food) => food.category === "dessert");
  const pizza = menuItems.filter((food) => food.category === "pizza");
  const salad = menuItems.filter((food) => food.category === "salad");
  const soup = menuItems.filter((food) => food.category === "soup");
  const drinks = menuItems.filter((food) => food.category === "drinks");

  const [tabIndex, setTabIndex] = useState(0);

  return (
    <section className="space-y-24 mb-24">
      <Helmet>
        <title>Shop | Boss Restaurant</title>
      </Helmet>
      {/* Banner */}
      <CustomPageBanner
        bannerImg={shopImg}
        bannerTitle={"OUR SHOP"}
        bannerSubtitle={"Would you like to try a dish?"}
      />
      <div className="w-8/12 mx-auto">
        <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList>
            <Tab>SALAD</Tab>
            <Tab>PIZZA</Tab>
            <Tab>SOUPS</Tab>
            <Tab>DESSERTS</Tab>
            <Tab>DRINKS</Tab>
          </TabList>
          {/* Salad */}
          <TabPanel>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {salad.map((food) => (
                <CustomRecommendFoodCard
                  key={food._id}
                  foodImage={food.image}
                  foodName={food.name}
                  foodIngredient={food.recipe}
                />
              ))}
            </div>
          </TabPanel>
          {/* pizza */}
          <TabPanel>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {pizza.map((food) => (
                <CustomRecommendFoodCard
                  key={food._id}
                  foodImage={food.image}
                  foodName={food.name}
                  foodIngredient={food.recipe}
                />
              ))}
            </div>
          </TabPanel>
          {/* soups */}
          <TabPanel>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {soup.map((food) => (
                <CustomRecommendFoodCard
                  key={food._id}
                  foodImage={food.image}
                  foodName={food.name}
                  foodIngredient={food.recipe}
                />
              ))}
            </div>
          </TabPanel>
          {/* dessert */}
          <TabPanel>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {dessert.map((food) => (
                <CustomRecommendFoodCard
                  key={food._id}
                  foodImage={food.image}
                  foodName={food.name}
                  foodIngredient={food.recipe}
                />
              ))}
            </div>
          </TabPanel>
          {/* drinks */}
          <TabPanel>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {drinks.map((food) => (
                <CustomRecommendFoodCard
                  key={food._id}
                  foodImage={food.image}
                  foodName={food.name}
                  foodIngredient={food.recipe}
                />
              ))}
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </section>
  );
};

export default OurShop;
