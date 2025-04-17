import { useNavigate } from "react-router-dom";
import { headerLogo } from "../../assets/images";
import CommonButton from "../commonButton";
import CommonIMG from "../commonImg";
import DropDownNavbar from "../dropDownNavbar";
import NavbarLinks from "../navbarLinks";
import { useContext, useState } from "react";
import { GlobalContext } from "../../context";
import ProductPageNavs from "../productPageNavs";
import { useEffect } from "react";

function Navbar() {
  const [isScrollingY, setIsScrollingY] = useState(false);
  const [giveFixedPosition, setGiveFixedPosition] = useState(false);
  const navigate = useNavigate();
  const { currentPage } = useContext(GlobalContext);

  giveFixedPosition && toggleIsScrolling();

  useEffect(() => {
    if (
      currentPage === "products" ||
      currentPage === "product-details" ||
      currentPage === "orders" ||
      currentPage === "cart"
    ) {
      console.log({ currentPage });

      setGiveFixedPosition(true);
    }
  }, [currentPage]);

  function toggleIsScrolling() {
    window.addEventListener("scroll", () => {
      window.scrollY > 0 ? setIsScrollingY(true) : setIsScrollingY(false);
    });
  }

  return (
    <header
      className={`padding-x sm:py-8 py-2 z-10 w-full bg-white dark:bg-[hsl(0,0%,5%)] ${
        isScrollingY
          ? "fixed top-0 left-0 right-0 shadow-md dark:shadow-[#24232364]"
          : "absolute"
      }`}
    >
      <nav className="flex justify-between items-center max-container ">
        <a href="/home">
          <CommonIMG
            imgSrc={headerLogo}
            imgAlt={"Logo"}
            imgWidth={130}
            imgHeight={29}
            imgClassName={"sm:w-[130px] sm:h-[29px] w-[100px] h-[19px]"}
          />
        </a>

        {currentPage === "home" ? (
          <>
            <ul className="flex flex-1 items-center justify-center gap-16 max-lg:hidden">
              <NavbarLinks />
            </ul>

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
        ) : currentPage === "products" || "productdetails" ? (
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
