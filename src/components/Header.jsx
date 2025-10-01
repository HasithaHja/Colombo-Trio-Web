import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

const Header = ({ theme, setTheme }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleToggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const navLinkClasses = ({ isActive }) =>
    `text-sm font-medium leading-normal transition-colors duration-200 ${
      isActive
        ? "text-blue-600 dark:text-blue-400 font-semibold"
        : "hover:text-blue-600 dark:hover:text-blue-400"
    }`;

  const mobileNavLinkClasses = ({ isActive }) =>
    `px-6 py-3 text-base font-medium leading-normal transition-colors duration-200 ${
      isActive
        ? "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 border-l-4 border-blue-600"
        : "hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-blue-600 dark:hover:text-blue-400"
    }`;

  return (
    <>
      <header
        className={`fixed top-0 z-50 w-full border-b border-solid shadow-lg transition-colors duration-200 ${
          theme === "dark"
            ? "border-b-gray-600 shadow-gray-300/10 bg-[#111c22] text-white"
            : "border-b-gray-300 bg-white text-black"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between whitespace-nowrap px-4 md:px-10 py-3">
          {/* Logo */}
          <div className="flex items-center gap-4">
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

          {/* Desktop Navigation - visible from md (768px) and up */}
          <div className="hidden md:!flex flex-1 justify-end items-center gap-8">
            <nav className="flex items-center gap-9">
              <NavLink to="/" className={navLinkClasses}>
                Home
              </NavLink>
              <NavLink to="/services" className={navLinkClasses}>
                Services
              </NavLink>
              <NavLink to="/portfolio" className={navLinkClasses}>
                Portfolio
              </NavLink>
              <NavLink to="/about" className={navLinkClasses}>
                About
              </NavLink>
              <NavLink to="/contact" className={navLinkClasses}>
                Contact Us
              </NavLink>
            </nav>

            {/* Desktop Get Quote Button */}
            <Link to="/get-a-quote">
              <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white text-sm font-bold leading-normal tracking-[0.015em] transition-colors duration-200">
                <span className="truncate">Get a Quote</span>
              </button>
            </Link>

            {/* Desktop Theme Toggle */}
            <button
              onClick={handleToggleTheme}
              className={`flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200 ${
                theme === "dark"
                  ? "bg-gray-700 text-white"
                  : "bg-gray-200 text-black"
              }`}
              title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
              aria-label={`Switch to ${
                theme === "dark" ? "light" : "dark"
              } mode`}
            >
              {theme === "dark" ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                </svg>
              )}
            </button>
          </div>

          {/* Mobile Buttons - visible ONLY below md (under 768px) */}
          <div className="flex md:!hidden items-center gap-3">
            {/* Mobile Theme Toggle */}
            <button
              onClick={handleToggleTheme}
              className={`flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200 ${
                theme === "dark"
                  ? "bg-gray-700 text-white"
                  : "bg-gray-200 text-black"
              }`}
              title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
              aria-label={`Switch to ${
                theme === "dark" ? "light" : "dark"
              } mode`}
            >
              {theme === "dark" ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                </svg>
              )}
            </button>

            {/* Mobile Hamburger Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className={`flex items-center justify-center w-10 h-10 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200 ${
                theme === "dark"
                  ? "bg-gray-700 text-white"
                  : "bg-gray-200 text-black"
              }`}
              aria-label="Toggle mobile menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay - ONLY visible on mobile when menu is open */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300"
            onClick={closeMobileMenu}
            aria-hidden="true"
          ></div>

          {/* Menu Panel */}
          <nav
            className={`fixed top-[73px] left-0 right-0 border-b shadow-lg transition-colors duration-200 ${
              theme === "dark"
                ? "bg-[#111c22] border-gray-600"
                : "bg-white border-gray-300"
            }`}
          >
            <div className="flex flex-col py-2">
              <NavLink
                to="/"
                className={mobileNavLinkClasses}
                onClick={closeMobileMenu}
              >
                Home
              </NavLink>
              <NavLink
                to="/services"
                className={mobileNavLinkClasses}
                onClick={closeMobileMenu}
              >
                Services
              </NavLink>
              <NavLink
                to="/portfolio"
                className={mobileNavLinkClasses}
                onClick={closeMobileMenu}
              >
                Portfolio
              </NavLink>
              <NavLink
                to="/about"
                className={mobileNavLinkClasses}
                onClick={closeMobileMenu}
              >
                About
              </NavLink>
              <NavLink
                to="/contact"
                className={mobileNavLinkClasses}
                onClick={closeMobileMenu}
              >
                Contact Us
              </NavLink>

              {/* Mobile Get Quote Button */}
              <div className="px-6 py-4 mt-2">
                <Link to="/get-a-quote" onClick={closeMobileMenu}>
                  <button className="w-full flex items-center justify-center overflow-hidden rounded-xl h-12 px-4 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white text-sm font-bold leading-normal tracking-[0.015em] transition-colors duration-200">
                    <span className="truncate">Get a Quote</span>
                  </button>
                </Link>
              </div>
            </div>
          </nav>
        </div>
      )}
    </>
  );
};

export default Header;
