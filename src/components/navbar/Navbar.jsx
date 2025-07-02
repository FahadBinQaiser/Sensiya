import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header>
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-100 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <span className="text-3xl sm:text-4xl bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Sensiya
              </span>
            </div>

            <div className="hidden space-grotesk md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="#features" className="text-gray-700 hover:text-indigo-600 transition-colors duration-200 font-medium">
                  Features
                </a>
                <a href="#testimonials" className="text-gray-700 hover:text-indigo-600 transition-colors duration-200 font-medium">
                  Reviews
                </a>
                <a href="#pricing" className="text-gray-700 hover:text-indigo-600 transition-colors duration-200 font-medium">
                  Pricing
                </a>
                <a href="#contact" className="text-gray-700 hover:text-indigo-600 transition-colors duration-200 font-medium">
                  Contact
                </a>
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-4">
              <button className="text-gray-700 space-grotesk cursor-pointer hover:text-indigo-600 transition-colors duration-200 font-medium">
                Sign In
              </button>
              <button className="bg-gradient-to-r space-grotesk cursor-pointer from-indigo-500 to-purple-600 text-white px-6 py-2 rounded-full hover:shadow-lg hover:scale-105 transition-all duration-200 font-medium">
                Get Started
              </button>
            </div>

            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="text-gray-700 hover:text-indigo-600 focus:outline-none"
                aria-label="Toggle menu"
              >
                <svg
                  className="w-6 cursor-pointer h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-3xl relative  border-t border-gray-100">
            <div className="px-2 text-3xl pt-4 inline-flex flex-col absolute top-0 right-0 w-full bg-white h-screen">
              <a href="#features" className="flex-col px-3 py-2 text-gray-700 hover:text-indigo-600 transition-colors duration-200 font-medium">
                Features
              </a>
              <a href="#testimonials" className="flex-col px-3 py-2 text-gray-700 hover:text-indigo-600 transition-colors duration-200 font-medium">
                Reviews
              </a>
              <a href="#pricing" className="flex-col px-3 py-2 text-gray-700 hover:text-indigo-600 transition-colors duration-200 font-medium">
                Pricing
              </a>
              <a href="#contact" className="flex-col px-3 py-2 text-gray-700 hover:text-indigo-600 transition-colors duration-200 font-medium">
                Contact
              </a>
              <div className="pt-4 pb-2 space-y-2 px-3">
                <button className="w-full text-left text-gray-700 hover:text-indigo-600 transition-colors duration-200 font-medium">
                  Sign In
                </button>
                <button className="cursor-pointer space-grotesk text-center group bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-8 py-4 rounded-full text-xl hover:shadow-xl hover:scale-105 transition-all duration-200 inline-flex w-full justify-center items-center space-x-2">
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
