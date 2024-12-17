import { Helmet } from "react-helmet-async";

const BookedService = () => {
  return (
    <div className="dashboard-section">
      <Helmet>
        <title>Booked Services • GetItDone</title>
      </Helmet>
      <h1 className="dashboard-title">
        This is booked services section
      </h1>
    </div>
  );
};

export default BookedService;