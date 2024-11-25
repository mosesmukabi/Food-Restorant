import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <div className="flex items-center">
          <span className="bg-green-500 text-white text-xl font-bold px-2 py-0 rounded-md">
            F
          </span>
          <span className="text-black text-xl font-bold ml-2">OODI</span>
        </div>

        {/* Navigation Links */}
        <nav>
          <ul className="flex space-x-8">
            <li>
              <Link
                to="/home"
                className="text-black text-sm font-medium hover:text-green-500 transition-colors"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/menu"
                className="text-black text-sm font-medium hover:text-green-500 transition-colors"
              >
                Menu
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className="text-black text-sm font-medium hover:text-green-500 transition-colors"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/offers"
                className="text-black text-sm font-medium hover:text-green-500 transition-colors"
              >
                Offers
              </Link>
            </li>
          </ul>
        </nav>

        {/* Actions */}
        <div className="flex items-center space-x-6">
          {/* contact button */}
          <Link
            to="/contact"
            className="bg-green-500 text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-green-600 transition-colors"
          >
            Contact
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
