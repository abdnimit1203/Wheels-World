/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const Brands = ({ brands }) => {
  console.log(brands[0].bgImage);
  return (
    <div className="m-10 md:mx-[15%]">
        <div className="pb-10">
        <h1 className="text-center text-4xl lg:text-5xl pt-10 border-x-8 w-60 pb-6 mx-auto border-red-600 ">Brands</h1>
      

        </div>
     
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {brands?.map((brand) => (
          <>
            <Link to={`/brands/${brand.brandName}`}>
              <div
                style={{ "--image-url": `url(${brand.bgImage})` }}
                className={` bg-slate-800 text-slate-300 glass transition duration-300 ease-in-out hover:bg-[image:var(--image-url)] hover:opacity-90 bg-cover 
                
                `}
              >
                <div className="flex flex-col justify-center items-center px-6 py-16 bg-[#1111116e] ">
                  <img
                    src={brand.brandImage}
                    alt="brand image"
                    className="w-40 aspect-square pb-2"
                  />
                  <h2 className="text-xl md:text-3xl font-black ">
                    {brand.brandName}
                  </h2>
                </div>
              </div>
            </Link>
          </>
        ))}
      </div>
    </div>
  );
};

export default Brands;
