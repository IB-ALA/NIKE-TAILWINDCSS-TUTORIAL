import { headerLogo } from "../../assets/images";
import { hamburger } from "../../assets/icons";
import { navLinks } from "../../constants";
import CommonButton from "../commonButton";
import CommonIMG from "../commonImg";

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
          {navLinks?.length > 0
            ? navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-lg leading-normal font-montserrat text-slate-gray "
                  >
                    {link.label}
                  </a>
                </li>
              ))
            : null}
        </ul>

        <div className="flex justify-between items-center max-lg:hidden">
          <CommonButton btnText={"Sign in"} className={" "} />
          <p className="mx-2 text-lg">/</p>
          <CommonButton btnText={" Explore now"} className={" "} />
        </div>

        <div className="hidden max-lg:block">
          <CommonIMG
            imgAlt={"Hamburger icon"}
            imgHeight={25}
            imgWidth={25}
            imgSrc={hamburger}
            imgClassName={"cursor-pointer"}
          />

          {/* add the links here too */}
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
