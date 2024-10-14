import { navLinks } from "../../constants";

function NavbarLinks({ liClassName }) {
  return (
    navLinks?.length > 0 &&
    navLinks.map((link) => (
      <li key={link?.label} className={liClassName || ""}>
        <a
          href={link?.href}
          className="text-lg leading-normal font-montserrat text-slate-gray hover:text-black duration-200"
        >
          {link?.label}
        </a>
      </li>
    ))
  );
}

export default NavbarLinks;
