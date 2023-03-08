import React from "react";
import { BsArrowUpRightCircle } from "react-icons/bs";
import { Fade, Zoom } from "react-reveal";
import { Link } from "react-router-dom";
import img1 from "../../Assets/category-1.png";
import img2 from "../../Assets/category-2.png";
import img3 from "../../Assets/category-3.png";
import img4 from "../../Assets/category-4.png";
import Category from "./Category";

const Categories = () => {
  const categories = [
    {
      _id: 1,
      name: "Starters",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, quod.",
      img: img1,
    },
    {
      _id: 2,
      name: "Main Dishes",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, quod.",
      img: img2,
    },
    {
      _id: 3,
      name: "Drinks",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, quod.",
      img: img3,
    },
    {
      _id: 4,
      name: "Desserts",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, quod.",
      img: img4,
    },
  ];

  return (
    <div className="p-20">
      <Fade left>
        <div className="flex items-center justify-between my-5">
          <div>
            <h2 className="text-4xl font-bold">What do you like today?</h2>
            <p className="my-5 text-[#6F6F87]">
              Consectetur numquam poro nemo veniam <br /> eligendi rem adipisci
              quo modi.
            </p>
          </div>
          <button className="flex items-center px-6 bg-[#F5C332] py-2">
            <BsArrowUpRightCircle className="text-xl mr-3" /> Go shopping now
          </button>
        </div>
      </Fade>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {categories.map((category) => (
          <Link to={category.name}>
            <Zoom>
              <Category key={category._id} category={category} />
            </Zoom>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;
