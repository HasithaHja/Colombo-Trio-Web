import React from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import ServicesSection from "../components/ServicesSection";
import ProjectsSection from "../components/ProjectsSection";
import WhyChooseUsSection from "../components/WhyChooseUsSection";
import TestimonialsSection from "../components/TestimonialsSection";
import Footer from "../components/Footer";

const Home = ({ theme, setTheme }) => {
  return (
    <>
      <div
        className="relative flex h-auto min-h-screen w-full flex-col theme-bg bg-white dark:bg-[#111c22] theme-text text-black dark:text-white group/design-root overflow-x-hidden"
        style={{ fontFamily: 'Inter, "Noto Sans", sans-serif' }}
      >
        <div className="layout-container flex h-full grow flex-col">
          <div className="px-40 flex flex-1 justify-center py-5">
            <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
              <HeroSection />
              <ServicesSection />
              <ProjectsSection />
              <WhyChooseUsSection />
              <TestimonialsSection />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
