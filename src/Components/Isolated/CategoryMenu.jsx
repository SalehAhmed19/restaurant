import React from "react";
import { useParams } from "react-router-dom";

const CategoryMenu = () => {
  const { name } = useParams();
  return (
    <div className="bg-[#F9FAFC] p-20">
      <h2 className="text-4xl font-bold">{name}</h2>
    </div>
  );
};

export default CategoryMenu;
