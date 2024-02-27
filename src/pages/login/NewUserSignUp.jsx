import { useGlobalContext } from "../../common/GlobalContext";

import { Link } from "react-router-dom";
import Users from "./Users";

const NewUserSignUp = () => {
  const { setIsEditingForm, setTempUser, setCurrentUser } = useGlobalContext();
  return (
    <form>
      <fieldset>
        <legend>New User</legend>
        <div className="btn-group">
          <Link
            to="/signup"
            className="action-btn"
            onClick={
              () => setIsEditingForm(true) & setTempUser(Users[1])
              // setCurrentUser(Users[1])
            }
          >
            Sign Up
          </Link>
        </div>
        <p className="footer">
          <a href="#">Who needs to sign up?</a>
        </p>
      </fieldset>
    </form>
  );
};
export default NewUserSignUp;
