import React, { useState } from "react";
import { MdDeleteOutline } from "react-icons/md";
import useCarts from "../Hooks/useCarts";

const CartItem = ({ cart, setOpen }) => {
  const price = cart.price;
  const initialQuantity = cart.quantity;
  const [quantity, setQuantity] = useState(initialQuantity);
  const [carts, setCarts] = useCarts();
  const [total, setTotal] = useState(price * initialQuantity);

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
      <div className="mx-5 grid grid-cols-2 w-full">
        <div>
          <h4 className="font-bold">{cart.food}</h4>
          <p>Quantity: {quantity}</p>
          <p>Price: ${total}</p>
        </div>
        <div className="flex justify-end items-center">
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
