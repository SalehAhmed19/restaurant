import React from "react";
import { FiLogIn } from "react-icons/fi";
import { Link } from "react-router-dom";

const LoginRoute = () => {
  return (
    <Link to="/login">
      <div className="lg:h-14 h-7 lg:w-36 w-36 bg-[#F2F3F5] flex justify-center items-center rounded-full mx-5">
        Login <FiLogIn className="text-2xl ml-2" />
      </div>
    </Link>
  );
};

export default LoginRoute;
