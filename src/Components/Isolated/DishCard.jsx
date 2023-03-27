import { Rating } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const DishCard = ({ dish }) => {
  // const navigate = useNavigate();
  // const handleNavigate = () => {
  //   navigate(`/our-menu/${dish._id}`);
  // };
  return (
    // <button onClick={handleNavigate}>
    <div className="cursor-pointer">
      <img src={dish.img} alt="" />
      <div className="flex justify-between items-center bg-[#F2F3F5]">
        <h4 className="font-bold mx-5">{dish.name.slice(0, 15) + "..."}</h4>
        <div className="bg-[#F5C332] h-14 w-14 flex justify-center items-center">
          <h4 className="text-xl font-bold">
            <span className="text-sm font-normal">&#2547;</span>
            {dish.price}
          </h4>
        </div>
      </div>
      <div className="my-5">
        <p className="text-[#6F6F87]">{dish.des}</p>
        <Rating name="read-only" value={dish.ratings} readOnly />
      </div>
    </div>
    // </button>
  );
};

export default DishCard;
