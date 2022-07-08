import Image from "next/image";
import { useRef } from "react";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import "swiper/css/effect-coverflow";
import { EffectCoverflow, Pagination, Virtual, Navigation } from "swiper";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { CgClose } from "react-icons/cg";
import { useState } from "react";
import { useEffect } from "react";

export default function ImageCarousel({ images }) {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [image, setImage] = useState();

  //IMAGE MODAL Handler
  useEffect(() => {
    const keyListener = (e) => {
      if (e.key == "Escape") {
        setImage();
      }
    };

    if (image) {
      document.body.style.overflow = "hidden";
      document.addEventListener("keydown", keyListener);
    } else {
      document.body.style.overflow = "unset";
      document.removeEventListener("keydown", keyListener);
    }
  }, [image]);

  return (
    <div id="media-carousel">
      {image && (
        <div className="image-full-wrapper">
          <div onClick={() => setImage()} className="close">
            <CgClose size={"100%"} />
          </div>
          <div className="image-wrapper">
            <Image
              src={image}
              priority
              layout="fill"
              objectFit="contain"
              alt=""
            />
          </div>
        </div>
      )}

      <button ref={prevRef} className="arrow">
        <IoIosArrowBack size={"100%"} />
      </button>

      <Swiper
        effect={"coverflow"}
        centeredSlides={true}
        onInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
        coverflowEffect={{
          rotate: 25,
          stretch: 0,
          depth: 50,
          modifier: 0.85,
          slideShadows: false,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination, Virtual, Navigation]}
        className="mySwiper"
      >
        {images &&
          images?.map((img, index) => (
            <SwiperSlide
              onClick={() => {
                setImage(img);
              }}
              key={index}
            >
              <div className="image-wrapper carousel-image">
                <Image src={img} layout="fill" objectFit="contain" alt="" />
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
      <button ref={nextRef} className="arrow">
        <IoIosArrowForward size={"100%"} />
      </button>
    </div>
  );
}
