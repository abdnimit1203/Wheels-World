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
       delay: 16500,
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
        <div className="bg-[url('https://i.ibb.co/xsjm1N3/mercedes-C-class.jpg')] bg-center bg-no-repeat bg-cover">
            <div className="h-[600px] flex flex-col justify-start pt-20 items-end text-right text-white bg-[#11111148] px-[20%] gap-3">
                <h2 className="text-white text-8xl uppercase text-shadow-lg shadow-slate-500/50 ">2022</h2>
                <h2 className="text-white text-6xl uppercase text-shadow-lg shadow-slate-500/50">C-CLass</h2>
                <p className="text-3xl uppercase text-primary font-bold">Launched</p>
                <Link to={'/brands/Mercedes-Benz'}>
                
                  <button className="btn btn-xs btn-error w-fit px-6 rounded-sm  text-white">View Model</button>
                </Link>
            </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="bg-[url('https://i.ibb.co/W2spNvt/ford-f-150.jpg')] bg-center bg-no-repeat bg-cover">
            <div className="h-[600px] flex flex-col justify-end items-center text-white bg-[#1111113b] px-[20%] gap-4 pb-16">
                <h2 className="text-white text-3xl">THE OFF-ROAD KING is here</h2>
                <h2 className="text-blue-500 text-4xl text-center">FORD F150</h2>
               <Link to={'/brands/Ford'}>
               
                <p className="btn btn-xs">CHECK THIS OUT</p>
               </Link>
            </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="bg-[url('https://i.ibb.co/R2SC5z3/TESLA-cyber-truck.jpg')] bg-center bg-no-repeat bg-cover">
            <div className="h-[600px] flex flex-col justify-end pb-14 items-center text-white bg-[#1111117e] px-[20%] gap-6">
              <img src="https://i.ibb.co/kBx841g/cybertruck.png" alt="cybertruck" className="w-fit h-20" />
              <h2 className="text-white text-3xl text-shadow-lg uppercase text-center shadow-indigo-500/50">Get the brand new CYberTRUCK now!</h2>
              <Link to={'/brands/Tesla'}>
              
              <button className="border-2 border-sky-400 rounded-md py-2 px-5 hover:btn-accent">Grab It</button>
              </Link>
               
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
