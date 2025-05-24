/* eslint-disable react/prop-types */
import useAuth from "../Hooks/useAuth";
import { Navigate } from "react-router-dom";

const PrivetRoutes = ({ children }) => {
  const { user, loading } = useAuth();
  if (loading) {
    return <h1>Loading....</h1>;
  }
  if (!user) {
    return <Navigate to="/login"></Navigate>;
  }
  return children;
};

export default PrivetRoutes;
