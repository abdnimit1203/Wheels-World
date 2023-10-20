import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../hooks/AuthProvider";
import { useLoaderData } from "react-router-dom";
import SingleCartItem from "./SingleCartItem";

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
    fetch(`http://localhost:3000/carts/${cartUser}`)
      .then((res) => res.json())
      .then((data) => setCartIDs(data));
  }, []);
  console.log("CART = ", cartIDs);

  // MATCHING IDS TO GET PRODUCT DATA

  const matchedProducts = [];
  for (const product of allProductData) {
    for (const cart of cartIDs) {
      if (product._id == cart.cartID) {
        matchedProducts.push(product);
        break; // No need to continue searching for this object
      }
    }
  }
  console.log(matchedProducts);
  return (
    <div>
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <header className="text-center">
              <h1 className="text-xl font-bold text-gray-900 sm:text-3xl">
                Your Cart ({matchedProducts.length} items)
              </h1>
            </header>

            <div className="mt-8">
              <ul className="space-y-4">
                <SingleCartItem cartItems={matchedProducts}></SingleCartItem>
              </ul>

              <div className="mt-8 flex justify-end border-t border-gray-100 pt-8 hidden">
                <div className="w-screen max-w-lg space-y-4">
                  <dl className="space-y-0.5 text-sm text-gray-700">
                    <div className="flex justify-between">
                      <dt>Subtotal</dt>
                      <dd>£250</dd>
                    </div>

                    <div className="flex justify-between">
                      <dt>VAT</dt>
                      <dd>£25</dd>
                    </div>

                    <div className="flex justify-between">
                      <dt>Discount</dt>
                      <dd>-£20</dd>
                    </div>

                    <div className="flex justify-between !text-base font-medium">
                      <dt>Total</dt>
                      <dd>£200</dd>
                    </div>
                  </dl>

                  <div className="flex justify-end">
                    <span className="inline-flex items-center justify-center rounded-full bg-indigo-100 px-2.5 py-0.5 text-indigo-700">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="-ms-1 me-1.5 h-4 w-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z"
                        />
                      </svg>

                      <p className="whitespace-nowrap text-xs">
                        2 Discounts Applied
                      </p>
                    </span>
                  </div>

                  <div className="flex justify-end">
                    <a
                      href="#"
                      className="block rounded bg-gray-700 px-5 py-3 text-sm text-gray-100 transition hover:bg-gray-600"
                    >
                      Checkout
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cart;
