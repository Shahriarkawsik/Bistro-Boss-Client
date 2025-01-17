import CustomButton from "./CustomButton";

const CustomRecommendFoodCard = ({ foodImage, foodName, foodIngredient }) => {
  return (
    <div className="space-y-6 bg-color9 rounded-md shadow-md">
      <img src={foodImage} className="w-full h-[350px] rounded-md" alt="" />
      <div className="flex flex-col justify-center items-center gap-3 font-Inter text-center pb-5">
        <h2 className="font-semibold text-color2 text-2xl leading-7">
          {foodName}
        </h2>
        <p className="leading-7 text-color2">{foodIngredient}</p>
        <CustomButton
          buttonElement={"add to cart"}
          color={"color8"}
          className={"bg-color7 hover:bg-color5"}
        />
        {/* <button
          className={`font-Inter font-medium text-xl leading-6 uppercase border-b-2 rounded-lg px-8 py-5 text-color8 border-b-color8 bg-color7 hover:bg-color5`}
        >
          add to cart
        </button> */}
      </div>
    </div>
  );
};

export default CustomRecommendFoodCard;
