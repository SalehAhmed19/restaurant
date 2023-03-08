import React from "react";
import girl from "../../Assets/girl.png";
import { MdRestaurantMenu } from "react-icons/md";
import { BsArrowUpRightCircle } from "react-icons/bs";
import { CiPizza, CiBurger } from "react-icons/ci";
import { GiCakeSlice } from "react-icons/gi";
import { Fade, Zoom } from "react-reveal";
import bg from "../../Assets/bg.png";
import menu from "../../Assets/menu.svg";

const Banner = () => {
  return (
    <div
      style={{ background: `url(${bg})`, backgroundSize: "cover" }}
      className="pt-28 lg:px-24 h-screen"
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
              <button className="flex items-center px-6 bg-[#F5C332] py-2">
                <img className="mr-3" src={menu} alt="" /> Our Menu
              </button>
              <button className="flex items-center px-6 bg-[#fff] py-2 mx-5">
                <div className="bg-[#F2F3F5] h-10 w-10 rounded-full flex justify-center items-center mr-4">
                  <BsArrowUpRightCircle className="text-xl" />
                </div>{" "}
                About Us
              </button>
            </div>
          </div>
        </Fade>
        <div className="relative">
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
            <img className="rounded-full w-[500px]" src={girl} alt="" />
          </Zoom>
        </div>
      </div>
    </div>
  );
};

export default Banner;
