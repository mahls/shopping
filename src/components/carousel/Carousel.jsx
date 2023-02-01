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
  
  const [showModal, setShowModal] = useState(false);
  console.log(itemData);

  let imageStyle="h-2/4 w-2/4 cursor-pointer"

  return (
    
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}  
      className="text-white w-3/5 h-3/5 mr-20 mb-30"
    >

    <div className="h-1/5">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={1}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        className="mb-20 h-1/5"
      >

        <SwiperSlide>
          <img src={itemData.image} className={imageStyle}/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={itemData.image} className={imageStyle}/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={itemData.image} className={imageStyle}/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={itemData.image} className={imageStyle}/>
        </SwiperSlide>
      </Swiper>

    </div>

    </motion.div>
  )
}

export default Carousel
