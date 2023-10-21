import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../hooks/AuthProvider";
import { useLoaderData } from "react-router-dom";
import SingleCartItem from "./SingleCartItem";
import { GiCarWheel } from "react-icons/gi";

const Cart = () => {
  const allProductData = useLoaderData();
  console.log("All Product = ", allProductData);
  const { user } = useContext(AuthContext);
  // console.log(user.email);
  const cartUser = user.email;
  console.log("Cart User = ", cartUser);
  // state or cart ids
  const [cartIDs, setCartIDs] = useState([]);
  useEffect(() => {
    fetch(`https://abds-wheels-world-server.vercel.app/carts/${cartUser}`)
      .then((res) => res.json())
      .then((data) => setCartIDs(data));
  }, [cartUser]);
  console.log("CART = ", cartIDs);


  
  

  console.log(cartIDs);
  return (
    <div className="min-h-screen">
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <header className="text-center">
              <h1 className=" font-bold text-base-900 text-3xl flex justify-center items-center text-center gap-2 mb-16 border-x-8 border-red-600 px-4 w-fit mx-auto">
                Your Cart  <GiCarWheel/>
              </h1>
            </header>
            <SingleCartItem cartItems={cartIDs}></SingleCartItem>
            
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cart;
