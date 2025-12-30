import React from "react";

export default function Problems() {
  const problems = [
    {
      number: "01",
      title: "Generic Hero Sections, failed 3 impression test",
      description:
        "Your hero section sounds like everyone else's. The best platform for X doesn't tell visitors why they should care. They bounce in 3 seconds.",
    },
    {
      number: "02",
      title: "Weak CTAs that don't match buyer intent",
      description:
        "Get Started and Learn More are conversion killers. Your CTA needs to match where your visitor is in their buying journey. Yours doesn't.",
    },
    {
      number: "03",
      title: "Zero Social Proof Strategy",
      description:
        "Slapping random logos on your page isn't social proof. Real social proof addresses specific objections at the exact moment they appear.",
    },
  ];

  return (
    <section className="relative bg-black py-20 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(209,43,39,0.08),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(209,43,39,0.05),transparent_50%)]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-16 md:mb-20 text-center">
          <h2 className="text-5xl md:text-6xl lg:text-6xl font-black text-white mb-6 tracking-tight">
            Your landing page is{" "}
            <span className="text-[#D12B27]">bleeding</span> money.
          </h2>
          <p className="text-xl md:text-2xl text-slate-300">
            Most SaaS founders think their landing page is fine. Then they check
            their analytics.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="group relative bg-zinc-950 border border-zinc-800 p-8 transition-all duration-300 hover:-translate-y-3 hover:shadow-[0px_4px_10px_0px_rgba(209,43,39,0.8)] rounded-lg flex flex-col h-full"
            >
              <div className="absolute -top-6 -right-6 text-[120px] font-black text-[#D12B27] opacity-[0.03] leading-none select-none">
                {problem.number}
              </div>

              <div className="relative z-10 flex flex-col flex-grow">
                <div className="text-[#D12B27] text-sm font-mono font-bold mb-4 tracking-wider">
                  PROBLEM {problem.number}
                </div>

                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight">
                  {problem.title}
                </h3>

                <p className="text-zinc-400 text-base md:text-lg leading-relaxed mt-auto">
                  {problem.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 flex items-center justify-center gap-4">
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-zinc-700" />
          <p className="text-zinc-600 text-sm font-mono uppercase tracking-widest">
            These are just the obvious ones
          </p>
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-zinc-700" />
        </div>
      </div>
    </section>
  );
}
