import {Swiper, SwiperSlide} from "swiper/react";

import 'swiper/css';
import { Navigation } from 'swiper/modules';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination } from 'swiper/modules';
import { Link, useLoaderData, useLocation } from "react-router-dom";
import ProductCard from "../components/Cards/ProductCard";

const SingleBrand = () => {
  const brandData = useLoaderData();
  console.log(brandData);
    const location = useLocation()
    // console.log(location.pathname.split("/brands/")[1]);
    const thisBrand = location.pathname.split("/brands/")[1]
    console.log("Brand = ", thisBrand);
  return (
    <div className="glass">
      {brandData.length ===0 ? (
        <div className="flex flex-col items-center justify-center space-y-10 py-10 lg:py-20 ">
            <img src="https://i.ibb.co/wSdK4mq/Seacrhcar.png" alt="no data image"  className="w-80 lg:w-[50%]"/>
          <h1>OPSS THERE IS NO DATA FOR THIS BRAND!</h1>
          <Link to={"/"}>
          
          <button className="btn btn-secondary">GO BACK</button>
          </Link>
        </div>
      ) : (
        <div className="bg-base-200">
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
          <div>

          </div>
          <div className="grid grid-cols-1 w-[80%] mx-auto py-16 gap-6">
            {
                brandData?.map(product=> <ProductCard key={product._id} product={product}></ProductCard>)
            }
           
          </div>
        </div>

      )}
    </div>
  );
};

export default SingleBrand;
