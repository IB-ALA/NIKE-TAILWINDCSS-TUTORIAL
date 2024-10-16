import { useEffect, useState } from "react";
import { hamburger } from "../../assets/icons";
import CommonIMG from "../commonImg";
import CommonButton from "../commonButton";
import NavbarLinks from "../navbarLinks";

function DropDownNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleDropDown() {
    setIsOpen(!isOpen);
  }

  function handleOutsideClick(e) {
    if (isOpen && !e.target.closest(".dropdown")) {
      setIsOpen(false);
    }
  }

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [isOpen]);

  return (
    <div className="hidden max-lg:block relative dropdown">
      <CommonIMG
        // find a hamburder for the dark theme (something white)
        imgAlt={"Hamburger icon"}
        imgHeight={25}
        imgWidth={25}
        imgSrc={hamburger}
        imgClassName={"cursor-pointer"}
        handleOnClick={toggleDropDown}
      />

      <div
        className={`absolute overflow-hidden sm:-translate-x-[40%] -translate-x-[80%] mt-3 transition-all duration-300 ease-in-out rounded-xl shadow-lg dark:dark:shadow-[#272727ba] w-fit ${
          isOpen ? "max-sm:h-[235.78px] sm:h-[174.13px]" : "h-0"
        } dark:border-gray-400 bg-dark-3`}
      >
        <ul
          className={`w-36 max-sm:pt-4 sm:py-4 px-3 flex justify-center items-center flex-col rounded-xl`}
        >
          <NavbarLinks extraLiClassName={"py-1"} />
        </ul>

        <div className="flex mb-6 flex-col pt-1 border-t border-gray-100 dark:border-none justify-between items-center sm:hidden">
          <CommonButton
            btnText={"Sign in"}
            className={
              "font-semibold mb-2 text-lg hover:transition-all hover:duration-200 underline-offset-2 underline hover:ease-in-out hover:text-coral-red text-dark-2"
            }
          />

          <CommonButton
            btnText={"Explore now"}
            className={
              "font-semibold text-lg hover:transition-all hover:duration-200 underline-offset-2 underline hover:ease-in-out hover:text-coral-red text-dark-2"
            }
          />
        </div>
      </div>
    </div>
  );
}

export default DropDownNavbar;
