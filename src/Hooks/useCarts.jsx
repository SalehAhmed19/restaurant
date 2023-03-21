import axios from "axios";
import { signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../firebase.init";

const useCarts = () => {
  const [carts, setCarts] = useState([]);
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      fetch(
        `https://kayi-tribe-restuarant.onrender.com/api/cart?email=${user?.email}`,
        {
          method: "GET",
          headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      )
        .then((res) => {
          return res.json();
          // console.log(res);
          // if (res.status === 401 || res.status === 403) {
          //   // console.log("first");
          //   // console.log(res.status);
          //   // signOut(auth);
          //   // localStorage.removeItem("accessToken");
          //   // navigate("/");
          // }
          // return res.json();
        })
        .then((data) => {
          setCarts(data);
        });
    }
  }, [user, carts]);
  return [carts, setCarts];
};

export default useCarts;
