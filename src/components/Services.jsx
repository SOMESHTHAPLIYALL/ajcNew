import React from "react";
import { motion } from "framer-motion";
import Growth from "../assets/pictures/growth.png";
import market from "../assets/pictures/market.png";
import buisness from "../assets/pictures/buisness.png";
import ellipse from "../assets/pictures/ellipseservices.png";

const Services = ({ id }) => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
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
    <div
      id={id}
      className="min-h-screen  py-12 px-4 sm:px-6 lg:px-8 text-white relative overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.1),transparent_70%)]"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <svg className="w-full h-full" viewBox="0 0 1000 1000">
            <defs>
              <pattern
                id="grid"
                width="50"
                height="50"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 50 0 L 0 0 0 50"
                  fill="none"
                  stroke="rgba(6,182,212,0.1)"
                  strokeWidth="1"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-16"
        >
          <div className="text-center">
            <div className="text-4xl md:text-6xl font-bold mb-2 font-[Outfit]">
              Services
            </div>
            <h1 className="mt-4 text-lg font-[Roboto]">
              The Chambers of Growth
            </h1>
          </div>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 justify-items-center"
        >
          {/* Growth Strategy */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col items-center text-center space-y-6"
          >
            <h2 className="text-2xl font-[Outfit] md:text-3xl font-bold text-white">
              Growth Strategy
            </h2>
            <p className="text-gray-300 font-[Roboto] text-sm md:text-base">
              Innovate faster;
              <br />
              Diversify smarter
            </p>

            {/* Glass Container with Plant */}
            <div className="relative w-48 h-64 md:w-56 md:h-72 mb-8">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative w-full h-full"
              >
                <img src={Growth} />
              </motion.div>
            </div>

            <div className="text-gray-300 font-[Roboto] text-xs md:text-sm leading-relaxed max-w-sm text-justify">
              At AJC, we help chemical companies discover high-growth
              opportunities and bring winning products to market. Whether you're
              an established player looking to expand or a new entrant seeking a
              strong start, our expert advisory services give you the strategic
              edge. We go beyond basic analysis—our team delivers deep market
              intelligence, trend forecasting, and actionable insights that
              reveal where the market is headed and how you can lead it. From
              identifying next-gen product categories to optimizing your
              innovation strategy, we turn complexity into clarity.{" "}
              <span
                onClick={() => scrollToSection("contactus")}
                className="text-[#F7DD05] cursor-pointer"
              >
                Partner with AJC{" "}
              </span>{" "}
              and turn market shifts into growth breakthroughs.
            </div>
          </motion.div>

          {/* Sales & Marketing */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col items-center text-center space-y-6"
          >
            <h2 className="text-2xl font-[Outfit] md:text-3xl font-bold text-white">
              Market Research
            </h2>
            <p className="text-gray-300 font-[Roboto] text-sm md:text-base">
              Turning molecules
              <br />
              into market moves
            </p>

            {/* Holographic Display */}
            <div className="relative w-48 h-64 md:w-56 md:h-72 mb-8">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative w-full h-full"
              >
                {/* Base platform */}
                <img className=" h-[260px] mt-7" src={market} />
              </motion.div>
            </div>

            <div className="text-gray-300 font-[Roboto] text-xs md:text-sm leading-relaxed max-w-sm text-justify">
              At AJC, we offer customized sales consulting that connects you
              with the right customers—faster. Backed by deep market
              intelligence and a vast industry network, we identify high-value
              prospects and help you break into new markets with confidence. We
              don’t just open doors—we craft tailored sales strategies that
              drive conversions and long-term growth. From strategic
              introductions to targeted go-to-market plans, our approach is
              built to boost your revenue and expand your customer base.{" "}
              <span
                onClick={() => scrollToSection("contactus")}
                className="text-[#F7DD05] cursor-pointer"
              >
                Partner with AJC{" "}
              </span>{" "}
              and grow your business profitably.
            </div>
          </motion.div>

          {/* Business Services */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col items-center text-center space-y-6"
          >
            <h2 className="text-2xl font-[Outfit] md:text-3xl font-bold text-white">
              Business Services
            </h2>
            <p className="text-gray-300 font-[Roboto] text-sm md:text-base">
              Decoding chemicals;
              <br />
              Delivering growth
            </p>

            {/* Data Server */}
            <div className="relative w-48 h-64 md:w-56 md:h-72 mb-8">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative w-full h-full"
              >
                {/* Server tower */}
                <img src={buisness} />
              </motion.div>
            </div>

            <div className="text-gray-300 font-[Roboto] text-xs md:text-sm leading-relaxed max-w-sm text-justify">
              At AJC, we specialize in deep-dive mapping of chemical companies
              for private equity firms, sovereign funds, and mutual funds. Our
              team delivers comprehensive market evaluations and competitive
              benchmarking to uncover hidden growth opportunities and emerging
              value creators. From granular company profiling to sector-wide
              insights, we equip investors with data-driven intelligence and
              strategic clarity—enabling smarter decisions and stronger
              portfolios.{" "}
              <span
                onClick={() => scrollToSection("contactus")}
                className="text-[#F7DD05] cursor-pointer"
              >
                Partner with AJC{" "}
              </span>{" "}
              and navigate the complexity of the chemicals industry.
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Services;
