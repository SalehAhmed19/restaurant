import { TextField } from "@mui/material";
import React from "react";
import { Bounce, Fade, Zoom } from "react-reveal";
import avatar from "../../Assets/login.png";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="mt-28 flex justify-between mx-20 items-center">
      <div className="flex">
        <Zoom>
          <img className="w-80" src={avatar} alt="" />
        </Zoom>
        <div>
          <Bounce>
            <h2 className="text-6xl font-bold text-right pt-40">Login Now!</h2>
          </Bounce>
        </div>
      </div>
      <Fade right>
        <div className="bg-[#F9FAFC] w-1/3 p-5">
          <form action="">
            <TextField
              sx={{ marginTop: "20px" }}
              className="w-full"
              id="filled-basic"
              label="Your Email"
              variant="outlined"
              name="email"
              type="email"
              required
              size="small"
            />
            <TextField
              sx={{ marginTop: "20px" }}
              className="w-full"
              id="filled-basic"
              label="Password"
              variant="outlined"
              name="password"
              type="password"
              required
              size="small"
            />
            <button
              className="bg-[#F7C531] px-5 py-3 w-full my-5"
              type="submit"
            >
              Login
            </button>
          </form>
          <div className="flex justify-between">
            <p className="text-sm">Forgot Password</p>
            <p className="text-sm">
              New to Starbelly?{" "}
              <Link
                to="/registration"
                className="text-[#F7C531] cursor-pointer"
              >
                Register Now
              </Link>
            </p>
          </div>
          <div>
            <button
              className="bg-[#000] text-white px-5 py-3 w-full my-5 text-2xl"
              type="submit"
            >
              <FcGoogle className="mx-auto" />
            </button>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default Login;
