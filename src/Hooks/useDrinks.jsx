import { useEffect, useState } from "react";

const useDrinks = () => {
  const [drinks, setDrinks] = useState([]);
  useEffect(() => {
    fetch("https://kayi-tribe-restuarant.onrender.com/api/drinks")
      .then((res) => res.json())
      .then((data) => setDrinks(data));
  }, [drinks]);
  return [drinks, setDrinks];
};

export default useDrinks;
