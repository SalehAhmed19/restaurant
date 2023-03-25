import axios from "axios";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { MdOutlinePayment } from "react-icons/md";
import auth from "../../firebase.init";

const Checkout = ({ carts }) => {
  const [user] = useAuthState(auth);
  const handleCheckout = () => {
    console.log(carts);
    axios
      .post("http://localhost:4000/api/create-checkout-session", {
        carts: carts,
        user: user.email,
      })
      .then((res) => {
        if (res.data.url) {
          window.location.href = res.data.url;
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  return (
    <>
      <button
        onClick={() => handleCheckout()}
        className="flex items-center justify-center bg-[#F5C332] h-10 px-5 ml-auto"
      >
        <MdOutlinePayment className="lg:mr-3" />
        Checkout
      </button>
    </>
  );
};

export default Checkout;
