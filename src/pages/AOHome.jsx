import { useGlobalContext } from "../common/GlobalContext";

const AOHome = () => {
  const { isSideMenuExpanded } = useGlobalContext();
  return (
    <section
      className={isSideMenuExpanded ? "main side-menu-expanded" : "main"}
    >
      <h1>Welcome, user, to AUSTRAC Online</h1>
      <h2>Announcements</h2>
      <hr />
      <p>
        A reminder that any changes to your AUSTRAC enrolment details must be
        updated within 14 days.
      </p>
      <p>
        To update your enrolment details, please go to "Account Details" page.
      </p>
      <hr />
      <a
        href="https://www.austrac.gov.au/business/austrac-online"
        target="_blank"
      >
        AUSTRAC Online User Guide
      </a>
    </section>
  );
};
export default AOHome;
