import { createContext, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {
  const [darkMode, setDarkMode] = useState(false);
  const { pathname } = useLocation();
  const [currentPage, setCurrentPage] = useState(pathname.slice(1));
  const initialLoginFormData = { email: "", password: "" };
  const [loginFormData, setLoginFormData] = useState(initialLoginFormData);
  const initialSignupFormData = {
    name: "",
    email: "",
    password: "",
    reEnteredPassword: "",
  };
  const [signupFormData, setSignupFormData] = useState(initialSignupFormData);
  const [registeredUser, setRegisteredUser] = useState(null);

  const [wishList, setWishList] = useState(["#54376", "#54", "#576"]);
  const [cartItems, setCartItems] = useState([
    { id: "#54376", quantity: 2, size: "23" },
  ]);

  // check the user.. if available, show the account icon
  useEffect(() => {
    setRegisteredUser("User234");
  }, []);

  useEffect(() => {
    setCurrentPage(pathname.slice(1));
  }, [pathname]);

  useEffect(() => {
    darkMode
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");
    // document.documentElement.classList.toggle("dark");
  }, [darkMode]);

  useEffect(() => {
    console.log(cartItems);
  }, [cartItems]);

  function handleLogin() {
    // api call and auth
    console.log({ loginFormData });
    setLoginFormData(initialLoginFormData);
  }
  function handleSignup() {
    // api call and auth
    console.log({ signupFormData });
    setSignupFormData(initialSignupFormData);
  }

  function handleWishlistActions(id) {
    let copiedWishlist = [...wishList];

    const inList = copiedWishlist.includes(id);

    if (inList) {
      copiedWishlist = copiedWishlist.filter(
        (wishlistItemID) => wishlistItemID !== id
      );
    } else {
      copiedWishlist.push(id);
    }
    setWishList(copiedWishlist);
  }

  function handleAddToCart({ id, quantity, size }) {
    let copiedCartItems = [...cartItems];
    copiedCartItems.push({ id, quantity, size });
    // save it
    setCartItems(copiedCartItems);
  }

  return (
    <GlobalContext.Provider
      value={{
        darkMode,
        setDarkMode,
        currentPage,
        registeredUser,
        initialLoginFormData,
        loginFormData,
        setLoginFormData,
        handleLogin,
        signupFormData,
        setSignupFormData,
        handleSignup,
        wishList,
        setWishList,
        handleWishlistActions,
        cartItems,
        handleAddToCart,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

// And there is this error message in the terminal check it
