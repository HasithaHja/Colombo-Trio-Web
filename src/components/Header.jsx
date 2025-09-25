import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = ({ theme, setTheme }) => {
  const handleToggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
  };

  const resetTheme = () => {
    localStorage.clear();
    setTheme("light");
  };

  return (
    <>
      <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-gray-300 dark:border-b-gray-600 px-10 py-3 theme-bg bg-white dark:bg-[#111c22] theme-text text-black dark:text-white">
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
            <Link to="/">COLOMBO TRIO</Link>
          </h2>
        </div>
        <div className="flex flex-1 justify-end gap-8">
          <div className="flex items-center gap-9">
            <NavLink
              to={"/"}
              className="text-sm font-medium leading-normal hover:text-blue-600
  dark:hover:text-blue-400"
            >
              Home
            </NavLink>
            <NavLink
              to={"/services"}
              className="text-sm font-medium leading-normal hover:text-blue-600
  dark:hover:text-blue-400"
            >
              Services
            </NavLink>
            <NavLink
              to={"/portfolio"}
              className="text-sm font-medium leading-normal hover:text-blue-600
  dark:hover:text-blue-400"
            >
              Portfolio
            </NavLink>
            <NavLink
              to={"/about"}
              className=" text-sm font-medium leading-normal hover:text-blue-600
  dark:hover:text-blue-400"
            >
              About
            </NavLink>
            <NavLink
              to={"/contact"}
              className=" text-sm font-medium leading-normal hover:text-blue-600
  dark:hover:text-blue-400"
            >
              Contact Us
            </NavLink>
          </div>
          {/* Theme Toggle Button */}
          <button
            onClick={handleToggleTheme}
            className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200 text-black dark:text-white"
            title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          >
            {theme === "dark" ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            )}
          </button>

          <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-blue-600 hover:bg-blue-700
  dark:bg-blue-500 dark:hover:bg-blue-600      
  text-white text-sm font-bold leading-normal tracking-[0.015em]">
            <span className="truncate">Get a Quote</span>
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;
