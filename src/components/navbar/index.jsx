import { useNavigate } from "react-router-dom";
import { headerLogo } from "../../assets/images";
import CommonButton from "../commonButton";
import CommonIMG from "../commonImg";
import DropDownNavbar from "../dropDownNavbar";
import NavbarLinks from "../navbarLinks";
import { useContext } from "react";
import { GlobalContext } from "../../context";
import ProductPageNavs from "../productPageNavs";

function Navbar() {
  const navigate = useNavigate();
  const { currentPage } = useContext(GlobalContext);

  return (
    <header className="padding-x py-8 absolute z-10 w-full border-coral-red border">
      <nav className="flex justify-between items-center max-container ">
        <a href="/home">
          <CommonIMG
            imgSrc={headerLogo}
            imgAlt={"Logo"}
            imgWidth={130}
            imgHeight={29}
          />
        </a>

        <ul className="flex flex-1 items-center justify-center gap-16 max-lg:hidden">
          <NavbarLinks />
        </ul>

        {currentPage === "home" ? (
          <>
            <div className="flex justify-between items-center max-sm:hidden">
              <CommonButton
                btnText={"Sign in"}
                className={
                  "font-semibold text-lg transition-all duration-200 underline-offset-2 underline hover:ease-in-out hover:text-coral-red dark:hover:text-coral-red xl:text-black max-xl:text-dark-2"
                }
                handleOnClick={() => navigate("/signin")}
              />

              <p className="mx-2 text-2xl text-slate-gray">/</p>

              <CommonButton
                btnText={"Explore now"}
                className={
                  "font-semibold text-lg transition-all duration-200 underline-offset-2 underline hover:ease-in-out hover:text-coral-red dark:hover:text-coral-red xl:text-black max-xl:text-dark-2"
                }
                handleOnClick={() => navigate("/products")}
              />
            </div>
            <DropDownNavbar />
          </>
        ) : currentPage === "products" ? (
          <ProductPageNavs />
        ) : (
          ""
        )}
      </nav>
    </header>
  );
}

export default Navbar;

// Exchange the "CART" with an appropraite componoent. Check design.
