import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import img6 from "../assets/images/Banner11.png";
import img7 from "../assets/images/Banner12.png";
import img8 from "../assets/images/Banner13.png";
import img9 from "../assets/images/Banner14.png";

// Import required modules
import { Pagination, Autoplay } from "swiper/modules";

const Slider = () => {
  return (
    <div className="w-full  p-5 gap-2 sm:flex justify-center items-center">
      <div className=" sm:w-3/4 ">
        <div className="rounded-xl">
          <Swiper
            autoplay={{
              delay: 3000, // Delay between slides in milliseconds
              disableOnInteraction: false, // Continue autoplay after user interaction
            }}
            pagination={{
              dynamicBullets: true,
            }}
            modules={[Pagination, Autoplay]}
            className="mySwiper rounded-xl"
            style={{
              "--swiper-pagination-color": "#FFFF",
              "--swiper-pagination-bullet-inactive-color": "#999999",
              "--swiper-pagination-bullet-inactive-opacity": "1",
              "--swiper-pagination-bullet-size": "7px",
              "--swiper-pagination-bullet-horizontal-gap": "6px",
            }}
          >
            <SwiperSlide>
              <img
                src={img9}
                alt="Slide 1"
                className="w-full sm:min-h-[300px] h-[160px] rounded-xl border "
                loading="lazy"
              /> 
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={img6}
                alt="Slide 2"
                className="w-full  sm:min-h-[300px] h-[160px] rounded-xl border"
                loading="lazy"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={img7}
                alt="Slide 3"
                className="w-full sm:min-h-[300px] rounded-xl  h-[160px] border"
                loading="lazy"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={img8}
                alt="Slide 3"
                className="w-full sm:min-h-[300px] rounded-xl  h-[160px] border"
                loading="lazy"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div className="hidden sm:block sm:w-1/4 sm:min-h-[300px] border rounded-xl">
        <div
          className="w-full sm:min-h-[300px] rounded-xl  h-[160px] border"
          >
        </div>
      </div>
    </div>
  );
};

export default Slider;
 