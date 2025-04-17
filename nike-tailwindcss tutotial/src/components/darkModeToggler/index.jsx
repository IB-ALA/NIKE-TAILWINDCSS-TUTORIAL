import { useContext } from "react";
import { GlobalContext } from "../../context";
import { BsMoonFill, BsSunFill } from "react-icons/bs";
import CommonButton from "../commonButton";
import { PiMoonLight } from "react-icons/pi";

function DarkModeToggler() {
  const { darkMode, setDarkMode, currentPage } = useContext(GlobalContext);

  return (
    <CommonButton
      btnText={
        darkMode ? (
          <BsSunFill size={30} fill="#eab308" />
        ) : currentPage === "home" ? (
          <PiMoonLight size={30} fill="#64748b" />
        ) : (
          <BsMoonFill size={30} />
        )
      }
      handleOnClick={() => setDarkMode(!darkMode)}
      className={"fixed bottom-8 right-8 z-50 cursor-pointer"}
      btnTitle={darkMode ? "Switch to light theme" : "Switch to dark theme"}
    />
  );
}

export default DarkModeToggler;
