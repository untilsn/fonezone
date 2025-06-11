import { Navigate } from "react-router-dom";

const ProtectedRoute = (children) => {
  let user = localStorage.getItem("access_token");
  return <div>{user ? children : <Navigate to={"/auth/login"} />}</div>;
};

export default ProtectedRoute;
