import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const ViewProfile = () => {
  const { user } = useContext(AuthContext);
  const { displayName, email, photoURL } = user;
  return (
    <div className="dashboard-section">
      <Helmet>
        <title>Profile • GetItDone</title>
      </Helmet>
      <h1 className="dashboard-title">view your profile</h1>
      <div className="hero bg-base-200 min-h-[500px]">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={photoURL}
            className="h-[250px] rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">{displayName}</h1>
            <p className="py-6">
              {email}
            </p>
            <Link to='/dashboard/update-profile' className="btn btn-primary">Update Profile</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewProfile;