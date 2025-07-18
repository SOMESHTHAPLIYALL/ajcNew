import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gallery1 from "../assets/galary1.jpg";
import gallery2 from "../assets/galary2.jpg";
import gallery3 from "../assets/galary3.jpg";
import gallery4 from "../assets/galary4.jpg";
import gallery5 from "../assets/galary5.jpg";
import gallery6 from "../assets/galary6.jpg";
import gallery7 from "../assets/galary7.jpg";
import gallery8 from "../assets/galary8.jpg";
import gallery9 from "../assets/galary9.jpg";
import ellipseg from "../assets/pictures/EllipseG.png";

const Google = ({id}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [displayedQuery, setDisplayedQuery] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState("");
  const placeholderText = "Ajay Joshi Chemicals";
  const typingSpeed = 100;
  const deletingSpeed = 50;
  const pauseDuration = 2000;

  useEffect(() => {
    let timeout;
    let currentIndex = 0;
    let isDeleting = false;

    const typeText = () => {
      const currentText = isDeleting
        ? placeholderText.substring(0, currentIndex - 1)
        : placeholderText.substring(0, currentIndex + 1);

      setDisplayedQuery(currentText);
      currentIndex = isDeleting ? currentIndex - 1 : currentIndex + 1;

      if (!isDeleting && currentIndex === placeholderText.length) {
        timeout = setTimeout(() => {
          isDeleting = true;
          typeText();
        }, pauseDuration);
        return;
      }

      if (isDeleting && currentIndex === 0) {
        isDeleting = false;
        timeout = setTimeout(typeText, pauseDuration);
        return;
      }

      const speed = isDeleting ? deletingSpeed : typingSpeed;
      timeout = setTimeout(typeText, speed);
    };

    typeText();

    return () => clearTimeout(timeout);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Search submitted:", searchQuery);
  };

  const openVideoModal = (videoUrl) => {
    setCurrentVideo(videoUrl);
    setModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setCurrentVideo("");
    setModalOpen(false);
    document.body.style.overflow = "auto";
  };

  const videoData = [
    {
      title: "INDUSTRIES LEADING STRATEGY FOR CHANGE",
      thumbnail: gallery1,
      url: "https://www.youtube.com/embed/KnmnH90e2ss?si=ZPPFY7-_dgtcqW8e",
      duration: "4:32",
      size: "large",
    },
    {
      title: "MILL CHEMICAL INDUSTRY MILESTONE IN 12 DAYS",
      thumbnail: gallery2,
      url: "https://www.youtube.com/embed/Blsvkxqj6lE?si=B2h8ztYpfZYxeN72",
      duration: "6:45",
      size: "medium",
    },
    {
      title: "आयनकारी से कैसे बनाएं अपना बड़ा बिजनेस",
      thumbnail: gallery3,
      url: "https://www.youtube.com/embed/XQq4uFyTaCA?si=CnqoTWaAh70a_j_J",
      duration: "8:12",
      size: "small",
    },
    {
      title: "CHEMICAL SECTOR OUTLOOK FOR NOV 2024",
      thumbnail: gallery4,
      url: "https://www.youtube.com/embed/zvoyOBqFlpU?si=BW95EPjGxvAKA2_Y",
      duration: "12:30",
      size: "medium",
    },
    {
      title: "उत्पादन ऑटो पे रोजगार आयुक्त कैसे बने",
      thumbnail: gallery5,
      url: "https://www.youtube.com/embed/7-stcdWHzt0?si=sMthvpHdyrk4cf3S",
      duration: "5:18",
      size: "medium",
    },
    {
  title: "Battery Chemical's 15%",
  thumbnail: gallery6,
  url: "https://m.economictimes.com/markets/expert-view/more-anti-dumping-duties-to-support-local-indian-chemical-companies-ajay-joshi/amp_articleshow/112801519.cms",
  duration: "3:45",
  size: "small",
  type: "article" // Add this field to distinguish
},
{
  title: "World Map Chemical Industry",
  thumbnail: gallery7,
  url: "https://sputniknews.in/amp/20250325/trumps-main-target-is-china-not-india-industry-sources-8898675.html",
  duration: "7:23",
  size: "small",
  type: "article" // Add this field to distinguish
},
{
  title: "Portrait Video",
  thumbnail: gallery8,
  url: "https://www.outlookbusiness.com/amp/story/markets/speciality-chemical-stocks-rally-srf-navin-fluorine-jump-up-to-14-heres-why",
  duration: "7:23",
  size: "small",
  type: "article" // Add this field to distinguish
},
    {
      title: "Chemical Lab Testing",
      thumbnail: gallery9,
      url: "https://www.youtube.com/embed/6_GWlK9tyAQ?si=WnROEfmfZiXG1cYe",
      duration: "9:15",
      size: "medium",
    },
  ];

  return (
    <div
      id={id}
      className="flex flex-col items-center justify-center py-10 lg:py-0 px-4 bg-[#00140C] min-h-screen"
    >
      <div className="w-full max-w-6xl">
        {/* Google Logo */}
        <motion.div
          className="text-white text-center mb-6 lg:mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl  sm:text-5xl md:text-6xl lg:text-7xl font-medium font-sans">
            <span className="text-white font-[Outfit]">G</span>
            <span className="text-white font-[Outfit]">o</span>
            <span className="text-white font-[Outfit]">o</span>
            <span className="text-white font-[Outfit]">g</span>
            <span className="text-white font-[Outfit]">l</span>
            <span className="text-white font-[Outfit]">e</span>
          </h1>
        </motion.div>

        {/* Search Form */}
        <form onSubmit={handleSearch} className="w-full max-w-2xl mx-auto mb-8">
          <motion.div
            className="flex items-center w-full border border-gray-700 rounded-full px-4 lg:px-5 py-2 lg:py-3 bg-white transition-all duration-200"
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
          >
            {/* Search Icon */}
            <svg
              className="w-4 lg:w-5 h-4 lg:h-5 text-gray-400 mr-2 lg:mr-3"
              focusable="false"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
              />
            </svg>

            {/* Search Input */}
            <input
              type="text"
              className="flex-grow bg-transparent text-black outline-none text-sm lg:text-base"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={displayedQuery}
            />

            {/* Right Icons */}
            <div className="flex space-x-2 lg:space-x-3 ml-2 lg:ml-3">
              {/* Microphone */}
              <motion.div
                className="w-4 lg:w-5 h-4 lg:h-5 cursor-pointer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="#4285f4"
                    d="m12 15c1.66 0 3-1.31 3-2.97v-7.02c0-1.66-1.34-3.01-3-3.01s-3 1.34-3 3.01v7.02c0 1.66 1.34 2.97 3 2.97z"
                  ></path>
                  <path fill="#34a853" d="m11 18.08h2v3.92h-2z"></path>
                  <path
                    fill="#fbbc05"
                    d="m7.05 16.87c-1.27-1.33-2.05-2.83-2.05-4.87h2c0 1.45 0.56 2.42 1.47 3.38v0.32l-1.15 1.18z"
                  ></path>
                  <path
                    fill="#ea4335"
                    d="m12 16.93a7.07 7.07 0 0 1 -6.95-6.93h-2c0 4.97 4.02 8.99 9 8.99s9-4.02 9-8.99h-2c0 3.61-2.9 6.57-6.5 6.93v-1.43h2.5l-3.5-3.5-3.5 3.5h2.5v1.43z"
                  ></path>
                </svg>
              </motion.div>

              {/* Google Lens */}
              <motion.div
                className="w-4 lg:w-5 h-4 lg:h-5 cursor-pointer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <svg viewBox="0 0 192 192" xmlns="http://www.w3.org/2000/svg">
                  <rect fill="none" height="192" width="192"></rect>
                  <g>
                    <circle fill="#4285f4" cx="144.07" cy="144" r="16"></circle>
                    <circle fill="#ea4335" cx="96.07" cy="104" r="24"></circle>
                    <path
                      fill="#4285f4"
                      d="M24,135.2c0,18.11,14.69,32.8,32.8,32.8H96v-16l-40.1-0.1c-8.8,0-15.9-8.19-15.9-17.9v-18H24V135.2z"
                    ></path>
                    <path
                      fill="#fbbc05"
                      d="M168,72.8c0-18.11-14.69-32.8-32.8-32.8H116l20,16c8.8,0,16,8.29,16,18v30h16V72.8z"
                    ></path>
                    <path
                      fill="#34a853"
                      d="M112,24l-32,0L68,40H56.8C38.69,40,24,54.69,24,72.8V92h16V74c0-9.71,7.2-18,16-18h80L112,24z"
                    ></path>
                  </g>
                </svg>
              </motion.div>
            </div>
          </motion.div>
        </form>
        <div className="flex justify-center">
          <img src={ellipseg} className="absolute h-150 w-285 blur-[150px]" />
        </div>

        {/* Gallery Section */}
        <div className="mt-20">
          <motion.h1
            className="text-4xl font-[Outfit] md:text-7xl font-bold text-white mb-8 text-center tracking-tight"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Gallery
          </motion.h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
            {videoData.map((item, index) => (
              <motion.div
                key={index}
                className={`
      relative bg-gradient-to-b from-[#0e2f26] to-[#052018] rounded-2xl overflow-hidden
      ${item.size === "large" ? "sm:col-span-2" : ""}
      ${item.size === "tall" ? "h-60" : "h-40"}
      flex items-end justify-start p-4 cursor-pointer
    `}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ scale: 1.03 }}
                onClick={() => {
                  if (item.type === "article") {
                    window.open(item.url, "_blank");
                  } else {
                    openVideoModal(item.url);
                  }
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50"></div>
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">
                  {item.duration}
                </div>
                <div className="absolute top-2 left-2">
                  {item.type === "article" ? (
                    <svg
                      className="w-6 h-6 text-blue-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="w-6 h-6 text-red-600"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                  )}
                </div>
                <h3 className="relative z-10 text-white text-sm font-semibold">
                  {item.title}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Video Modal */}
        <AnimatePresence>
          {modalOpen && (
            <motion.div
              className="fixed inset-0 z-50 backdrop-blur-sm bg-opacity-80 flex items-center justify-center p-5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
            >
              <motion.div
                className="w-full max-w-4xl bg-black rounded-xl overflow-hidden relative"
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  className="absolute top-2 right-4 text-white text-3xl z-10 hover:text-gray-300"
                  onClick={closeModal}
                >
                  &times;
                </button>
                <div className="aspect-video w-full">
                  <iframe
                    src={`${currentVideo.replace(
                      "watch?v=",
                      "embed/"
                    )}?autoplay=1`}
                    className="w-full h-full"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Google;
