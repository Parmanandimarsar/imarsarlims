
import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import SideNave from "./SideNav";
import Footer from "../Footer";

const Layout = () => {
  const [menuEnabled, setMenuEnabled] = useState(false); // To control sidenav visibility

  return (
    <div>
      {/* Sticky Navbar */}
      <Navbar setMenuEnabled={setMenuEnabled} menuEnabled={menuEnabled} />
      <div style={{ display: "flex", }}> 
        {!menuEnabled && <SideNave />}
        <div style={{ flexGrow: 1,  width:"85%", transition: "all 0.3s",marginTop:"5px" }}>
          <Outlet />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Layout;
