import { useEffect, useState } from "react";

const useMainDishes = () => {
  const [dishes, setDishes] = useState([]);
  useEffect(() => {
    fetch("https://kayi-tribe-restuarant.onrender.com/api/main")
      .then((res) => res.json())
      .then((data) => setDishes(data));
  }, [dishes]);
  return [dishes, setDishes];
};

export default useMainDishes;
