import React, { useState } from "react";
import ellipse from "../assets/pictures/ellipsenews.png";
import { motion } from "framer-motion";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { ClipLoader } from "react-spinners";

const NewsLetter = ({ id }) => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const buttonVariants = {
    hover: {
      backgroundColor: "#7ecabe",
      boxShadow: "0 0 15px rgba(13, 141, 121, 0.5)",
      transition: { duration: 0.3 },
    },
    tap: {
      scale: 0.95,
      backgroundColor: "#0D8D79",
      boxShadow: "0 0 5px rgba(13, 141, 121, 0.3)",
      transition: { duration: 0.1 },
    },
    pulse: {
      scale: [1, 1.05, 1],
      boxShadow: [
        "0 0 5px rgba(255,255,255,0.3)",
        "0 0 15px rgba(255,255,255,0.6)",
        "0 0 5px rgba(255,255,255,0.3)",
      ],
      transition: { duration: 0.5 },
    },
  };

  // Email validation function
  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async () => {
    if (!isValidEmail(email)) return; // Additional safeguard

    setIsLoading(true);
    try {
      const response = await axios.post(
        "https://ajc-backend.onrender.com/api/newsletter",
        { email }
      );
      toast.success("Subscription mail sent successfully!");
      setEmail(""); // Clear the input after successful submission
    } catch (error) {
      console.error("Error subscribing:", error);
      toast.error(
        error.response?.data?.error || "Failed to subscribe. Please try again."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      id={id}
      className="bg-[#00140C] z-40 mt-40 flex justify-center mb-20 items-center py-10 lg:py-0 relative "
    >
      {/* Background Ellipse - Large and Blurred */}
      <div className="absolute inset-0 flex justify-center items-center z-0">
        <img
          className="w-[60%] blur-[35px]"
          src={ellipse}
          alt="Background ellipse"
        />
      </div>

      <div
        className="border-[5px] z-50 relative rounded-[20px] lg:rounded-[100px] border-[#0D8D79] h-[300px] lg:h-[421px] w-[90%] sm:w-[80%] md:w-[700px] lg:w-[1000px] flex flex-col overflow-hidden"
        style={{
          boxShadow: "0 0 15px rgba(13, 141, 121, 0.7)",
          backdropFilter: "blur(2px)",
        }}
      >
        {/* Glow effect elements */}
        <div className="absolute inset-0 rounded-[20px] lg:rounded-[100px] pointer-events-none">
          <div className="absolute -inset-1 bg-[#0D8D79] blur-lg opacity-20 rounded-[20px] lg:rounded-[100px]"></div>
          <div className="absolute -inset-0.5 bg-[#0D8D79] blur-sm opacity-30 rounded-[20px] lg:rounded-[100px]"></div>
        </div>

        <h1 className="text-white font-[Outfit] text-center font-bold text-2xl sm:text-3xl lg:text-4xl mt-8 px-4 z-10">
          Subscribe to our newsletter
        </h1>
        <div className="flex justify-center items-center h-full flex-col lg:flex-row px-4 lg:px-0 gap-4 lg:gap-0 z-10">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="text-white outline-none border-[2px] rounded-[100px] border-[#0D8D79] p-3 lg:p-4 w-full lg:w-[400px] bg-transparent placeholder-gray-300 focus:ring-2 focus:ring-[#0D8D79]"
          />
          <motion.button
            className={`cursor-pointer rounded-3xl md:rounded-tl-none md:rounded-bl-none md:rounded-tr-3xl md:rounded-br-3xl ${
              isValidEmail(email) ? "bg-[#13C7AF]" : "bg-gray-500"
            } h-[50px] lg:h-[60px] w-[120px] lg:w-[150px] -ml-0 lg:-ml-8 text-white font-bold flex justify-center items-center`}
            style={{ textShadow: "0 0 5px rgba(255,255,255,0.3)" }}
            variants={buttonVariants}
            whileHover={!isLoading && isValidEmail(email) ? "hover" : {}}
            whileTap={!isLoading && isValidEmail(email) ? "tap" : {}}
            animate={isValidEmail(email) ? "pulse" : {}}
            onClick={handleSubmit}
            disabled={isLoading || !isValidEmail(email)}
          >
            {isLoading ? <ClipLoader color="#ffffff" size={20} /> : "Subscribe"}
          </motion.button>
        </div>
      </div>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default NewsLetter;
