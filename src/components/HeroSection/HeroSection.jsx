import React from "react";

const HeroSection = () => {
  return (
    <section className="herosection h-full xl:h-screen py-20 flex justify-center items-center">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 place-items-center">
          <div className="leftSide text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-balance text-white mb-6">
              Your landing page is{" "}
              <span className="text-[#D12B27]">burning your CAC</span>
            </h1>

            <p className="text-base text-balance text-white mb-8 leading-relaxed">
              Early-stage SaaS teams waste thousands on ads while generic hero
              sections kill their demos. Build sections that actually convert
              visitors into bookings.
            </p>

            <button className="cursor-pointer group bg-[#D12B27] text-white hover:bg-white hover:text-[#D12B27] drop-shadow-2xl px-8 py-4 rounded-full text-lg hover:shadow-xl hover:scale-105 transition-all duration-200 flex items-center space-x-2 mx-auto lg:mx-0">
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
              className="circle w-full max-w-md lg:max-w-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
