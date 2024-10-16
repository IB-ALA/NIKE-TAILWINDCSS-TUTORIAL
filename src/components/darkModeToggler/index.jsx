import { star } from "../../assets/icons";
import CommonIMG from "../commonImg";

function DarkModeToggler({ setDarkMode, darkMode }) {
  // get a better theme toggler

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
