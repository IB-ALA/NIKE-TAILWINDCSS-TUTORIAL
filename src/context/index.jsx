import { createContext, useState, useEffect } from "react";

export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    darkMode
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");
    // document.documentElement.classList.toggle("dark");
  }, [darkMode]);

  return (
    <GlobalContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </GlobalContext.Provider>
  );
}

// And there is this error message in the terminal too check it
