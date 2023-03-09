import React from "react";
import dessert1 from "../Assets/dessert-1.jpeg";
import dessert2 from "../Assets/dessert-2.jpeg";
import dessert3 from "../Assets/dessert-3.jpeg";
import dessert4 from "../Assets/dessert-4.jpeg";
import dessert5 from "../Assets/dessert-5.jpeg";
import dessert6 from "../Assets/dessert-6.jpeg";
import dessert7 from "../Assets/dessert-7.jpeg";
import drinks1 from "../Assets/drinks-1.jpeg";
import drinks2 from "../Assets/drinks-2.jpeg";
import drinks3 from "../Assets/drinks-3.jpeg";
import drinks4 from "../Assets/drinks-4.jpeg";
import drinks5 from "../Assets/drinks-5.jpeg";
import drinks6 from "../Assets/drinks-6.jpeg";
import main1 from "../Assets/main-dishes-1.jpeg";
import main2 from "../Assets/main-dishes-2.jpeg";
import main3 from "../Assets/main-dishes-3.jpeg";
import main4 from "../Assets/main-dishes-4.jpeg";
import main5 from "../Assets/main-dishes-5.jpeg";
import main6 from "../Assets/main-dishes-6.jpeg";
import main7 from "../Assets/main-dishes-7.jpeg";
import main8 from "../Assets/main-dishes-8.jpeg";
import main9 from "../Assets/main-dishes-9.jpeg";
import main10 from "../Assets/main-dishes-10.jpeg";
import main11 from "../Assets/main-dishes-11.jpeg";
import DishCard from "../Components/Isolated/DishCard";
import Offer from "../Components/Isolated/Offer";
import { Fade, Zoom } from "react-reveal";
import useDesserts from "../Hooks/useDesserts";
import useDrinks from "../Hooks/useDrinks";
import useMainDishes from "../Hooks/useMainDishes";
import { Link } from "react-router-dom";

const OurMenu = () => {
  const [desserts] = useDesserts();
  const [drinks] = useDrinks();
  const [dishes] = useMainDishes();

  return (
    <div>
      <Fade left>
        <div className="mt-28 bg-[#F9FAFC] p-20">
          <h2 className="text-4xl font-bold">Our Menu</h2>
        </div>
      </Fade>
      <div className="lg:mx-20 mx-5">
        <Fade up>
          <h2 className="text-3xl font-bold mt-10">Dessert</h2>
          <p className="my-5 text-[#6F6F87]">
            Consectetur numquam poro nemo veniam <br /> eligendi rem adipisci
            quo modi.
          </p>
        </Fade>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-7">
          {desserts.map((dish) => (
            <Zoom>
              <Link to={`/our-menu/${dish._id}`}>
                <DishCard key={dish._id} dish={dish} />
              </Link>
            </Zoom>
          ))}
        </div>
      </div>
      <div className="mx-20">
        <Fade up>
          <h2 className="text-3xl font-bold mt-10">Drinks</h2>
          <p className="my-5 text-[#6F6F87]">
            Consectetur numquam poro nemo veniam <br /> eligendi rem adipisci
            quo modi.
          </p>
        </Fade>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-7">
          {drinks.map((dish) => (
            <Zoom>
              <Link to={`/our-menu/${dish._id}`}>
                <DishCard key={dish._id} dish={dish} />
              </Link>
            </Zoom>
          ))}
        </div>
      </div>
      <div className="mx-20">
        <Fade up>
          <h2 className="text-3xl font-bold mt-10">Main Dishes</h2>
          <p className="my-5 text-[#6F6F87]">
            Consectetur numquam poro nemo veniam <br /> eligendi rem adipisci
            quo modi.
          </p>
        </Fade>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-7">
          {dishes.map((dish) => (
            <Zoom>
              <Link to={`/our-menu/${dish._id}`}>
                <DishCard key={dish._id} dish={dish} />
              </Link>
            </Zoom>
          ))}
        </div>
      </div>
      <Fade up>
        <Offer />
      </Fade>
    </div>
  );
};

export default OurMenu;
