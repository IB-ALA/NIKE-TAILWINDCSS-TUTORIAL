import { useContext } from "react";
import { GlobalContext } from "../../context";
import { BsMoonFill, BsSunFill } from "react-icons/bs";
import CommonButton from "../commonButton";

function DarkModeToggler() {
  const { darkMode, setDarkMode } = useContext(GlobalContext);

  return (
    <CommonButton
      btnText={
        darkMode ? (
          <BsSunFill size={30} fill="#eab308" />
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
