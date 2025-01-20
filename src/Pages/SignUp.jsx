import React, { useContext } from "react";
import { bistroContext } from "../Provider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import bg from "../assets/others/authentication.png";
import authentication2 from "../assets/others/authentication2.png";
import { FcGoogle } from "react-icons/fc";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const SignUp = () => {
  const { createUserWithGoogle, createUserWithEmail } =
    useContext(bistroContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state || "/";

  const handleSignInWithGoogle = () => {
    createUserWithGoogle()
      .then((result) => {
        Swal.fire({
          title: "SignUp Successful",
          icon: "success",
          draggable: true,
        });
        navigate(from);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (userInfo) => {
    const { name, email, password } = userInfo;
    createUserWithEmail(email, password)
      .then((result) => {
        Swal.fire({
          title: "SignUp Successful",
          icon: "success",
          draggable: true,
        });
        reset();
        navigate(from);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div
      style={{
        backgroundImage: `url(${bg})`,
      }}
      className="w-full bg-no-repeat bg-cover flex items-center justify-center min-h-screen"
    >
      <Helmet>
        <title>SignUp | Boss Restaurant</title>
      </Helmet>
      <div
        style={{
          backgroundImage: `url(${bg})`,
        }}
        className="grid grid-cols-1 lg:grid-cols-2 justify-center items-center w-4/5 mx-auto bg-no-repeat bg-cover shadow-2xl"
      >
        {/* Form */}
        <div className="my-12 space-y-6">
          <h1 className="font-Inter font-bold text-40 leading-48 text-color2 text-center">
            Sign Up
          </h1>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-2/3 mx-auto space-y-2"
          >
            {/* Name */}
            <div className="form-control col-span-2">
              <label className="label">
                <span className="font-Inter font-semibold text-xl leading-6">
                  Name*
                </span>
              </label>
              <input
                type="text"
                placeholder="Type here...."
                {...register("name", { require: true })}
                className="input input-bordered bg-white font-Inter"
                required
              />
              {errors.name && (
                <span className="text-red-600">Name is required</span>
              )}
            </div>
            {/* Email */}
            <div className="form-control col-span-2">
              <label className="label">
                <span className="font-Inter font-semibold text-xl leading-6">
                  Email*
                </span>
              </label>
              <input
                type="email"
                placeholder="Type here...."
                {...register("email", { require: true })}
                className="input input-bordered bg-white font-Inter"
                required
              />
              {errors.Email && (
                <span className="text-red-600">Email is required</span>
              )}
            </div>
            {/* Password */}
            {/* <div className="form-control col-span-2">
              <label className="label">
                <span className="font-Inter font-semibold text-xl leading-6">
                  Password*
                </span>
              </label>
              <input
                type="password"
                placeholder="Enter your password"
                {...register("password", {
                  require: true,
                  pattern: /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/,
                })}
                className="input input-bordered bg-white font-Inter"
                required
              />
              {errors.Password && (
                <span className="text-red-600">Email is required</span>
              )}
            </div> */}
            <div className="form-control col-span-2">
              <label className="label">
                <span className="font-Inter font-semibold text-xl leading-6">
                  Password*
                </span>
              </label>
              <input
                type="password"
                placeholder="Enter your password"
                {...register("password", {
                  required: "Password is required",
                  pattern: {
                    value:
                      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                    message:
                      "Password must contain at least one uppercase letter, one lowercase letter, one number, one special character, and be at least 8 characters long",
                  },
                })}
                className="input input-bordered bg-white font-Inter"
              />
              {errors.password && (
                <span className="text-red-600">{errors.password.message}</span>
              )}
            </div>

            {/* Sign Up */}
            <div className="form-control col-span-2">
              <label className="label">
                <span className="font-Inter font-semibold text-xl leading-6"></span>
              </label>
              <input
                type="submit"
                value={"Sign Up"}
                className="bg-color8 font-Inter font-bold text-2xl text-white rounded-lg py-2"
              />
            </div>
          </form>
          <div className="text-center space-y-2 font-Inter">
            <p className="font-Inter text-color3 text-xl">
              <span className="font-medium">Already registered? </span>
              <span>
                <Link to={"/signIn"} className="font-bold ">
                  Go to SignIn
                </Link>
              </span>
            </p>
            <p className="font-medium text-xl text-color2.5">Or sign in with</p>
            <div>
              <button
                onClick={handleSignInWithGoogle}
                className="border rounded-full p-1 bg-color7 border-color2.7"
              >
                <FcGoogle className="text-2xl" />
              </button>
            </div>
          </div>
        </div>
        <figure>
          <img src={authentication2} alt="" />
        </figure>
      </div>
    </div>
  );
};

export default SignUp;
