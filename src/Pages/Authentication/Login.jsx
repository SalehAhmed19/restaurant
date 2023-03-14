import { TextField } from "@mui/material";
import React from "react";
import { Bounce, Fade, Zoom } from "react-reveal";
import avatar from "../../Assets/login.png";
import { Link } from "react-router-dom";
import SignInWithGoogle from "./SignInWithGoogle";
import { useForm } from "react-hook-form";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const Login = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const onSubmit = async (data) => {
    await signInWithEmailAndPassword(data.email, data.password);
    if (user) {
      await console.log("Success");
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
            <h2 className="text-6xl font-bold text-right pt-40">Login Now!</h2>
          </Bounce>
        </div>
      </div>
      <Fade right>
        <div className="bg-[#F9FAFC] w-1/3 p-5">
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
              className="bg-[#F7C531] px-5 py-3 w-full my-5"
              value="LOGIN"
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

export default Login;
