import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ProctedRoutes = () => {
  const { token } = useSelector((state) => state.users);
  return token ? <Outlet /> : <Navigate to="/login" />;
};

export default ProctedRoutes;
