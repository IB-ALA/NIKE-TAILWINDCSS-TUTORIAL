import { useEffect, useState } from "react";
import { hamburger } from "../../assets/icons";
import { navLinks } from "../../constants";
import CommonIMG from "../commonImg";
import CommonButton from "../commonButton";

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
        imgAlt={"Hamburger icon"}
        imgHeight={25}
        imgWidth={25}
        imgSrc={hamburger}
        imgClassName={"cursor-pointer"}
        handleOnClick={toggleDropDown}
      />

      <div
        className={`absolute overflow-hidden sm:-translate-x-[40%] -translate-x-[80%] mt-3 transition-all duration-300 ease-in-out rounded-xl shadow-lg w-fit ${
          isOpen ? "max-sm:h-[235.78px] sm:h-[174.13px]" : "h-0"
        }`}
      >
        <ul
          className={`w-36 max-sm:pt-4 sm:py-4 px-3 flex justify-center items-center flex-col rounded-xl`}
        >
          {navLinks?.length > 0 &&
            navLinks.map((link) => (
              <li key={link.label} className="py-1">
                <a
                  onClick={toggleDropDown}
                  href={link.href}
                  className="text-lg leading-normal font-montserrat text-slate-gray"
                >
                  {link.label}
                </a>
              </li>
            ))}
        </ul>

        <div className="flex mb-6 flex-col pt-1 border-t border-gray-100 justify-between items-center sm:hidden">
          <CommonButton
            btnText={"Sign in"}
            className={
              "font-semibold mb-2 text-lg hover:transition-all hover:duration-200 underline-offset-2 underline hover:ease-in-out hover:text-coral-red"
            }
          />
          <CommonButton
            btnText={"Explore now"}
            className={
              "font-semibold text-lg hover:transition-all hover:duration-200 underline-offset-2 underline hover:ease-in-out hover:text-coral-red"
            }
          />
        </div>
      </div>
    </div>
  );
}

export default DropDownNavbar;
