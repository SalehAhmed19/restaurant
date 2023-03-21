import { useEffect, useState } from "react";

const useDesserts = () => {
  const [desserts, setDesserts] = useState([]);
  useEffect(() => {
    fetch("https://kayi-tribe-restuarant.onrender.com/api/desserts")
      .then((res) => res.json())
      .then((data) => setDesserts(data));
  }, [desserts]);
  return [desserts, setDesserts];
};

export default useDesserts;
