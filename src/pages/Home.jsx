import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import AboutUs from "../components/AboutUs";
import Services from "../components/Services";
import Power from "../components/Power";
import Constellation from "../components/Constellation";
import Growth from "../components/Growth";
import Vision from "../components/Vision";
import Google from "../components/Google";
import NewsLetter from "../components/NewsLetter";
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";
import CaseStudies from "../components/CaseStudies";

const Home = () => {
  return (
    <div className="bg-[#00140C] overflow-x-hidden">
      <Header />
      <Hero id="home" />
      <AboutUs id="about" />
      <Vision id="vision" />
      <Services id="services" />
      <Power id="industries" />
      <Constellation id="clients" />
      <CaseStudies id="studies" />
      <Google id="gallery" />
      <NewsLetter />
      <ContactUs id="contactus" />  
      <Footer />
    </div>
  );
};

export default Home;
