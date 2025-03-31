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

  useEffect(() => {
    setCurrentPage(pathname.slice(1));
  }, [pathname]);

  useEffect(() => {
    darkMode
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");
    // document.documentElement.classList.toggle("dark");
  }, [darkMode]);

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

  return (
    <GlobalContext.Provider
      value={{
        darkMode,
        setDarkMode,
        currentPage,
        initialLoginFormData,
        loginFormData,
        setLoginFormData,
        handleLogin,
        signupFormData,
        setSignupFormData,
        handleSignup,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

// And there is this error message in the terminal check it
