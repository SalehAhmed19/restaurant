import React from "react";
import { Fade, Zoom } from "react-reveal";
import menu1 from "../../Assets/menu-1.jpg";
import menu2 from "../../Assets/menu-2.jpg";
import menu3 from "../../Assets/menu-3.jpg";
import menu4 from "../../Assets/menu-4.jpg";
import DishCard from "./DishCard";
import menu from "../../Assets/menu.svg";
import { Link } from "react-router-dom";
import useDesserts from "../../Hooks/useDesserts";

const PopularDishes = () => {
  const [desserts] = useDesserts();
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
        <Link to="/our-menu">
          <button className="flex items-center px-6 bg-[#F5C332] py-3">
            <img className="mr-3" src={menu} alt="" /> Full Menu
          </button>
        </Link>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-7 ">
        {desserts.slice(0, 4).map((dish) => (
          <Zoom>
            <Link to={`/our-menu/${dish._id}`}>
              <DishCard key={dish._id} dish={dish} />
            </Link>
          </Zoom>
        ))}
      </div>
    </div>
  );
};

export default PopularDishes;
