import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo and tagline */}
        <div>
          <h1 className="text-xl font-bold text-green-500">FOODI</h1>
          <p className="mt-2">
            Savor the artistry where every dish is a culinary masterpiece
          </p>
          <div className="flex items-center space-x-4 mt-4">
            <a href="#" className="text-green-500 hover:text-green-600">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="text-green-500 hover:text-green-600">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="text-green-500 hover:text-green-600">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-green-500 hover:text-green-600">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>

        {/* Useful links */}
        <div>
          <h2 className="font-semibold mb-4">Useful Links</h2>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-green-500">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-green-500">
                Events
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-green-500">
                Blogs
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-green-500">
                FAQ
              </a>
            </li>
          </ul>
        </div>

        {/* Main Menu */}
        <div>
          <h2 className="font-semibold mb-4">Main Menu</h2>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-green-500">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-green-500">
                Offers
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-green-500">
                Menus
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-green-500">
                Reservation
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h2 className="font-semibold mb-4">Contact Us</h2>
          <p className="mb-2">restaurant@gmail.com</p>
          <p className="mb-2">+64 958 248 966</p>
          <p className="mb-2 space-x-4">
            <FontAwesomeIcon
              icon={faFacebookF}
              className="text-green-500 hover:text-green-600"
            />
            <FontAwesomeIcon
              icon={faInstagram}
              className="text-green-500 hover:text-green-600"
            />
            <FontAwesomeIcon
              icon={faTwitter}
              className="text-green-500 hover:text-green-600"
            />
            <FontAwesomeIcon
              icon={faYoutube}
              className="text-green-500 hover:text-green-600"
            />
          </p>
        </div>
      </div>
      <div className="text-center mt-8 text-sm text-gray-500">
        <p>Copyright &copy; 2023 Dscode | All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
