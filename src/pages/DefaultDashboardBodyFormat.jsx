import { Aside } from "./DashBoardContainer";

export const DefaultDashboardBodyFormat = () => {
  return (
    <>
      <div className="dashboard-main">
        <div className="dashboard-section">
          <Helmet>
            <title>Profile • GetItDone</title>
          </Helmet>
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
    </>
  );
};