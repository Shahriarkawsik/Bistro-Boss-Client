import React, { useEffect, useState } from "react";
import MenuBanner from "../Components/MenuComponent/MenuBanner";
import SectionHeading from "../Components/SectionHeading";
import MenuCard from "../Components/MenuCard";

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
      {/* <div className="w-8/12 mx-auto"></div> */}
    </section>
  );
};

export default OurMenuPage;
