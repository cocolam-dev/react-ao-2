import ExistingUserLogin from "./ExistingUserLogin";
import NewUserSignUp from "./NewUserSignUp";

const LoginPage = () => {
  return (
    <div className="login-page">
      <section className="side-by-side">
        <ExistingUserLogin />
        <NewUserSignUp />
      </section>
      <footer className="login-page-footer">
        <p>
          If you require assistance, please contact the MyPortal Contact Centre
          on email: contact@example.com.au
        </p>
        <p>
          Ph (within Australia): 1300 012 345 - Ph (international): +61 2 9876
          5432
        </p>
        <p>
          If you need a translator in order to speak to MyPortal, please call
          the Translating and Interpreting Service on 123 123
        </p>
        <p>and ask them to call MyPortal on 1300 012 345.</p>
        <p>
          For more information about MyPortal, please visit the
          <a href="https://www.example.com.au/" target="_blank">
            {" MyPortal website"}
          </a>
          .
        </p>
      </footer>
    </div>
  );
};
export default LoginPage;
