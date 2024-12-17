import { Helmet } from "react-helmet-async";
import { Aside } from "../components/DashboardComponent";

const UserSettings = () => {
  return (
    <>
      <div className="dashboard-main">
        <div className="dashboard-section">
          <Helmet>
            <title>Profile Settings • GetItDone</title>
          </Helmet>
          <h1 className="dashboard-title">
            Profile Settings
          </h1>
        </div>
      </div>
      <Aside
        topHead="Add section heading"
        topBody="Add section body"
        // bottomArray={[{}, {}, {}, {}]}
      />
    </>
  );
};

export default UserSettings;