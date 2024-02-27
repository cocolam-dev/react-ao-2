import { useNavigate } from "react-router-dom";
import Users from "./Users";
import { useGlobalContext } from "../../common/GlobalContext";
import { useState } from "react";
import { Alert } from "@mui/material";

const ExistingUserLogin = () => {
  const {
    currentUser,
    setCurrentUser,
    setIsSideMenuExpanded,
    tempUser,
    setTempUser,
  } = useGlobalContext();

  const [isLoginSuccessful, setIsLoginSuccessful] = useState(true);

  const navigate = useNavigate();

  const loginUser = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const emailEntered = formData.get("Email");
    const pwdEntered = formData.get("Password");

    if (emailEntered === Users[0].Email && pwdEntered === Users[0].Password) {
      setCurrentUser(Users[0]);
      setTempUser(Users[0]);
      setIsSideMenuExpanded(true);
      setIsLoginSuccessful(true);
      navigate("/home");
    } else {
      setIsLoginSuccessful(false);
    }
  };

  return (
    <>
      <form onSubmit={loginUser}>
        <fieldset>
          <legend>Existing User Login</legend>

          <div className="AlertContainer">
            {!isLoginSuccessful && (
              <Alert severity="warning">The login details are invalid.</Alert>
            )}
          </div>
          <div className="form-field">
            <label htmlFor="Email">Email Address</label>
            <input
              type="Email"
              name="Email"
              id="Email"
              defaultValue="test@bank.com"
              placeholder="Email Address"
            ></input>
          </div>
          <div className="form-field">
            <label>Password</label>
            <input
              type="password"
              name="Password"
              id="Password"
              defaultValue="test"
              placeholder="Password"
            ></input>
          </div>
          <div className="btn-group">
            <button type="submit" className="action-btn">
              Login
            </button>
          </div>
          <footer className="footer">
            <p>For testing, please enter:</p>
            <p>Email address: test@bank.com</p>
            <p>Password: test</p>
            <p>
              <a href="#">Forgot your password?</a>
            </p>
          </footer>
        </fieldset>
      </form>
    </>
  );
};
export default ExistingUserLogin;
