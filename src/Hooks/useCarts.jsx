import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";

const useCarts = () => {
  const [carts, setCarts] = useState([]);
  const [user] = useAuthState(auth);
  useEffect(() => {
    if (user) {
      fetch(`http://localhost:4000/api/cart?customerEmail=${user?.email}`, {
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => setCarts(data));
    }
  }, [user]);
  return [carts, setCarts];
};

export default useCarts;
