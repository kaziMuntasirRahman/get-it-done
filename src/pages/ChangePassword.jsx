import { Helmet } from "react-helmet-async";
import { Aside } from "../components/DashboardComponent";

const ChangePassword = () => {
  return (
    <div className="dashboard-body">
      <Helmet>
        <title>Change Password • GetItDone</title>
      </Helmet>
      <div className="dashboard-main">
        <div className="dashboard-section">
          <h1 className="dashboard-title">
            Change Your Password
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

export default ChangePassword;