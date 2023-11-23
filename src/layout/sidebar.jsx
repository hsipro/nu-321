import Link from "next/link";
import React from "react";
import MobileMenus from "./mobile-menus";

const Sidebar = ({ isActive, setIsActive }) => {
  return (
    <>
      <div className={`dp-sidebar-menu ${isActive ? "sidebar-opened" : ""}`}>
        <button className="sidebar-close" onClick={() => setIsActive(false)}>
          <i className="icon_close"></i>
        </button>
        <div className="side-logo mb-30">
          <Link href="/">
            <img src="/assets/img/logo/logo-black.png" alt="logo" />
          </Link>
        </div>
        <div className="mobile-menu mean-container">
            <MobileMenus />
        </div>
        <div className="sidebar-info">
          <h4 className="mb-15">Contact Info</h4>
          <ul>
          
            <li>
              <a href="mailto: info@321datpro.com">info @ 321datpro.com</a>
            </li>
          </ul>
       
        </div>
      </div>
      <div className={`body-overlay ${isActive ? "opened" : ""} `} onClick={() => setIsActive(false)}></div>
    </>
  );
};
export default Sidebar;
