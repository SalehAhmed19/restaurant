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
        `https://kayi-tribe-restuarant.onrender.com/api/cart?customerEmail=${user?.email}`,
        {
          method: "GET",
          headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      )
        .then((res) => {
          // console.log(res);
          if (res.status === 401 || res.status === 403) {
            signOut(auth);
            localStorage.removeItem("accessToken");
            navigate("/");
          }
          return res.json();
        })
        .then((data) => {
          setCarts(data);
        });
    }
    // const getCart = async () => {
    //   const url = `https://kayi-tribe-restuarant.onrender.com/api/cart?customerEmail=${user?.email}`;
    //   try {
    //     const { data } = await axios.get(url, {
    //       headers: {
    //         authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    //       },
    //     });
    //     setCarts(data);
    //   } catch (error) {
    //     console.log(error.response.status);
    //     if (error.response.status === 401 || error.response.status === 403) {
    //       signOut(auth);
    //       // localStorage.removeItem("accessToken");
    //       navigate("/login");
    //     }
    //   }
    // };
    // getCart();
  }, [user, carts, navigate]);
  return [carts, setCarts];
};

export default useCarts;
