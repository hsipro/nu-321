import Link from "next/link";
import React, { useState } from "react";
import menu_data from "./menu-data";

const MobileNavMenu = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <button onClick={toggleMobileMenu}>Toggle Mobile Menu</button>

      {/* Mobile Menu */}
      <ul style={{ display: isMobileMenuOpen ? "block" : "none" }}>
        {menu_data.map((item) => (
          <li key={item.id}>
            <Link href={item.link}>{item.title}</Link>
            {item.sub_menus && (
              <ul className="submenu">
                {item.sub_menus.map((sub, i) => (
                  <li key={i}>
                    <Link href={sub.link}>{sub.title}</Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </>
  );
};

export default MobileNavMenu;
