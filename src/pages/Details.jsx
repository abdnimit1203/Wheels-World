import { useContext } from "react";
import toast from "react-hot-toast";
import { AiFillStar } from "react-icons/ai";
import { BiCartAdd } from "react-icons/bi";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../hooks/AuthProvider";

const Details = () => {

  const data = useLoaderData();
  const productData = data[0];
  const {user} = useContext(AuthContext)
  console.log(productData);
//   const navigate = useNavigate();
console.log(user.email);
console.log(productData._id);
const notify = ()=>{
    toast.success(`${modelName} -Added to cart Successfully`)
}

  const {
    _id,
    brandName,
    imageURL,
    modelName,
    price,
    ratings,
    short_description,
    type,
  } = productData;


  const handleAddToCart = ()=>{
    notify()
    console.log(_id);
  }
  return (
    <div className="">
      <div className="flex justify-center items-center bg-base-300">
        <img src={imageURL} alt="car-image" />
      </div>
      <div className="w-[80%] mx-auto gap-6 p-4 flex felx-col md:flex-row pt-14 ">
            <div className="flex-1 space-y-6">
                <h2 className="text-3xl">{brandName} - {modelName}</h2>
                <button className="btn btn-sm btn-warning">{type}</button>
                <p className="text-lg">{short_description}</p>
                <h2 className="">{}</h2>

            </div>
            <div>
                <button className="btn hover:">THIS CAR GOT A {ratings} <AiFillStar className="text-orange-500 text-xl"/> Ratings</button>
                <p className="border-4 border-neutral rounded-full my-6 p-3 text-center bg-gradient-to-tr from-red-700 to-rose-600 text-white">Price: ${price}</p>
                <button onClick={handleAddToCart} className="btn btn-neutral btn-wide"><BiCartAdd className="text-xl text-red-500"/>Add to Cart </button>
            </div>
      </div>
    </div>
  );
};

export default Details;
