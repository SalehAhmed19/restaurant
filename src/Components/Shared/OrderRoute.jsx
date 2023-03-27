import React from "react";
import { Link } from "react-router-dom";

const OrderRoute = () => {
  return (
    <Link to="/orders">
      <div className="lg:h-14 h-7 lg:w-36 w-36 bg-[#F2F3F5] flex justify-center items-center rounded-full mx-5">
        My Orders
      </div>
    </Link>
  );
};

export default OrderRoute;
