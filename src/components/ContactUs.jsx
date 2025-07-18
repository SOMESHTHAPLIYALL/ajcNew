import React, { useState } from "react";
import contact from "../assets/pictures/contact.png";
import { motion } from "framer-motion";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { ClipLoader } from "react-spinners";

const ContactUs = ({ id }) => {
  const [formData, setFormData] = useState({
    phone: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    // Basic validation
    if (!formData.phone || !formData.email || !formData.message) {
      toast.error("Please fill in all fields");
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    setIsLoading(true);
    try {
      const response = await axios.post(
        "https://ajc-backend.onrender.com/api/contact",
        formData
      );
      toast.success("Message sent successfully!");
      // Reset form after successful submission
      setFormData({
        phone: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error("Error sending message:", error);
      toast.error(
        error.response?.data?.message ||
          "Failed to send message. Please try again."
      );
    } finally {
      setIsLoading(false);
    }
  };

  const buttonAnimations = {
    hover: {
      opacity: 0.8,
      scale: 1.02,
      transition: { duration: 0.2 },
    },
    tap: {
      scale: 0.98,
      backgroundColor: "#0F3A1D",
      transition: { duration: 0.1 },
    },
  };

  return (
    <div
      id={id}
      className="bg-[#00140C] flex flex-col lg:flex-row justify-center lg:ml-30 items-center overflow-x-hidden gap-10 text-white py-10 lg:py-0"
    >
      <div className="flex flex-col justify-center items-center z-50 lg:-mr-100 px-4 lg:px-0">
        <h1 className="font-bold font-[Outfit] text-[40px] sm:text-[60px] lg:text-[70px]">
          Contact us
        </h1>
        <h1 className="font-semibold font-[Roboto] text-center text-[20px] sm:text-[25px] lg:text-[20px]">
          We'd love to hear from you!
        </h1>
        <input
          name="phone"
          type="text"
          value={formData.phone}
          onChange={handleChange}
          className="bg-[#D7AF67] p-4 rounded-xl w-full sm:w-[350px] lg:w-[400px] h-[50px] sm:h-[60px] mt-5 outline-none font-bold text-xl sm:text-2xl cursor-text"
          placeholder="Phone Number"
        />

        <input
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          className="bg-[#D7AF67] p-4 rounded-xl w-full sm:w-[350px] lg:w-[400px] h-[50px] sm:h-[60px] mt-5 outline-none font-bold text-xl sm:text-2xl cursor-text"
          placeholder="Email Address"
        />

        <input
          name="message"
          type="text"
          value={formData.message}
          onChange={handleChange}
          className="bg-[#D7AF67] p-4 rounded-xl w-full sm:w-[350px] lg:w-[400px] h-[80px] lg:h-[100px] mt-5 outline-none font-bold text-xl sm:text-2xl cursor-text"
          placeholder="Message"
        />
        <motion.button
          className="bg-[#1A4824] h-[50px] sm:h-[60px] mt-5 w-full sm:w-[350px] lg:w-[400px] rounded-xl font-semibold text-xl sm:text-2xl lg:text-3xl flex justify-center items-center z-10 cursor-pointer"
          variants={buttonAnimations}
          whileHover="hover"
          whileTap="tap"
          onClick={handleSubmit}
          disabled={isLoading}
        >
          {isLoading ? <ClipLoader color="#ffffff" size={25} /> : "Submit"}
        </motion.button>
        <span className="mt-5 text-sm lg:text-base">
          We'll get back to you as soon as we can.
        </span>
        <span className="mt-1 text-sm lg:text-base">
          Thank you for reaching out!
        </span>
      </div>
      <img
        className="w-[90%] sm:w-[80%] lg:w-[1000px] lg:h-[750px] lg:-mr-40 max-w-[800px] lg:max-w-none hidden lg:block"
        src={contact}
        alt="Contact illustration"
      />
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default ContactUs;
