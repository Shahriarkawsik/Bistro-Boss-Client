import React from "react";

const CustomButton = ({ onClick, buttonElement, color, className }) => {
  return (
    <div className="flex justify-center items-center">
      <button
        onClick={onClick}
        className={`font-Inter font-medium text-xl leading-6 uppercase border-b-2 rounded-lg px-8 py-5 text-${color} border-b-${color} ${
          className || ""
        }`}
      >
        {buttonElement}
      </button>
    </div>
  );
};

export default CustomButton;
