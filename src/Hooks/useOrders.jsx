import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";

const useOrders = () => {
  const [orders, setOrders] = useState([]);
  const [user] = useAuthState(auth);
  // const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      fetch(
        `https://kayi-tribe-restuarant.onrender.com/api/orders?email=${user?.email}`,
        {
          method: "GET",
          headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      )
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setOrders(data);
        });
    }
  }, [user, orders]);
  return [orders, setOrders];
};

export default useOrders;
