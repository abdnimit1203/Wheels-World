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
    <div className="hover:animate-background rounded-xl p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s] max-w-7xl mx-auto w-full">
      <article className="flex glass bg-base-100 transition hover:shadow-xl ">
        <div className="rotate-180 p-2 [writing-mode:_vertical-lr] bg-red-700 text-white">
          <h1>Latest</h1>
        </div>

        <div className="hidden sm:block sm:basis-56">
          <img
            alt="Guitar"
            src={imageURL? imageURL : "https://i.ibb.co/B4YKWLZ/NO-PHOTO-FOUND.png"}
            className="aspect-square h-full w-full object-cover"
          />
        </div>

        <div className="flex flex-1 flex-col justify-between">
          <div className="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
            <h3 className="font-bold uppercase text-neutral text-2xl">
              {modelName}
            </h3>
            <h3 className="font-semibold uppercase text-neutral border-2 p-3 rounded-xl border-neutral mt-4 w-fit">
              BRAND : {brandName}
            </h3>
            <button className="btn btn-xs my-2 btn-secondary">{type}</button>
            <p className="text-lg">$ {parseInt(price).toLocaleString("en-US")}</p>
            {/* <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-700">
             {short_description}
            </p> */}
            <p className="text-lg">Ratings : {ratings}</p>
          <Link to={`/details/${_id}`} className="bg-red-600 max-w-10">
          
          <button className="btn btn-neutral border-2 border-slate-600 rounded-sm px-5 py-3 text-center text-xs font-bold uppercase transition  flex gap-2 w-fit">
            <BiEditAlt /> Details
          </button>
          </Link>
          </div>
        </div>
        <div className="flex flex-col justify-between">
          <Link to={`/update-product/${_id}`}>
            <button className="btn btn-warning rounded-sm p-5 py-3 text-center text-xs font-bold uppercase text-gray-900 transition lg:float-right ">
              <BiEditAlt />Update
            </button>
          </Link>
          <div className="h-40 bg-[url(https://i.ibb.co/QYgkYHq/bg-side-design.png)] bg-cover rotate-180 ">

          </div>
        </div>
      </article>
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.object.isRequired,
};
export default ProductCard;
