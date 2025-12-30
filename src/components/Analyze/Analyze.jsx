import React from "react";
import LowRadialGradient from "../../UIComponents/LowRadialGradient";

export default function Analyze() {
  const analysisCategories = [
    {
      title: "Above the fold",
      items:
        "Does your headline actually say something or is it just corporate word salad? Can visitors tell what you do in 3 seconds? Is your CTA begging for clicks or just sitting there?",
    },
    {
      title: "Messaging & Copy",
      items:
        "Are you talking about your features or solving actual problems? Does your copy sound like a human wrote it or did ChatGPT vomit on your page? Where are people getting confused and leaving?",
    },
    {
      title: "Conversion Architecture",
      items:
        "Which sections are just taking up space? Are your CTAs where people actually want to take action? Is your social proof doing anything or just logo spam?",
    },
    {
      title: "Technical Performance",
      items:
        "How many visitors are you losing because your page loads like it's 2003? Does your mobile experience suck? Are your forms annoying obstacles or smooth conversions?",
    },
  ];

  return (
    <section id="analyze" className="relative bg-black overflow-hidden">
      <LowRadialGradient />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="border-t border-b border-zinc-800 py-20">
          <div className="mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-3 flex items-center gap-3">
              <span className="text-[#D12B27] text-2xl">→</span>
              What we analyze
            </h3>
          </div>

          <div className="relative grid grid-cols-1 md:grid-cols-2 gap-0">
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-zinc-800 -translate-x-1/2" />

            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-px bg-zinc-800 -translate-y-1/2" />

            <div className="hidden md:block absolute top-1/2 left-1/2 w-3 h-3 bg-[#D12B27] rounded-full -translate-x-1/2 -translate-y-1/2 z-10" />

            {analysisCategories.map((category, index) => (
              <div
                key={index}
                className="group relative p-8 md:p-12 transition-all duration-300 hover:bg-zinc-950/50 border border-zinc-600 md:border-0 rounded-lg md:rounded-none mb-6 md:mb-0 last:mb-0"
              >
                <h4 className="text-2xl md:text-3xl font-bold text-white mb-6">
                  {category.title}
                </h4>

                <p className="text-zinc-400 text-lg leading-relaxed">
                  {category.items}
                </p>

                <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-[#D12B27] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
