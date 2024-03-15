import { Outlet } from "react-router-dom";
import MyHeader from "./MyHeader";
import MySidebar from "./MySidebar";
import "./../styles/MyLayout.css";

const Layout = () => {
  return (
    <div className="my-layout">
      <MySidebar myClass="my-sidebar" />
      <div className="my-contents">
        <MyHeader myClass="my-header" />
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
