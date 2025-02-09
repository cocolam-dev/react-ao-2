import { Navigate, Outlet } from "react-router-dom";
import { useGlobalContext } from "./GlobalContext";

const ProtectedRoute = () => {
  const { currentUser } = useGlobalContext();

  if (!currentUser) {
    return <Navigate to="/" />;
  }
  return <Outlet />;
};

export default ProtectedRoute;
