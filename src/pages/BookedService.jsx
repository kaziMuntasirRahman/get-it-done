import { Helmet } from "react-helmet-async";
import { Aside } from "../components/DashboardComponent";

const BookedService = () => {
  return (
    <>
      <div className="dashboard-main">
        <div className="dashboard-section">
          <Helmet>
            <title>Booked Services • GetItDone</title>
          </Helmet>
          <h1 className="dashboard-title">
            This is booked services section
          </h1>
        </div>
      </div >
      <Aside
        topHead="Add section heading"
        topBody="Add section body"
        // bottomArray={[{}, {}, {}, {}]}
      />
    </>
  );
};

export default BookedService;