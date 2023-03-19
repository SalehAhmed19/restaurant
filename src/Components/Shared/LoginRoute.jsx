import React from "react";
import { FiLogIn } from "react-icons/fi";
import { Link } from "react-router-dom";

const LoginRoute = () => {
  return (
    <Link to="/login">
      <div className="lg:h-14 h-7 lg:w-14 w-7 bg-[#F2F3F5] flex justify-center items-center rounded-full mx-5">
        <FiLogIn className="text-2xl" />
      </div>
    </Link>
  );
};

export default LoginRoute;
