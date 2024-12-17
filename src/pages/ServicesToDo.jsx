import { Helmet } from "react-helmet-async";
import { Aside } from "../components/DashboardComponent";

const ServicesToDo = () => {
  return (
    <>
      <div className="dashboard-main">
        <div className="dashboard-section">
          <Helmet>
            <title>Services To Do • GetItDone</title>
          </Helmet>
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
    </>
  );
};

export default ServicesToDo;