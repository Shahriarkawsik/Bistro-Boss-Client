import React from "react";
import CustomFoodItemBanner from "./CustomFoodItemBanner";
import MenuCard from "../MenuCard";

const CustomFoodCategory = ({
  bannerImage,
  bannerTitle,
  bannerSubtitle,
  foodCategory,
}) => {
  return (
    <div className="space-y-20">
      {/* banner */}
      <CustomFoodItemBanner
        bannerImage={bannerImage}
        bannerTitle={bannerTitle}
        bannerSubtitle={bannerSubtitle}
      />
      {/* card */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-8/12 mx-auto">
        {foodCategory.map((food) => (
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
  );
};

export default CustomFoodCategory;
