import { useContext, useEffect, useState } from "react";
import { hamburger } from "../../assets/icons";
import CommonIMG from "../commonImg";
import CommonButton from "../commonButton";
import NavbarLinks from "../navbarLinks";
import { GlobalContext } from "../../context";
import { useNavigate } from "react-router-dom";

function DropDownNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { currentPage } = useContext(GlobalContext);
  const navigate = useNavigate();

  useEffect(() => {
    setIsOpen(false);
  }, [currentPage]);

  function toggleDropDown() {
    setIsOpen(!isOpen);
  }

  function handleOutsideClick(e) {
    if (isOpen && !e.target.classList.contains("js-hamburger-icon")) {
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
        imgClassName={"cursor-pointer js-hamburger-icon"}
        handleOnClick={toggleDropDown}
      />

      <div
        className={`absolute bg-white overflow-hidden sm:-translate-x-[40%] -translate-x-[80%] mt-3 transition-all duration-300 ease-in-out rounded-xl shadow-lg dark:dark:shadow-[#272727ba] w-fit ${
          isOpen && currentPage === "home"
            ? "max-sm:h-[235.78px] sm:h-[174.13px]"
            : isOpen
            ? "max-sm:h-[170px] sm:h-[174.13px]"
            : "h-0"
        } dark:border-gray-400 bg-dark-3`}
      >
        <ul
          className={`w-36 max-sm:pt-4 sm:py-4 px-3 flex justify-center items-center flex-col rounded-xl`}
        >
          <NavbarLinks extraLiClassName={"py-1"} />
        </ul>

        {currentPage === "home" ? (
          <div className="flex mb-6 flex-col pt-1 border-t border-gray-100 dark:border-none justify-between items-center sm:hidden">
            <CommonButton
              btnText={"Sign in"}
              className={
                "font-semibold mb-2 text-lg hover:transition-all hover:duration-200 underline-offset-2 underline hover:ease-in-out hover:text-coral-red text-dark-2"
              }
              handleOnClick={() => navigate("/signin")}
            />

            <CommonButton
              btnText={"Explore now"}
              className={
                "font-semibold text-lg hover:transition-all hover:duration-200 underline-offset-2 underline hover:ease-in-out hover:text-coral-red text-dark-2"
              }
              handleOnClick={() => navigate("/products")}
            />
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default DropDownNavbar;
