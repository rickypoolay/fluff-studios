import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import { Autoplay } from "swiper";

export default function ShowcaseSlider() {
  const images = [
    "/images/25-dials.svg",
    "/images/achoo.svg",
    "/images/arain-transport.svg",
    "/images/good-behavior.svg",
    "/images/horse.svg",
    "/images/kong-beerbong.svg",
    "/images/osu-DPHI.svg",
  ];

  return (
    <div id="showcase-slider">
      <h3>Dreams we made come true</h3>
      <div className="slider">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          loop={true}
          breakpoints={{
            300: {
              slidesPerView: 2,
            },
            500: {
              slidesPerView: 3,
            },
            900: {
              slidesPerView: 4,
            },
          }}
          autoplay={true}
          className="mySwiper"
        >
          {images?.map((img) => (
            <SwiperSlide key={img}>
              <div className="image-wrapper showcase-img">
                <Image src={img} layout="fill" objectFit="contain" alt="" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
