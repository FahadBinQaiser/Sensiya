import React from "react";

const Pricing = () => {
  const plans = [
    {
      name: "Free Audit",
      price: "$0",
      period: null,
      description: "See exactly what's broken",
      features: [
        "Video walkthrough (15-20 min)",
        "Written audit report",
        "Prioritized action plan",
        "Competitor analysis",
        "Rewritten hero section",
        "72-hour delivery",
      ],
      cta: "Get Your Free Audit",
      highlighted: true,
    },
    {
      name: "Implementation",
      price: "$2,997",
      period: "one-time",
      description: "We fix it for you",
      features: [
        "Everything in Free Audit",
        "Full landing page redesign",
        "All copy rewritten",
        "Developer-ready Figma file",
        "2 rounds of revisions",
        "14-day delivery",
      ],
      cta: "Get Implementation",
      highlighted: false,
    },
    {
      name: "Optimization Retainer",
      price: "$1,997",
      period: "/month",
      description: "Ongoing optimization",
      features: [
        "Monthly landing page optimization",
        "A/B testing setup and analysis",
        "Ongoing copy and design tweaks",
        "Conversion analytics review",
        "Unlimited revisions",
      ],
      cta: "Start Optimizing",
      highlighted: false,
    },
  ];

  return (
    <section className="relative bg-zinc-950 py-24 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(209,43,39,0.1),transparent_50%)]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-16 text-center max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl text-balance font-black text-white mb-10 tracking-tight leading-tight">
            Get your <span className="text-[#D12B27]">audit free</span>. Pay
            only if you want us to implement it.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-black border ${
                plan.highlighted
                  ? "border-[#D12B27] shadow-[0px_0px_30px_0px_rgba(209,43,39,0.3)]"
                  : "border-gray-600"
              } rounded-lg p-8 flex flex-col transition-all duration-300 hover:-translate-y-2 ${
                !plan.highlighted && "hover:border-zinc-700"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#D12B27] text-white text-sm font-bold px-4 py-1 rounded-full">
                  MOST POPULAR
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {plan.name}
                </h3>
                <p className="text-zinc-400 text-sm mb-6">{plan.description}</p>

                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-black text-white">
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className="text-zinc-500 text-lg">{plan.period}</span>
                  )}
                </div>
              </div>

              <ul className="space-y-4 mb-8 flex-grow">
                {plan.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="flex items-start gap-3 text-zinc-300"
                  >
                    <svg
                      className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                        plan.highlighted ? "text-[#D12B27]" : "text-zinc-600"
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-base">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full cursor-pointer py-4 px-6 rounded-lg text-lg transition-all duration-300 ${
                  plan.highlighted
                    ? "bg-[#D12B27] text-white hover:bg-[#B02321] shadow-lg"
                    : "bg-zinc-900 text-white border border-zinc-800 hover:border-zinc-700 hover:bg-zinc-800"
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-zinc-500 text-sm">
            All prices in USD. No hidden fees. Cancel anytime.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
