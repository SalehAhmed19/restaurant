import React from "react";

const Category = ({ category }) => {
  return (
    <div className="bg-[#F9FAFC] p-5 flex">
      <div className="p-5 relative">
        <img className="w-14 z-20" src={category.img} alt="" />
        <div className="w-7 h-7 bg-[#F5C332] rounded-md"></div>
      </div>
      <div className="p-5">
        <h2 className="text-2xl font-bold">{category.name}</h2>
        <p className="text-[#6F6F87]">{category.des}</p>
      </div>
    </div>
  );
};

export default Category;
