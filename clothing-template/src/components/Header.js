"use client"
import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

export default function Header() {

 const [isHovering, setIsHovering] = useState(false);

  return (
    <header className="flex items-center justify-between bg-gray-800 text-white py-4 px-6">

      <div className="flex items-center flex-col">
        <img src="logo.png" alt="Logo" className="h-10 mr-4" />
        <h1 className="text-xl font-bold">Your Logo Name</h1>
      </div>
      
      <div className="flex-1 flex justify-center">
        <input
            type="text"
            placeholder="Search..."
            className="bg-gray-700 text-white py-2 px-4 rounded-md max-w-3xl sm:w-72 focus:outline-none"
        />
        <button className="ml-2 py-2">
            <FaSearch className="text-white text-3xl hover:bg-blue-400 rounded-md p-1" />
        </button>
    </div>

      <div className="relative flex flex-col">
        <ul className="flex mr-3 cursor-pointer">
          <li className="mr-3 hover:text-blue-400">My Wishlist</li>
          <li className="mr-3 hover:text-blue-400">Checkout</li>
          <li className="mr-3 hover:text-blue-400">Cart</li>
          <li className="mr-3 hover:text-blue-400">Sign In</li>
          <li className="mr-3 hover:text-blue-400">Register</li>
        </ul>

        <div className="flex justify-center ">
            <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 mt-5 max-w rounded-md"
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={ () => setIsHovering(false)}>
                Notification
            </button>
            {isHovering && (
                <div className="absolute bg-gray-200 text-black p-2 rounded-md text-center">
                    Your cart is empty
                </div>
            )}
        </div>
      </div>
      
    </header>
  );
}
