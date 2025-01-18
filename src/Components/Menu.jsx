import React, { useEffect, useState } from "react";
import SectionHeading from "./SectionHeading";
import MenuCard from "./MenuCard";
import CustomButton from "./CustomButton";

const Menu = () => {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        const popularItems = data.filter((item) => item.category === "popular");
        setMenuItems(popularItems);
      });
  }, []);

  return (
    <section className="space-y-20 w-8/12 mx-auto">
      <SectionHeading subtitle={"---Check it out---"} title={"FROM OUR MENU"} />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {menuItems.map((menuItem) => (
          <MenuCard
            key={menuItem._id}
            foodImg={menuItem.image}
            foodName={menuItem.name}
            foodRecipe={menuItem.recipe}
            foodPrice={menuItem.price}
          />
        ))}
      </div>
      <CustomButton buttonElement={"View Full  Menu"} color={"color5"} />
    </section>
  );
};

export default Menu;
