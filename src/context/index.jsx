import { createContext, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {
  const [darkMode, setDarkMode] = useState(false);
  const location = useLocation();
  const [currentPage, setCurrentPage] = useState(location?.pathname?.slice(1));
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

  const [wishList, setWishList] = useState(["54376", "54", "576"]);
  const [cartItems, setCartItems] = useState([
    { id: "54376", quantity: 2, size: "23", color: "default" },
  ]);

  const [productDetails, setProductDetails] = useState(null);

  // check the user.. if available, show the account icon
  useEffect(() => {
    setRegisteredUser("User234");
  }, []);

  useEffect(() => {
    setCurrentPage(location?.pathname?.slice(1));
  }, [location]);

  // console.log(getSearchProductId());

  useEffect(() => {
    darkMode
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");
    // document.documentElement.classList.toggle("dark");
  }, [darkMode]);

  useEffect(() => {
    console.log({ cartItems });
  }, [cartItems]);

  // sent handleAddToCart fnx into useCart hook
  // sent handleAddRemoveWishItem fnx into useWishList hook
  // sent handleLogin and handleSignup fnx sinto useForm hook

  return (
    <GlobalContext.Provider
      value={{
        darkMode,
        setDarkMode,
        location,
        currentPage,
        registeredUser,
        initialLoginFormData,
        loginFormData,
        setLoginFormData,
        initialSignupFormData,
        signupFormData,
        setSignupFormData,
        wishList,
        setWishList,
        cartItems,
        setCartItems,
        productDetails,
        setProductDetails,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

// And there is this error message in the terminal check it
