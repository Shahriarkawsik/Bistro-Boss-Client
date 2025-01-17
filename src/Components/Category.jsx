import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import slide1 from "../assets/home/slide1.jpg";
import slide2 from "../assets/home/slide2.jpg";
import slide3 from "../assets/home/slide3.jpg";
import slide4 from "../assets/home/slide4.jpg";
import slide5 from "../assets/home/slide5.jpg";

const Category = () => {
  return (
    <div className="space-y-10 w-11/12 mx-auto">
      <div className="flex flex-col items-center justify-center mt-10 font-Inter space-y-5">
        <p className="text-color3 text-xl leading-6">
          ---From 11:00am to 10:00pm---
        </p>
        <h1 className="text-40 leading-48 text-color2 border border-x-0 border-y-4 border-color7 px-16 py-5 ">
          ORDER ONLINE
        </h1>
      </div>
      <Swiper
        slidesPerView={5}
        spaceBetween={24}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className="relative">
          <img className="w-full" src={slide1} alt="Slide 1" />
          <h1 className="text-32 leading-43 font-Cinzel absolute text-white z-50 bottom-6 left-1/2 transform -translate-x-1/2 text-center">
            Salads
          </h1>
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full" src={slide2} alt="" />
          <h1 className="text-32 leading-43 font-Cinzel absolute text-white z-50 bottom-6 left-1/2 transform -translate-x-1/2 text-center">
            Soups
          </h1>
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full" src={slide3} alt="" />
          <h1 className="text-32 leading-43 font-Cinzel absolute text-white z-50 bottom-6 left-1/2 transform -translate-x-1/2 text-center">
            pizzas
          </h1>
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full" src={slide4} alt="" />
          <h1 className="text-32 leading-43 font-Cinzel absolute text-white z-50 bottom-6 left-1/2 transform -translate-x-1/2 text-center">
            desserts
          </h1>
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full" src={slide5} alt="" />
          <h1 className="text-32 leading-43 font-Cinzel absolute text-white z-50 bottom-6 left-1/2 transform -translate-x-1/2 text-center">
            Salads
          </h1>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Category;