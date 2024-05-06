import { useEffect } from "react";
import FullLoader from "./FullLoader";
import { useSelector } from "react-redux";
import { userSelector } from "../features/Auth/authSlice";
import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

function Test() {
  const user = useSelector(userSelector);
  const navigate = useNavigate();
  useAuth();

  useEffect(() => {
    if (user?.email) {
      navigate("/");
    }
  }, [user?.email, navigate]);

  return <FullLoader />;
}

export default Test;
