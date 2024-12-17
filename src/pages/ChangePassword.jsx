import { Helmet } from "react-helmet-async";

const ChangePassword = () => {
  return (
    <div className="dashboard-section">
      <Helmet>
        <title>Change Password • GetItDone</title>
      </Helmet>
      <h1 className="dashboard-title">
        Change Your Password
      </h1>
    </div>
  );
};

export default ChangePassword;