import React, { useState } from "react";
import { MdDeleteOutline, MdOutlinePayment } from "react-icons/md";
import { Link } from "react-router-dom";
import useCarts from "../Hooks/useCarts";
import Checkout from "./Payment/Checkout";

const CartItem = ({ cart, setOpen, setSnackOpen }) => {
  const [layout, setLayout] = useState(undefined);
  const price = cart.price;
  const initialQuantity = cart.quantity;
  const [quantity, setQuantity] = useState(initialQuantity);
  const [carts, setCarts] = useCarts();
  const [total, setTotal] = useState(price * initialQuantity);

  const handleDelete = () => {
    fetch(`https://kayi-tribe-restuarant.onrender.com/api/cart/${cart._id}`, {
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
    <div className="p-5 rounded-md bg-[#F9FAFC] flex flex-col lg:flex-row my-2">
      <img className="lg:w-20 rounded-md" src={cart.foodImg} alt="" />
      <div className="mx-5 grid lg:grid-cols-2 grid-cols-1 w-full">
        <div>
          <h4 className="font-bold">{cart.food}</h4>
          <p>Quantity: {quantity}</p>
          <p>Price: ${total}</p>
        </div>
        <div className="flex justify-end items-center my-5">
          {/* <Link to={`/checkout/${cart._id}`}>
            <button
              // onClick={() => handleCheckout()}
              className="flex items-center justify-center bg-[#F5C332] h-10 px-5 mr-5"
            >
              <MdOutlinePayment className="lg:mr-3" />
              Checkout
            </button>
          </Link> */}
          <button
            className="flex items-center justify-center bg-[#F5C332] h-10 px-5 mr-5"
            onClick={() => {
              setLayout("center");
            }}
          >
            <MdOutlinePayment className="lg:mr-3" />
            Payment
          </button>
          <Checkout
            cart={cart}
            layout={layout}
            setLayout={setLayout}
            total={total}
            quantity={quantity}
            setSnackOpen={setSnackOpen}
          />

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
