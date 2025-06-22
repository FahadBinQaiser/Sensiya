import React from 'react';

const HeroSection = () => {
  return (
    <section className="pt-20 pb-20 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="text-center">
          <div className="inline-flex items-center bg-white/60 backdrop-blur-sm border border-gray-200 rounded-full px-4 py-2 mb-8 hover:bg-white/80 transition-colors duration-200">
            <span className="text-sm font-medium text-gray-700">✨ New: AI-powered templates now available</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Design with the power of{' '}
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-500 bg-clip-text text-transparent">
              Artificial Intelligence
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
            Transform your creative process with AI-powered design tools. Create stunning visuals, 
            layouts, and experiences in seconds, not hours.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button className="group bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl hover:scale-105 transition-all duration-200 flex items-center space-x-2">
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

            <button className="group flex items-center space-x-2 text-gray-700 hover:text-indigo-600 transition-colors duration-200 px-8 py-4 text-lg font-semibold">
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

          <div className="relative max-w-5xl mx-auto">
            <div className="bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-3xl p-2">
              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
                <div className="h-96 bg-gradient-to-br from-indigo-100 via-purple-50 to-cyan-50 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl mx-auto mb-6 flex items-center justify-center">
                      <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                        <div className="w-6 h-6 bg-gradient-to-r from-indigo-500 to-purple-600 rounded"></div>
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">AI Design Studio</h3>
                    <p className="text-gray-600">Your creative workspace awaits</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full opacity-20 blur-xl"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full opacity-20 blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
