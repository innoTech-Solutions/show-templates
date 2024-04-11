"use client"
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { ShoppingCartIcon } from '@heroicons/react/outline';

const NavBar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleDropdownToggle = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <nav className="bg-[#1a1a1a] shadow-lg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          <div>
            <Link href="/">
              <span className="text-white text-2xl font-bold cursor-pointer transition-colors duration-300 hover:text-cyan-300">Clothing Store</span>
            </Link>
          </div>
          <div className="relative" ref={dropdownRef}>
            <ul className="flex space-x-4">
              <li>
                <Link href="/shop">
                  <span className="text-white cursor-pointer transition-colors duration-300 hover:text-cyan-300">Shop</span>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <span className="text-white cursor-pointer transition-colors duration-300 hover:text-cyan-300">Contact Us</span>
                </Link>
              </li>
              <li>
                <span className="text-white cursor-pointer transition-colors duration-300 hover:text-cyan-300" onClick={handleDropdownToggle}>
                  <ShoppingCartIcon className="h-6 w-6 inline-block" />
                </span>
                {showDropdown && (
                  <div className="absolute top-full right-0 mt-2 bg-white rounded-md shadow-lg">
                    <ul className="py-2">
                      <li>
                        <span className="block px-4 py-2 text-gray-800 hover:bg-gray-200 cursor-pointer">My Account</span>
                      </li>
                      <li>
                        <span className="block px-4 py-2 text-gray-800 hover:bg-gray-200 cursor-pointer">Cart</span>
                      </li>
                    </ul>
                  </div>
                )}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
