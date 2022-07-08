import Image from "next/image";
import { useRef } from "react";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import "swiper/css/effect-coverflow";
import { EffectCoverflow, Pagination, Virtual, Navigation } from "swiper";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import ReactPlayer from "react-player";

export default function VideoCarousel({ videos }) {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div id="media-carousel">
      <button ref={prevRef} className="arrow arrow-video">
        <IoIosArrowBack size={"100%"} />
      </button>

      <Swiper
        slidesPerView={1}
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
        {videos?.map((video, index) => (
          <SwiperSlide key={index}>
            {console.log(videos)}
            <div className="video-wrapper carousel-video">
              <ReactPlayer
                controls
                height={"100%"}
                width={"100%"}
                url={videos}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <button ref={nextRef} className="arrow arrow-video">
        <IoIosArrowForward size={"100%"} />
      </button>
    </div>
  );
}
