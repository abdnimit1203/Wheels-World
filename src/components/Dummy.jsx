import { FaCarAlt, FaFireExtinguisher } from "react-icons/fa";
import { BsThermometerSnow } from "react-icons/bs";
import { GiCarWheel } from "react-icons/gi";

import Marquee from "react-fast-marquee";

const Dummy = () => {
  return (
    <>
      <div className="bg-[url(https://i.ibb.co/XXSyFfy/bg.jpg)] bg-cover ">
        <div className="flex flex-col md:flex-row gap-4 p-10 md:px-[15%]">
          <div className="w-fit flex-1">
            <img
              src="https://i.ibb.co/1KS9v1T/carsale.png"
              alt="porche Sale"
              className=" w-fit "
            />
          </div>

          <div className="flex flex-col justify-center items-center py-16 gap-4 flex-1">
            <h2 className="text-5xl text-white">718 BOXSTER</h2>
            <p className="text-lg text-gray-300">
              Get the Porche You always Wanted
            </p>
            <p className="text-gray-500">per month</p>
            <h3 className="uppercase text-xl text-white">Limited time offer</h3>
            <button className="btn btn-primary font-bold">More DEtails</button>
          </div>
        </div>
      </div>
      {/* div 1 */}

      {/* div 2 */}
      <div className="sm:px-[15%] py-14">
        <h2 className="text-2xl text-center uppercase pb-14">More Brands comming soon...</h2>
        <Marquee>
          <div className="px-6">
            <img src="https://i.ibb.co/8brgWJD/porsche.png" alt="marquee image car logo" className="h-20 md:h-32 mx-5" />
          </div>
          <div className="px-6">
            <img src="https://i.ibb.co/PmVCvMQ/mazda.png" alt="marquee image car logo" className="h-20 md:h-32 mx-5" />
          </div>
          <div className="px-6">
            <img src="https://i.ibb.co/bKhW9dz/lexus.png" alt="marquee image car logo" className="h-20 md:h-32 mx-5" />
          </div>
          <div className="px-6">
            <img src="https://i.ibb.co/GJ5wcWQ/volkwagen.png" alt="marquee image car logo" className="h-20 md:h-32 mx-5" />
          </div>
          <div className="px-6">
            <img src="https://i.ibb.co/zN4QfCN/audi.png" alt="marquee image car logo" className="h-20 md:h-32 mx-5" />
          </div>
          <div className="px-6">
            <img
              src="https://i.ibb.co/9bY44fm/mitsubisi.png
"
              alt="marquee image car logo" className="h-20 md:h-32 mx-5"
            />
          </div>
        </Marquee>
      </div>

      {/* div 3 */}
      <div className="flex flex-col justify-center items-center gap-4 p-10 md:px-[15%] md:py-32">
        <p className="text-lg text-gray-500">
          We are trusted in Car Sales and Services
        </p>
        <h2 className="text-5xl uppercase font-semibold">Why Choose Us</h2>
        <p className="text-lg text-gray-500 text-center py-6">
          Car Dealer is the most enticing creative modern and multipurpose outo
          dealer <br />
          Suitable for any car dealer websites business or corporate websites
          The Theme has been Created especially for automotive dealers, car
          resellers car service <br />
          stations, mechanic workshop and auto motor retailers
        </p>
        <hr className="py-10" />
        {/* cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex flex-col justify-center items-center gap-2">
            <button className="bg-gray-200 p-10 rounded-full ">
              <span className="text-4xl text-orange-500">
                <FaFireExtinguisher />
              </span>
            </button>
            <h2 className="lg:text-base mt-4 text-center">OIL CHANGES</h2>
            <hr className="border-b-4 w-10 mx-auto my-4 border-slate-600 rounded-xl" />
            <p className="text-center text-gray-400">
              Golley simply dummy text emm is of the printinxa of type and
            </p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <button className="bg-gray-200 p-10 rounded-full ">
              <span className="text-4xl text-orange-500">
                <FaCarAlt />
              </span>
            </button>
            <h2 className="lg:text-base mt-4 text-center">AUTO ELECTRIC</h2>
            <hr className="border-b-4 w-10 mx-auto my-4 border-slate-600 rounded-xl" />
            <p className="text-center text-gray-400">
              Golley simply dummy text emm is of the printinxa of type and
            </p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <button className="bg-gray-200 p-10 rounded-full ">
              <span className="text-4xl text-orange-500">
                <BsThermometerSnow />
              </span>
            </button>
            <h2 className="lg:text-base mt-4 text-center">AIR CONDITIONING</h2>
            <hr className="border-b-4 w-10 mx-auto my-4 border-slate-600 rounded-xl" />
            <p className="text-center text-gray-400">
              Golley simply dummy text emm is of the printinxa of type and
            </p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <button className="bg-gray-200 p-10 rounded-full ">
              <span className="text-4xl text-orange-500">
                <GiCarWheel />
              </span>
            </button>
            <h2 className="lg:text-base mt-4 text-center">
              TIRE & WHEEL SERVICE
            </h2>
            <hr className="border-b-4 w-10 mx-auto my-4 border-slate-600 rounded-xl" />
            <p className="text-center text-gray-400">
              Golley simply dummy text emm is of the printinxa of type and
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dummy;
