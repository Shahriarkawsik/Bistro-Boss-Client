import React from "react";
import { Helmet } from "react-helmet-async";
import CustomPageBanner from "../Components/CustomPageBanner";
import contactImg from "../assets/contact/banner.jpg";
import SectionHeading from "../Components/SectionHeading";
import { BiSolidPhoneCall } from "react-icons/bi";
import { FaLocationDot } from "react-icons/fa6";
const ContactUs = () => {
  return (
    <section className="space-y-24 mb-24">
      <Helmet>
        <title>Contact | Boss Restaurant</title>
      </Helmet>
      {/* Banner */}
      <CustomPageBanner
        bannerImg={contactImg}
        bannerTitle={"CONTACT US"}
        bannerSubtitle={"Would you like to try a dish?"}
      />
      <div className="w-8/12 mx-auto space-y-24">
        <SectionHeading subtitle={"---Visit Us---"} title={"OUR LOCATION"} />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center justify-center">
          {/* PHONE */}
          <div className="border border-color7">
            <div className="flex justify-center items-center py-6 bg-color3 text-white text-32">
              <BiSolidPhoneCall />
            </div>
            <div className="mx-8 mb-8 bg-color9 flex flex-col justify-center items-center space-y-4 py-16 font-Inter">
              <h2 className="font-medium text-2xl leading-7 text-color2">
                PHONE
              </h2>
              <h3 className=" leading-5 text-color2.7">+38 (012) 34 56 789</h3>
            </div>
          </div>
          {/* Location */}
          <div className="border border-color7">
            <div className="flex justify-center items-center py-6 bg-color3 text-white text-32">
              <FaLocationDot />
            </div>
            <div className="mx-8 mb-8 bg-color9 flex flex-col justify-center items-center space-y-4 py-16 font-Inter">
              <h2 className="font-medium text-2xl leading-7 text-color2">
                ADDRESS
              </h2>
              <h3 className=" leading-5 text-color2.7">
                123 ABS Street, Uni 21, Bangladesh
              </h3>
            </div>
          </div>
          {/* PHONE */}
          <div className="border border-color7">
            <div className="flex justify-center items-center py-6 bg-color3 text-white text-32">
              <BiSolidPhoneCall />
            </div>
            <div className="mx-8 mb-8 bg-color9 flex flex-col justify-center items-center space-y-2 py-14 font-Inter">
              <h2 className="font-medium text-2xl leading-7 text-color2">
                WORKING HOURS
              </h2>
              <h3 className=" leading-5 text-color2.7">
                Mon - Fri: 08:00 - 22:00 <br />
                Sat - Sun: 10:00 - 23:00
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
