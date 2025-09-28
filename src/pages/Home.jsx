import React from "react";
import HeroSection from "../components/HeroSection";
import ServicesSection from "../components/ServicesSection";
import ProjectsSection from "../components/ProjectsSection";
import WhyChooseUsSection from "../components/WhyChooseUsSection";
import TestimonialsSection from "../components/TestimonialsSection";

const Home = ({ theme, setTheme }) => {
  return (
    <>
      <div
        className="min-h-screen w-full theme-bg bg-white dark:bg-[#111c22] theme-text text-black dark:text-white "
        style={{ fontFamily: 'Inter, "Noto Sans", sans-serif' }}
      >
        <HeroSection />
        <ServicesSection />
        <ProjectsSection />
        <WhyChooseUsSection />
        <TestimonialsSection />
      </div>
    </>
  );
};

export default Home;
