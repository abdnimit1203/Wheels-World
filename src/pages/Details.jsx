import { useContext } from "react";
import toast from "react-hot-toast";
import { BiCartAdd } from "react-icons/bi";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../hooks/AuthProvider";
import { BsFillCartPlusFill } from "react-icons/bs";
import Rating from "react-rating";



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
        position: 'top-center',
      
        // Styling
        style: {height: "60px", color: "green"},
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
      <div  data-aos="zoom-out"  className="flex justify-center items-center bg-base-300">
        <img src={imageURL? imageURL : "https://i.ibb.co/B4YKWLZ/NO-PHOTO-FOUND.png"} alt="car-image" />
      </div>
      <div className="bg-[url(https://i.ibb.co/QYgkYHq/bg-side-design.png)] bg-contain bg-no-repeat">

      <div  data-aos="fade-right" className="w-[80%] glass mx-auto gap-6 p-4 flex flex-col md:flex-row py-14 min-h-[400px] ">
        
            <div className="flex-1 space-y-6 md:border-r-2 md:pr-6 ">
                <h2 className="text-3xl">{brandName} - {modelName}</h2>
                <button className="btn btn-sm btn-warning">{type}</button>
                <p className="text-lg">{short_description}</p>
                <h2 className="">{}</h2>

            </div>
            <div className="w-fit ">
                <button className="btn hover:">THIS CAR Ratings : <Rating
              emptySymbol={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="darkOrange"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                  />
                </svg>
              }
              fullSymbol={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  color="orange"
                  className="w-6 h-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  />
                </svg>
              }
              initialRating={ratings}
              readonly
            /></button>
                {/* Ratings */}
                




                <p  data-aos="fade-up" className="border-4 border-neutral rounded-full my-6 p-3 text-center bg-gradient-to-tr from-red-700 to-rose-600 text-white">Price: $ {parseInt(price).toLocaleString("en-US")}</p>
                <button  data-aos="fade-up"  onClick={handleAddToCart} className="btn btn-neutral w-full mx-auto transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300 "><BiCartAdd className="text-xl text-red-500  "/>Add to Cart </button>
            </div>
      </div>
      </div>
    </div>
  );
};

export default Details;
