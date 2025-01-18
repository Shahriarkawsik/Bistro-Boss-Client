import React, { useEffect, useState } from "react";
import MenuBanner from "../Components/MenuComponent/MenuBanner";
import SectionHeading from "../Components/SectionHeading";
import MenuCard from "../Components/MenuCard";
import CustomFoodCategory from "../Components/MenuComponent/CustomFoodCategory";

import dessertImg from "../assets/home/chef-service.jpg";
import pizzaImg from "../assets/menu/pizza-bg.jpg";
import saladImg from "../assets/menu/salad-bg.jpg";
import soupImg from "../assets/menu/soup-bg.jpg";

const OurMenuPage = () => {
  const [foods, setFoods] = useState([]);

  const offeredFood = foods.filter((food) => food.category === "offered");
  const dessert = foods.filter((food) => food.category === "dessert");
  const pizza = foods.filter((food) => food.category === "pizza");
  const salad = foods.filter((food) => food.category === "salad");
  const soup = foods.filter((food) => food.category === "soup");

  useEffect(() => {
    fetch(`menu.json`)
      .then((res) => res.json())
      .then((data) => setFoods(data));
  }, []);
  return (
    <section className="space-y-24 mb-24">
      {/* Banner */}
      <MenuBanner />
      {/* Offered Food */}
      <div className="w-8/12 mx-auto space-y-10">
        <SectionHeading subtitle={`---Don't miss---`} title={`TODAY'S OFFER`} />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {offeredFood.map((food) => (
            <MenuCard
              key={food._id}
              foodImg={food.image}
              foodName={food.name}
              foodPrice={food.price}
              foodRecipe={food.recipe}
            />
          ))}
        </div>
      </div>

      {/* DESSERTS */}
      <CustomFoodCategory
        bannerImage={dessertImg}
        bannerTitle={"DESSERTS"}
        bannerSubtitle={`Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`}
        foodCategory={dessert}
      />
      {/* PIZZA */}
      <CustomFoodCategory
        bannerImage={pizzaImg}
        bannerTitle={"PIZZA"}
        bannerSubtitle={`Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`}
        foodCategory={pizza}
      />
      {/* SALADS */}
      <CustomFoodCategory
        bannerImage={saladImg}
        bannerTitle={"SALADS"}
        bannerSubtitle={`Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`}
        foodCategory={salad}
      />
      {/* SOUPS */}
      <CustomFoodCategory
        bannerImage={soupImg}
        bannerTitle={"SOUPS"}
        bannerSubtitle={`Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`}
        foodCategory={soup}
      />
    </section>
  );
};

export default OurMenuPage;
