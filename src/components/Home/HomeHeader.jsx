import React, { useState, useEffect } from "react";
import Logo from "../Logo";
const HomeHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Trigger the transition after 50px of scrolling
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-[100] p-4 
      ${isScrolled ? "pt-2" : "pt-6"}`}
    >
      <div
        className={`flex  max-w-7xl mx-auto
        ${isScrolled ? "justify-center" : "justify-start"}`}
      >
        {/* THE LOGO CONTAINER */}
        <div
          className={`flex items-center gap-2 transition-all duration-200
          ${isScrolled ? "scale-90 bg-base-100/60 backdrop-blur-md px-6 py-2 rounded-full shadow-lg " : "bg-transparent"}`}
        >
          <Logo />
        </div>
      </div>
    </header>
  );
};

export default HomeHeader;
