import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";

const useCarts = () => {
  const [carts, setCarts] = useState([]);
  const [user] = useAuthState(auth);
  useEffect(() => {
    if (user) {
      fetch(
        `https://kayi-tribe-restuarant.onrender.com/api/cart?customerEmail=${user?.email}`
      )
        .then((res) => res.json())
        .then((data) => setCarts(data));
    }
  }, [user, carts]);
  return [carts, setCarts];
};

export default useCarts;
