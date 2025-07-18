import React from "react";
import logo from "../assets/pictures/logo.png";
import { FaYoutube } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import ellipse from "../assets/pictures/ellipsefoot.png";

const Footer = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div className="bg-[#00140C] w-full pt-32 py-12 px-4 sm:px-6 lg:px-8 mt-[100px] relative overflow-hidden">
      {/* Background Ellipse */}
      <div>
        <img
          className="absolute -ml-8 -mt-[105px] opacity-10 w-full max-w-[2000px]"
          src={ellipse}
          alt="Decorative background element"
        />
      </div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-10 relative z-10">
        {/* Navigation Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-white">
          {/* Company Column */}
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-semibold mb-2 border-b border-white/20 pb-1 cursor-pointer">
              Company
            </h3>
            <button
              onClick={() => scrollToSection("about")}
              className="hover:text-gray-300 transition-colors cursor-pointer text-left"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="hover:text-gray-300 transition-colors cursor-pointer text-left"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("studies")}
              className="hover:text-gray-300 transition-colors cursor-pointer text-left"
            >
              Case Studies
            </button>
          </div>

          {/* Resources Column */}
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-semibold mb-2 border-b border-white/20 pb-1 cursor-pointer">
              Resources
            </h3>
            <button
              onClick={() => scrollToSection("industries")}
              className="hover:text-gray-300 transition-colors cursor-pointer text-left"
            >
              Industries
            </button>
            <button
              onClick={() => scrollToSection("clients")}
              className="hover:text-gray-300 transition-colors cursor-pointer text-left"
            >
              Our Clients
            </button>
            <button
              onClick={() => scrollToSection("gallery")}
              className="hover:text-gray-300 transition-colors cursor-pointer text-left"
            >
              Gallery
            </button>
          </div>

          {/* Social Column - Keep as links for external sites */}
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-semibold mb-2 border-b border-white/20 pb-1 cursor-pointer">
              Social
            </h3>
            <a
              href="https://www.youtube.com/@ajayjoshi1992/videos"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition-colors cursor-pointer"
            >
              Youtube
            </a>
            <a
              href="https://x.com/joshieien?s=11"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition-colors cursor-pointer"
            >
              Twitter
            </a>
            <a
              href="https://www.linkedin.com/in/joshi-ajay/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition-colors cursor-pointer"
            >
              Linkedin
            </a>
          </div>

          {/* Connect Column */}
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-semibold mb-2 border-b border-white/20 pb-1 cursor-pointer">
              Connect
            </h3>
            <button
              onClick={() => scrollToSection("contactus")}
              className="hover:text-gray-300 transition-colors cursor-pointer text-left"
            >
              Contact Us
            </button>
          </div>
        </div>

        {/* Logo and Social Icons */}
        <div className="flex flex-col items-center gap-8">
          <div className="p-6 rounded-lg backdrop-blur-sm">
            <img
              className="h-[150px] lg:h-[300px] lg:-mt-[100px] object-contain"
              src={logo}
              alt="Company Logo"
            />
          </div>

          <div className="flex justify-center gap-6">
            <a
              href="https://www.youtube.com/@ajayjoshi1992/videos"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300 transition-colors text-2xl cursor-pointer"
              aria-label="Youtube"
            >
              <FaYoutube />
            </a>
            <a
              href="https://x.com/joshieien?s=11"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300 transition-colors text-2xl cursor-pointer"
              aria-label="Twitter"
            >
              <FaXTwitter />
            </a>
            <a
              href="https://www.linkedin.com/in/joshi-ajay/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300 transition-colors text-2xl cursor-pointer"
              aria-label="LinkedIn"
            >
              <CiLinkedin />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-16 pt-6 border-t border-white/10 text-center text-white/70 text-sm relative z-10">
        <p>© {new Date().getFullYear()} AJC. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
