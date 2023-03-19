import React, { useState } from "react";
import { BsCartCheck } from "react-icons/bs";
import { MdOutlinePayment } from "react-icons/md";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { TextField } from "@mui/material";

const AddCart = ({ total, food, quantity }) => {
  const [user] = useAuthState(auth);
  const [phone, setPhone] = useState("");
  const handleCart = () => {
    const item = {
      foodId: food._id,
      food: food.name,
      quantity: parseInt(quantity),
      price: parseInt(total),
      customerEmail: user?.email,
      customerPhone: phone,
    };
    console.log(phone);
  };
  return (
    <div className="bg-[#F9FAFC] my-5">
      <div className="bg-[#F7C531] p-3">
        <h3 className="text-2xl font-bold text-right">Add to cart</h3>
      </div>
      <div className="m-5">
        <h2 className="font-bold">{food.name}</h2>
        <p className="my-2">{food.des}</p>
        <p className="my-2">
          <span className="text-base font-bold">Quantity: </span> {quantity}
        </p>
        <h4 className="text-xl mb-4 font-bold">
          <span className="text-base">Total Price: </span>
          <span className="font-normal text-sm">$</span>
          {total}
        </h4>
        <TextField
          sx={{
            marginBottom: "10px",
            width: "100%",
          }}
          name="phone"
          onChange={(e) => setPhone(e.target.value)}
          size="small"
          label="Phone Number"
          variant="standard"
        />
        <div className="flex flex-col lg:flex-row">
          <button
            onClick={handleCart}
            className="bg-[#F7C531] px-5 py-3 m-2 flex justify-between items-center"
          >
            <BsCartCheck className="lg:mr-3" />
            Add to Cart
          </button>
          <button className="bg-[#000] text-[#fff] px-5 py-3 m-2 flex justify-between items-center">
            <MdOutlinePayment className="lg:mr-3" />
            Proceed Payment
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddCart;
