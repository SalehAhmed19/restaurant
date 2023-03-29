import React, { useEffect } from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { FcGoogle } from "react-icons/fc";
import { useLocation, useNavigate } from "react-router-dom";
import Loading from "../../Components/Shared/Loading";
import auth from "../../firebase.init";
import useToken from "../../Hooks/useToken";

const SignInWithGoogle = ({ email }) => {
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  const [token] = useToken(user?.user.email);

  if (token) {
    navigate(from, { replace: true });
  }
  const handleGoogleSigIn = async () => {
    await signInWithGoogle();
    const currentUser = { email: user?.user.email };
    // console.log(currentUser);
    fetch(
      `https://kayi-tribe-restuarant.onrender.com/api/users/${user.user.email}`,
      {
        method: "PUT",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(currentUser),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
      });
  };
  if (loading) {
    return <Loading />;
  }
  return (
    <button
      onClick={() => handleGoogleSigIn()}
      className="bg-[#000] text-white px-5 py-3 w-full my-5 text-2xl"
      type="submit"
    >
      <FcGoogle className="mx-auto" />
    </button>
  );
};

export default SignInWithGoogle;
