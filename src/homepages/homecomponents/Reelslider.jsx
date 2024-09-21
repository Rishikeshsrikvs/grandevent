import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Reelslider.css';

import { EffectCoverflow, Navigation, Pagination } from 'swiper/modules';

// Import video files
import video_1 from './../../assets/videoreel/reel1.mp4';
import video_2 from './../../assets/videoreel/reel2.mp4';
import video_3 from './../../assets/videoreel/reel3.mp4';
import video_4 from './../../assets/videoreel/reel4.mp4';

function Reelslider() {
  return (
    <div className="reelcontainer">
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'3'}
        spaceBetween={60}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false
        }}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        {/* Add video slides */}
        <SwiperSlide className='reelslide'>
          <video src={video_1} autoPlay controls muted playsInline />
        </SwiperSlide>
        <SwiperSlide className='reelslide' >
          <video src={video_2} autoPlay controls muted playsInline />
        </SwiperSlide>
        <SwiperSlide className='reelslide'>
          <video src={video_3} autoPlay controls muted playsInline />
        </SwiperSlide>
        <SwiperSlide className='reelslide'>
          <video src={video_4} autoPlay controls muted playsInline />
        </SwiperSlide>
        <SwiperSlide className='reelslide'>
          <video src={video_1} autoPlay controls muted playsInline />
        </SwiperSlide>

        {/* <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div> */}
      </Swiper>
    </div>
  );
}

export default Reelslider;
