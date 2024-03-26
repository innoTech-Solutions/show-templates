"use client"
import React, { useState } from 'react';
import { menuData } from "./MenuItems";
import SubMenu from "./SubMenu";

function NavBar() {
  const [activeItem, setActiveItem] = useState(null);

  const handleMouseEnter = (title) => {
    setActiveItem(title);
  };

  const handleMouseLeave = () => {
    setActiveItem(null);
  };

  return (
    <nav className="bg-black">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div>
            <span className="text-white mr-6 text-lg">Call Us | +63-111-22-2322</span>
          </div>
          <ul className="flex text-white">
            {menuData.map((menu, index) => (
              <li key={index} className="menu-items" onMouseEnter={() => handleMouseEnter(menu.title)} onMouseLeave={handleMouseLeave}>
                <a href={menu.url} className="block px-4 py-2 hover:bg-gray-700">{menu.title}</a>
                {menu.subMenu && activeItem === menu.title && <SubMenu items={menu.subMenu} />}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
