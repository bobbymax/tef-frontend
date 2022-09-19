import { useState, useEffect } from "react";

export const useCart = () => {
  const [cart, setCart] = useState(() => {
    const localData = localStorage.getItem("tefCart");
    return localData ? JSON.parse(localData) : [];
  });

  useEffect(() => {
    localStorage.setItem("tefCart", JSON.stringify(cart));
  }, [cart]);

  return [cart, setCart];
};
