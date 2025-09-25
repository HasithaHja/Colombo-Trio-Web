import { useState, useEffect } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const [theme, setTheme] = useState('light');
  const [mounted, setMounted] = useState(false);

  // Initialize theme on mount
  useEffect(() => {
    setMounted(true);

    // First, force remove any existing theme classes
    document.documentElement.classList.remove("dark");
    document.body.classList.remove("dark");

    // Get saved theme
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
      setTheme("dark");
    } else if (savedTheme === "light") {
      setTheme("light");
    } else {
      // Default to light mode if nothing is saved
      setTheme("light");
      localStorage.setItem("theme", "light");
    }
  }, []);

  useEffect(() => {
    if (!mounted) return;

    // Apply theme classes and styles
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      document.body.classList.add("dark");
      // Force dark styles as backup
      document.body.style.backgroundColor = "#111c22";
      document.body.style.color = "white";
    } else {
      document.documentElement.classList.remove("dark");
      document.body.classList.remove("dark");
      // Force light styles as backup
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
    }

    // Save to localStorage
    localStorage.setItem("theme", theme);
  }, [theme, mounted]);
  return (
    <>
      <Header theme={theme} setTheme={setTheme} />
      <Routes>
        <Route path="/" element={<Home theme={theme} setTheme={setTheme} />} />
        <Route path="/services" element={<Services theme={theme} setTheme={setTheme} />} />
        <Route path="/portfolio" element={<Portfolio theme={theme} setTheme={setTheme} />} />
        <Route path="/about" element={<About theme={theme} setTheme={setTheme} />} />
        <Route path="/contact" element={<Contact theme={theme} setTheme={setTheme} />} />
      </Routes>
      <Footer theme={theme} setTheme={setTheme} />
    </>
  );
}

export default App;
