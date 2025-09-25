import React from "react";
import ProjectCard from "./ProjectCard";

const ProjectsSection = () => {
  const projects = [
    {
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAQ5p2sTy1fk1ypDZeMzPpwGPSPtt3nE7KQvEpZ2dXR39Y3WUcarDCVJsE5MnGB-KsNHnh18-JLeOPdLAlrNtNvXVzqTZRIZuKDGYtFieJJXdXncS3mqyVNBgBKwLt-E5ipZamfPQTihXLEG_EMKWgJTX077K5LyOHdz2ju1loYJMg3wiybwf6yqSzq4JPCLQQWwOVb9qE8yLtpWDQzW6GFp-S_MW1zDGoR6-36SUwHAs31n96xQ3rQSln7oKdo9dELVAo_W1-X6iI",
      title: "Project Alpha",
      description: "A comprehensive e-commerce platform for a retail giant.",
    },
    {
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuA1Kx9Glxyk6rhTgt9REnIRDzy3FXuLTnbFvQ1FI8hU9_DEcJ1Vbydzy4xym7lnFk3HNEzvuNK9h6qTjErgG91WKo-XMWxfXq6gkDccHLejRgPxPfKMF9KkxU5AP2NhI53y3O9U4NViPVNRfMXvsFRLZyWjCgPRX3cQgnxaIx8riLQj396xJMGjeHj2vnC4z5eawKqwtkR_oQP7Y-S1IaibYF53O5Ambe_njTOKpDqwnVstRFa4_Mst2fp7saZWwdfT2_mvo8EQuKs",
      title: "Project Beta",
      description: "A mobile app for a fitness startup.",
    },
    {
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuD098ntI_rJtCMExcWhmjSibfABhHfR9vsKD8cAL0jdSi5nkcpC9QecaWTiobwoj-gU7Rfw7ls1IBLt4PCH1_N9oyT-N2X_od7zhiRX4FMHaSfIUfHziNdmJiYEv84Hyj9dlk3OMYndq-zRX8IWenelUr35ly6IYzM6VGcZq2L-EFffbWUu9Qh4dbmLyWmGsqqxrgjFy-eZpwQclv7LocFqRvlk4lfAlR7RaG1DXetYT6-Yp7wFC-JBikMpdfKJ6y8uuHxO5KWup-E",
      title: "Project Gamma",
      description: "An IoT solution for smart city management.",
    },
  ];

  return (
    <div className="theme-bg bg-white dark:bg-[#111c22]">
      <h2 className="theme-text text-gray-900 dark:text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
        Featured Projects
      </h2>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
      <div className="flex px-4 py-3 justify-center">
        <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-gray-700 hover:bg-gray-800 dark:bg-gray-600 dark:hover:bg-gray-700 text-white text-sm font-bold leading-normal tracking-[0.015em]">
          <span className="truncate">See All Projects</span>
        </button>
      </div>
    </div>
  );
};

export default ProjectsSection;
