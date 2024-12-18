import { Helmet } from "react-helmet-async";
import { Aside } from "../components/DashboardComponent";

const UserSettings = () => {
  return (
    <div div className="dashboard-body">
      <Helmet>
        <title>Profile Settings • GetItDone</title>
      </Helmet>
      <div className="dashboard-main">
        <div className="dashboard-section">
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
    </div>
  );
};

export default UserSettings;