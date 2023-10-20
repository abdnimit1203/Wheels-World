/* eslint-disable react/prop-types */
import SingleBrand from "../SingleBrand/SingleBrand";

const Brands = ({ brands }) => {
  // console.log(brands);
  return (
    <div className="m-10 md:mx-[15%]">
        <div className="pb-10">
        <h1 className="text-center text-4xl lg:text-5xl pt-10 border-x-8 w-[50%] pb-6 mx-auto border-red-600">Our Brands</h1>
      <p className="text-center py-6">Choose the latest model cars from our trusted and worldwide popular brands!</p>

        </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {brands?.map((brand,idx) => <SingleBrand key={idx} brand={brand}></SingleBrand>)}
      </div>
    </div>
  );
};

export default Brands;
