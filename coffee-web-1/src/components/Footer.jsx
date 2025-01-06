import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#FFDCAB] to-[#AB6B2E] pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-800">CafePulse</h2>
            <p className="text-gray-600 max-w-xs">
              Crafting moments of joy, one cup at a time. Experience coffee
              perfection.
            </p>
            <div className="flex space-x-4">
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="#"
                className="text-[#AB6B2E] hover:text-gray-800"
              >
                <FaFacebook size={24} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="#"
                className="text-[#AB6B2E] hover:text-gray-800"
              >
                <FaInstagram size={24} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="#"
                className="text-[#AB6B2E] hover:text-gray-800"
              >
                <FaTwitter size={24} />
              </motion.a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {["Menu", "About Us", "Products", "Reviews"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-[#AB6B2E] transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Menu */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Menu</h3>
            <ul className="space-y-2">
              {["Cappuccino", "Latte", "Americano", "Espresso"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-[#AB6B2E] transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Contact Us
            </h3>
            <ul className="space-y-2">
              <li className="text-gray-600">Email: contact@cafepulse.com</li>
              <li className="text-gray-600">Phone: +84 958 248 966</li>
              <li className="text-gray-600">Address: 123 Coffee Street</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200/20 mt-12 pt-6 text-center">
          <p className="text-gray-600">
            © {new Date().getFullYear()} CafePulse. All rights reserved.
            Developed by{" "}
            <span className="text-[#AB6B2E] font-medium">Ardy Styles</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
