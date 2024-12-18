import { Helmet } from "react-helmet-async";
import { Aside } from "../components/DashboardComponent";

const Notifications = () => {
  return (
    <div div className="dashboard-body">
      <Helmet>
        <title>Notification • GetItDone</title>
      </Helmet>
      <div className="dashboard-main">
        <div className="dashboard-section">
          <h1 className="dashboard-title">
            Notifications
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

export default Notifications;