import UserForm from "./UserForm";
import { useGlobalContext } from "../../common/GlobalContext";

const AccountDetailsIndex = () => {
  const { isSideMenuExpanded } = useGlobalContext();
  return (
    <div className={isSideMenuExpanded ? "main side-menu-expanded" : "main"}>
      <h1>Account Details</h1>
      <UserForm />
    </div>
  );
};
export default AccountDetailsIndex;
