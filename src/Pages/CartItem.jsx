import React from "react";
import { MdOutlinePayment } from "react-icons/md";

const CartItem = () => {
  return (
    <div className="p-5 rounded-md bg-[#F9FAFC] flex">
      <img className="w-20 rounded-md" src="{}" alt="" />
      <div className="mx-5 flex justify-between items-center w-full">
        <div>
          <h4 className="font-bold">Food</h4>
          <p>Quantity: </p>
          <p>Price: </p>
        </div>
        <button className="flex items-center bg-[#F5C332] h-10 px-5">
          <MdOutlinePayment className="lg:mr-3" />
          Checkout
        </button>
      </div>
    </div>
  );
};

export default CartItem;
