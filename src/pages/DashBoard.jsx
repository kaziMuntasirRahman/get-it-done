import { Helmet } from "react-helmet-async";

const DashBoard = () => {
  return (
    <div className="dashboard-section">
      <Helmet>
        <title>Dashboard • GetItDone</title>
      </Helmet>
      <h1 className="dashboard-title">
        This is dashboard
      </h1>
    </div>
  );
};

export default DashBoard;