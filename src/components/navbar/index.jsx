import { headerLogo } from "../../assets/images";
import { navLinks } from "../../constants";
import CommonButton from "../commonButton";
import CommonIMG from "../commonImg";
import DropDownNavbar from "../dropDownNavbar";

function Navbar() {
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container ">
        <a href="/">
          <CommonIMG
            imgSrc={headerLogo}
            imgAlt={"Logo"}
            imgWidth={130}
            imgHeight={29}
          />
        </a>

        <ul className="flex flex-1 items-center justify-center gap-16 max-lg:hidden ">
          {navLinks?.length > 0 &&
            navLinks.map((link) => (
              <li key={link?.label}>
                <a
                  href={link?.href}
                  className="text-lg leading-normal font-montserrat text-slate-gray "
                >
                  {link?.label}
                </a>
              </li>
            ))}
        </ul>

        <div className="flex justify-between items-center max-sm:hidden">
          <CommonButton
            btnText={"Sign in"}
            className={
              "font-semibold text-lg hover:transition-all hover:duration-200 underline-offset-2 underline hover:ease-in-out hover:text-coral-red"
            }
          />

          <p className="mx-2 text-2xl text-slate-gray">/</p>

          <CommonButton
            btnText={"Explore now"}
            className={
              "font-semibold text-lg hover:transition-all hover:duration-200 underline-offset-2 underline hover:ease-in-out hover:text-coral-red"
            }
          />
        </div>

        <DropDownNavbar />
      </nav>
    </header>
  );
}

export default Navbar;
