import React from "react";
import CartItem from "./CartItem";

const Cart = () => {
  return (
    <div className="mt-24 p-10">
      <h2 className="text-4xl font-bold">Cart</h2>
      <div className="border p-5 my-5">
        <CartItem />
      </div>
    </div>
  );
};

export default Cart;
