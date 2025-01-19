import React from "react";

const CustomPageBanner = ({ bannerImg, bannerTitle, bannerSubtitle }) => {
  return (
    <section>
      <div
        style={{
          backgroundImage: `url(${bannerImg})`,
        }}
        className="w-full h-[800px] bg-no-repeat bg-cover flex items-center justify-center bg-fixed"
      >
        <div className="text-center bg-color2.7 w-8/12 mx-auto text-white font-Cinzel py-36">
          <h1 className="font-bold text-88 leading-119">{bannerTitle}</h1>
          <p className="font-semibold text-2xl leading-8">{bannerSubtitle}</p>
        </div>
      </div>
    </section>
  );
};

export default CustomPageBanner;
