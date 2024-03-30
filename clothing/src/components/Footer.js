import { FaFacebook, FaTwitter, FaInstagram, FaPinterest, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-gray-300">
                <FaFacebook />
              </a>
              <a href="#" className="text-white hover:text-gray-300">
                <FaTwitter />
              </a>
              <a href="#" className="text-white hover:text-gray-300">
                <FaInstagram />
              </a>
              <a href="#" className="text-white hover:text-gray-300">
                <FaPinterest />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="mb-4">Subscribe to our newsletter for the latest updates.</p>
            <div className="flex">
              <input type="email" placeholder="Enter your email" className="bg-gray-700 text-white px-4 py-2 rounded-l-lg focus:outline-none" />
              <button className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-r-lg">Subscribe</button>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p>123 Fashion Street</p>
            <p>New York, NY 10001</p>
            <p>info@example.com</p>
            <p>1-800-123-4567</p>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-6 text-center">
          <p>&copy; 2024 Clothing Store. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
