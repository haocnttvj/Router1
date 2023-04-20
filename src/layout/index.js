import { Outlet } from "react-router-dom";
import Header from "./Header";

function Layout() {
  return (
    <div>
      <h2>Layout</h2>
      <Header />
      <Outlet />
    </div>
  );
}

export default Layout;
