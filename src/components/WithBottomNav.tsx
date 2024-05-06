import { Outlet } from "react-router-dom";
import BottomNav from "./BottomNav";

function WithBottomNav() {
  return (
    <main className='w-full'>
      <Outlet />
      <BottomNav />
    </main>
  );
}

export default WithBottomNav;
