import SectionHeading from "../Components/SectionHeading";
import MenuCard from "../Components/MenuCard";
import CustomFoodCategory from "../Components/MenuComponent/CustomFoodCategory";

import menuBannerImg from "../assets/menu/banner3.jpg";
import dessertImg from "../assets/home/chef-service.jpg";
import pizzaImg from "../assets/menu/pizza-bg.jpg";
import saladImg from "../assets/menu/salad-bg.jpg";
import soupImg from "../assets/menu/soup-bg.jpg";
import { Helmet } from "react-helmet-async";
import CustomPageBanner from "../Components/CustomPageBanner";
import useMenu from "../hooks/useMenu";

const OurMenuPage = () => {
  const [menuItems] = useMenu();

  const offeredFood = menuItems.filter((food) => food.category === "offered");
  const dessert = menuItems.filter((food) => food.category === "dessert");
  const pizza = menuItems.filter((food) => food.category === "pizza");
  const salad = menuItems.filter((food) => food.category === "salad");
  const soup = menuItems.filter((food) => food.category === "soup");

  return (
    <section className="space-y-24 mb-24">
      <Helmet>
        <title>Menu | Boss Restaurant</title>
      </Helmet>
      {/* Banner */}
      <CustomPageBanner
        bannerImg={menuBannerImg}
        bannerTitle={"OUR MENU"}
        bannerSubtitle={"Would you like to try a dish?"}
      />
      {/* Offered Food */}
      <div className="w-8/12 mx-auto space-y-10">
        <SectionHeading subtitle={`---Don't miss---`} title={`TODAY'S OFFER`} />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {offeredFood.map((food) => (
            <MenuCard
              key={food._id}
              foodImg={food.image}
              foodName={food.name}
              foodPrice={food.price}
              foodRecipe={food.recipe}
            />
          ))}
        </div>
      </div>

      {/* DESSERTS */}
      <CustomFoodCategory
        bannerImage={dessertImg}
        bannerTitle={"DESSERTS"}
        bannerSubtitle={`Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`}
        foodCategory={dessert}
      />
      {/* PIZZA */}
      <CustomFoodCategory
        bannerImage={pizzaImg}
        bannerTitle={"PIZZA"}
        bannerSubtitle={`Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`}
        foodCategory={pizza}
      />
      {/* SALADS */}
      <CustomFoodCategory
        bannerImage={saladImg}
        bannerTitle={"SALADS"}
        bannerSubtitle={`Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`}
        foodCategory={salad}
      />
      {/* SOUPS */}
      <CustomFoodCategory
        bannerImage={soupImg}
        bannerTitle={"SOUPS"}
        bannerSubtitle={`Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`}
        foodCategory={soup}
      />
    </section>
  );
};

export default OurMenuPage;
