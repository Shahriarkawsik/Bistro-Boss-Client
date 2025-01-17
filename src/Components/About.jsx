import React from "react";
import chefService from "../assets/home/chef-service.jpg";

const About = () => {
  return (
    <div
      className="w-8/12 mx-auto border p-[120px]"
      style={{
        backgroundImage: `url(${chefService})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="bg-white/80 py-16 text-center">
        <h1 className="text-[45px] leading-[61px] font-Cinzel text-color2">
          Bistro Boss
        </h1>

        <p className="font-Inter font-normal text-base leading-7 text-center text-color2.7 w-1/2 mx-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus, libero accusamus laborum deserunt ratione dolor
          officiis praesentium! Deserunt magni aperiam dolor eius dolore at,
          nihil iusto ducimus incidunt quibusdam nemo.
        </p>
      </div>
    </div>
  );
};

export default About;
