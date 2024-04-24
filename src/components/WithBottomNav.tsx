import { Outlet } from "react-router-dom";
import BottomNav from "./BottomNav";

function WithBottomNav() {
  return (
    <main>
      <Outlet />
      <BottomNav />
    </main>
  );
}

export default WithBottomNav;
