import { Helmet } from "react-helmet-async";
import { Aside } from "../components/DashboardComponent";

const ServicesToDo = () => {
  return (
    <div className="dashboard-body">
      <Helmet>
        <title>Services To Do • GetItDone</title>
      </Helmet>
      <div className="dashboard-main">
        <div className="dashboard-section">
          <h1 className="dashboard-title">
            Services To Do
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

export default ServicesToDo;