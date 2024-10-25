import { Navigation } from 'swiper/modules';
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

import pic1 from '../../assets/3d-house-model-with-modern-architecture.jpg';
import pic2 from '../../assets/ai-generated-house-design.jpg';
import pic3 from '../../assets/beautiful-shot-big-farmhouse-clear-blue-sky.jpg';
import '../Slider/Slider.css'

const Slider = () => {
    return (
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
            <img src={pic1} alt="" />
            </SwiperSlide>
        <SwiperSlide>
            <img src={pic2} alt="" />
            </SwiperSlide>
        <SwiperSlide>
            <img src={pic3} alt="" />
            </SwiperSlide>
        
      </Swiper>
    );
};

export default Slider;