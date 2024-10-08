import { headerLogo } from "../../assets/images";
import { hamburger } from "../../assets/icons";
import { navLinks } from "../../constants";
import CommonButton from "../commonButton";

function Navbar() {
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container ">
        <a href="/">
          <img src={headerLogo} alt="Logo" width={130} height={29} />
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
          <CommonButton btnText={"Sign in"} />
          <p className="mx-2 text-lg">/</p>
          <CommonButton btnText={" Explore now"} />
        </div>

        <div className="hidden max-lg:block">
          <img src={hamburger} alt="Hamburger icon" width={25} height={25} />

          {/* add the links here too */}
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
