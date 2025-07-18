import React from "react";
import { motion } from "framer-motion";
import aboutUsImage from "../assets/pictures/aboutUs.png";
import ellipse from "../assets/pictures/ellipseabout.png";
const AboutUs = ({id}) => {
  // Professional animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const fadeInUp = {
    hidden: { y: 40, opacity: 0, scale: 0.98 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.16, 0.77, 0.47, 0.97],
      },
    },
  };

  const fadeInLeft = {
    hidden: { x: -80, opacity: 0, filter: "blur(2px)" },
    visible: {
      x: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        duration: 0.9,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const fadeInRight = {
    hidden: {
      x: 80,
      opacity: 0,
      rotate: 1,
      scale: 0.97,
      filter: "brightness(0.8) contrast(1.2)",
    },
    visible: {
      x: 0,
      opacity: 1,
      rotate: 0,
      scale: 1,
      filter: "brightness(1) contrast(1)",
      transition: {
        duration: 0.9,
        ease: [0.22, 1, 0.36, 1],
        delay: 0.4,
      },
    },
  };

  const imageHover = {
    scale: 1.02,
    filter: "brightness(1.05) contrast(1.05)",
    boxShadow: "0 15px 30px -10px rgba(247, 221, 5, 0.3)",
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 15,
      duration: 0.4,
    },
  };

  const textStagger = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.4,
      },
    },
  };

  const letterAnimation = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  // Split title into words for word-by-word animation
  const title = "About us";
  const words = title.split(" ");

  return (
    <motion.div
      id={id}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={container}
      className="bg-[#00140C] text-white w-full py-20 md:py-32 overflow-hidden"
    >
      <div>
        <img className="absolute top-220 opacity-30 z-10" src={ellipse} />
      </div>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 z-40">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 z-40">
          {/* Text Content - Now fully included */}
          <motion.div
            variants={textStagger}
            className="w-full lg:w-1/2 lg:pr-10"
          >
            <motion.div variants={fadeInUp} className="mb-12">
              <h1 className="text-5xl font-[Outfit] md:text-6xl  z-30 lg:text-[80px] font-bold mb-8 text-center lg:text-left leading-tight">
                {words.map((word, i) => (
                  <motion.span
                    key={i}
                    className="inline-block mr-3"
                    variants={letterAnimation}
                  >
                    {word}
                  </motion.span>
                ))}
              </h1>
            </motion.div>

            <motion.div variants={fadeInLeft}>
              <p className="text-lg font-[Roboto] md:text-xl mb-8 leading-relaxed text-gray-300 z-30">
                Ajay Joshi Chemicals (AJC) is a boutique advisory firm offering
                strategic insights and tailored solutions for the chemical
                industry.
              </p>
            </motion.div>

            <motion.div variants={fadeInLeft}>
              <h2 className="text-2xl font-[Outfit] md:text-3xl font-bold text-[#F7DD05] mt-10 mb-6">
                Founded by Ajay Joshi
              </h2>
            </motion.div>

            <motion.div variants={fadeInLeft}>
              <p className="text-lg md:text-xl font-[Roboto] leading-relaxed text-gray-300">
                One of the leading chemical sector experts globally, AJC
                delivers strategic counsel to chemical manufacturers, new age
                ventures and investment institutions to navigate complexity,
                unlock value, and stay ahead of the curve.
              </p>
            </motion.div>
          </motion.div>

          {/* Enhanced Image Section */}
          <motion.div
            variants={fadeInRight}
            className="w-full md:w-2/3 lg:w-1/2 relative"
            whileHover="hover"
          >
            <motion.div
              className="relative overflow-hidden rounded-lg"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{
                opacity: 1,
                scale: 1,
                transition: {
                  delay: 0.5,
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1],
                },
              }}
            >
              <motion.img
                src={aboutUsImage}
                alt="Ajay Joshi Chemicals team"
                className="w-[500px] rounded-lg"
                whileHover={imageHover}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.7,
                  delay: 0.6,
                  ease: [0.22, 1, 0.36, 1],
                }}
              />
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-[#F7DD05]/10"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 0.3 }}
                transition={{ delay: 0.8, duration: 1 }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutUs;
