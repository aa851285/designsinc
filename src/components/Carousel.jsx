import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/swiper-bundle.css';
import { motion } from "framer-motion";

import { fadeIn } from "../utils/motion";

import { EffectCoverflow, Pagination, Navigation,Autoplay } from 'swiper';

import { shopiimage,phpimage,reactimage,reactnimage,figmaimage } from '../assets';
import { sectionWrapper } from '../hoc';




function Carousel() {
  return (
    <div className="container mx-auto w-full">
      
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'4'}
        autoplay={{ delay: 3000 }}
      
      
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
       
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >

<motion.div
        variants={fadeIn("up", "spring", 2, 3)}>
        <SwiperSlide>
          <img src={shopiimage} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={phpimage} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={reactimage} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={figmaimage} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={reactimage} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={reactnimage} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={reactimage} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={figmaimage} alt="slide_image" />
        </SwiperSlide>
        
        
        <SwiperSlide>
          <img src={reactimage} alt="slide_image" />
        </SwiperSlide>
        </motion.div>

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  );
}

export default Carousel