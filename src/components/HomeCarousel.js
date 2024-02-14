import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import './styles.css';
import { Navigation } from 'swiper/modules';
import Home from './Home'; // Add the missing import statement for the Home component
const slideStyles = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  resize: 'none',
};
const HomeCarousel = () => {
    return (
        <Swiper 
        modules={[Navigation]}
        navigation
        spaceBetween={500}
        slidesPerView={1}
        >
        <SwiperSlide style={slideStyles}>
            <div style={{ position: "sticky" }}>
            <Home />
            </div>
        </SwiperSlide>
        <SwiperSlide style={slideStyles}>
            <Home />
        </SwiperSlide>
        <SwiperSlide style={slideStyles}>
            <Home />
        </SwiperSlide>
        </Swiper>
    );
};
HomeCarousel.displayName = 'SwiperSlide';

export default HomeCarousel;    
