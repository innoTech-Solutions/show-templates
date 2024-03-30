import Link from 'next/link';

const NavBar = () => {
  return (
    <nav className="bg-[#1a1a1a] shadow-lg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          <div>
            <Link href="/">
              <span className="text-white text-2xl font-bold cursor-pointer transition-colors duration-300 hover:text-cyan-300">Clothing Store</span>
            </Link>
          </div>
          <div>
            <ul className="flex space-x-4">
              <li>
                <Link href="/shop">
                  <span className="text-white cursor-pointer transition-colors duration-300 hover:text-cyan-300">Shop</span>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <span className="text-white cursor-pointer transition-colors duration-300 hover:text-cyan-300">About</span>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <span className="text-white cursor-pointer transition-colors duration-300 hover:text-cyan-300">Contact</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
