import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const CaseStudies = ({id}) => {
  const [selectedCase, setSelectedCase] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const caseStudies = [
    {
      title: "Unlocking $450K/Month in New Market Revenue",
      caseData: {
        mainTitle: "Unlocking $450K/Month in New Market Revenue",
        subtitle:
          "Strategic Diversification into Personal Care for an Indian Chemicals Manufacturer",
        challenge:
          "An Indian chemical manufacturer sought to diversify into a higher-margin category and expand beyond its traditional markets. The goal: improve profitability by entering premium segments with limited price sensitivity.",
        solution:
          "We identified two high-potential personal care ingredients tailored for the Chinese market, leveraging our deep market intelligence and product benchmarking.",
        results: [
          "$450,000/month in new revenue within 6 months of launch",
          "45% contribution margins on new products",
          "First-ever exports to China from this client",
          "Entry into a high-growth, premium category",
        ],
        impact:
          "AJC enabled the client to break into a new geography, enter a new product category, and significantly boost profitability—all within a tight execution window.",
      },
    },
    {
      title: "Diversification of an Indian AgChem major into specialties",
      caseData: {
        mainTitle: "Diversification of an Indian AgChem major into specialties",
        subtitle:
          "8 High-Growth Chemicals Identified for 'Make-in-India' Expansion",
        challenge:
          " A leading Indian agrochemicals MNC sought to diversify into specialty chemicals, aligning with the Make-in-India initiative and targeting higher-margin, innovation-driven segments",
        solution:
          "We conducted a deep-dive analysis focused on import substitution potential, value chain integration, and demand trends. Based on this, AJC identified and mapped 8 high-growth specialty opportunities across two rapidly expanding sectors:",
        results: [
          "Clear entry roadmap into strategic specialty segments",
          "Leveraged existing infrastructure and synergies for fast execution",
          "Positioned the client to tap into India’s rising domestic demand and reduce import dependency",
        ],
        impact:
          "AJC enabled the client to transition from agrochemicals into future-facing specialty markets, creating a new pillar for long-term, sustainable growth in India.",
      },
    },
    {
      title: "$360K/Month Export Breakthrough in Southeast Asia",
      caseData: {
        mainTitle: "$360K/Month Export Breakthrough in Southeast Asia",
        subtitle: "Market Entry & Scale-Up for Indian Additive Manufacturer",
        challenge:
          "An Indian additive manufacturer aimed to enter the Southeast Asian market but faced challenges around product positioning and customer access in a region dominated by entrenched suppliers.",
        solution:
          "We conducted a supply landscape analysis and identified one strategic product with low competition and high demand. AJC facilitated direct introductions to leading rubber chemical manufacturers in Vietnam, enabling fast-track market access.",
        results: [
          "120 MT/month exported to Vietnam",
          "$360,000/month in new revenue from just 2 customers",
          "Success replicated in Malaysia, opening up another key export market",
          "Established a strong foothold in a strategically vital region",
        ],
        impact:
          " AJC helped the client break into Southeast Asia with speed and precision, leveraging our network and market expertise to drive sustainable export-led growth.",
      },
    },
    {
      title: "Deep Dive into Indian Chemical Contract Manufacturing",
      caseData: {
        mainTitle: "Deep Dive into Indian Chemical Contract Manufacturing",
        subtitle:
          "Advisory for Two of the World’s Leading Sovereign Wealth Funds",
        challenge:
          " Two of the world’s top five sovereign wealth funds—based in Singapore and the UAE—engaged AJC to evaluate India’s chemical contract manufacturing landscape. Their goal: identify high-growth companies with strong fundamentals and strategic scalability.",
        solution:
          " We conducted a comprehensive, bottom-up analysis of the sector, evaluating:Product portfolio differentiation , R&D and technical innovation capabilities , Strategic partnerships and customer stickiness",
        results: [
          "Curated a shortlist of high-potential investment targets",
          "Delivered detailed insights into future growth levers and market readiness",
          "Provided a clear view of competitive positioning and scalability within India's CMO ecosystem",
        ],
        impact:
          "AJC empowered both funds to make informed, strategic investment decisions in one of India’s most promising chemical sub-segments—bridging global capital with local innovation.",
      },
    },
    {
      title: "Driving $400M Capex in Saudi Arabia",
      caseData: {
        mainTitle: "Driving $400M Capex in Saudi Arabia",
        subtitle:
          "Strategic Portfolio Diversification into High-Growth Ethylene Oxide Derivatives",
        challenge:
          "A leading Middle Eastern oil-to-chemicals major aimed to diversify its downstream portfolio in the ethylene oxide (EO) value chain, with a focus on import substitution and long-term global competitiveness.",
        solution:
          "We conducted an end-to-end strategic analysis of the EO downstream chain to identify high-growth, high-demand products that offered: Strong global demand , Minimal exposure to Chinese competition , Long-term margin sustainability",
        results: [
          "Selection of multiple EO derivatives with strong domestic and export potential",
          "Enabled entry into underserved global segments with strategic geopolitical advantages",
          "Led to a $400 million Capex investment in the Kingdom of Saudi Arabia, focused on AJC-recommended products",
        ],
        impact:
          " AJC played a pivotal role in shaping a transformative investment—fueling regional industrialization and positioning the client as a future leader in EO downstream specialties.",
      },
    },
    
  ];

  const openModal = (caseStudy) => {
    setSelectedCase(caseStudy);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "auto";
  };
  return (
    <div
      id={id}
      className="min-h-screen  py-10 px-4 sm:px-5 mt-50"
      // style={{
      //   background: "radial-gradient(circle at center, #012219, #010f0d)",
      // }}
    >
      {/* Title Section */}
      <div className="max-w-6xl mx-auto text-center mb-12 md:mb-16 mt-12 md:mt-20">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-[Outfit] sm:text-5xl md:text-6xl font-bold text-white mb-3 md:mb-4"
        >
          Case studies
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-lg font-[Roboto] md:text-xl text-[#f0fff8]  "
          style={{ textShadow: "0 0 6px rgba(0, 255, 204, 0.3)" }}
        >
          The Vault of Victory
        </motion.p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {caseStudies.map((caseStudy, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-b from-[#012219] to-[#010f0d] rounded-3xl h-[380px] sm:h-[420px] flex flex-col items-center justify-center text-center p-6 text-white relative cursor-pointer"
              style={{
                boxShadow:
                  "0 0 0 3px #013b2d, 0 0 12px #00ffcc, 0 0 25px rgba(0, 255, 204, 0.2)",
              }}
              onClick={() => openModal(caseStudy)}
            >
              <div className="absolute top-4 left-4 right-4 bottom-4 border-2 border-[#00ffcc] rounded-xl opacity-20 shadow-[0_0_12px_#00ffcc]"></div>
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 border-[rgba(0,255,204,0.4)] flex items-center justify-center mb-6 bg-gradient-to-b from-[#012d22] to-[#010f0d] shadow-[0_0_16px_rgba(0,255,204,0.3)]">
                <div className="text-[#00ffcc] text-xl sm:text-2xl opacity-80">
                  ◆
                </div>
              </div>
              <div className="text-xl sm:text-2xl font-semibold text-[#f0fff8] leading-snug tracking-tight shadow-[0_0_6px_rgba(0,255,204,0.3)]">
                {caseStudy.title.split("\n").map((line, i) => (
                  <div key={i}>{line}</div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Responsive Modal */}
      <AnimatePresence>
        {isModalOpen && selectedCase && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 backdrop-blur-sm  bg-opacity-80 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.9, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 50 }}
              className="relative bg-gradient-to-b from-[#012219] to-[#010f0d] rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto mx-4 my-8 sm:my-12 p-4 sm:p-6 md:p-8 text-[#FFD700] border-2 border-gold shadow-[0_0_8px_rgba(255,215,0,0.5)]"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-3 right-3 sm:top-4 sm:right-4 text-xl sm:text-2xl text-[#FFD700] hover:text-[#ffe680] cursor-pointer"
                onClick={closeModal}
              >
                &times;
              </button>

              <div className="text-center mb-6 sm:mb-8 place-self-center">
                <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 text-[#ffdf80] shadow-[0_0_10px_#FFD700] p-2 rounded-xl">
                  {selectedCase.caseData.mainTitle}
                </h1>
                <p className="text-sm sm:text-base text-[#ccc]">
                  {selectedCase.caseData.subtitle}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-6">
                {/* Challenge Box */}
                <div className="bg-gradient-to-t from-[#013728] to-[#011610] border-2 border-gold rounded-xl min-h-[300px] h-full p-4 sm:p-5 shadow-[0_0_5px_rgba(255,215,0,0.3),0_0_15px_rgba(255,215,0,0.4)]">
                  <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">
                    CHALLENGE
                  </h3>
                  <p className="text-sm sm:text-base">
                    {selectedCase.caseData.challenge}
                  </p>
                </div>

                {/* Solution Box */}
                <div className="bg-gradient-to-t from-[#013728] to-[#011610] border-2 border-gold rounded-xl min-h-[300px] h-full p-4 sm:p-5 shadow-[0_0_5px_rgba(255,215,0,0.3),0_0_15px_rgba(255,215,0,0.4)]">
                  <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">
                    AJC'S SOLUTION
                  </h3>
                  <p className="text-sm sm:text-base">
                    {selectedCase.caseData.solution}
                  </p>
                </div>

                {/* Results Box */}
                <div className="bg-gradient-to-t from-[#013728] to-[#011610] border-2 border-gold rounded-xl min-h-[300px] h-full p-4 sm:p-5 shadow-[0_0_5px_rgba(255,215,0,0.3),0_0_15px_rgba(255,215,0,0.4)]">
                  <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">
                    RESULTS
                  </h3>
                  <ul className="list-disc pl-4 sm:pl-5 space-y-1 sm:space-y-2 text-sm sm:text-base">
                    {selectedCase.caseData.results.map((result, i) => (
                      <li key={i}>
                        {result.split(" ").map((word, j) =>
                          word.startsWith("$") || /^\d/.test(word) ? (
                            <span key={j} className="text-[#ffe680] font-bold">
                              {" "}
                              {word}{" "}
                            </span>
                          ) : (
                            word + " "
                          )
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-b from-[#012219] to-[#010f0d] border-2 border-gold rounded-xl p-4 sm:p-5 text-center text-sm sm:text-base md:text-lg shadow-[0_0_8px_rgba(255,215,0,0.5)] text-[#f5f5cc]">
                <strong>IMPACT:</strong>{" "}
                {selectedCase.caseData.impact.split(" ").map((word, i) =>
                  word.startsWith("$") || /^\d/.test(word) ? (
                    <span key={i} className="text-[#ffe680] font-bold">
                      {" "}
                      {word}{" "}
                    </span>
                  ) : (
                    word + " "
                  )
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CaseStudies;
