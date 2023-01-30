import React from 'react'
import {useState, useEffect} from'react'
import {motion} from 'framer-motion'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import unavailable_image from '../../assets/unavailable_image.jpg'

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Carousel = ({itemData}) => {


  console.log(itemData);

  return (
    
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}  
      className="h-screen text-white"
    >

    <div className="w-96">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        <SwiperSlide>
          <img src={itemData.image} className="h-52 w-54 cursor-pointer"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={itemData.image} className="h-52 w-54"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={itemData.image} className="h-52 w-54"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={itemData.image} className="h-52 w-54"/>
        </SwiperSlide>
      </Swiper>
    </div>

    </motion.div>
  )
}

export default Carousel
