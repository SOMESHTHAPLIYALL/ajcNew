import React from "react";
import { motion } from "framer-motion";
import heroSection from "../assets/pictures/heroSection.png";
import ellipse from "../assets/pictures/ellipsehero.png"
import "@fontsource/outfit/400.css"; // Regular
import "@fontsource/outfit/500.css"; // Medium
import "@fontsource/outfit/700.css"; // Bold

import "@fontsource/roboto/400.css"; // Regular
import "@fontsource/roboto/500.css"; // Medium
import "@fontsource/roboto/700.css";
const Hero = () => {
  // Enhanced animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4,
        delayChildren: 0.3,
      },
    },
  };

  const itemLeft = {
    hidden: { x: -100, opacity: 0, scale: 0.95 },
    visible: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 12,
        mass: 0.5,
      },
    },
  };

  const itemRight = {
    hidden: { x: 100, opacity: 0, scale: 0.95 },
    visible: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 12,
        mass: 0.5,
      },
    },
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  const buttonHover = {
    scale: 1.05,
    boxShadow: "0 10px 25px -5px rgba(150, 247, 234, 0.4)",
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  };

  const buttonTap = {
    scale: 0.95,
  };

  const imageHover = {
    scale: 1.03,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 10,
    },
  };

    const scrollToServices = () => {
      const servicesSection = document.getElementById("services");
      if (servicesSection) {
        servicesSection.scrollIntoView({ behavior: "smooth" });
      }
    };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={container}
      id="home"
      className="flex justify-center items-center p-4 bg-[#00140C] min-h-screen w-full text-white overflow-hidden"
    >
      <div className="flex flex-col lg:flex-row justify-between items-center w-full  mx-auto  ">
        {/* Image - Now on the left side */}
        <motion.div
          variants={itemLeft}
          className="flex justify-center items-center mb-8 lg:mb-0 relative order-first"
        >
          <motion.img
            src={heroSection}
            loading="lazy"
            decoding="async"
            className="lg:h-[900px] w-[1000px] max-h-[500px] "
            alt="Hero section visual"
            whileHover={imageHover}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 0.5,
              duration: 0.8,
              ease: [0.6, -0.05, 0.01, 0.99],
            }}
          />
          {/* Decorative elements */}
          <motion.div
            className="absolute -z-10 w-[120%] h-[120%] bg-[#96f7ea]/10 rounded-full blur-3xl"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.3 }}
            transition={{ delay: 0.8, duration: 1.5 }}
          />
        </motion.div>

        {/* Text content - Now on the right side */}
        <motion.div
          variants={container}
          className="lg:w-1/2 flex justify-center items-start flex-col px-4 lg:pl-12 z-10"
        >
          <motion.h1
            variants={itemRight}
            className="text-4xl font-[Outfit] sm:text-5xl lg:text-[72px] font-bold leading-tight mb-4 lg:mb-6 font-outfit"
          >
            Insights that Ignite <span className="text-[#2DCCA1]">Growth</span>
          </motion.h1>

          <motion.p
            variants={itemRight}
            className="text-lg font-[Roboto] sm:text-xl lg:text-[26px] mb-6 lg:mb-8 text-gray-300 leading-relaxed font-roboto"
          >
            Our expert advisory delivers strategic chemical insights for
            profitable outcomes.
          </motion.p>

          <motion.div variants={fadeIn} className="w-full lg:w-auto">
            <motion.button
              whileHover={buttonHover}
              whileTap={buttonTap}
              onClick={scrollToServices} // Added onClick handler
              className="bg-gradient-to-r cursor-pointer from-[#96f7ea] to-[#efdddd] px-8 py-4 lg:px-12 lg:py-4 rounded-xl mt-4 lg:mt-6 text-gray-800 font-semibold text-sm lg:text-lg w-full lg:w-auto"
            >
              Explore Our Services
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* <div>
            <img className="absolute right-0 top-60 z-0" src={ellipse}/>
          </div> */}

      {/* Background pattern or gradient */}
      <motion.div
        className="absolute inset-0 -z-10 opacity-20"
        style={{
          backgroundImage: "radial-gradient(#96f7ea 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ delay: 1, duration: 1 }}
      />
    </motion.div>
  );
};

export default Hero;
