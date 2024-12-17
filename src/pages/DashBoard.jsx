import { Helmet } from "react-helmet-async";
import { Aside } from "../components/DashboardComponent";

const DashBoard = () => {
  return (
    <>
      <div className="dashboard-main">
        <div className="dashboard-section">
          <Helmet>
            <title>DashBoard • GetItDone</title>
          </Helmet>
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
    </>

  );
};

export default DashBoard;