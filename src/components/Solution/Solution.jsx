import React from "react";

export default function Solution() {
  const deliverables = [
    {
      title: "Video Walkthrough",
      duration: "15-20 min",
      description:
        "Screen recording of your landing page with real-time commentary on what's broken and how to fix it. No fluff, just actionable fixes.",
      number: "01",
      imageUrl: "/illustrations/Solution/youtube.jpeg",
    },
    {
      title: "Written Audit Report",
      duration: null,
      description:
        "Page-by-page breakdown with screenshots, annotations, and specific copy/design recommendations ranked by impact.",
      number: "02",
      imageUrl: "/illustrations/Solution/list.jpeg",
    },
    {
      title: "Prioritized Action Plan",
      duration: null,
      description:
        "We rank every fix by effort vs impact. Start with the quick wins that drive immediate results.",
      number: "03",
      imageUrl: "/illustrations/Solution/plan.jpeg",
    },
    {
      title: "Competitor Analysis",
      duration: null,
      description:
        "See how your top 3 competitors structure their pages and where you're leaving money on the table.",
      number: "04",
      imageUrl: "/illustrations/Solution/graph.jpeg",
    },
  ];
  return (
    <section className="relative bg-black py-20 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(209,43,39,0.08),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(209,43,39,0.05),transparent_50%)]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-24 text-center text-balance">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6 tracking-tight leading-tight">
            Here's exactly what's in your{" "}
            <span className="text-[#D12B27]">free audit</span>
          </h2>
          <p className="text-lg sm:text-xl text-zinc-400 leading-relaxed">
            We audit your landing page against 47 conversion principles and show
            you exactly what's broken and how to fix it.
          </p>
        </div>

        <div className="space-y-16 sm:space-y-24 lg:space-y-28">
          {deliverables.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col lg:flex-row gap-12 items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className="flex-1">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-[#D12B27] rounded-full flex items-center justify-center">
                    <span className="text-white font-black text-2xl">
                      {item.number}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-2 leading-tight">
                      {item.title}
                    </h3>

                    {item.duration && (
                      <p className="text-[#D12B27] text-sm font-mono mb-4">
                        {item.duration}
                      </p>
                    )}

                    <p className="text-zinc-400 text-lg md:text-xl leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex-1">
                <div className="relative bg-zinc-950 border border-zinc-800 rounded-lg overflow-hidden w-full h-full group hover:border-[#D12B27]/30 transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#D12B27]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-96 object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
