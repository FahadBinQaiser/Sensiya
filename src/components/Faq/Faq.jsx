import React, { useState } from "react";
import LowRadialGradient from "../../UIComponents/LowRadialGradient.jsx";

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How long does the audit take?",
      answer: "72 hours max from when you submit your URL. Usually faster.",
    },
    {
      question: "What if I don't have a landing page yet?",
      answer:
        "We can audit your homepage or any page you're driving traffic to. If you're pre-launch, we offer a separate service to build your landing page from scratch.",
    },
    {
      question: "Do you only work with SaaS companies?",
      answer:
        "SaaS is our specialty, but we've worked with B2B service companies too. If you sell to businesses and have a complex product, we can help.",
    },
    {
      question: "What if I disagree with your recommendations?",
      answer:
        "That's fine. We explain the why behind every recommendation. You implement what makes sense for your business. No hard feelings.",
    },
    {
      question: "Can you guarantee results?",
      answer:
        "No. We can't control your traffic quality, offer, or pricing. But we can guarantee that our recommendations are based on proven conversion principles, not guesses.",
    },
    {
      question: "Do you write the code/design?",
      answer:
        "The free audit gives you recommendations. The paid implementation package includes design files and copy. We don't write code, but we work with your developers.",
    },
  ];

  return (
    <section className="relative bg-black py-20 overflow-hidden">
      <LowRadialGradient />

      <div className="relative max-w-4xl mx-auto px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6 tracking-tight">
            <span className="text-[#D12B27]">FAQ</span>
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-zinc-950 border border-gray-600 rounded-lg overflow-hidden transition-all duration-300 hover:border-[#D12B27]/30"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full text-left p-6 flex justify-between items-center gap-4"
              >
                <span className="text-xl font-bold text-white">
                  {faq.question}
                </span>
                <svg
                  className={`w-6 h-6 text-[#D12B27] flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="px-6 pb-6 text-zinc-400 text-lg leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
