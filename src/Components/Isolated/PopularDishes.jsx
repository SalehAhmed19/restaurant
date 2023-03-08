import React from "react";
import { Fade, Zoom } from "react-reveal";
import menu1 from "../../Assets/menu-1.jpg";
import menu2 from "../../Assets/menu-2.jpg";
import menu3 from "../../Assets/menu-3.jpg";
import menu4 from "../../Assets/menu-4.jpg";
import PopularDishCard from "./PopularDishCard";
import menu from "../../Assets/menu.svg";
import { Link } from "react-router-dom";

const PopularDishes = () => {
  const dishes = [
    {
      _id: 1,
      name: "Chevrefrit au miel",
      des: "tomatoes, nori, feta cheese, mushrooms, rice noodles, corn, shrimp.",
      price: 14,
      ratings: 4,
      img: menu1,
    },
    {
      _id: 2,
      name: "Saumon Gravlax",
      des: "tomatoes, nori, feta cheese, mushrooms, rice noodles, corn, shrimp.",
      price: 9,
      ratings: 4,
      img: menu2,
    },
    {
      _id: 3,
      name: "Croustillant de poisson",
      des: "tomatoes, nori, feta cheese, mushrooms, rice noodles, corn, shrimp.",
      price: 4,
      ratings: 4,
      img: menu3,
    },
    {
      _id: 4,
      name: "Stracciatella",
      des: "tomatoes, nori, feta cheese, mushrooms, rice noodles, corn, shrimp.",
      price: 11,
      ratings: 4,
      img: menu4,
    },
  ];
  return (
    <div className="lg:mx-20 mx-5">
      <div className="flex flex-col lg:flex-row justify-between items-center my-5">
        <Fade left>
          <div>
            <h2 className="text-4xl font-bold">Most popular dishes</h2>
            <p className="my-10 text-[#6F6F87]">
              Consectetur numquam poro nemo veniam <br /> eligendi rem adipisci
              quo modi.
            </p>
          </div>
        </Fade>
        <Link to="/full-menu">
          <button className="flex items-center px-6 bg-[#F5C332] py-3">
            <img className="mr-3" src={menu} alt="" /> Full Menu
          </button>
        </Link>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-7 ">
        {dishes.map((dish) => (
          <Zoom>
            <PopularDishCard key={dish._id} dish={dish} />
          </Zoom>
        ))}
      </div>
    </div>
  );
};

export default PopularDishes;
