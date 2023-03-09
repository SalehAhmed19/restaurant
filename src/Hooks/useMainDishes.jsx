import { useEffect, useState } from "react";

const useMainDishes = () => {
  const [dishes, setDishes] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/api/main")
      .then((res) => res.json())
      .then((data) => setDishes(data));
  }, [dishes]);
  return [dishes, setDishes];
};

export default useMainDishes;
