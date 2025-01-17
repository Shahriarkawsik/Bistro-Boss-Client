import React from "react";
import customButton from "./CustomButton";

const MenuCard = ({ foodImg, foodName, foodPrice, foodDescription }) => {
  return (
    <div className="bg-gray-50 rounded-2xl flex items-center gap-6">
      <img
        src={foodImg}
        alt=""
        className="bg-gray-500 w-32 h-32 rounded-full rounded-tl-none"
      />
      <div className="flex justify-between items-start gap-4">
        <div>
          <p className="font-Cinzel text-xl text-color2 leading-7 ">
            {foodName}
          </p>
          <p className="font-Inter leading-7 text-color4">{foodDescription}</p>
        </div>
        <p className="text-color8 text-xl font-Inter leading-7">{foodPrice}</p>
      </div>
    </div>
  );
};

export default MenuCard;
