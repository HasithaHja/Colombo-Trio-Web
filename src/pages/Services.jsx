import React from "react";
import servicesData from "../data/servicesData.json";

const Services = ({ theme, setTheme }) => {
  return (
    <div
      className="relative flex h-auto min-h-screen w-full flex-col bg-white text-black dark:bg-[#111c22] dark:text-white group/design-root overflow-x-hidden pt-12"
      style={{
        fontFamily: 'Inter, "Noto Sans", sans-serif',
        backgroundColor: theme === "dark" ? "#111c22" : "white",
        color: theme === "dark" ? "white" : "black",
      }}
    >
      <div className="layout-container flex h-full grow flex-col">
        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            {/* Header section */}
            <div className="flex flex-wrap justify-between gap-3 p-4">
              <div className="flex min-w-72 flex-col gap-3">
                <p
                  className="tracking-light text-[32px] font-bold leading-tight"
                  style={{ color: theme === "dark" ? "white" : "black" }}
                >
                  Our Services
                </p>
                <p
                  className="text-sm font-normal leading-normal"
                  style={{ color: theme === "dark" ? "#9CA3AF" : "#6B7280" }}
                >
                  We offer a wide range of software development services to help
                  your business grow.
                </p>
              </div>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
              {servicesData.services.map((service) => (
                <div key={service.id} className="flex flex-col gap-3 pb-3">
                  <div
                    className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
                    style={{ backgroundImage: `url("${service.image}")` }}
                  ></div>

                  <div>
                    <p
                      className="text-base font-medium leading-normal"
                      style={{ color: theme === "dark" ? "white" : "black" }}
                    >
                      {service.title}
                    </p>
                    <p
                      className="text-sm font-normal leading-normal"
                      style={{
                        color: theme === "dark" ? "#9CA3AF" : "#6B7280",
                      }}
                    >
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Call to Action Button */}
            <div className="flex px-4 py-3 justify-center">
              <button
                className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 text-white text-sm font-bold leading-normal tracking-[0.015em]"
                style={{
                  backgroundColor: theme === "dark" ? "#3B82F6" : "#2563EB",
                }}
                onMouseOver={(e) =>
                  (e.target.style.backgroundColor =
                    theme === "dark" ? "#2563EB" : "#1D4ED8")
                }
                onMouseOut={(e) =>
                  (e.target.style.backgroundColor =
                    theme === "dark" ? "#3B82F6" : "#2563EB")
                }
              >
                <span className="truncate">Request a Quote</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
