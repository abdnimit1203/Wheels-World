import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const SingleBrand = ({brand}) => {
    return (
        <div>
             <Link to={`/brands/${brand.brandName}`}>
              <div key={brand.id}
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
        </div>
    );
};
SingleBrand.propTypes = {
    brand: PropTypes.object.isRequired,
  };
export default SingleBrand;