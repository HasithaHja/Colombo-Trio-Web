import React from "react";
import ServiceCard from "./ServiceCard";

const ServicesSection = () => {
  const services = [
    {
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuC_Sgjt8Zd3IqQe4enNd3v5p9QGTBsCGxps0coLrXEpIy78TtueRSjNX8zQDfTcok0bu_LfQl0LeRziZ8UnUUkQyDIWoV4brEYRkzDCESdzf39muyRrH9JbPpgGag5FtHfyEu9VPsueYYq7ayPV0tXgtbXJ0lWs5QU_ZTsutwYTryOQn5tN6gvKAB8f3GUjzLLYUwOjaADZGlImDEMitIuULLEVNm8WSyOJV40ZY9f-qLje540z9sbSHHsrkWTVRFhn-R2TF90lRrE",
      title: "Web Development",
      description: "Crafting responsive and scalable web applications.",
    },
    {
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuA-U6yWOt1JA3zjZio6D4A7ST9BqQQ_EQK3uHO6zJ_vINQwnPdFdrMT0Xo5PjCSgwV94OPSYc4OWqWHiNmgeCUt21W5-Co9dw__2yNNl9KWKWiKRFsxO_wYwkgjyAyVI33Nt3I1QdzcFdf2yoHTOngeualmVJHgmty6BylsbCRXB3q-DxEyQfTEk53fxE202sS4su5TlJ8gIeD2rJJYQ3XsQWUYy-uFqrhTM5IEsncacj1Sm0xcZvmjub75reQoGSKK96x2ns7t1wA",
      title: "Mobile Apps",
      description: "Developing native and cross-platform mobile apps.",
    },
    {
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAm7eDdRAQzLlLQSbWtT7VjuFv5BU8twMLDPqmylyVKSzFWkMKvaeZq5InlAavqZ6FhYXUEH1LDMgHYngRY6TDlbRbkTLK3M27-iG7DGA6yBxKGiH9SRQwT75TMqQvePasBaPOmdRPrwCdnCKImEeazXnioAlPaSJvB_6boEZU7rKatiIhdlentFHlq0eIdN3C-fzsE5zS5q_9Q5xt-PZCUO17HQlt2rwF6cZ94x6nhPh4-Qe7PjUmyNloFsII1MU5I9cu5xa4DxPM",
      title: "IoT Solutions",
      description: "Connecting devices and systems for seamless data exchange.",
    },
    {
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBK8u8dFSyaYUUPTic7LsB6W2Ruf68Jk6CI9eQo1_JrqY6_xtMG4M15VTDGDRL6pQrsqma7qHAOVDuyWYDDP2noB9yuSSweao0Q24uWXA59BMvkaPacD3iyWwtiO4YORP9-Y48pBw9PB1xY5yInbEW1YWi3lnXd6Hx3uNL2piDOLtZyFMtVjvoYtXhu3zsNy5n_ANg-fr_ug4RJvXWMW1Auo5oT3NXtXgyiSJKXrRXrrg0hA4kFFQeD4_l3KUQFLu8OReQqqXFGOIM",
      title: "AI/ML Solutions",
      description:
        "Leveraging AI and machine learning for intelligent applications.",
    },
  ];

  return (
    <div className="theme-bg bg-white dark:bg-[#111c22]">
      <h2 className="theme-text text-gray-900 dark:text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
        Our Services
      </h2>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;
