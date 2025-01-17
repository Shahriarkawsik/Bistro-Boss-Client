import React from "react";
import { FaFacebook, FaInstagramSquare, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="grid grid-cols-1 lg:grid-cols-2 text-white ">
        <div className="text-center bg-color5 py-10 space-y-6">
          <h2 className="font-Inter font-medium text-32 leading-10">
            CONTACT US
          </h2>
          <div className="space-y-2 text-center font-medium leading-7 font-Inter">
            <p>123 ABS Street, Uni 21, Bangladesh</p>
            <p>+88 123456789</p>
            <p>Mon - Fri: 08:00 - 22:00</p>
            <p> Sat - Sun: 10:00 - 23:00</p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center bg-color6 space-y-4 py-10">
          <h2 className="font-Inter font-medium text-32 leading-10">
            Follow US
          </h2>
          <p>Join us on social media</p>
          <div className="flex items-center gap-4">
            <a href="https://www.facebook.com/shahriar.kawsik" target="_blank">
              <FaFacebook className="text-4xl hover:text-color3" />
            </a>
            <a href="https://www.instagram.com/shahriar.kawsik" target="_blank">
              <FaInstagramSquare className="text-4xl hover:text-color3" />
            </a>
            <a href="https://x.com/ShahriarKawsik" target="_blank">
              <FaTwitter className="text-4xl hover:text-color3" />
            </a>
          </div>
        </div>
      </div>
      <div className="bg-color2 font-Inter text-white text-center py-5">
        <p>
          Copyright © {new Date().getFullYear()} CulinaryCloud. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
