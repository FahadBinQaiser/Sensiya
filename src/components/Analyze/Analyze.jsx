import React from "react";

export default function Analyze() {
  const analysisCategories = [
    {
      title: "Above the fold",
      items:
        "Value proposition clarity, CTA positioning and copy, visual hierarchy, trust signals",
    },
    {
      title: "Messaging & Copy",
      items:
        "Problem/solution fit, feature vs benefit framing, objection handling, tone and audience match",
    },
    {
      title: "Conversion Architecture",
      items:
        "Visitor journey flow, CTA strategy per section, social proof placement, friction points",
    },
    {
      title: "Technical Performance",
      items:
        "Load speed impact, mobile experience, form optimization, analytics setup",
    },
  ];

  return (
    <section id="analyze" className=" bg-black">
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="border-t border-b pb-20 border-zinc-800 pt-20">
          <div className="mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-3 flex items-center gap-3">
              <span className="text-[#D12B27] text-2xl">→</span>
              What we analyze
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {analysisCategories.map((category, index) => (
              <div
                key={index}
                className="group relative bg-zinc-950 border border-zinc-800 p-8 rounded-lg transition-all duration-300 hover:border-[#D12B27]/30"
              >
                <h4 className="text-xl md:text-2xl font-bold text-white mb-4">
                  {category.title}
                </h4>

                <p className="text-zinc-400 text-base md:text-lg leading-relaxed">
                  {category.items}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
