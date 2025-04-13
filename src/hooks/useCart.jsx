import { useContext } from "react";
import { GlobalContext } from "../context";
import { useProduct } from "./useProduct";

export function useCart() {
  const { cartItems, setCartItems } = useContext(GlobalContext);
  const { getProduct } = useProduct();

  function handleAddToCart({ id, quantity, size, color }) {
    let copiedCartItems = [...cartItems];
    copiedCartItems.push({ id, quantity, size, color });
    // save it
    setCartItems(copiedCartItems);
  }

  function isProductInCart(productId) {
    return cartItems.findIndex((cartItem) => cartItem.id === productId) > -1;
  }

  function handleQuantityChange(id, change) {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: Math.max(1, item.quantity + change),
            }
          : item
      )
    );
  }

  function handleSizeChange(id, newSize) {
    setCartItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, size: newSize } : item))
    );
  }

  function handleRemoveFromCart(id) {
    // const copy = [...cartItems];
    // let newItems = copy?.filter((item) => item.id !== id);
    // console.log({ newItems });
    // setCartItems([...newItems]);

    setCartItems((prev) => prev.filter((item) => item.id !== id));
  }

  function findCartTotalItems() {
    return cartItems.reduce((acc, item) => acc + item.quantity, 0);
  }

  function findCartTotalAmount() {
    let total = 0;

    cartItems?.forEach((item) => {
      const { price } = getProduct(item.id);
      total += price * item.quantity;
    });

    return total;
  }

  return {
    cartItems,
    handleAddToCart,
    isProductInCart,
    findCartTotalItems,
    findCartTotalAmount,
    handleQuantityChange,
    handleSizeChange,
    handleRemoveFromCart,
  };
}
