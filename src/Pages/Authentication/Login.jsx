import { TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Bounce, Fade, Zoom } from "react-reveal";
import logo from "../../Assets/kayi.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SignInWithGoogle from "./SignInWithGoogle";
import { useForm } from "react-hook-form";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import Loading from "../../Components/Shared/Loading";
import axios from "axios";
import useToken from "../../Hooks/useToken";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  // console.log(user);
  const [token] = useToken(user?.user.email);

  if (token) {
    navigate(from, { replace: true });
  }

  if (loading) {
    return <Loading />;
  }

  const onSubmit = async (info) => {
    await signInWithEmailAndPassword(info.email, info.password);
  };

  return (
    <div className="flex flex-col lg:flex-row justify-between lg:mx-20 items-center pt-10">
      <div className="">
        {/* <Zoom>
          <img className="w-80" src={logo} alt="" />
        </Zoom> */}
        <div>
          <Bounce>
            <h2 className="lg:text-6xl text-3xl font-bold text-right">
              Login Now!
            </h2>
          </Bounce>
        </div>
      </div>
      <Fade right>
        <div className="bg-[#F9FAFC] lg:w-1/3 p-5">
          <form action="" onSubmit={handleSubmit(onSubmit)}>
            <TextField
              {...register("email", { required: true })}
              className="w-full"
              id="filled-basic"
              label="Your Email"
              variant="outlined"
              type="text"
              required
              size="small"
            />
            <TextField
              {...register("password", { required: true })}
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
            <div className="flex justify-between my-3">
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
            <input
              className="bg-[#F7C531] px-5 py-3 w-full my-5 cursor-pointer"
              value="LOGIN"
              type="submit"
            />
          </form>
          <div>
            <div className="h-[2px] rounded-full w-full bg-[#ebebec]"></div>
            <SignInWithGoogle />
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default Login;
