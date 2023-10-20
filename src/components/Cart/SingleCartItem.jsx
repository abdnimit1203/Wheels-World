import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Swal from "sweetalert2";
const SingleCartItem = ({ cartItems }) => {
  console.log(cartItems);
  const [myCart, setMyCart] = useState([]);
  useEffect(()=>{
    setMyCart(cartItems)
  },[cartItems])
  console.log(myCart);

  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        
        fetch(`http://localhost:3000/carts/single/${_id}`, {
          method: "DELETE",
          headers:{
            'content-type': 'application/json'
          },
          body: JSON.stringify(myCart[0])
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            const updatedCart = myCart.filter(
              (cart) => cart._id != _id
            );
            setMyCart(updatedCart);
          });
        Swal.fire("Deleted!", "Your Product has been deleted.", "success");
      }
    });
  };










  return myCart.length ? (
    myCart.map(cartItem=>
    <li className="flex items-center gap-4" key={cartItem._id}>
      <img
        src={cartItem.imageURL}
        alt="cart image"
        className="h-16 w-16 rounded object-cover"
      />

      <div>
        <h3 className="text-lg text-gray-900">
          {cartItem.brandName} - {cartItem.modelName}
        </h3>

        <dl className="mt-0.5 space-y-px text-[14px] text-gray-600">
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

      <div className="flex flex-1 items-center justify-end gap-2">
        <p className="p-1 px-4 mr-4 rounded bg-base-300">1</p>
        <button
          onClick={() => handleDelete(cartItem._id)}
          className="text-gray-600 transition hover:text-red-600"
        >
          DELETE
        </button>
      </div>
    </li>)
  ) : (
    <div className="flex flex-col justify-center items-center">
        <img src="https://i.ibb.co/GFfHkws/empty-Cart.png" alt="emptycart" className="p-4"/>
        <p>OPPS NO ITEMS IN THE CART</p>

    </div>
  );
};
SingleCartItem.propTypes = {
    cartItems: PropTypes.array.isRequired,
  };
export default SingleCartItem;
