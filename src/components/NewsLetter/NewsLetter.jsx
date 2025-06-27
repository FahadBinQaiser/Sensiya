import React, { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setEmail('');
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <section className="py-24 bg-gradient-to-r from-indigo-600 to-purple-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Stay ahead of the curve
          </h2>

          {/* Subheading */}
          <p className="text-xl text-indigo-100 mb-10 max-w-2xl mx-auto">
            Get the latest AI design trends, tips, and exclusive features delivered
            to your inbox. Join 25,000+ creative professionals.
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 rounded-full text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-white/25 transition-all duration-200"
                required
              />
              <button
                type="submit"
                disabled={isSubmitted}
                className="bg-white text-indigo-600 px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-200 disabled:opacity-50"
              >
                {isSubmitted ? 'Subscribed! ✓' : 'Subscribe'}
              </button>
            </div>
          </form>

          <p className="text-indigo-200 text-sm mt-6">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
