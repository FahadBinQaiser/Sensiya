import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  if (isOpen) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }

  return (
    <header>
      <nav className="fixed top-0 w-full backdrop-blur-md z-50 pt-3">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 ">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <span className="text-3xl text-white">
                <a href="/">Sensiya</a>
              </span>
            </div>

            <div className="hidden md:block">
              <div className="ml-10 flex font-normal items-baseline space-x-8 ibm-plex-sans">
                <a
                  href="#analyze"
                  className="text-white hover:text-[#d40000] transition-colors duration-200"
                >
                  Analyze
                </a>
                <a
                  href="#pricing"
                  className="text-white hover:text-[#d40000] transition-colors duration-200"
                >
                  Pricing
                </a>
                <a
                  href="#process"
                  className="text-white hover:text-[#d40000] transition-colors duration-200 "
                >
                  Process
                </a>
              </div>
            </div>

            <div className="hidden md:flex items-center ibm-plex-sans space-x-4">
              <button className="bg-[#ffffff] hover:bg-[#D12B27] hover:text-white cursor-pointer text-[#D12B27]  px-6 py-2 rounded-full hover:shadow-lg hover:scale-105 transition-all duration-200">
                Get your Landing Page Audit
              </button>
            </div>

            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="text-gray-700 hover:text-indigo-600 focus:outline-none"
                aria-label="Toggle menu"
              >
                <svg
                  className="w-6 h-6 cursor-pointer"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden h-screen overflow-y-hidden bg-white/95 backdrop-blur-3xl border-t border-gray-100">
            <div className="px-2 pt-4 pb-6 text-3xl space-y-4 flex flex-col">
              <a
                to="/"
                onClick={toggleMenu}
                className="px-3 py-2 text-gray-700 hover:text-indigo-600 transition-colors duration-200 font-medium"
              >
                Features
              </a>
              <a
                to="/"
                onClick={toggleMenu}
                className="px-3 py-2 text-gray-700 hover:text-indigo-600 transition-colors duration-200 font-medium"
              >
                Reviews
              </a>
              <a
                to="/"
                onClick={toggleMenu}
                className="px-3 py-2 text-gray-700 hover:text-indigo-600 transition-colors duration-200 font-medium"
              >
                Pricing
              </a>
              <a
                to="/"
                onClick={toggleMenu}
                className="px-3 py-2 text-gray-700 hover:text-indigo-600 transition-colors duration-200 font-medium"
              >
                Contact
              </a>

              <div className="pt-4 space-y-2 px-3 ibm-plex-sans">
                <button className="w-full text-left text-gray-700 hover:text-indigo-600 transition-colors duration-200 font-medium">
                  Sign In
                </button>
                <button className="text-center group bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-8 py-4 rounded-full text-xl hover:shadow-xl hover:scale-105 transition-all duration-200 w-full">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
