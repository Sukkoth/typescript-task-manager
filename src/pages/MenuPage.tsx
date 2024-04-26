import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authActions } from "../features/Auth/authSlice";

function MenuPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <div className='min-h-[100dvh] w-full center-all'>
      <Button
        onClick={() => {
          dispatch(authActions.logout());
          navigate("/");
        }}
      >
        Logout
      </Button>
    </div>
  );
}

export default MenuPage;
