import React from "react";
import banner from "../../assets/menu/banner3.jpg";


const MenuBanner = () => {
  return (
    <section>
      <div
        style={{
          backgroundImage: `url(${banner})`,
        }}
        className="w-full h-[800px] bg-no-repeat bg-cover flex items-center justify-center"
      >
        <div className="text-center bg-color2.7 w-8/12 mx-auto text-white font-Cinzel py-36">
          <h1 className="font-bold text-88 leading-119">OUR MENU</h1>
          <p className="font-semibold text-2xl leading-8">
            Would you like to try a dish?
          </p>
        </div>
      </div>
   
    </section>
  );
};

export default MenuBanner;
