import { useContext } from "react";
import { bistroContext } from "../Provider/AuthProvider";
import { useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { loading, user } = useContext(bistroContext);
  const location = useLocation();
  if (loading) {
    return (
      <div className="flex justify-center items-center">
        <span className="loading loading-bars loading-lg"></span>
      </div>
    );
  }
  if (user) {
    return children;
  }
  return <Navigate to={"/login"} state={location?.pathname} />;
};

export default PrivateRoute;
