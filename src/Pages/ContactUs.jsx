import React from "react";
import { Helmet } from "react-helmet-async";
import CustomPageBanner from "../Components/CustomPageBanner";
import contactImg from "../assets/contact/banner.jpg";
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
    </section>
  );
};

export default ContactUs;
