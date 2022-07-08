import Image from "next/image";
import React, { useRef } from "react";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import { Navigation, Pagination, Virtual } from "swiper";

export default function PersonalTestimonial() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div id="personal-testimonial">
      <button ref={prevRef} className="slider-controller-desktop slider-btn">
        <AiOutlineArrowLeft size={"50px"} />
      </button>
      <Swiper
        autoplay
        slidesPerView={1}
        grabCursor={true}
        centeredSlides={true}
        onInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
        pagination={true}
        modules={[Pagination, Virtual, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="content-wrapper">
            <div className="top">
              <div className="image-wrapper portrait">
                <Image
                  src={"/images/christine-chu.png"}
                  alt=""
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </div>
            <div className="bottom">
              <h3 className="name">Christine Chu</h3>
              <h4>Marketing Influencer, Chu Style</h4>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum,
                repellendus quae recusandae libero magnam nulla eum itaque
                laboriosam temporibus molestias ullam totam at doloribus beatae
                officia.
              </p>
              <div className="skills"></div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="content-wrapper">
            <div className="top">
              <div className="image-wrapper portrait">
                <Image
                  src={"/images/christine-chu.png"}
                  alt=""
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </div>
            <div className="bottom">
              <h3 className="name">Christine Chu</h3>
              <h4>Marketing Influencer, Chu Style</h4>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum,
                repellendus quae recusandae libero magnam nulla eum itaque
                laboriosam temporibus molestias ullam totam at doloribus beatae
                officia.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="content-wrapper">
            <div className="top">
              <div className="image-wrapper portrait">
                <Image
                  src={"/images/christine-chu.png"}
                  alt=""
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </div>
            <div className="bottom">
              <h3 className="name">Christine Chu</h3>
              <h4>Marketing Influencer, Chu Style</h4>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum,
                repellendus quae recusandae libero magnam nulla eum itaque
                laboriosam temporibus molestias ullam totam at doloribus beatae
                officia.
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      {/* <div className="slider-controller mobile">
        <button className="slider-btn" ref={prevRef}>
          <AiOutlineArrowLeft size={"50px"} />
        </button>
        <button className="slider-btn" ref={nextRef}>
          <AiOutlineArrowRight size={"50px"} />
        </button>
        
      </div> */}
      <button ref={nextRef} className="slider-controller-desktop slider-btn">
        <AiOutlineArrowRight size={"50px"} />
      </button>
    </div>
  );
}
