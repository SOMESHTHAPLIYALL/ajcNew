import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import eye from "../assets/pictures/eye.png";
import bulb from "../assets/pictures/bulb.png";
import trust from "../assets/pictures/trust.png";
import global from "../assets/pictures/global.png";
import sustain from "../assets/pictures/sustain.png";
import leader from "../assets/pictures/leader.png";
import ellipse from "../assets/pictures/ellipsevision.png";

const Vision = ({id}) => {
  const controls = useAnimation();

  // Blinking animation sequence
  useEffect(() => {
    const blink = async () => {
      while (true) {
        await controls.start({
          scaleY: 0.1,
          transition: { duration: 0.1, ease: "easeIn" },
        });
        await new Promise((resolve) => setTimeout(resolve, 100));
        await controls.start({
          scaleY: 1,
          transition: { duration: 0.2, ease: "easeOut" },
        });
        await new Promise((resolve) =>
          setTimeout(resolve, 1000 + Math.random() * 1000)
        );
      }
    };

    blink();
  }, [controls]);

  // Animation variants (unchanged)
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

  const titleItem = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  const visionItem = {
    hidden: {
      x: -100,
      opacity: 0,
      rotate: -5,
    },
    visible: {
      x: 0,
      opacity: 1,
      rotate: 0,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 100,
        duration: 0.8,
      },
    },
    hover: {
      y: -10,
      scale: 1.05,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  const visionPillars = [
    { icon: bulb, text: "Innovation with Impact" },
    { icon: trust, text: "Trust & Reliability" },
    { icon: global, text: "Profitable Transformation" },
    { icon: sustain, text: "Sustainability Focus" },
    { icon: leader, text: "Leadership in Specialties" },
  ];

  return (
    <motion.div
      id={id}
      className="bg-[#00140C] text-white py-16 md:py-20 px-4 sm:px-8 lg:px-16 overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={container}
    >
      <div className="max-w-7xl mx-auto flex flex-col justify-center items-center">
        {/* Eye Image with Blinking Animation */}
        <motion.div
          className="relative z-10 mb-6"
          animate={controls}
          initial={{ scaleY: 1 }}
        >
          <img
            className="h-[150px] sm:h-[180px] md:h-[220px] lg:h-[200px]"
            src={eye}
            alt="Vision"
            variants={titleItem}
          />
        </motion.div>

        <img src={ellipse} className="absolute h-120 z-0 -translate-y-55" />

        {/* Main Title */}
        <motion.h1
  className="z-10 text-3xl sm:text-4xl md:text-5xl lg:text-[60px] font-bold text-center mb-3 md:mb-4 font-[Outfit]"
  variants={titleItem}
>
  Vision
</motion.h1>

        {/* Subtitle */}
        <motion.p
          className="z-10 font-[Roboto] text-base sm:text-lg md:text-xl lg:text-[20px] text-center max-w-2xl mb-8 md:mb-12 lg:mb-20 px-4"
          variants={titleItem}
        >
          Guiding Light that inspires Innovation and fuels Transformation
        </motion.p>

        {/* Vision Pillars - Desktop View */}
        <motion.div
          className="hidden md:flex justify-center items-center gap-6 lg:gap-[100px] mt-8 "
          variants={container}
        >
          {visionPillars.map((pillar, index) => (
            <motion.div
              key={index}
              className="flex flex-col justify-center items-center"
              variants={visionItem}
              whileHover="hover"
              whileTap="hover"
              custom={index}
              
            >
              <img
                className="h-[100px] sm:h-[120px] lg:h-[140px] xl:h-[160px] mb-3 lg:mb-4 object-contain"
                src={pillar.icon}
                alt={pillar.text}
              />
              <p className="text-xs font-[Roboto] sm:text-sm lg:text-base text-center font-medium">
                {pillar.text}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Vision Pillars - Mobile View */}
        <motion.div
          className="md:hidden grid grid-cols-2 gap-6 sm:gap-8 mt-8 w-full"
          variants={container}
        >
          {visionPillars.map((pillar, index) => (
            <motion.div
              key={index}
              className={`flex flex-col justify-center items-center ${
                index === 4 ? "col-span-2" : ""
              }`}
              variants={visionItem}
              whileHover="hover"
              custom={index}
            >
              <img
                className="h-[80px] sm:h-[100px] mb-2 sm:mb-3 object-contain"
                src={pillar.icon}
                alt={pillar.text}
              />
              <p className="text-xs sm:text-sm text-center font-medium">
                {pillar.text}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Vision;