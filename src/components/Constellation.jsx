import React, { useState } from "react";
import { motion } from "framer-motion";
import ABC from "../assets/pictures/ABC.png";
import BCG from "../assets/pictures/BCG.png";
import DO from "../assets/pictures/DO.png";
import GIC from "../assets/pictures/GIC.png";
import GLG from "../assets/pictures/GLG.png";
import HSBC from "../assets/pictures/HSBC.png";
import Jefferies from "../assets/pictures/Jefferies.png";
import OW from "../assets/pictures/OW.png";
import UPL from "../assets/pictures/UPL.png";
import WOC from "../assets/pictures/WOC.png";
import YCP from "../assets/pictures/YCP.png";

const Constellation = ({ id }) => {
  const [activeNode, setActiveNode] = useState("ABC");

  const nodeData = {
    BCG: {
      title: "BCG",
      description:
        "Partnered on multiple strategy projects, offering deep India-China chemical market insights to support their clients' growth initiatives.",
      buttonText: "View Case Study",
      image: BCG,
    },
    UPL: {
      title: "UPL",
      description:
        "Identified high-margin adjacencies with a focus on scale-ups and backward integration.",
      buttonText: "Learn More",
      image: UPL,
    },
    HSBC: {
      title: "HSBC",
      description:
        "Provided strategic insight on key listed chemical names and emerging players in India, aiding investment decisions through differentiated, on-ground supply chain analysis.",
      buttonText: "More Details",
      image: HSBC,
    },
    DO: {
      title: "Deft Organics",
      description:
        "Helped define product-market fit and customer acquisition strategies for early-stage scale-up in high-growth intermediates in the flavour & fragrance and food & beverage spaces.",
      buttonText: "See Results",
      image: DO,
    },
    Jefferies: {
      title: "Jefferies",
      description:
        "Provided granular input on the Indian chemical sector outlooks, supply disruptions, and company-specific strategy pivots to support institutional equity research and investor calls.",
      buttonText: "Read Report",
      image: Jefferies,
    },
    YCP: {
      title: "YCP Auctus",
      description:
        "Enabled their APAC strategy team with insights into India's specialty chemicals value chain, helping refine investment theses and advise clients on expansion roadmaps.",
      buttonText: "Explore Tech",
      image: YCP,
    },
    GLG: {
      title: "GLG",
      description:
        "Helped GLG's chemical clients in the USA & Europe by providing our expert advisories in the chemicals domain.",
      buttonText: "See Expansion",
      image: GLG,
    },
    OW: {
      title: "Oliver Wyman",
      description:
        "Collaborated on global chemical trend assessments and India cost-competitiveness benchmarking to guide their consulting engagements with institutional clients.",
      buttonText: "See Expansion",
      image: OW,
    },
    GIC: {
      title: "GIC Singapore",
      description:
        "Provided granular input on the Indian chemical sector outlooks, supply disruptions, and company-specific strategy pivots to support institutional equity research and investor calls.",
      buttonText: "See Expansion",
      image: GIC,
    },
    WOC: {
      title: "White Oak Capital",
      description:
        "Provided granular input on the Indian chemical sector outlooks, supply disruptions, and company-specific strategy pivots to support institutional equity research and investor calls.",
      buttonText: "See Expansion",
      image: WOC,
    },
    ABC: {
      title: "Aditya Birla Chemicals",
      description:
        "Advised on the chemicals side foray of their ambitious Birla Pivot project and assessed market entry opportunities in performance materials, enabling informed capital allocation decisions aligned with global trends.",
      buttonText: "See Expansion",
      image: ABC,
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  const nodeVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const lineVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 0.6,
      transition: {
        duration: 1.5,
        ease: "easeInOut",
        delay: 0.5,
      },
    },
  };

  return (
    <div
      id={id}
      className="relative bg-[#00140C] text-white min-h-screen overflow-hidden lg:mt-[250px] mt-[100px]"
    >
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(300)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white border"
            style={{
              width: `${Math.random() * 2 + 0.5}px`,
              height: `${Math.random() * 2 + 0.5}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.6 + 0.2,
            }}
          />
        ))}
      </div>

      <motion.div
        className="relative z-10 min-h-screen flex flex-col items-center px-4 lg:px-0"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div
          className="text-center mt-8 lg:mt-0"
          variants={itemVariants}
        >
          <h1 className="text-3xl font-[Outfit] md:text-5xl lg:text-7xl font-bold mb-4 lg:mb-6 text-white tracking-wide">
            The constellation of trust
          </h1>
          <p className="text-lg font-[Roboto] md:text-2xl max-w-3xl mx-auto leading-relaxed">
            Where Trust aligns, Growth follows
          </p>
        </motion.div>

        {/* Card moved to top right */}
        <motion.div
          className="lg:absolute lg:right-[5%] lg:top-[20%] bg-gradient-to-br from-emerald-800/40 to-emerald-900/40 backdrop-blur-sm rounded-2xl p-6 w-full lg:w-[400px] h-auto border-emerald-500 shadow-2xl border-4 mx-4 lg:mx-0 mb-8 lg:mb-0 mt-10"
          variants={itemVariants}
        >
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 bg-yellow-500 rounded-xl flex items-center justify-center text-sm font-semibold shadow-lg border-2 border-yellow-400 flex-shrink-0">
              <img
                className="text-xs rounded-xl"
                src={nodeData[activeNode]?.image}
                alt={nodeData[activeNode]?.title}
              />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold mb-2 text-white">
                {nodeData[activeNode]?.title}
              </h3>
              <p className="text-sm text-gray-300 mb-4 leading-relaxed">
                {nodeData[activeNode]?.description ||
                  "Our strategic insights led to a forecast reduction in global chemical procurement."}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Constellation centered */}
        <div className="w-full mt-[100px]  lg:-mt-10  mx-auto flex flex-col items-center justify-center ">
          <motion.div
            className="relative w-full mb-8 lg:mb-0 z-30"
            variants={itemVariants}
            style={{ height: "clamp(400px, 50vh, 600px)" }}
          >
            <svg className="absolute inset-0 w-full h-full hidden lg:block">
              <motion.line
                x1="200"
                y1="100"
                x2="380"
                y2="80"
                stroke="#10b981"
                strokeWidth="1.5"
                opacity="0.6"
                variants={lineVariants}
              />
              <motion.line
                x1="380"
                y1="80"
                x2="500"
                y2="160"
                stroke="#10b981"
                strokeWidth="1.5"
                opacity="0.6"
                variants={lineVariants}
              />
              <motion.line
                x1="500"
                y1="160"
                x2="680"
                y2="120"
                stroke="#10b981"
                strokeWidth="1.5"
                opacity="0.6"
                variants={lineVariants}
              />
              <motion.line
                x1="200"
                y1="100"
                x2="120"
                y2="200"
                stroke="#10b981"
                strokeWidth="1.5"
                opacity="0.6"
                variants={lineVariants}
              />
              <motion.line
                x1="120"
                y1="200"
                x2="280"
                y2="280"
                stroke="#10b981"
                strokeWidth="1.5"
                opacity="0.6"
                variants={lineVariants}
              />
              <motion.line
                x1="280"
                y1="280"
                x2="500"
                y2="300"
                stroke="#10b981"
                strokeWidth="1.5"
                opacity="0.6"
                variants={lineVariants}
              />
              <motion.line
                x1="500"
                y1="300"
                x2="720"
                y2="250"
                stroke="#10b981"
                strokeWidth="1.5"
                opacity="0.6"
                variants={lineVariants}
              />
              <motion.line
                x1="380"
                y1="80"
                x2="280"
                y2="280"
                stroke="#10b981"
                strokeWidth="1.5"
                opacity="0.6"
                variants={lineVariants}
              />
              <motion.line
                x1="500"
                y1="160"
                x2="500"
                y2="300"
                stroke="#10b981"
                strokeWidth="1.5"
                opacity="0.6"
                variants={lineVariants}
              />
              <motion.line
                x1="680"
                y1="120"
                x2="720"
                y2="250"
                stroke="#10b981"
                strokeWidth="1.5"
                opacity="0.6"
                variants={lineVariants}
              />
              <motion.line
                x1="280"
                y1="280"
                x2="380"
                y2="400"
                stroke="#10b981"
                strokeWidth="1.5"
                opacity="0.6"
                variants={lineVariants}
              />
              <motion.line
                x1="500"
                y1="300"
                x2="600"
                y2="380"
                stroke="#10b981"
                strokeWidth="1.5"
                opacity="0.6"
                variants={lineVariants}
              />
              <motion.line
                x1="120"
                y1="200"
                x2="200"
                y2="350"
                stroke="#10b981"
                strokeWidth="1.5"
                opacity="0.6"
                variants={lineVariants}
              />
              <motion.line
                x1="380"
                y1="400"
                x2="500"
                y2="300"
                stroke="#10b981"
                strokeWidth="1.5"
                opacity="0.6"
                variants={lineVariants}
              />
            </svg>

            <div className="hidden lg:block">
              <motion.div
                className="absolute w-20 h-20 bg-emerald-600 rounded-full flex items-center justify-center text-sm font-semibold shadow-lg border-4 border-yellow-600 cursor-pointer hover:bg-yellow-500 hover:border-yellow-400 transition-all duration-300"
                style={{ top: "80px", left: "180px" }}
                variants={nodeVariants}
                whileHover={{
                  scale: 1.1,
                  boxShadow: "0 0 30px rgba(234, 179, 8, 0.6)",
                }}
                onMouseEnter={() => setActiveNode("BCG")}
              >
                BCG
              </motion.div>

              <motion.div
                className="absolute w-24 h-24 bg-emerald-600 rounded-full flex items-center justify-center text-base font-semibold shadow-lg border-4 border-yellow-600 cursor-pointer  hover:bg-yellow-400 transition-all duration-300"
                style={{ top: "60px", left: "360px" }}
                variants={nodeVariants}
                whileHover={{
                  scale: 1.1,
                  boxShadow: "0 0 30px rgba(234, 179, 8, 0.8)",
                }}
                onMouseEnter={() => setActiveNode("ABC")}
              >
                ABC
              </motion.div>

              <motion.div
                className="absolute w-20 h-20 bg-emerald-600 rounded-full flex items-center justify-center text-sm font-semibold shadow-lg border-4 border-yellow-600 cursor-pointer  hover:bg-yellow-500 hover:border-yellow-400 transition-all duration-300"
                style={{ top: "100px", left: "660px" }}
                variants={nodeVariants}
                whileHover={{
                  scale: 1.1,
                  boxShadow: "0 0 30px rgba(234, 179, 8, 0.6)",
                }}
                onMouseEnter={() => setActiveNode("DO")}
              >
                DO
              </motion.div>

              <motion.div
                className="absolute w-28 h-28 bg-emerald-600 rounded-full flex items-center justify-center text-lg font-semibold shadow-lg border-4 border-yellow-600 cursor-pointer hover:bg-yellow-400 transition-all duration-300"
                style={{ top: "140px", left: "480px" }}
                variants={nodeVariants}
                whileHover={{
                  scale: 1.1,
                  boxShadow: "0 0 30px rgba(234, 179, 8, 0.8)",
                }}
                onMouseEnter={() => setActiveNode("HSBC")}
              >
                HSBC
              </motion.div>

              <motion.div
                className="absolute w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center text-xs font-semibold shadow-lg border-4 border-emerald-400 cursor-pointer hover:bg-yellow-500 hover:border-yellow-400 transition-all duration-300"
                style={{ top: "180px", left: "100px" }}
                variants={nodeVariants}
                whileHover={{
                  scale: 1.1,
                  boxShadow: "0 0 30px rgba(234, 179, 8, 0.6)",
                }}
                onMouseEnter={() => setActiveNode("UPL")}
              >
                UPL
              </motion.div>

              <motion.div
                className="absolute w-20 h-20 bg-emerald-600 rounded-full flex items-center justify-center text-sm font-semibold shadow-lg border-4 border-emerald-400 cursor-pointer hover:bg-yellow-500 hover:border-yellow-400 transition-all duration-300"
                style={{ top: "260px", left: "260px" }}
                variants={nodeVariants}
                whileHover={{
                  scale: 1.1,
                  boxShadow: "0 0 30px rgba(234, 179, 8, 0.6)",
                }}
                onMouseEnter={() => setActiveNode("OW")}
              >
                OW
              </motion.div>

              <motion.div
                className="absolute w-18 h-18 bg-emerald-600 rounded-full flex items-center justify-center text-xs font-semibold shadow-lg border-4 border-emerald-400 cursor-pointer hover:bg-yellow-500 hover:border-yellow-400 transition-all duration-300"
                style={{ top: "280px", left: "480px" }}
                variants={nodeVariants}
                whileHover={{
                  scale: 1.1,
                  boxShadow: "0 0 30px rgba(234, 179, 8, 0.6)",
                }}
                onMouseEnter={() => setActiveNode("Jefferies")}
              >
                Jefferies
              </motion.div>

              <motion.div
                className="absolute w-18 h-18 bg-emerald-600 rounded-full flex items-center justify-center text-xs font-semibold shadow-lg border-4 border-emerald-400 cursor-pointer hover:bg-yellow-500 hover:border-yellow-400 transition-all duration-300"
                style={{ top: "230px", left: "700px" }}
                variants={nodeVariants}
                whileHover={{
                  scale: 1.1,
                  boxShadow: "0 0 30px rgba(234, 179, 8, 0.6)",
                }}
                onMouseEnter={() => setActiveNode("YCP")}
              >
                YCP
              </motion.div>

              <motion.div
                className="absolute w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center text-xs font-semibold shadow-lg border-4 border-emerald-400 cursor-pointer hover:bg-yellow-500 hover:border-yellow-400 transition-all duration-300"
                style={{ top: "380px", left: "360px" }}
                variants={nodeVariants}
                whileHover={{
                  scale: 1.1,
                  boxShadow: "0 0 30px rgba(234, 179, 8, 0.6)",
                }}
                onMouseEnter={() => setActiveNode("GLG")}
              >
                GLG
              </motion.div>

              <motion.div
                className="absolute w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center text-xs font-semibold shadow-lg border-4 border-emerald-400 cursor-pointer hover:bg-yellow-500 hover:border-yellow-400 transition-all duration-300"
                style={{ top: "360px", left: "580px" }}
                variants={nodeVariants}
                whileHover={{
                  scale: 1.1,
                  boxShadow: "0 0 30px rgba(234, 179, 8, 0.6)",
                }}
                onMouseEnter={() => setActiveNode("GIC")}
              >
                GIC
              </motion.div>

              <motion.div
                className="absolute w-20 h-20 bg-emerald-600 rounded-full flex items-center justify-center text-sm font-semibold shadow-lg border-4 border-emerald-400 cursor-pointer hover:bg-yellow-400 transition-all duration-300"
                style={{ top: "330px", left: "180px" }}
                variants={nodeVariants}
                whileHover={{
                  scale: 1.1,
                  boxShadow: "0 0 30px rgba(234, 179, 8, 0.8)",
                }}
                onMouseEnter={() => setActiveNode("WOC")}
              >
                WOC
              </motion.div>
            </div>

            <div className="lg:hidden flex flex-wrap justify-center gap-4 relative">
              {Object.keys(nodeData).map((nodeKey, index) => (
                <motion.div
                  key={nodeKey}
                  className={`w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center text-xs font-semibold shadow-lg border-4 ${
                    activeNode === nodeKey
                      ? "border-yellow-600"
                      : "border-emerald-400"
                  } cursor-pointer`}
                  variants={nodeVariants}
                  whileHover={{
                    scale: 1.1,
                    boxShadow: "0 0 20px rgba(234, 179, 8, 0.6)",
                  }}
                  animate={{
                    boxShadow:
                      activeNode === nodeKey
                        ? "0 0 20px rgba(234, 179, 8, 0.6)"
                        : "none",
                  }}
                  onClick={() => setActiveNode(nodeKey)}
                >
                  {nodeKey}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Constellation;
