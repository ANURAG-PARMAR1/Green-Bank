import { Navigate } from "react-router-dom";

const isAuthenticated = () => {
  return !!localStorage.getItem("accessToken");
};

const PrivateRoutes = ({ children }) => {
  return isAuthenticated() ? children : <Navigate to="/login" />;
};

export default PrivateRoutes;