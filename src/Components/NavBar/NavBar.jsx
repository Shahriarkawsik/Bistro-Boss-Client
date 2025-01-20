import { NavLink, useNavigate } from "react-router-dom";
// import shoppingIcon from "../../assets/icon/shopping-cart.png";
import "./navbar.css";
import { useContext } from "react";
import { bistroContext } from "./../../Provider/AuthProvider";
import Swal from "sweetalert2";

const NavBar = () => {
  const { user, SignOutUser } = useContext(bistroContext);
  const navigate = useNavigate();
  const handleSignOut = () => {
    SignOutUser()
      .then(() => {
        // console.log("SignOut Successful");
        Swal.fire({
          title: "SignOut Successful",
          icon: "success",
          draggable: true,
        });
        navigate("/");
      })
      .catch((error) => {
        console.log("SignOut unsuccessful", error.message);
      });
  };
  return (
    <nav className="bg-color2.5 backdrop-blur-xl fixed top-0 z-50 w-full">
      <div className="navbar w-11/12 mx-auto">
        <div className="flex-1">
          <div className="flex flex-col items-center">
            <button className="font-extrabold text-white font-Cinzel text-32 leading-43">
              BISTRO BOSS
            </button>
            <button className="font-bold text-white uppercase font-Cinzel text-2xl leading-8 tracking-6">
              Restaurant
            </button>
          </div>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink to={"/"}>
                <button className="font-bold text-white text-xl leading-6 font-Inter uppercase">
                  home
                </button>
              </NavLink>
            </li>
            <li>
              <NavLink to={"/contactUs"}>
                <button className="font-bold text-white text-xl leading-6 font-Inter uppercase">
                  contact us
                </button>
              </NavLink>
            </li>
            <li>
              <NavLink to={"/dashboard"}>
                <button className="font-bold text-white text-xl leading-6 font-Inter uppercase">
                  dashboard
                </button>
              </NavLink>
            </li>
            <li>
              <NavLink to={"/menu"}>
                <button className="font-bold text-white text-xl leading-6 font-Inter uppercase">
                  our menu
                </button>
              </NavLink>
            </li>

            {user ? (
              <>
                <li className="flex items-center gap-1">
                  <NavLink to={"/ourShop"}>
                    <button className="font-bold text-white text-xl leading-6 font-Inter uppercase">
                      our shop
                    </button>
                  </NavLink>
                  {/* <img className="w-16" src={shoppingIcon} alt="" /> */}
                </li>

                <div className="relative group">
                  <img
                    className="w-12 h-12 rounded-full"
                    src={user?.photoURL}
                    alt="photo"
                  />
                  <div className="z-10 hidden group-hover:block absolute w-max right-0 top-12 bg-color3 p-3 rounded-s-lg space-y-4">
                    <h2>{user?.displayName}</h2>
                    <button
                      className="font-bold bg-color8 p-3 rounded-lg text-white text-xl leading-6 font-Inter uppercase"
                      onClick={handleSignOut}
                    >
                      sign out
                    </button>
                  </div>
                </div>
              </>
            ) : (
              <li>
                <NavLink to={"/signIn"}>
                  <button className="font-bold text-white text-xl leading-6 font-Inter uppercase">
                    sign In
                  </button>
                </NavLink>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
