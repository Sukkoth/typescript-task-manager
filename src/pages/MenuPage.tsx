import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authActions } from "../features/Auth/authSlice";
import supabase from "../supabase";

function MenuPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  async function handleLogout() {
    try {
      await supabase.auth.signOut();
      dispatch(authActions.logout());
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <div className='min-h-[100dvh] w-full center-all'>
      <Button
        onClick={() => {
          handleLogout();
        }}
      >
        Logout
      </Button>
    </div>
  );
}

export default MenuPage;
