import React from "react";
import { motion } from "framer-motion";
import first from "../assets/pictures/first.png";
import second from "../assets/pictures/second.png";
import third from "../assets/pictures/third.png";
import fourth from "../assets/pictures/fourth.jpg";

const Growth = ({id}) => {
  // Storytelling animation sequence (unchanged)
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
        delayChildren: 0.3,
      },
    },
  };

  const storyItem = {
    hidden: {
      opacity: 0,
      x: -50,
      rotate: -5,
    },
    visible: {
      opacity: 1,
      x: 0,
      rotate: 0,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 100,
        duration: 0.8,
      },
    },
    hover: {
      scale: 1.02,
      zIndex: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  const title = {
    hidden: {
      y: -20,
      opacity: 0,
      scale: 0.95,
    },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  // Story steps with captions
  const storySteps = [
    {
      src: first,
      alt: "First growth step",
      caption: "The Beginning: Laying the foundation",
    },
    {
      src: second,
      alt: "Second growth step",
      caption: "First Breakthrough: Achieving product-market fit",
    },
    {
      src: third,
      alt: "Third growth step",
      caption: "Scaling Up: Expanding our operations",
    },
    {
      src: fourth,
      alt: "Fourth growth step",
      caption: "Market Leadership: Becoming an industry leader",
    },
  ];

  return (
    <motion.div
    id={id}
      className="bg-[#00140C] text-white py-12 md:py-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
      
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={container}
    >
      <div className="max-w-7xl mx-auto">
        <motion.h1
          className="text-3xl md:text-4xl lg:text-5xl xl:text-[50px] text-center font-bold mb-10 md:mb-14 lg:mb-16"
          variants={title}
        >
          How I Grew The Company
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 xl:gap-10 justify-items-center">
          {storySteps.map((step, index) => (
            <motion.div
              key={index}
              variants={storyItem}
              whileHover="hover"
              className="relative overflow-hidden rounded-lg bg-gray-900 shadow-xl"
              style={{
                height: "500px",
                width: "100%",
                maxWidth: "400px",
              }}
              custom={index}
            >
              <img
                src={step.src}
                alt={step.alt}
                className="object-cover w-full h-full"
              />

              {/* Story caption overlay */}
              <motion.div
                className="absolute bottom-0 left-0 right-0 p-4 md:p-6 bg-gradient-to-t from-black/90 to-transparent"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.3, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <p className="text-white text-base md:text-lg font-medium">
                  {step.caption}
                </p>
                <motion.div
                  className="h-1 bg-white mt-2"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ delay: 0.7 + index * 0.3, duration: 0.8 }}
                  viewport={{ once: true }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Growth;
