import React, { useState } from "react";

const Newsletter = () => {
  const [url, setUrl] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setUrl("");
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <section className="relative py-24 bg-black overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(209,43,39,0.1),transparent_50%)]" />

      <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-2xl md:text-4xl text-balance font-black text-white mb-6 tracking-tight leading-tight">
          Your landing page is either making you money or{" "}
          <span className="text-[#D12B27]">costing you money</span>. There's no
          in-between.
        </h2>

        <p className="text-lg text-zinc-400 mb-8 leading-relaxed">
          Get your free audit and see exactly what's broken. Takes 30 seconds to
          submit.
        </p>

        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto mb-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="Enter your landing page URL"
              className="flex-1 px-6 py-4 bg-zinc-950 border border-zinc-800 rounded-lg text-white placeholder-zinc-500 focus:outline-none focus:border-[#D12B27] transition-all duration-200"
              required
            />
            <button
              type="submit"
              disabled={isSubmitted}
              className="bg-[#D12B27] text-white px-8 py-4 rounded-lg font-bold hover:bg-[#B02321] transition-all duration-200 disabled:opacity-50 whitespace-nowrap"
            >
              {isSubmitted ? "Submitted ✓" : "Get Your Free Audit"}
            </button>
          </div>
        </form>

        <p className="text-zinc-500 text-sm">
          No credit card required. Report delivered in 72 hours.
        </p>
      </div>
    </section>
  );
};

export default Newsletter;
