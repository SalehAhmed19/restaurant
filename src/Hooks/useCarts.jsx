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
      fetch(`http://localhost:4000/api/cart?customerEmail=${user?.email}`, {
        method: "GET",
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
        .then((res) => {
          // console.log(res);
          if (res.status === 401 || res.status === 403) {
            console.log("first");
            console.log(res.status);
            // signOut(auth);
            // localStorage.removeItem("accessToken");
            // navigate("/");
          }
          return res.json();
        })
        .then((data) => {
          setCarts(data);
        });
    }
  }, [user, carts, navigate]);
  return [carts, setCarts];
};

export default useCarts;
