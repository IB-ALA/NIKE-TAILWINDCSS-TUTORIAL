import { Outlet } from "react-router-dom";
import Navbar from "../../components/navbar";
import DarkModeToggler from "../../components/darkModeToggler";

function Layout() {
  return (
    <>
      <Navbar />
      <DarkModeToggler />
      <Outlet />
    </>
  );
}

export default Layout;
