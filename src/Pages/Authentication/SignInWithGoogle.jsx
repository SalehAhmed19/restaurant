import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { FcGoogle } from "react-icons/fc";
import { useLocation, useNavigate } from "react-router-dom";
import Loading from "../../Components/Shared/Loading";
import auth from "../../firebase.init";

const SignInWithGoogle = () => {
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  if (loading) {
    return <Loading />;
  }
  if (user) {
    navigate(from, { replace: true });
  }
  return (
    <button
      onClick={() => {
        signInWithGoogle();
      }}
      className="bg-[#000] text-white px-5 py-3 w-full my-5 text-2xl"
      type="submit"
    >
      <FcGoogle className="mx-auto" />
    </button>
  );
};

export default SignInWithGoogle;
