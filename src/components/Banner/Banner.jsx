import {Swiper, SwiperSlide} from "swiper/react";

import 'swiper/css';
import { Navigation } from 'swiper/modules';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination } from 'swiper/modules';
const Banner = () => {
  return (
    <div>

    <Swiper
     spaceBetween={30}
     centeredSlides={true}
     autoplay={{
       delay: 6500,
       disableOnInteraction: false,
     }}
     pagination={{
       clickable: true,
     }}
     navigation={true}
     modules={[Autoplay, Pagination, Navigation]}
     className="mySwiper bg-red-400"
    >
      <SwiperSlide>
        <div className="bg-[url('images/loginBG.jpg')] bg-center bg-no-repeat bg-cover">
            <div className="h-[600px] flex flex-col justify-center items-center text-white bg-[#1111117e]">
                <h2 className="text-white text-4xl">LETS FIND YOUR PERFECT CAR</h2>
                <h3>Choose from our ready stock or get directly imported from Japan & European countries</h3>
            </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="bg-[url('images/loginBG.jpg')] bg-center bg-no-repeat bg-cover">
            <div className="h-[600px]">
                <h2>Hello</h2>
            </div>
        </div>
      </SwiperSlide>
     
     

    </Swiper>

    </div>
  );
};

export default Banner;
