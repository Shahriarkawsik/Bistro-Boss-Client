import { NavLink } from "react-router-dom";
import shoppingIcon from "../../assets/icon/shopping-cart.png";
import "./navbar.css";

const NavBar = () => {
  return (
    <nav className="bg-color2.5 backdrop-blur-xl fixed top-0 z-50 w-full">
      <div className="navbar w-11/12 mx-auto">
        <div className="flex-1">
          <div className="flex flex-col items-center">
            <a className="font-extrabold text-white font-Cinzel text-32 leading-43">
              BISTRO BOSS
            </a>
            <a className="font-bold text-white uppercase font-Cinzel text-2xl leading-8 tracking-6">
              Restaurant
            </a>
          </div>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink to={"/"}>
                <a className="font-bold text-white text-xl leading-6 font-Inter uppercase">
                  home
                </a>
              </NavLink>
            </li>
            <li>
              <NavLink to={"/contactUs"}>
                <a className="font-bold text-white text-xl leading-6 font-Inter uppercase">
                  contact us
                </a>
              </NavLink>
            </li>
            <li>
              <NavLink to={"/dashboard"}>
                <a className="font-bold text-white text-xl leading-6 font-Inter uppercase">
                  dashboard
                </a>
              </NavLink>
            </li>
            <li>
              <NavLink to={"/menu"}>
                <a className="font-bold text-white text-xl leading-6 font-Inter uppercase">
                  our menu
                </a>
              </NavLink>
            </li>
            <li className="flex items-center gap-1">
              <NavLink to={"/ourShop"}>
                <a className="font-bold text-white text-xl leading-6 font-Inter uppercase">
                  our shop
                </a>
              </NavLink>
              {/* <img className="w-16" src={shoppingIcon} alt="" /> */}
            </li>
            <li>
              <NavLink to={"/singOut"}>
                <a className="font-bold text-white text-xl leading-6 font-Inter uppercase">
                  sign out
                </a>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
