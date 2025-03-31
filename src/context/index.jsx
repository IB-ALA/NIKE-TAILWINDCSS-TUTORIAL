import { createContext, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
// import { isFormValid } from "../shared";

export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {
  const [darkMode, setDarkMode] = useState(false);
  const { pathname } = useLocation();
  const [currentPage, setCurrentPage] = useState(pathname.slice(1));
  const initialLoginFormData = { email: "", password: "" };
  const [loginFormData, setLoginFormData] = useState(initialLoginFormData);

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

  // console.log(isFormValid(loginFormData));

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
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

// And there is this error message in the terminal check it
