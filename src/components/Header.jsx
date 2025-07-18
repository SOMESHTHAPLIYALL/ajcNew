import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/pictures/logo.png";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { y: -20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 10,
      },
    },
  };

  const mobileMenu = {
    hidden: { y: -50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20,
      },
    },
    exit: {
      y: -50,
      opacity: 0,
      transition: {
        duration: 0.3,
      },
    },
  };

  const navItemHover = {
    scale: 1.05,
    color: "#F7DD05", // Your brand yellow color
    transition: { duration: 0.2 },
  };

  const navItemTap = {
    scale: 0.98,
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      setIsMenuOpen(false); // Close mobile menu if open
    }
  };

  return (
    
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
        className="bg-[#006157] py-2 px-4 h-[90px] flex justify-between items-center z-[100] md:px-10 shadow-md"
      >
        {/* Logo */}
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link to="/#home" onClick={() => scrollToSection("home")}>
            <img
              className="h-[70px] md:h-[80px]"
              src={logo}
              alt="Company Logo"
            />
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <motion.nav
          variants={container}
          initial="hidden"
          animate="visible"
          className="hidden  md:flex justify-center items-center gap-6 lg:gap-10 text-white font-semibold"
        >
          {[
            { name: "About", id: "about" },
            { name: "Vision", id: "vision" },
            { name: "Services", id: "services" },
            { name: "Industries", id: "industries" },
            { name: "Clients", id: "clients" },
            { name: "Case Studies", id: "studies" },
            { name: "Gallery", id: "gallery" },
            { name: "Contact Us", id: "contactus" },
          ].map((item) => (
            <motion.div
              key={item.id}
              variants={item}
              whileHover={navItemHover}
              whileTap={navItemTap}
            >
              <button
                onClick={() => scrollToSection(item.id)}
                className="hover:text-[#F7DD05] cursor-pointer transition-colors duration-200"
              >
                {item.name}
              </button>
            </motion.div>
          ))}
        </motion.nav>

        {/* Mobile Menu Button */}
        <motion.button
          className="md:hidden text-white text-2xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {isMenuOpen ? <FiX size={40} /> : <FiMenu size={40} />}
        </motion.button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              variants={mobileMenu}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="md:hidden z-50  top-[90px] left-0 right-0 bg-[#006157] flex flex-col items-center py-4 space-y-4 shadow-lg absolute"
            >
              {[
                { name: "About", id: "about" },
                { name: "Vision", id: "vision" },
                { name: "Services", id: "services" },
                { name: "Industries", id: "industries" },
                { name: "Clients", id: "clients" },
                { name: "Case Studies", id: "studies" },
                { name: "Gallery", id: "gallery" },
                { name: "Contact Us", id: "contactus" },
              ].map((item) => (
                <motion.div
                  key={item.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full text-center"
                >
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="text-white font-semibold py-2 block hover:text-[#F7DD05] transition-colors w-full"
                  >
                    {item.name}
                  </button>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
  
  );
};

export default Header;
