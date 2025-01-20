import React, { useContext, useEffect, useState } from "react";
import bg from "../assets/others/authentication.png";
import authentication2 from "../assets/others/authentication2.png";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { bistroContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { Helmet } from "react-helmet-async";

const SignIn = () => {
  const { createUserWithGoogle, signInUserWithEmail } =
    useContext(bistroContext);
  const [disabled, setDisabled] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state || "/";

  const handleSignInWithGoogle = () => {
    createUserWithGoogle()
      .then((result) => {
        // console.log(result.data);
        Swal.fire({
          title: "SignIn Successful",
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
    const { email, password } = userInfo;
    signInUserWithEmail(email, password)
      .then((result) => {
        // console.log(result.data);
        Swal.fire({
          title: "SignIn Successful",
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
  const handleValidateCaptcha = (event) => {
    const user_captcha_value = event.target.value;
    // console.log(event.target.value);
    if (validateCaptcha(user_captcha_value) === true) {
      // alert("Captcha Matched");
      console.log("hitt");
      setDisabled(false);
    } else {
      // alert("Captcha Does Not Match");
      setDisabled(true);
    }
  };

  useEffect(() => {
    loadCaptchaEnginge(3);
  }, []);
  return (
    <div
      style={{
        backgroundImage: `url(${bg})`,
      }}
      className="w-full bg-no-repeat bg-cover flex items-center justify-center min-h-screen"
    >
      <Helmet>
        <title>SignIn | Boss Restaurant</title>
      </Helmet>
      <div
        style={{
          backgroundImage: `url(${bg})`,
        }}
        className="grid grid-cols-1 lg:grid-cols-2 justify-center items-center w-4/5 mx-auto bg-no-repeat bg-cover shadow-2xl"
      >
        <figure>
          <img src={authentication2} alt="" />
        </figure>
        {/* Form */}
        <div className="my-12 space-y-6">
          <h1 className="font-Inter font-bold text-40 leading-48 text-color2 text-center">
            Sign In
          </h1>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-2/3 mx-auto space-y-2"
          >
            {/* Email */}
            <div className="form-control">
              <label className="label">
                <span className="font-Inter font-semibold text-xl leading-6">
                  Email*
                </span>
              </label>
              <input
                type="text"
                placeholder="Type here...."
                {...register("email", { required: "Email is required" })}
                className="input input-bordered bg-white font-Inter"
                required
              />
              {errors.email && (
                <span className="text-red-600">{errors.email.message}</span>
              )}
            </div>
            {/* Password */}
            <div className="form-control">
              <label className="label">
                <span className="font-Inter font-semibold text-xl leading-6">
                  Password*
                </span>
              </label>
              <input
                type="password"
                placeholder="Enter your password"
                {...register("password", { required: "Password is required" })}
                className="input input-bordered bg-white font-Inter"
                required
              />
              {errors.password && (
                <span className="text-red-600">{errors.password.message}</span>
              )}
            </div>
            {/* captcha */}
            <div className="form-control">
              <label className="font-Inter font-semibold text-xs leading-6 w-full">
                <LoadCanvasTemplate />
              </label>
            </div>
            {/* captcha form */}
            <div className="form-control">
              <input
                onBlur={handleValidateCaptcha}
                type="text"
                placeholder="Type the captcha visible on the image"
                className="input input-bordered bg-white font-Inter"
              />
            </div>
            {/* Sign In */}
            <div className="form-control">
              <label className="label">
                <span className="font-Inter font-semibold text-xl leading-6"></span>
              </label>
              {/* <input
                disabled={disabled}
                type="submit"
                value={"Sign In"}
                className="bg-color8 font-Inter font-bold text-2xl text-white rounded-lg py-2"
              /> */}
              <input
                disabled={disabled}
                aria-disabled={disabled}
                type="submit"
                value={"Sign In"}
                className={`bg-color8 font-Inter font-bold text-2xl text-white rounded-lg py-2 ${
                  disabled && "opacity-50 cursor-not-allowed"
                }`}
              />
            </div>
          </form>
          <div className="text-center space-y-2 font-Inter">
            <p className="font-Inter text-color3 text-xl">
              <span className="font-medium">New here?</span>
              <span>
                <Link to={"/signUp"} className="font-bold ">
                  {" "}
                  Create a New Account
                </Link>
              </span>{" "}
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
      </div>
    </div>
  );
};

export default SignIn;
