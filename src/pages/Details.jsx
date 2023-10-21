import { useContext } from "react";
import toast from "react-hot-toast";
import { AiFillStar } from "react-icons/ai";
import { BiCartAdd } from "react-icons/bi";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../hooks/AuthProvider";
import { BsFillCartPlusFill } from "react-icons/bs";

const Details = () => {

  const data = useLoaderData();
  const productData = data[0];
  const {user} = useContext(AuthContext)

  console.log(productData);
//   const navigate = useNavigate();
console.log(user.email);
console.log(productData._id);
const userEmail = user.email
const notify = ()=>{
    toast('Product successfully Added to CART! ', {
        duration: 4000,
        position: 'top-right',
      
        // Styling
        style: {height: "60px"},
        className: '',
      
        // Custom Icon
        icon: <BsFillCartPlusFill className="text-2xl"/>,
    })      
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
  const cartID = _id
  const cartData = {
   userEmail,
   cartID,
   brandName,
   imageURL,
   modelName,
   price,
   ratings,
   short_description,
   type
}

  const handleAddToCart = ()=>{
  
    fetch('https://abds-wheels-world-server.vercel.app/carts',{
        method: 'POST',
        headers: {
            'content-type': 'application/json',

        },
        body: JSON.stringify(cartData)
    })
    .then(res=>res.json())
    .then(data=>{
        console.log(data);
        notify()
    })
   
    
  }
  
  return (
    <div className="">
      <div className="flex justify-center items-center bg-base-300">
        <img src={imageURL? imageURL : "https://i.ibb.co/B4YKWLZ/NO-PHOTO-FOUND.png"} alt="car-image" />
      </div>
      <div className="bg-[url(https://i.ibb.co/QYgkYHq/bg-side-design.png)] bg-contain bg-no-repeat">

      <div className="w-[80%] glass mx-auto gap-6 p-4 flex flex-col md:flex-row py-14 min-h-[400px] ">
        
            <div className="flex-1 space-y-6 md:border-r-2 md:pr-6 ">
                <h2 className="text-3xl">{brandName} - {modelName}</h2>
                <button className="btn btn-sm btn-warning">{type}</button>
                <p className="text-lg">{short_description}</p>
                <h2 className="">{}</h2>

            </div>
            <div className="w-fit">
                <button className="btn hover:">THIS CAR GOT A {ratings} <AiFillStar className="text-orange-500 text-xl"/> Ratings</button>
                <p className="border-4 border-neutral rounded-full my-6 p-3 text-center bg-gradient-to-tr from-red-700 to-rose-600 text-white">Price: $ {parseInt(price).toLocaleString("en-US")}</p>
                <button onClick={handleAddToCart} className="btn btn-neutral btn-wide motion-safe:animate-bounce hover:animate-none delay-700 "><BiCartAdd className="text-xl text-red-500  "/>Add to Cart </button>
            </div>
      </div>
      </div>
    </div>
  );
};

export default Details;
