import { useSelector } from "react-redux";
import { tokenSelector } from "../features/Auth/authSlice";
import { Navigate, Outlet } from "react-router-dom";

function AuthOutlet() {
  const token = useSelector(tokenSelector);
  if (token === null) {
    return <Navigate to='/login' />;
  }

  return <Outlet />;
}

export default AuthOutlet;
