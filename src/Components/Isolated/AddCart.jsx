import React from "react";
import { BsCartCheck } from "react-icons/bs";
import { MdOutlinePayment } from "react-icons/md";

const AddCart = ({ total, food, quantity }) => {
  return (
    <div className="bg-[#F9FAFC]">
      <div className="bg-[#F7C531] p-3">
        <h3 className="text-2xl font-bold text-right">Add to cart</h3>
      </div>
      <div className="m-5">
        <h2 className="font-bold">{food.name}</h2>
        <p className="my-2">{food.des}</p>
        <p className="my-2">
          <span className="text-base font-bold">Quantity: </span> {quantity}
        </p>
        <h4 className="text-xl mb-5 font-bold">
          <span className="text-base">Total Price: </span>
          <span className="font-normal text-sm">$</span>
          {total}
        </h4>
        <div className="flex">
          <button className="bg-[#F7C531] px-5 py-3 mx-2 flex justify-between items-center">
            <BsCartCheck className="mr-3" />
            Add to Cart
          </button>
          <button className="bg-[#000] text-[#fff] px-5 py-3 mx-2 flex justify-between items-center">
            <MdOutlinePayment className="mr-3" />
            Proceed Payment
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddCart;
