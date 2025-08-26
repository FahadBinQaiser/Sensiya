import React from "react";

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "Free",
      period: "forever",
      description: "Perfect for trying out DesignAI",
      features: [
        "5 AI-generated designs per month",
        "Basic templates library",
        "Standard resolution exports",
        "Community support",
      ],
      buttonText: "Get Started",
      buttonStyle: "bg-gray-900 text-white hover:bg-gray-800",
    },
    {
      name: "Pro",
      price: "$29",
      period: "per month",
      description: "Best for professionals and growing teams",
      features: [
        "Unlimited AI-generated designs",
        "Premium templates library",
        "High-resolution exports",
        "Advanced editing tools",
        "Priority support",
        "Brand kit integration",
        "Collaboration features",
      ],
      buttonText: "Start Free Trial",
      buttonStyle:
        "bg-gradient-to-r from-indigo-500 to-purple-600 text-white hover:shadow-lg hover:scale-105",
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "pricing",
      description: "For large teams and organizations",
      features: [
        "Everything in Pro",
        "Custom AI model training",
        "Advanced analytics",
        "Dedicated account manager",
        "SLA guarantee",
        "Custom integrations",
        "White-label options",
      ],
      buttonText: "Contact Sales",
      buttonStyle: "bg-gray-900 text-white hover:bg-gray-800",
    },
  ];

  return (
    <section id="pricing" className="py-24 ibm-plex-sans bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl bricolage-grotesque md:text-6xl lg:text-7xl text-gray-900 mb-4">
            Simple, transparent{" "}
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-500 bg-clip-text text-transparent">
              pricing
            </span>
          </h2>
          <p className="text-lg text-gray-700">
            Choose the plan that's right for you. Upgrade or downgrade at any
            time.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-w-6xl mx-auto">
          {plans.map((plan, index) => {
            const isLast = index === plans.length - 1;
            const isPopular = plan.popular;

            return (
              <div
                key={index}
                className={[
                  "relative p-8 rounded-2xl border-2 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col",
                  isPopular
                    ? "border-indigo-500 bg-gradient-to-br from-indigo-50 to-purple-50 shadow-lg"
                    : "border-gray-200 bg-white hover:border-indigo-200",
                  isLast ? "md:col-span-2" : "",
                ].join(" ")}
              >
                {isPopular && (
                  <div className="absolute -top-5 left-1/2 -translate-x-1/2">
                    <div className="flex items-center justify-center bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-4 py-2 rounded-full text-xl w-40 h-10 text-center font-medium">
                      Most Popular
                    </div>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-4xl bricolage-grotesque text-gray-900 mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-gray-700 mb-4">{plan.description}</p>
                  <div>
                    <span className="text-4xl text-gray-900">{plan.price}</span>
                    {plan.period && (
                      <span className="text-gray-500 ml-2">/{plan.period}</span>
                    )}
                  </div>
                </div>

                <ul className="space-y-4 mb-8 flex-1">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start space-x-3">
                      <span className="text-green-500 mt-0.5">✔</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-4 px-6 rounded-full text-lg transition duration-200 ${plan.buttonStyle}`}
                >
                  {plan.buttonText}
                </button>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <p className="text-3xl sm:text-4xl mb-4">
            All plans include a 14-day free trial, No credit card required.
          </p>
          <div className="flex justify-center items-center space-x-6 text-lg">
            <span>Cancel anytime</span>
            <div>|</div>
            <span>30-day money-back guarantee</span>
            <div>|</div>
            <span>24/7 support</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
