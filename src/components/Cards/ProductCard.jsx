import PropTypes from "prop-types";
import { BiEditAlt } from "react-icons/bi";
import { Link } from "react-router-dom";
const ProductCard = ({ product }) => {
  const {
    brandName,
    imageURL,
    modelName,
    price,
    ratings,

    type,
    _id,
  } = product;

  return (
    <div className="hover:animate-background rounded-xl p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s]">
      <article className="flex glass transition hover:shadow-xl ">
        <div className="rotate-180 p-2 [writing-mode:_vertical-lr] bg-red-700 text-white">
          <h1>Latest</h1>
        </div>

        <div className="hidden sm:block sm:basis-56">
          <img
            alt="Guitar"
            src={imageURL}
            className="aspect-square h-full w-full object-cover"
          />
        </div>

        <div className="flex flex-1 flex-col justify-between">
          <div className="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
            <h3 className="font-bold uppercase text-gray-900 text-2xl">
              {modelName}
            </h3>
            <h3 className="font-semibold uppercase text-gray-900 border-2 p-3 rounded-xl border-slate-600 mt-4 w-fit">
              BRAND : {brandName}
            </h3>
            <button className="btn btn-xs my-2 btn-secondary">{type}</button>
            <p>$ {parseInt(price).toLocaleString("en-US")}</p>
            {/* <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-700">
             {short_description}
            </p> */}
            <p>Ratings : {ratings}</p>
          </div>
        </div>
        <div className="sm:flex sm:flex-col sm:justify-between">
          <Link to={`/update-product/${_id}`}>
            <button className="btn btn-warning rounded-sm px-5 py-3 text-center text-xs font-bold uppercase text-gray-900 transition  flex gap-2">
              <BiEditAlt /> Update
            </button>
          </Link>
          <Link to={`/details/${_id}`}>
          
          <button className="btn btn-neutral border-2 border-slate-600 rounded-sm px-5 py-3 text-center text-xs font-bold uppercase transition  flex gap-2">
            <BiEditAlt /> Details
          </button>
          </Link>
        </div>
      </article>
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.object.isRequired,
};
export default ProductCard;
