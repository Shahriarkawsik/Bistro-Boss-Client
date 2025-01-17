import React from "react";
import SectionHeading from "./SectionHeading";
import MenuCard from "./MenuCard";
import CustomButton from "./CustomButton";

const Menu = () => {
  return (
    <section className="space-y-20 w-8/12 mx-auto">
      <SectionHeading subtitle={"---Check it out---"} title={"FROM OUR MENU"} />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <MenuCard
          foodImg={"/"}
          foodName={"ROAST DUCK BREAST ------------------"}
          foodDescription={
            "Roasted duck breast (served pink) with gratin potato and a griottine cherry sauce"
          }
          foodPrice={"$14.5"}
        />
        <MenuCard
          foodImg={"/"}
          foodName={"TUNA NIÇOISE ------------------"}
          foodDescription={
            "Roasted duck breast (served pink) with gratin potato and a griottine cherry sauce"
          }
          foodPrice={"$14.5"}
        />
        <MenuCard
          foodImg={"/"}
          foodName={"ESCALOPE DE VEAU ------------------"}
          foodDescription={
            "Roasted duck breast (served pink) with gratin potato and a griottine cherry sauce"
          }
          foodPrice={"$14.5"}
        />
        <MenuCard
          foodImg={"/"}
          foodName={"CHICKEN AND WALNUT SALAD ---------------"}
          foodDescription={
            "Roasted duck breast (served pink) with gratin potato and a griottine cherry sauce"
          }
          foodPrice={"$14.5"}
        />
        <MenuCard
          foodImg={"/"}
          foodName={"FISH PARMENTIER ------------------"}
          foodDescription={
            "Roasted duck breast (served pink) with gratin potato and a griottine cherry sauce"
          }
          foodPrice={"$14.5"}
        />
        <MenuCard
          foodImg={"/"}
          foodName={"ROASTED PORK BELLY ------------------"}
          foodDescription={
            "Roasted duck breast (served pink) with gratin potato and a griottine cherry sauce"
          }
          foodPrice={"$14.5"}
        />
      </div>
      <CustomButton buttonElement={"View Full  Menu"} color={"color5"} />
    </section>
  );
};

export default Menu;
