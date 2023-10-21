import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Swal from "sweetalert2";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import Checkout from "../AllForms/Checkout";
const SingleCartItem = ({ cartItems }) => {
  console.log(cartItems);
  const [myCart, setMyCart] = useState([]);
  useEffect(() => {
    setMyCart(cartItems);
  }, [cartItems]);
  console.log(myCart);

  const handleDelete = (_id) => {
    console.log(_id); 
    Swal.fire({
      title: "Are you sure?",
      text: "Do you really want to remove this from cart?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Remove it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/carts/single/${_id}`, {
          method: "DELETE",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(myCart[0]),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            const updatedCart = myCart.filter((cart) => cart._id != _id);
            setMyCart(updatedCart);
          });
        Swal.fire("Deleted!", "Your Product has been deleted.", "success");
      }
    });
  };
  // Getting total price & Cart checkout calculations
  const subTotal = myCart.reduce(
    (total, item) => total + parseInt(item.price),
    0
  );

  console.log("Total Price:", subTotal);
  const salesTax = parseFloat((subTotal*10)/100)
    const dealerFees = 2000;
    const discount = 1000;
const totalPrice = subTotal+ salesTax+dealerFees-discount

  return (
    <>
      {myCart.length ? 
        <div className="mt-8">
              <ul className="space-y-4">
              {
              myCart.map((cartItem) => (
          <li
            className="flex justify-center items-center gap-4 hover:glass hover:outline-none px-4"
            key={cartItem._id}
          >
            <Link
              to={`/details/${cartItem.cartID}`}
              className="flex items-center justify-center gap-6"
            >
              <img
                src={
                  cartItem.imageURL
                    ? cartItem.imageURL
                    : "https://i.ibb.co/B4YKWLZ/NO-PHOTO-FOUND.png"
                }
                alt="cart image"
                className="h-16 w-16 rounded object-cover"
              />

              <div>
                <h3 className="text-lg text-base-900">
                  {cartItem.brandName} - {cartItem.modelName}
                </h3>

                <dl className="mt-0.5 space-y-px text-[14px] text-base-600">
                  <div>
                    <dt className="inline">Type:</dt>
                    <dd className="inline px-2">{cartItem.type}</dd>
                  </div>

                  <div>
                    <dt className="inline">Price:</dt>
                    <dd className="inline px-2">${cartItem.price}</dd>
                  </div>
                </dl>
              </div>
            </Link>
            <div className="flex flex-1 items-center justify-end gap-2">
              <p className="p-1 px-4 mr-4 rounded bg-base-300">1</p>
              <button
                onClick={() => handleDelete(cartItem._id)}
                className="text-base-600 transition hover:text-red-600"
              >
                <RiDeleteBin6Line />
              </button>
            </div>
          </li>
        ))
       }
        </ul>
        <div className="mt-8 flex  justify-end border-t border-gray-100 pt-8 ">
        <div className="w-screen max-w-lg space-y-4">
          <dl className="space-y-0.5 text-sm text-gray-700">
            <div className="flex justify-between">
              <dt>Subtotal</dt>
              <dd>$ {subTotal}</dd>
            </div>

            <div className="flex justify-between">
              <dt>Sales Tax (10%)</dt>
              <dd>$ {salesTax}</dd>
            </div>
            <div className="flex justify-between">
              <dt>Dealer Fees:</dt>
              <dd>$ {2000}</dd>
            </div>

            <div className="flex justify-between">
              <dt>Discount</dt>
              <dd>-$ 1000</dd>
            </div>
            <div className="flex justify-between !text-base font-medium">
              <dt>Total</dt>
              <dd>${(subTotal + salesTax + dealerFees -discount).toLocaleString('en-US')}</dd>
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

              <p className="whitespace-nowrap text-xs">2 Discounts Applied</p>
            </span>
          </div>

          <div className="flex justify-end">
            {/* The button to open modal */}
            <label htmlFor="my_modal_6" className="btn block rounded bg-gray-700 px-5 py-3 text-sm text-gray-100 transition hover:bg-gray-600">
              Checkout
            </label>

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my_modal_6" className="modal-toggle" />
            <div className="modal">
              <div className="modal-box">
               <Checkout price={totalPrice}></Checkout>
                <div className="modal-action">
                  <label htmlFor="my_modal_6" className="btn">
                    Close!
                  </label>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
              
        </div>
        
      
      
      : (
        <div className="flex flex-col justify-center items-center my-auto">
          <img
            src="https://i.ibb.co/GFfHkws/empty-Cart.png"
            alt="emptycart"
            className="p-4"
          />
          <p>OPPS NO ITEMS IN THE CART</p>
        </div>
      )}
     
    </>
  );
};
SingleCartItem.propTypes = {
  cartItems: PropTypes.array.isRequired,
};
export default SingleCartItem;
