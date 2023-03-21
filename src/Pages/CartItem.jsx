import React, { useEffect } from "react";
import { MdDeleteOutline, MdOutlinePayment } from "react-icons/md";
import { Link } from "react-router-dom";
import useCarts from "../Hooks/useCarts";

const CartItem = ({ cart, setOpen }) => {
  const [carts, setCarts] = useCarts();
  const handleDelete = () => {
    fetch(`http://localhost:4000/api/cart/${cart._id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          const remainingOrders = carts.filter((c) => c._id !== cart._id);
          setCarts(remainingOrders);
          setOpen(true);
          setTimeout(() => setOpen(false), 3000);
        }
      });
  };
  return (
    <div className="p-5 rounded-md bg-[#F9FAFC] flex my-2">
      <img className="w-20 rounded-md" src={cart.foodImg} alt="" />
      <div className="mx-5 flex justify-between items-center w-full">
        <div>
          <h4 className="font-bold">{cart.food}</h4>
          <p>Quantity: {cart.quantity}</p>
          <p>Price: ${cart.price}</p>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <Link to="/checkout">
            <button className="flex items-center justify-center bg-[#F5C332] h-10 px-5">
              <MdOutlinePayment className="lg:mr-3" />
              Checkout
            </button>
          </Link>
          <button
            onClick={() => {
              handleDelete(cart._id);
            }}
            className="flex justify-center items-center bg-[#f53232] text-[#fff] h-10 px-5"
          >
            <MdDeleteOutline className="lg:mr-3" />
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
