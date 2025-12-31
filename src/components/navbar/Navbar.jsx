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
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <span className="text-3xl font-black text-white">
                <a href="/">Sensiya</a>
              </span>
            </div>

            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a
                  href="#analyze"
                  className="text-white hover:text-[#D12B27] transition-colors duration-200"
                >
                  Analyze
                </a>

                <a
                  href="#pricing"
                  className="text-white hover:text-[#D12B27] transition-colors duration-200"
                >
                  Pricing
                </a>
                <a
                  href="#process"
                  className="text-white hover:text-[#D12B27] transition-colors duration-200"
                >
                  Process
                </a>
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-4">
              <button className="bg-white hover:bg-[#D12B27] hover:text-white cursor-pointer text-[#D12B27] px-6 py-2 rounded-full hover:shadow-lg hover:scale-105 transition-all duration-200">
                Get your Landing Page Audit
              </button>
            </div>

            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="text-white hover:text-[#D12B27] focus:outline-none"
                aria-label="Toggle menu"
              >
                <svg
                  className="w-6 h-6 cursor-pointer"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {isOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden h-screen overflow-y-hidden bg-black/95 backdrop-blur-3xl border-t border-zinc-800">
            <div className="px-6 pt-8 pb-6 space-y-6 flex flex-col">
              <a
                href="#analyze"
                onClick={toggleMenu}
                className="text-2xl text-white hover:text-[#D12B27] transition-colors duration-200"
              >
                Analyze
              </a>
              <a
                href="#pricing"
                onClick={toggleMenu}
                className="text-2xl text-white hover:text-[#D12B27] transition-colors duration-200 "
              >
                Pricing
              </a>
              <a
                href="#process"
                onClick={toggleMenu}
                className="text-2xl text-white hover:text-[#D12B27] transition-colors duration-200 "
              >
                Process
              </a>

              <div className="pt-4">
                <button
                  onClick={toggleMenu}
                  className="w-full bg-[#D12B27] text-white px-8 py-4 rounded-full hover:bg-white hover:text-[#D12B27] transition-all duration-200"
                >
                  Get Your Free Audit
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
