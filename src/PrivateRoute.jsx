import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "./providers/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user, userLoading } = useContext(AuthContext);
  const location = useLocation();
  console.log(location);

  if (userLoading) {
    return <div className="loading-spinner size-16"></div>
  }

  if (user?.email) {
    return children
  }

  return (
    <Navigate state={location.pathname} to='/signin' replace />
  );
};

export default PrivateRoute;