import React from "react";

const HeroSection = () => {
  return (
    <section className="flex justify-center items-center min-h-screen bg-[#F8F9FA]">
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="leftSide">
            <h1 className="text-5xl font-bold text-balance md:text-6xl lg:text-7xl text-[#1A1A1A] mb-6">
              Your landing page is{" "}
              <span className="text-[#D12B27]">burning your CAC</span>
            </h1>

            <p className="text-base text-balance sm:text-lg md:text-xl text-[#6B7280] mb-10 leading-relaxed">
              Early-stage SaaS teams waste thousands on ads while generic hero
              sections kill their demos. Build sections that actually convert
              visitors into bookings.
            </p>

            <button className="cursor-pointer group bg-[#D12B27] text-white px-8 py-4 rounded-full text-lg hover:shadow-xl hover:scale-105 transition-all duration-200 flex items-center space-x-2">
              <span>Get Your Free Audit</span>
              <svg
                className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </button>
          </div>

          <div className="rightSide flex justify-center lg:justify-end">
            <img
              src="/circle2.png"
              alt="Landing page audit visualization"
              className="w-full max-w-md lg:max-w-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
