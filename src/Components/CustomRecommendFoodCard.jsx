import { useEffect } from "react";
import CustomButton from "./CustomButton";

import axios from "axios";
import useAuth from "../hooks/useAuth";
import { use } from "react";
import Swal from "sweetalert2";
import useAxiosSecure from "../hooks/useAxiosSecure";
import useCart from "../hooks/useCart";

const CustomRecommendFoodCard = ({
  foodId,
  foodImage,
  foodPrice,
  foodName,
  foodIngredient,
}) => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [, refetch] = useCart();

  const handleAddToCard = () => {
    const cardInfo = {
      email: user.email,
      foodId,
      foodImage,
      foodName,
      foodPrice,
    };

    axiosSecure
      .post(`/carts`, cardInfo)
      .then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `🎉 Success! ${foodName} has been added to your cart. 🛒`,
            showConfirmButton: false,
            timer: 2000,
          });
          refetch();
        } else {
          Swal.fire({
            position: "top-end",
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
            showConfirmButton: false,
            timer: 2000,
          });
        }
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="space-y-6 bg-color9 rounded-md shadow-md">
      <img src={foodImage} className="w-full h-[350px] rounded-md" alt="" />
      <div className="flex flex-col justify-center items-center gap-3 font-Inter text-center pb-5">
        <h2 className="font-semibold text-color2 text-2xl leading-7">
          {foodName}
        </h2>
        <p className="leading-7 text-color2">{foodIngredient}</p>
        <CustomButton
          onClick={handleAddToCard}
          buttonElement={"add to cart"}
          color={"color8"}
          className={"bg-color7 hover:bg-color5"}
        />
      </div>
    </div>
  );
};

export default CustomRecommendFoodCard;
