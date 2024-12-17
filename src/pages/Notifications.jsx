import { Helmet } from "react-helmet-async";
import { Aside } from "../components/DashboardComponent";

const Notifications = () => {
  return (
    <>
      <div className="dashboard-main">
        <div className="dashboard-section">
          <Helmet>
            <title>Notification • GetItDone</title>
          </Helmet>
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
    </>
  );
};

export default Notifications;