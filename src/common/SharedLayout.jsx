import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import SideMenu from "../components/SideMenu";
import { useGlobalContext } from "./GlobalContext";

const SharedLayout = () => {
  const { isSideMenuExpanded } = useGlobalContext();

  return (
    <>
      <Navbar />

      <h2
        className={
          isSideMenuExpanded
            ? "demo-warning side-menu-expanded"
            : "demo-warning"
        }
      >
        DEMO ONLY - NOT RELATED TO ANY REAL ORGANISATION
      </h2>

      <SideMenu />
      <Outlet />
    </>
  );
};

export default SharedLayout;
