import { Helmet } from "react-helmet-async";

const ServicesToDo = () => {
  return (
    <div className="dashboard-section">
      <Helmet>
        <title>Services To Do • GetItDone</title>
      </Helmet>
      <h1 className="dashboard-title">
        Services To Do
      </h1>
    </div>
  );
};

export default ServicesToDo;