import React from 'react';
const HeroSection = () => {
  return (
    
      <section className="py-20 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          <div className="text-center">
            <div className="inline-flex items-center bg-white/60 backdrop-blur-sm border border-gray-200 rounded-full px-4 py-2 mb-8 hover:bg-white/80 transition-colors duration-200">
              <span className="text-sm font-medium space-grotesk text-gray-700">New: AI-powered templates now available</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl text-gray-900 mb-6">
              Design without limits using the{' '}
              <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-500 bg-clip-text text-transparent">
                Artificial Intelligence
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 mb-10 space-grotesk max-w-3xl mx-auto leading-relaxed">
              An intelligent design platform built for speed and clarity,
              powered by AI to accelerate every creative workflow
            </p>

            <div className="flex flex-col space-grotesk sm:flex-row gap-4 justify-center items-center mb-16">
              <button className="cursor-pointer group bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl hover:scale-105 transition-all duration-200 flex items-center space-x-2">
                <span>Start Creating Free</span>
                <svg
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>

              <button className="group flex items-center space-x-2 text-gray-700 hover:text-indigo-600 transition-colors duration-200 px-8 py-4 text-lg font-semibold cursor-pointer">
                <div className="flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-md group-hover:shadow-lg transition-shadow duration-200">
                  <svg
                    className="w-5 h-5 ml-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M6 4l10 6-10 6V4z" />
                  </svg>
                </div>
                <span>Watch Demo</span>
              </button>
            </div>
          </div>
        </div>
      </section>
  );
};

export default HeroSection;
