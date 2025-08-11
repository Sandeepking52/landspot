import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 ">
      <div className="max-w-screen-xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-yellow-400">LandSpot</h2>
            <p className="text-gray-400">
              Your trusted platform for buying, selling, and renting properties.
              Find your dream home or investment opportunity today!
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-yellow-400"
              >
                <FaFacebookF size={20} />
              </a>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-yellow-400"
              >
                <FaTwitter size={20} />
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-yellow-400"
              >
                <FaLinkedinIn size={20} />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-yellow-400"
              >
                <FaInstagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-300">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/about"
                  className="text-gray-400 hover:text-yellow-400"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/properties"
                  className="text-gray-400 hover:text-yellow-400"
                >
                  Properties
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-gray-400 hover:text-yellow-400"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a href="/faq" className="text-gray-400 hover:text-yellow-400">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-300">Contact Us</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">
                <span className="font-medium">Email:</span> support@landspot.com
              </li>
              <li className="text-gray-400">
                <span className="font-medium">Phone:</span> +1 (234) 567-8901
              </li>
              <li className="text-gray-400">
                <span className="font-medium">Address:</span> 123 Main Street,
                City, Country
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-5 border-t border-gray-700 p-6 text-center h-10 overflow-hidden">
          <p className="text-gray-400 text-sm ">
            &copy; {new Date().getFullYear()} LandSpot. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
