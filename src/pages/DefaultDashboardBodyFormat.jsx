import { Aside } from "./DashBoardContainer";

export const DefaultDashboardBodyFormat = () => {
  return (
    <div div className="dashboard-body">
      <Helmet>
        <title>Profile • GetItDone</title>
      </Helmet>
      <div className="dashboard-main">
        <div className="dashboard-section">
          <h1 className="dashboard-title">
            This is Profile
          </h1>
        </div>
      </div>
      <Aside
        topHead="Add section heading"
        topBody="Add section body"
        bottomArray={[{}, {}, {}, {}]}
      />
    </div>
  );
};