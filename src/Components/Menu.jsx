import SectionHeading from "./SectionHeading";
import MenuCard from "./MenuCard";
import CustomButton from "./CustomButton";
import useMenu from "../hooks/useMenu";

const Menu = () => {
  const [menuItems] = useMenu();
  const popularItems = menuItems.filter((item) => item.category === "popular");
  console.log(popularItems);

  return (
    <section className="space-y-20 w-8/12 mx-auto">
      <SectionHeading subtitle={"---Check it out---"} title={"FROM OUR MENU"} />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {popularItems.map((menuItem) => (
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
