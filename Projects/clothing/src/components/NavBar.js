"use client"
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { ShoppingCartIcon } from '@heroicons/react/outline';

/**
 * The `NavBar` component provides a navigation bar for the Clothing Store application.
 * It includes links to various pages and a dropdown menu for the shopping cart.
 * @component
 * @returns {JSX.Element} The rendered NavBar component.
 */
const NavBar = () => {
  /**
   * State variable to control the visibility of the shopping cart dropdown.
   * @type {[boolean, function]}
   */
  const [showDropdown, setShowDropdown] = useState(false);

  /**
   * Reference to the dropdown element for detecting clicks outside of it.
   * @type {React.MutableRefObject<null>}
   */
  const dropdownRef = useRef(null);

  /**
   * Effect hook to handle clicks outside of the dropdown, closing it if necessary.
   */
  useEffect(() => {
    /**
     * Handles click events outside of the dropdown, closing it if the click is outside.
     * @param {MouseEvent} event - The mouse event object.
     */
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

  /**
   * Handles toggling the visibility of the shopping cart dropdown.
   */
  const handleDropdownToggle = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <nav className="bg-[#1a1a1a] shadow-lg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          <div>
            {/* Logo linking to the homepage */}
            <Link href="/">
              <span className="text-white text-2xl font-bold cursor-pointer transition-colors duration-300 hover:text-cyan-300">Clothing Store</span>
            </Link>
          </div>
          <div className="relative" ref={dropdownRef}>
            {/* Navigation links */}
            <ul className="flex space-x-4">
              <li>
                {/* Shop link */}
                <Link href="/shop">
                  <span className="text-white cursor-pointer transition-colors duration-300 hover:text-cyan-300">Shop</span>
                </Link>
              </li>
              <li>
                {/* Contact Us link */}
                <Link href="/contact">
                  <span className="text-white cursor-pointer transition-colors duration-300 hover:text-cyan-300">Contact Us</span>
                </Link>
              </li>
              <li>
                {/* Shopping cart icon with dropdown */}
                <span className="text-white cursor-pointer transition-colors duration-300 hover:text-cyan-300" onClick={handleDropdownToggle}>
                  <ShoppingCartIcon className="h-6 w-6 inline-block" />
                </span>
                {/* Dropdown content */}
                {showDropdown && (
                  <div className="absolute top-full right-0 mt-2 bg-white rounded-md shadow-lg">
                    <ul className="py-2">
                      <li>
                        {/* My Account link */}
                        <span className="block px-4 py-2 text-gray-800 hover:bg-gray-200 cursor-pointer">My Account</span>
                      </li>
                      <li>
                        {/* Cart link */}
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
