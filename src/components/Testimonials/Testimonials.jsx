import React from "react";
import RadialGradients from "../../UIComponents/RadialGradient.jsx";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Head of Growth",
      quote:
        "We changed our hero section based on Sensiya's audit. Demo bookings increased 34% in the first week.",
      metric: "34% increase in demo bookings",
      timeframe: "7 days",
    },
    {
      name: "Marcus Rodriguez",
      role: "Founder",
      quote:
        "The audit identified 8 friction points we didn't know existed. Fixing just 3 of them cut our CAC by $47.",
      metric: "$47 CAC reduction",
      timeframe: "14 days",
    },
    {
      name: "Jamie Park",
      role: "CMO",
      quote:
        "Best free audit we've ever gotten. The rewritten copy alone was worth $2K. We implemented everything.",
      metric: "2.1x conversion rate improvement",
      timeframe: "21 days",
    },
  ];

  return (
    <section className="relative bg-black py-24 overflow-hidden">
      <RadialGradients />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-2">
        <div className="mb-16 text-center">
          <h2 className="text-4xl sm:text-5xl md:text-6xl text-balance font-black text-white mb-6 tracking-tight">
            Results from companies who fixed their{" "}
            <span className="text-[#D12B27]">landing pages</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative  bg-zinc-950 border border-gray-600 p-8 rounded-lg transition-all duration-300 hover:-translate-y-2 hover:border-[#D12B27]/30 hover:shadow-[0px_8px_20px_0px_rgba(209,43,39,0.4)] flex flex-col"
            >
              <div className="mb-6 flex-grow">
                <svg
                  className="w-10 h-10 text-[#D12B27] mb-4 opacity-50"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>

                <p className="text-zinc-300 text-lg leading-relaxed mb-6">
                  {testimonial.quote}
                </p>
              </div>

              <div className="mt-auto">
                <div className="mb-4 pt-4 border-t border-zinc-800">
                  <p className="text-white font-bold text-lg">
                    {testimonial.name}
                  </p>
                  <p className="text-zinc-500 text-sm">{testimonial.role}</p>
                </div>

                <div className="flex items-center justify-between gap-4">
                  <div className="bg-[#D12B27]/10 border border-[#D12B27]/20 rounded-lg px-4 py-2 flex-1">
                    <p className="text-[#D12B27] font-bold text-sm">
                      {testimonial.metric}
                    </p>
                  </div>
                  <div className="text-zinc-500 text-sm font-mono">
                    {testimonial.timeframe}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
