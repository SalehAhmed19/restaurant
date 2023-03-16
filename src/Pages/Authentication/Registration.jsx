import { TextField } from "@mui/material";
import React, { useState } from "react";
import { Bounce, Fade, Zoom } from "react-reveal";
import avatar from "../../Assets/login.png";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SignInWithGoogle from "./SignInWithGoogle";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { updateProfile } from "firebase/auth";

const Register = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const onSubmit = async (data) => {
    await createUserWithEmailAndPassword(data.email, data.password);
    if (user) {
      navigate("/");
    }
  };

  return (
    <div className="mt-28 flex justify-between mx-20 items-center">
      <div className="flex">
        <Zoom>
          <img className="w-80" src={avatar} alt="" />
        </Zoom>
        <div>
          <Bounce>
            <h2 className="text-6xl font-bold text-right pt-40">
              Register Now!
            </h2>
          </Bounce>
        </div>
      </div>
      <Fade right>
        <div className="bg-[#F9FAFC] w-1/3 p-5">
          <form onSubmit={handleSubmit(onSubmit)}>
            <TextField
              {...register("name", { required: true })}
              className="w-full"
              id="filled-basic"
              label="Your Name"
              variant="outlined"
              type="text"
              required
              size="small"
            />
            <TextField
              {...register("email", { required: true })}
              sx={{ marginTop: "20px" }}
              className="w-full"
              id="filled-basic"
              label="Your Email"
              variant="outlined"
              name="email"
              type="email"
              require
              size="small"
            />
            <TextField
              {...register("phone", { required: true })}
              sx={{ marginTop: "20px" }}
              className="w-full"
              id="filled-basic"
              label="Phone"
              variant="outlined"
              type="text"
              required
              size="small"
            />
            <TextField
              {...register("address", { required: true })}
              sx={{ marginTop: "20px" }}
              className="w-full"
              id="filled-basic"
              label="Address"
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
                Already hav an account?{" "}
                <Link to="/login" className="text-[#F7C531] cursor-pointer">
                  Login Now
                </Link>
              </p>
            </div>
            <input
              className="bg-[#F7C531] px-5 py-3 w-full my-5 cursor-pointer"
              value="SIGN UP"
              type="submit"
            />
          </form>
          <div>
            <div className="h-1 w-full bg-[#64646541]"></div>
            <SignInWithGoogle />
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default Register;
