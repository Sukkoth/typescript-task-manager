import { useSelector } from "react-redux";
import { tokenSelector } from "../store/slices/auth/authSlice";
import { Navigate, Outlet } from "react-router-dom";

function AuthOutlet() {
  const token = useSelector(tokenSelector);
  if (token === null) {
    return <Navigate to='/login' />;
  }
  return <Outlet />;
}

export default AuthOutlet;
