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
      fetch(`http://localhost:4000/api/cart?email=${user?.email}`, {
        method: "GET",
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setCarts(data);
        });
    }
  }, [user, carts]);
  return [carts, setCarts];
};

export default useCarts;
