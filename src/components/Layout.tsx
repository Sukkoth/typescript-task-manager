import { Outlet, useLocation } from "react-router-dom";

function Layout() {
  const { pathname } = useLocation();

  return (
    <main
      className={`w-full lg:w-[65%] mx-auto ${
        !["/login", "/register"].includes(pathname) ? "pb-28" : ""
      }`}
    >
      <Outlet />
    </main>
  );
}

export default Layout;
