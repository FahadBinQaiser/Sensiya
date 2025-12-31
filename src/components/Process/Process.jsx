import React from "react";

export default function Process() {
  const steps = [
    {
      number: "01",
      title: "You submit",
      description: "Send us your URL. We dig into your page within the hour.",
    },
    {
      number: "02",
      title: "We dissect",
      description:
        "We analyze against 47 conversion principles proven across 200+ SaaS landing pages.",
    },
    {
      number: "03",
      title: "You get the truth",
      description:
        "Video breakdown + written report with pixel-perfect fixes. No corporate fluff.",
    },
    {
      number: "04",
      title: "You decide",
      description:
        "Implement it yourself or let us handle it. Either way, you know exactly what's broken.",
    },
  ];

  return (
    <section
      id="process"
      className="relative bg-zinc-950 py-24 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(209,43,39,0.08),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(209,43,39,0.05),transparent_50%)]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="flex flex-col justify-center items-center text-center md:text-left h-full">
            <h2 className="text-4xl sm:text-5xl md:text-6xl text-balance font-black text-white mb-6 tracking-tight leading-tight">
              We find what's killing your conversions in{" "}
              <span className="text-[#D12B27]">72 hours</span>
            </h2>
            <p className="text-lg sm:text-xl text-zinc-400 leading-relaxed">
              No theories. No templates. Just a brutally honest breakdown of
              what's broken and exactly how to fix it.
            </p>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
            {steps.map((step, index) => (
              <div
                key={index}
                className="group relative bg-black border border-gray-600 p-8 rounded-lg transition-all duration-300 hover:-translate-y-2 hover:border-[#D12B27]/30 hover:shadow-[0px_0px_10px_0px_rgba(209,43,39,0.8)] flex flex-col"
              >
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-[#D12B27] rounded-full flex items-center justify-center">
                  <span className="text-white font-black text-lg">
                    {step.number}
                  </span>
                </div>

                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight">
                  {step.title}
                </h3>

                <p className="text-zinc-400 text-base md:text-lg leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
