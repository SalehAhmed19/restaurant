import { Rating } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Fade, Zoom } from "react-reveal";
import { useParams } from "react-router-dom";
import { TiMinus, TiPlus } from "react-icons/ti";
import { BsCartCheck } from "react-icons/bs";
import { MdOutlinePayment } from "react-icons/md";
import AddCart from "../Components/Isolated/AddCart";

const FoodDetails = () => {
  const { id } = useParams();
  const [food, setFood] = useState({});
  const [quantity, setQuantity] = useState(0);
  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };
  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  useEffect(() => {
    fetch(`https://kayi-tribe-restuarant.onrender.com/api/desserts/${id}`)
      .then((res) => res.json())
      .then((data) => setFood(data));
    fetch(`https://kayi-tribe-restuarant.onrender.com/api/drinks/${id}`)
      .then((res) => res.json())
      .then((data) => setFood(data));
    fetch(`https://kayi-tribe-restuarant.onrender.com/api/main/${id}`)
      .then((res) => res.json())
      .then((data) => setFood(data));
  }, []);
  return (
    <div className="p-10 grid grid-cols-1 lg:grid-cols-2">
      <div>
        <Zoom>
          <img className="w-96 rounded-md" src={food.img} alt="" />
        </Zoom>
      </div>
      <Fade>
        <div className="mx-5">
          <h2 className="text-4xl font-bold">{food.name}</h2>
          <p className="text-[#6F6F87] my-5">{food.des}</p>
          <h4 className="text-3xl mb-5 font-bold">
            <span className="font-normal text-sm">$</span>
            {food.price}
          </h4>
          <Rating
            className="mb-5"
            name="read-only"
            value={food.ratings}
            readOnly
          />
          <h4 className="text-xl mb-5">
            <span className="font-bold">Quantity: </span>
            {quantity}
          </h4>
          <div>
            <button
              onClick={handleIncrement}
              className="bg-[#F7C531] py-3 px-5"
            >
              <TiPlus className="text-xl" />
            </button>
            <button
              onClick={handleDecrement}
              className="bg-[#F7C531] py-3 px-5 border-l border-[#F78627]"
            >
              <TiMinus className="text-xl" />
            </button>
          </div>
          <AddCart quantity={quantity} setQuantity={setQuantity} food={food} />
        </div>
      </Fade>
    </div>
  );
};

export default FoodDetails;
