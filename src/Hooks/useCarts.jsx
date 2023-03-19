import { useEffect, useState } from "react";

const useCarts = () => {
  const [carts, setCarts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/api/cart")
      .then((res) => res.json())
      .then((data) => setCarts(data));
  }, [carts]);
  return [carts, setCarts];
};

export default useCarts;
