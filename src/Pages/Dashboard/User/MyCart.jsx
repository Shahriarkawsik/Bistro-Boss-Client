import React from "react";
import SectionHeading from "../../../Components/SectionHeading";
import useCart from "../../../hooks/useCart";
import { FaRegTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "./../../../hooks/useAxiosSecure";

const MyCart = () => {
  const [cart, refetch] = useCart();
  const axiosSecure = useAxiosSecure();
  const totalPrice = cart.reduce((total, item) => total + item.foodPrice, 0);
  const handleDelete = (id) => {
    // console.log(id, foodName);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/carts/${id}`).then((result) => {
          if (result.data.deletedCount === 1) {
            Swal.fire({
              title: "Deleted!",
              text: "Successfully Deleted",
              icon: "success",
            });
            refetch();
          }
        });
      }
    });
  };
  return (
    <section className="space-y-14 lg:px-24">
      <SectionHeading subtitle={"---My Cart---"} title={"WANNA ADD MORE?"} />
      <div className="space-y-6">
        <div className="flex justify-evenly items-center uppercase">
          <h1 className="font-Cinzel font-bold text-31 leading-43 text-color2 ">
            Total orders: {cart.length}
          </h1>
          <h1 className="font-Cinzel font-bold text-31 leading-43 text-color2">
            total price: $ {totalPrice}
          </h1>

          <button className="bg-color8 px-5 py-3 text-white font-Cinzel font-bold uppercase text-xl leading-7 rounded-lg">
            Pay
          </button>
        </div>
        {/*  */}
        <div className="overflow-x-auto">
          <table className="table table-zebra ">
            {/* head */}
            <thead className="bg-color8 text-white font-Inter text-xl font-semibold leading-5 ">
              <tr>
                <th>ID</th>
                <th>ITEM IMAGE</th>
                <th>ITEM NAME</th>
                <th>PRICE</th>
                <th>ACTION</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {cart.map((item, index) => (
                <tr key={item._id}>
                  <th className="text-color2 font-Cinzel">{index + 1}</th>
                  <td>
                    <img
                      className="w-20 rounded-lg"
                      src={item.foodImage}
                      alt=""
                    />
                  </td>
                  <td className="text-color4 font-Inter">{item.foodName}</td>
                  <td className="text-color4 font-Inter">$ {item.foodPrice}</td>
                  <td>
                    <button
                      onClick={() => handleDelete(item._id)}
                      className="bg-red-600 text-white p-4 rounded-md text-xl"
                    >
                      <FaRegTrashAlt />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default MyCart;
