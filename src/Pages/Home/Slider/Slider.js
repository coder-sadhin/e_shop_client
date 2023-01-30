import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./style.css";

// import required modules
import { Pagination, Navigation } from "swiper";


import img1 from '../../../assets/slider/laptop.webp'
import img2 from '../../../assets/slider/smartwatch.webp'
import img3 from '../../../assets/slider/phone.webp'
import img4 from '../../../assets/slider/shoes.jpg'
import img5 from '../../../assets/slider/jacket.webp'
import img6 from '../../../assets/slider/bag.webp'


const Slider = () => {
    return (
        <div
            className='container mx-auto'
            data-aos="fade-down"
            data-aos-duration="3000"
        >
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                slidesPerGroup={3}
                loop={true}
                loopFillGroupWithBlank={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper "
            >
                <SwiperSlide><img src={img1} alt="" /></SwiperSlide>
                <SwiperSlide><img src={img2} alt="" /></SwiperSlide>
                <SwiperSlide><img src={img3} alt="" /></SwiperSlide>
                <SwiperSlide><img src={img4} alt="" /></SwiperSlide>
                <SwiperSlide><img src={img5} alt="" /></SwiperSlide>
                <SwiperSlide><img src={img6} alt="" /></SwiperSlide>

            </Swiper>
        </div>
    );
};

export default Slider;