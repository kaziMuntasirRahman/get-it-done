import { Helmet } from "react-helmet-async";

const UserSettings = () => {
  return (
    <div className="dashboard-section">
      <Helmet>
        <title>Profile Settings • GetItDone</title>
      </Helmet>
      <h1 className="dashboard-title">
        Profile Settings
      </h1>
    </div>
  );
};

export default UserSettings;