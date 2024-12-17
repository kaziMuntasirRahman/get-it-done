import { Helmet } from "react-helmet-async";

const Notifications = () => {
  return (
    <div className="dashboard-section">
      <Helmet>
        <title>Notification • GetItDone</title>
      </Helmet>
      <h1 className="dashboard-title">
        Notifications
      </h1>
    </div>
  );
};

export default Notifications;