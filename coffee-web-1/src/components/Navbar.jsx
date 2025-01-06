import React, { useState, useEffect } from "react";
import { SiCoffeescript } from "react-icons/si";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import { AiOutlineClose, AiOutlineMenuUnfold } from "react-icons/ai";


const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { to: "home", label: "Home" },
    { to: "menu", label: "Menu" },
    { to: "about", label: "About" },
    { to: "products", label: "Products" },
    { to: "riview", label: "Reviews" },
  ];

  return (

    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-lg"
          : "bg-gradient-to-r from-[#FFDCAB]/90 to-[#AB6B2E]/90 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2 cursor-pointer"
          >
            <SiCoffeescript className="text-2xl md:text-3xl text-[#AB6B2E]" />
            <span className="text-lg md:text-xl font-bold">Coffee Shop</span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                spy={true}
                smooth={true}
                duration={500}
                className="relative group px-2 py-1 text-gray-700 hover:text-[#AB6B2E] transition-colors cursor-pointer"
              >
                {link.label}
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-[#AB6B2E] transform scale-x-0 origin-left transition-transform group-hover:scale-x-100" />
              </Link>
            ))}
          </div>

          {/* Login Button */}
          <div className="hidden md:block">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#AB6B2E] text-white px-6 py-2 rounded-full hover:bg-[#8B571E] transition-colors"
            >
              Login
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
            onClick={() => setMenu(!menu)}
          >
            {menu ? (
              <AiOutlineClose size={24} />
            ) : (
              <AiOutlineMenuUnfold size={24} />
            )}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menu && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/95 backdrop-blur-md"
          >
            <div className="px-4 pt-2 pb-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  spy={true}
                  smooth={true}
                  duration={500}
                  className="block px-4 py-2 text-lg text-gray-700 hover:text-[#AB6B2E] hover:bg-gray-50 rounded-lg transition-colors"
                  onClick={() => setMenu(false)}
                >
                  {link.label}
                </Link>
              ))}
              <motion.button
                whileTap={{ scale: 0.95 }}
                className="w-full bg-[#AB6B2E] text-white px-4 py-2 rounded-full hover:bg-[#8B571E] transition-colors"
                onClick={() => setMenu(false)}
              >
                Login
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
