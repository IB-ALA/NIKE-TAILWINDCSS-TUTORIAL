import { useContext } from "react";
import { star } from "../../assets/icons";
import CommonIMG from "../commonImg";
import { GlobalContext } from "../../context";

function DarkModeToggler() {
  // get a better theme toggler
  const { darkMode, setDarkMode } = useContext(GlobalContext);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="fixed bottom-8 right-8 z-50 cursor-pointer"
    >
      <CommonIMG imgSrc={star} imgHeight={50} imgWidth={50} />
    </button>
  );
}

export default DarkModeToggler;
