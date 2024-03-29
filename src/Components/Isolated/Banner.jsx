import React from "react";
import food from "../../Assets/food.png";
import { BsArrowUpRightCircle } from "react-icons/bs";
import { CiPizza, CiBurger } from "react-icons/ci";
import { GiCakeSlice } from "react-icons/gi";
import { Fade, Zoom } from "react-reveal";
import bg from "../../Assets/bg.png";
import menu from "../../Assets/menu.svg";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div
      style={{ background: `url(${bg})`, backgroundSize: "cover" }}
      className="lg:px-24 px-5 h-screen pt-5"
    >
      <Fade down>
        <p className="bg-[#F2F3F5] inline-block p-1 text-sm">Hi, new friend!</p>
      </Fade>
      <div className="flex flex-col lg:flex-row justify-center">
        <Fade left>
          <div className="my-5">
            <h1 className="text-3xl lg:text-6xl font-bold">
              We do not cook, <br /> we create your emotions!
            </h1>
            <p className="text-[#6F6F87] my-10">
              Consectetur numquam poro nemo veniam <br /> eligendi rem adipisci
              quo modi.
            </p>
            <div className="flex">
              <Link to="/our-menu">
                <button className="flex items-center lg:px-6 px-3 bg-[#F5C332] lg:py-3">
                  <img className="mr-3" src={menu} alt="" /> Our Menu
                </button>
              </Link>
              <Link to="/about">
                <button className="flex items-center lg:px-6 px-3 bg-[#fff] lg:py-2 mx-5">
                  <div className="bg-[#F2F3F5] h-10 w-10 rounded-full flex justify-center items-center mr-4">
                    <BsArrowUpRightCircle className="text-xl" />
                  </div>{" "}
                  About Us
                </button>
              </Link>
            </div>
          </div>
        </Fade>
        <div className="relative hidden lg:block">
          <Zoom forever={true}>
            <div className="flex justify-between absolute">
              <CiPizza className="text-6xl text-[#F2F3F5]" />
            </div>
          </Zoom>
          <Zoom forever={true}>
            <div className="flex justify-between absolute right-0 bottom-1/2">
              <CiBurger className="text-6xl text-[#F2F3F5]" />
            </div>
          </Zoom>
          <Zoom forever={true}>
            <div className="flex justify-between absolute left-0 bottom-0">
              <GiCakeSlice className="text-6xl text-[#F2F3F5]" />
            </div>
          </Zoom>
          <Zoom>
            <img className="w-[600px]" src={food} alt="" />
          </Zoom>
        </div>
      </div>
    </div>
  );
};

export default Banner;
