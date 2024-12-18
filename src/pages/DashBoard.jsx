import { Helmet } from "react-helmet-async";
import { Aside } from "../components/DashboardComponent";

const DashBoard = () => {
  return (
    <div className="dashboard-body">
      <Helmet>
        <title>DashBoard • GetItDone</title>
      </Helmet>
      <div className="dashboard-main">
        <div className="dashboard-section">
          <h1 className="dashboard-title">
            This is Dashboard
          </h1>
        </div>
      </div>
      <Aside
        topHead="your section heading"
        topBody="your section body"
      // bottomArray={[{}, {}, {}, {}]}
      />
    </div>
  );
};

export default DashBoard;