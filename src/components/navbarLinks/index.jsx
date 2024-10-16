import { navLinks } from "../../constants";

function NavbarLinks({ liClassName, extraLiClassName }) {
  return (
    navLinks?.length > 0 &&
    navLinks.map((link) => (
      <li
        key={link?.label}
        className={
          liClassName ||
          `text-dark-1 dark:hover:text-slate-300 hover:text-black text-slate-gray duration-200 ease-in-out dark:xl:last:hover:text-black ${extraLiClassName}`
          // find the tailwind code for nth-child(3)
          // use it with dark:xl:/the position/:hover:text-black
        }
      >
        <a href={link?.href} className="text-lg leading-normal font-montserrat">
          {link?.label}
        </a>
      </li>
    ))
  );
}

export default NavbarLinks;
