import { IoIosMenu, IoMdClose } from "react-icons/io";
import SideMenuContent from "./SideMenuContent";
import { useGlobalContext } from "../common/GlobalContext";

const SideMenu = () => {
  const { isSideMenuExpanded, setIsSideMenuExpanded, currentUser } =
    useGlobalContext();
  return (
    <>
      <div className={currentUser ? "side-menu-icon" : "hide-side-menu"}>
        {isSideMenuExpanded ? (
          <IoMdClose onClick={() => setIsSideMenuExpanded(false)} />
        ) : (
          <IoIosMenu onClick={() => setIsSideMenuExpanded(true)} />
        )}
        <span className="side-menu-name">Menu</span>
      </div>
      <SideMenuContent />
    </>
  );
};
export default SideMenu;
