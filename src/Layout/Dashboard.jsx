import { BsCalendarEvent, BsFillBagCheckFill } from "react-icons/bs";
import { FaCartShopping } from "react-icons/fa6";
import { FcCalendar, FcHome, FcList, FcRatings } from "react-icons/fc";
import { GiWallet } from "react-icons/gi";
import { HiShoppingBag } from "react-icons/hi";
import { Link, Outlet } from "react-router-dom";
import useCart from "../hooks/useCart";

const Dashboard = () => {
  const [cart] = useCart();
  return (
    <section className="flex gap-6">
      <div className="w-64 min-h-screen bg-color3 text-center text-white py-6 px-3 space-y-6">
        <div className="flex flex-col items-center justify-center">
          <button className="font-extrabold text-color2 font-Cinzel text-2xl leading-8">
            BISTRO BOSS
          </button>
          <button className="font-bold text-color2 uppercase font-Cinzel leading-6 tracking-6">
            Restaurant
          </button>
        </div>
        <ul className="space-y-6 font-Cinzel">
          <li>
            <Link
              to={"/dashboard/home"}
              className="flex items-center gap-2 text-xl text-white uppercase"
            >
              <FcHome /> <span>User Home</span>
            </Link>
          </li>
          <li>
            <Link
              to={"/dashboard/reservation"}
              className="flex items-center gap-2 text-xl text-white uppercase"
            >
              <BsCalendarEvent /> <span>reservation</span>
            </Link>
          </li>
          <li>
            <Link
              to={"/dashboard/paymentHistory"}
              className="flex items-center gap-2 text-xl text-white uppercase"
            >
              <GiWallet /> <span>payment history</span>
            </Link>
          </li>
          <li>
            <Link
              to={"/dashboard/myCart"}
              className="flex items-center gap-2 text-xl text-white uppercase"
            >
              <FaCartShopping /> <span>my cart ({cart.length})</span>
            </Link>
          </li>
          <li>
            <Link
              to={"/dashboard/addRreview"}
              className="flex items-center gap-2 text-xl text-white uppercase"
            >
              <FcRatings /> <span>add review</span>
            </Link>
          </li>
          <li>
            <Link
              to={"/dashboard/booking"}
              className="flex items-center gap-2 text-xl text-white uppercase"
            >
              <FcCalendar /> <span>my booking</span>
            </Link>
          </li>
        </ul>
        <div className="divider text-white"></div>
        <ul className="space-y-6 font-Cinzel">
          <li>
            <Link
              to={"/dashboard/home"}
              className="flex items-center gap-2 text-xl text-white uppercase"
            >
              <FcHome /> <span> Home</span>
            </Link>
          </li>
          <li>
            <Link
              to={"/dashboard/home"}
              className="flex items-center gap-2 text-xl text-white uppercase"
            >
              <FcList /> <span>Menu</span>
            </Link>
          </li>
          <li>
            <Link
              to={"/dashboard/home"}
              className="flex items-center gap-2 text-xl text-white uppercase"
            >
              <HiShoppingBag /> <span>Shop</span>
            </Link>
          </li>
          <li>
            <Link
              to={"/dashboard/home"}
              className="flex items-center gap-2 text-xl text-white uppercase"
            >
              <BsFillBagCheckFill /> <span>Contact</span>
            </Link>
          </li>
        </ul>
      </div>
      <div className="flex-1">
        <Outlet />
      </div>
    </section>
  );
};

export default Dashboard;
