import { IoIosArrowForward } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import { useGlobalContext } from "../common/GlobalContext";

const SideMenuContent = () => {
  const {
    isSideMenuExpanded,
    setIsSideMenuExpanded,
    setCurrentUser,
    setIsEditingForm,
  } = useGlobalContext();
  const navigate = useNavigate();

  return (
    <div
      className={isSideMenuExpanded ? "side-menu" : "side-menu hide-side-menu"}
    >
      <h3 className="side-menu-title">Menu</h3>
      <Link to="/home" className="side-menu-btn">
        Home
        <span className="menu-go-btn">
          <IoIosArrowForward />
        </span>
      </Link>
      <Link
        to="accountdetails"
        className="side-menu-btn"
        onClick={() => setIsEditingForm(false)}
      >
        Account Details
        <span className="menu-go-btn">
          <IoIosArrowForward />
        </span>
      </Link>
      <Link to="tr" className="side-menu-btn">
        Transaction Reporting
        <span className="menu-go-btn">
          <IoIosArrowForward />
        </span>
      </Link>
      <Link
        to="/"
        className="side-menu-btn"
        onClick={() => setCurrentUser() & setIsSideMenuExpanded(false)}
      >
        Logout
        <span className="menu-go-btn">
          <IoIosArrowForward />
        </span>
      </Link>
    </div>
  );
};
export default SideMenuContent;
