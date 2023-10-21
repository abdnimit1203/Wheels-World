import {
  GiGearHammer,
  GiHouseKeys,
  GiRoundKnob,
  GiSteeringWheel,
} from "react-icons/gi";
import { TiTickOutline } from "react-icons/ti";
import ContactNav from "../components/Navbar/ContactNav";
import { BsFillFuelPumpDieselFill } from "react-icons/bs";

const Services = () => {
  return (
    <div>
      <div>
        <ContactNav></ContactNav>
      </div>
      <div className="bg-[url('https://i.ibb.co/MsLHvDz/lamborghini-aventador.jpg')] bg-center bg-no-repeat bg-cover">
        <div className="h-[600px] flex flex-col justify-center items-start text-white bg-[#1111117e] px-[10%] gap-6">
          <p 
           data-aos="fade-up"
          
          >BEST AUTO SERVICES</p>
          <h2  data-aos="fade-left" className="text-white text-4xl text-shadow-lg shadow-indigo-500/50">
            Innovative Solutions <br /> For Automobile
          </h2>

          <button  data-aos="fade-down" className="btn btn-ghost rounded-sm border border-white hover:border-white ">
            Learn more
          </button>
        </div>
      </div>

      <div className="flex flex-col md:flex-row">
        <div>
          <div className="bg-slate-900 hover:bg-slate-700 cursor-pointer flex sm:gap-10 text-white p-8 items-center justify-center sm:justify-start">
            Auto Repairs <span className="text-sm">+ View All</span>
          </div>
          <div className="bg-slate-900 hover:bg-slate-700 cursor-pointer flex sm:gap-10 text-white p-8 items-center justify-center sm:justify-start">
            Auto Services <span className="text-sm"> + View All</span>
          </div>
        </div>
        <div className="flex justify-around gap-6 items-center flex-1 py-6 bg-slate-900  text-gray-400 px-2">
          <div className="flex flex-col gap-2 justify-center items-center">
            <p className="text-4xl sm:text-6xl text-gray-400">
              <GiHouseKeys className="hover:animate-pulse"  />
            </p>

            <p>Car Keys</p>
          </div>
          <div className="flex flex-col gap-2 justify-center items-center">
            <p className="text-4xl sm:text-6xl text-gray-400">
              <GiGearHammer className="hover:animate-pulse" />
            </p>

            <p>Repairs</p>
          </div>
          <div className="flex flex-col gap-2 justify-center items-center ">
            <p className="text-4xl sm:text-6xl text-gray-400">
              <BsFillFuelPumpDieselFill className="hover:animate-pulse" />
            </p>

            <p>Fuel</p>
          </div>
          <div className="flex flex-col gap-2 justify-center items-center">
            <p className="text-4xl sm:text-6xl text-gray-400">
              <GiSteeringWheel className="hover:animate-pulse" />
            </p>

            <p>Streering</p>
          </div>
          <div className="flex flex-col gap-2 justify-center items-center">
            <p className="text-4xl sm:text-6xl text-gray-400">
              <GiRoundKnob className="hover:animate-pulse" />
            </p>

            <p>exhaust</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 justify-between gap-8 py-14 px-10 md:px-20 items-center">
        <div className="space-y-6 ">
          <h2 data-aos="fade-left"  className="capitalize text-3xl">
            we offer a complete <br /> diagnostic for you car
          </h2>
          <p data-aos="fade-down" >
            Vehicles are becoming ever more complex and challenging to repair.
          </p>
          <p data-aos="fade-down" >
            Our service has the upper hand in overcoming these challenges by
            pairing technology and innovation
          </p>
          <ul className="space-y-6">
            <li data-aos="fade-up" className="flex gap-4 font-semibold">
              <span className="btn btn-xs btn-circle btn-ghost border border-pink-600 ">
                <TiTickOutline className="text-pink-600" />
              </span>{" "}
              WE HAVE 24/7 EMERGENCY HOTLINE
            </li>
            <li data-aos="fade-up" className="flex gap-4 font-semibold">
              <span className="btn btn-xs btn-circle btn-ghost border border-pink-600 ">
                <TiTickOutline className="text-pink-600" />
              </span>{" "}
              MOBILE DIAGNOSTIC SERVICE AT HOME
            </li>
            <li data-aos="fade-up" className="flex gap-4 font-semibold">
              <span className="btn btn-xs btn-circle btn-ghost border border-pink-600 ">
                <TiTickOutline className="text-pink-600" />
              </span>{" "}
              MANAGE YOUR CAR ONLINE 24/7
            </li>
          </ul>
        </div>
        <div className="hidden md:grid grid-cols-2  gap-6 justify-end overflow-hidden">
          <img
            src="https://i.ibb.co/N2BNxNy/register-Side.jpg"
            alt="lambo"
            className="w-fit"
            data-aos="fade-up" 
          />
          <img
            src="https://i.ibb.co/FJpggXb/repair.jpg"
            alt="lambo"
            className="w-fit pt-10"
            data-aos="fade-down" 
          />
        </div>
       
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center">
          <div  data-aos="fade-up"  className="p-6 border-2 my-10 mx-4">
            <div className="stat-title">Happy Clients</div>
            <div className="stat-value">319</div>
            <div className="stat-desc">Jan 1st - Dec 1st</div>
          </div>

          <div  data-aos="fade-down"  className="p-6 border-2 my-10 mx-4">
            <div className="stat-title">Vehicle Reapairs</div>
            <div className="stat-value">350</div>
            <div className="stat-desc">↗︎ 400 (22%)</div>
          </div>

          <div  data-aos="fade-up" className="p-6 border-2 my-10 mx-4">
            <div className="stat-title">Year of Experience</div>
            <div className="stat-value">10</div>
            <div className="stat-desc">↘︎ 90 (14%)</div>
          </div>
          <div data-aos="fade-down"  className="p-6 border-2 my-10 mx-4">
            <div className="stat-title">AWARD WINNING</div>
            <div className="stat-value">21</div>
            <div className="stat-desc">↘︎ 90 (14%)</div>
          </div>
        </div>
    </div>
    
  );
};

export default Services;
