import React from "react";

const Header = ({ theme, setTheme }) => {
  return (
    <>
      <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#233c48] px-10 py-3 bg-white text-black dark:bg-[#111c22] dark:text-white">
        <div className="flex items-center gap-4 ">
          <div className="size-4">
            <svg
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-current"
            >
              <path
                d="M4 4H17.3334V17.3334H30.6666V30.6666H44V44H4V4Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
          <h2 className="text-lg font-bold leading-tight tracking-[-0.015em]">
            Innovatech Solutions
          </h2>
        </div>
        <div className="flex flex-1 justify-end gap-8">
          <div className="flex items-center gap-9">
            <a
              className="text-sm font-medium leading-normal hover:text-[#1193d4]"
              href="#"
            >
              Home
            </a>
            <a
              className="text-sm font-medium leading-normal hover:text-[#1193d4]"
              href="#"
            >
              Services
            </a>
            <a
              className="text-sm font-medium leading-normal hover:text-[#1193d4]"
              href="#"
            >
              Portfolio
            </a>
            <a
              className=" text-sm font-medium leading-normal hover:text-[#1193d4]"
              href="#"
            >
              About
            </a>
            <a
              className=" text-sm font-medium leading-normal hover:text-[#1193d4]"
              href="#"
            >
              Contact Us
            </a>
          </div>
          {/* Theme Toggle Button */}
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 text-black dark:text-white"
            title="Toggle Theme"
          >
            {theme === "dark" ? "☀️" : "🌙"}
          </button>

          <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#1193d4] text-white text-sm font-bold leading-normal tracking-[0.015em]">
            <span className="truncate">Get a Quote</span>
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;
