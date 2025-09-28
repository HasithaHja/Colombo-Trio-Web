import React from "react";
import portfolioData from "../data/portfolioData.json";

const Portfolio = ({ theme, setTheme }) => {
  return (
    <div
      className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden pt-12"
      style={{
        fontFamily: 'Inter, "Noto Sans", sans-serif',
        backgroundColor: theme === "dark" ? "#111c22" : "#f8fafc",
        color: theme === "dark" ? "white" : "#0d171b",
      }}
    >
      <div className="layout-container flex h-full grow flex-col">
        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            {/* Header section */}
            <div className="flex flex-wrap justify-between gap-3 p-4">
              <p
                className="tracking-light text-[32px] font-bold leading-tight min-w-72"
                style={{ color: theme === "dark" ? "white" : "#0d171b" }}
              >
                Our Projects
              </p>
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
              {portfolioData.projects.map((project) => (
                <div key={project.id} className="flex flex-col gap-3 pb-3">
                  <div
                    className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
                    style={{ backgroundImage: `url("${project.image}")` }}
                  ></div>
                  <div>
                    <p
                      className="text-base font-medium leading-normal"
                      style={{ color: theme === "dark" ? "white" : "#0d171b" }}
                    >
                      {project.title}
                    </p>
                    <p
                      className="text-sm font-normal leading-normal"
                      style={{
                        color: theme === "dark" ? "#9CA3AF" : "#4c809a",
                      }}
                    >
                      {project.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-center p-4">
              <a href="#" className="flex size-10 items-center justify-center">
                <div
                  className="data-icon-CaretLeft"
                  data-size="18px"
                  data-weight="regular"
                  style={{ color: theme === "dark" ? "white" : "#0d171b" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18px"
                    height="18px"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <path d="M165.66,202.34a8,8,0,0,1-11.32,11.32l-80-80a8,8,0,0,1,0-11.32l80-80a8,8,0,0,1,11.32,11.32L91.31,128Z"></path>
                  </svg>
                </div>
              </a>
              <a
                className="text-sm font-bold leading-normal tracking-[0.015em] flex size-10 items-center justify-center rounded-full"
                href="#"
                style={{
                  color: theme === "dark" ? "#0d171b" : "#0d171b",
                  backgroundColor: theme === "dark" ? "#374151" : "#e7eff3",
                }}
              >
                1
              </a>
              <a href="#" className="flex size-10 items-center justify-center">
                <div
                  className="data-icon-CaretRight"
                  data-size="18px"
                  data-weight="regular"
                  style={{ color: theme === "dark" ? "white" : "#0d171b" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18px"
                    height="18px"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <path d="M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z"></path>
                  </svg>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
