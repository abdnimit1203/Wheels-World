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
     className="mySwiper bg-red-800"
    >
      <SwiperSlide>
        <div className="bg-[url('https://i.ibb.co/fn9QB24/loginBG.jpg')] bg-center bg-no-repeat bg-cover">
            <div className="h-[600px] flex flex-col justify-center items-left text-white bg-[#1111117e] px-[20%] gap-3">
                <p className="text-xl">FIND YOUR DREAM
                  
                </p>
                <h2 className="text-white text-4xl uppercase ">THE NEW <br />
                  BMW M SERIES <br />
                  SHADOW EDITION</h2>
                  <button className="btn w-fit px-6 rounded-sm bg-red-700 text-white hover:bg-red-600">See Details</button>
            </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="bg-[url('https://i.ibb.co/hWNBCJZ/lamborghini-revuelto-100879502-h.jpg')] bg-center bg-no-repeat bg-cover">
            <div className="h-[600px] flex flex-col justify-center items-center text-white bg-[#1111117e] px-[20%] gap-4">
                <h2 className="text-white text-4xl">LETS FIND YOUR PERFECT CAR</h2>
                <h3>Choose from our ready stock or get directly imported from Japan & European countries</h3>
            </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="bg-[url('https://i.ibb.co/Zc3CRTT/lamborghini-BG.jpg')] bg-center bg-no-repeat bg-cover">
            <div className="h-[600px] flex flex-col justify-center items-center text-white bg-[#1111117e] px-[20%] gap-6">
                <h2 className="text-white text-4xl">Luxury Meets Affordability <br /> with WHEELS WORLD</h2>
                <h3 className="text-lg">Look for the brand bars below to view and buy you perfect car of life</h3>
                <button className="btn btn-warning rounded-sm">Buy Now</button>
            </div>
        </div>
      </SwiperSlide>
     
     
     

    </Swiper>

    </div>
  );
};

export default Banner;
