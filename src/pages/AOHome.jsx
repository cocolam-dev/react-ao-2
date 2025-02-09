import { useGlobalContext } from "../common/GlobalContext";

const AOHome = () => {
  const { isSideMenuExpanded } = useGlobalContext();
  return (
    <section
      className={isSideMenuExpanded ? "main side-menu-expanded" : "main"}
    >
      <h1>Welcome to MyPortal</h1>
      <h2>Announcements</h2>
      <hr />
      <p>
        A reminder that any changes to your MyPortal enrolment details must be
        updated within 14 days.
      </p>
      <p>
        To update your enrolment details, please go to "Account Details" page.
      </p>
      <hr />
      <a href="https://www.turingx.com.au/react-ao-2" target="_blank">
        MyPortal User Guide
      </a>
    </section>
  );
};
export default AOHome;
