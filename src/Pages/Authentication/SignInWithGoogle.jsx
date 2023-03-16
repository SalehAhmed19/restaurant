import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { FcGoogle } from "react-icons/fc";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";

const SignInWithGoogle = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  return (
    <button
      onClick={() => {
        signInWithGoogle();
        if (user) {
          navigate("/");
        }
      }}
      className="bg-[#000] text-white px-5 py-3 w-full my-5 text-2xl"
      type="submit"
    >
      <FcGoogle className="mx-auto" />
    </button>
  );
};

export default SignInWithGoogle;
