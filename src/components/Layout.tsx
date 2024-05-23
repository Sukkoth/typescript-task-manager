import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <main className='w-full lg:w-[65%] mx-auto'>
      <Outlet />
    </main>
  );
}

export default Layout;
