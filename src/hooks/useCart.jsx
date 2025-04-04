import { useContext } from "react";
import { GlobalContext } from "../context";

export function useCart() {
  const { cartItems, setCartItems } = useContext(GlobalContext);

  function handleAddToCart({ id, quantity, size }) {
    let copiedCartItems = [...cartItems];
    copiedCartItems.push({ id, quantity, size });
    // save it
    setCartItems(copiedCartItems);
  }

  return { cartItems, handleAddToCart };
}
