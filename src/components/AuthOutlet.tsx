import { useDispatch, useSelector } from "react-redux";
import { authSelector } from "../features/Auth/authSlice";
import { Navigate, Outlet } from "react-router-dom";
import FullLoader from "../pages/FullLoader";
import { StateDispatchType } from "../store/store";
import { getUserThunk } from "../features/Auth/authThunks";
import { useEffect, useState } from "react";

function AuthOutlet() {
  const { isLoading, user } = useSelector(authSelector);
  const [boot, setBoot] = useState(user?.email ? false : true);
  const dispatch = useDispatch<StateDispatchType>();

  useEffect(() => {
    async function waiter() {
      if (!user?.email) {
        await dispatch(getUserThunk());
      }
      setBoot(false);
    }
    waiter();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  if (isLoading) {
    return <FullLoader />;
  }

  if (boot) {
    return <FullLoader />;
  }

  if (!boot && !isLoading) {
    if (!user?.email) {
      return <Navigate to='/login' />;
    } else {
      return <Outlet />;
    }
  }
}

export default AuthOutlet;
