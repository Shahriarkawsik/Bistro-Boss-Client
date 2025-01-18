import React from "react";
import featured from "../assets/home/featured.jpg";
import SectionHeading from "./SectionHeading";
import CustomButton from "./CustomButton";
const OurMenu = () => {
  return (
    <section
      style={{
        backgroundImage: `linear-gradient(rgba(21, 21, 21, 0.7), rgba(21, 21, 21, 0.7)), url(${featured})`,
      }}
      className="bg-cover bg-center bg-no-repeat py-20 bg-fixed"
    >
      <div className="w-8/12 mx-auto space-y-10">
        <SectionHeading
          subtitle={"---Check it out---"}
          title={"FROM OUR MENU"}
          className={"text-white"}
        />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <img src={featured} alt="" />
          <div className="text-white font-Inter flex flex-col justify-center">
            <h3 className="text-2xl leading-9">March 20, 2023</h3>
            <p className="text-2xl leading-9">WHERE CAN I GET SOME?</p>
            <p className="text-xl leading-7">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              voluptate facere, deserunt dolores maiores quod nobis quas quasi.
              Eaque repellat recusandae ad laudantium tempore consequatur
              consequuntur omnis ullam maxime tenetur.
            </p>
            <CustomButton buttonElement={"Read More"} color={"white"} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurMenu;
