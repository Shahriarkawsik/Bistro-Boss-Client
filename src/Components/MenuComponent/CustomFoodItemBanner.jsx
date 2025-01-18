import React from "react";

const CustomFoodItemBanner = ({ bannerImage, bannerTitle, bannerSubtitle }) => {
  return (
    <div
      style={{
        backgroundImage: `url(${bannerImage})`,
      }}
      className="w-full h-[700px] bg-no-repeat bg-cover flex items-center justify-center bg-fixed"
    >
      <div className="text-center bg-color2.7 w-8/12 mx-auto text-white py-28 space-y-2">
        <h1 className="font-Cinzel font-semibold text-45 leading-61">
          {bannerTitle}
        </h1>
        <p className="font-semibold font-Inter leading-7 w-4/6 mx-auto">
          {bannerSubtitle}
        </p>
      </div>
    </div>
  );
};

export default CustomFoodItemBanner;
