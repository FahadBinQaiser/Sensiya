import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Creative Director',
      company: 'Digital Studio',
      image:
        'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
      content:
        'DesignAI has revolutionized our creative process. We\'re delivering client work 5x faster while maintaining exceptional quality.',
    },
    {
      name: 'Michael Chen',
      role: 'Marketing Manager',
      company: 'TechCorp',
      image:
        'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
      content:
        'The AI understands our brand perfectly. Every generated design feels like it was crafted by our in-house team.',
    },
    {
      name: 'Emma Rodriguez',
      role: 'Freelance Designer',
      company: 'Independent',
      image:
        'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
      content:
        'I can now take on 3x more clients without compromising on quality. This tool is a game-changer for freelancers.',
    },
  ];

  return (
    <section
      id="testimonials"
      className="py-24 bg-gradient-to-r from-indigo-50 to-purple-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Loved by{' '}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              thousands of creators
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See what our community has to say about their experience with DesignAI
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-white/70 backdrop-blur-sm border border-white/50 rounded-2xl p-8 hover:shadow-xl hover:shadow-indigo-100/50 transition-all duration-300 hover:-translate-y-1"
            >
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                {t.content}
              </p>

              <div className="flex items-center space-x-4">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-gray-900">{t.name}</p>
                  <p className="text-gray-600 text-sm">
                    {t.role} • {t.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-8 bg-white/60 backdrop-blur-sm border border-white/50 rounded-2xl px-8 py-4">
            {[
              ['50K+', 'Active Users'],
              ['1M+', 'Designs Created'],
              ['99%', 'Satisfaction Rate'],
            ].map(([num, label]) => (
              <React.Fragment key={label}>
                <div className="text-center">
                  <p className="text-3xl font-bold text-gray-900">{num}</p>
                  <p className="text-gray-600 text-sm">{label}</p>
                </div>
                {label !== 'Satisfaction Rate' && (
                  <div className="h-12 w-px bg-gray-300" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
