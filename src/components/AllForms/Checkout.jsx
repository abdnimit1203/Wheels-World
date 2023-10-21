import PropTypes from "prop-types";
import { FaCcMastercard, FaCcVisa, FaRegCreditCard } from "react-icons/fa";

const Checkout = ({price}) => {
    console.log(price);
  return (
    <div className="flex flex-col justify-center items-center w-full ">
      <h2 className="w-full text-white bg-black text-center py-4 rounded-md">
        PAYMENT
      </h2>
      <p className="mb-6">Pay with card</p>
      <form className="w-full flex flex-col px-10 ">
        <label htmlFor="email">Email</label>
        <input
          type="text"
          name="email"
          id="email"
          className="border border-neutral-400 p-2 mb-6 rounded-md"
        />

        <label htmlFor="shipping">Shipping Address</label>
        <div className="join join-vertical py-4">
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Name"
          className="border border-neutral-400 join-item p-2 "
        />
        <select className="select select-bordered join-item">
          <option disabled selected>
            Country
          </option>
          <option>USA</option>
          <option>BANGLADESH</option>
          <option>JAPAN</option>
          <option>CANADA</option>
          <option>NORWAY</option>
        </select>
        <input
          type="text"
          name="address"
          id="address"
          placeholder="Address"
          className="border border-neutral-400 join-item p-2 "
        />
        </div>

        <label htmlFor="shipping">Payment details</label>
        <label htmlFor="shipping" className="text-xs py-2">Card Information</label>
        <div className="join join-vertical pb-4">
        
        <div className="relative">

        <input
          type="text"
          name="cardNumber"
   
          placeholder="1234 1234 1234 1234"
          className="border border-neutral-400 join-item p-2 w-full"
        />
        <span
              className="absolute inset-y-0 end-0 grid grid-cols-3 place-content-center px-4 text-red-500 text-xl cursor-pointer gap-1"
            >
            <FaCcVisa /> <FaCcMastercard/><FaRegCreditCard/>
            </span>
       
        </div>
        <div className="grid grid-cols-2">
        <input
          type="text"
          name="date"
   
          placeholder="MM/YY"
          className="border border-neutral-400 join-item p-2 w-full"
        />
        <input
          type="text"
          name="CVC"
   
          placeholder="CVC"
          className="border border-neutral-400 join-item p-2 w-full"
        />
        </div>
        <div className="flex gap-2 py-4">
        <input type="checkbox" checked="checked" className="checkbox" id="checkbox" />
            <label htmlFor="checkbox">Billing address same as shipping</label>
        </div>
        <button className="btn-neutral btn">Pay ${price} </button>
        
        </div>
        
      </form>
    </div>
  );
};
Checkout.propTypes = {
    price: PropTypes.number.isRequired,
  };
export default Checkout;
