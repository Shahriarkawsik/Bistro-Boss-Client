import React from "react";

const CustomButton = ({ buttonElement, color }) => {
  return (
    <div className="flex justify-center items-center">
      <button
        className={`font-Inter font-medium text-xl leading-6 uppercase border-b-2 rounded-lg px-8 py-5 text-${color} border-b-${color}`}
      >
        {buttonElement}
      </button>
    </div>
  );
};

export default CustomButton;
