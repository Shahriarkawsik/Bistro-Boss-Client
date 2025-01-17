import React from "react";
import SectionHeading from "./SectionHeading";
import foodImg from "../assets/home/slide1.jpg";
import CustomRecommendFoodCard from "./CustomRecommendFoodCard";

const RecommendFood = () => {
  return (
    <div className="w-8/12 mx-auto space-y-20">
      <SectionHeading subtitle={"---Should Try---"} title={"CHEF RECOMMENDS"} />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <CustomRecommendFoodCard
          foodImage={foodImg}
          foodName={"Caeser Salad"}
          foodIngredient={
            "Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets."
          }
        />
        <CustomRecommendFoodCard
          foodImage={foodImg}
          foodName={"Caeser Salad"}
          foodIngredient={
            "Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets."
          }
        />
        <CustomRecommendFoodCard
          foodImage={foodImg}
          foodName={"Caeser Salad"}
          foodIngredient={
            "Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets."
          }
        />
      </div>
    </div>
  );
};

export default RecommendFood;
